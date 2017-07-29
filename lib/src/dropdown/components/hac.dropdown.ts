import { Component, Input, Output, EventEmitter, ElementRef, HostListener, OnDestroy } from '@angular/core';
import { HacDropdownOption, HacDropdownOptionGroup } from '../models';
import { HacDropdownFilterPipe } from '../pipes/hac.dropdown.filter';
import { HacDropdownColumnizerPipe } from '../pipes/hac.dropdown.columnizer';
import { FormControl } from '@angular/forms';
import { Subscription } from "rxjs/Subscription";

@Component({
  selector: 'hac-dropdown',
  templateUrl: './hac.dropdown.html',
  providers: [
    HacDropdownFilterPipe,
    HacDropdownColumnizerPipe
  ]
})
export class HacDropdownComponent implements OnDestroy {
  @Input() optionGroups: HacDropdownOptionGroup[] = [];
  @Input() placeholder = 'Select';
  @Input() allowEmpty = false;
  @Input() filtrable = false;
  @Input() columns = 1;
  @Output() selectedChange = new EventEmitter();
  @Input() id: string;

  private _selected: string | number;
  public get selected(): string | number {
    return this._selected;
  }
  @Input()
  public set selected(v: string | number) {
    this._selected = v;
    // ensure valid values, if not, reset
    if (v && !this.findOptionByKey(v)) {
      setTimeout(() => {
        this._selected = null;
        this.selectedChange.emit(this._selected);
        if(this._control) this._control.setValue(null);
      }, 0);
    }
    this.updateFilter();
  }

  private _control: FormControl;
  @Input()
  public set control(v: FormControl) {
    this._control = v;
    
    this.subscriptions.push(this._control.valueChanges.subscribe(c => {
      if (this.selected !== c) {
        this.selected = c;
      }
      this.updateFilter();
    }));
  }

  collapsed = true;
  filter: string;
  private subscriptions: Array<Subscription> = [];
  private windowHeight = 0;

  constructor(private elementRef: ElementRef, private dropdownFilter: HacDropdownFilterPipe) {
    this.syncWindowHeight();
  }

  ngOnDestroy(): void {
    this.subscriptions.forEach(s => s.unsubscribe());
  }

  @HostListener('document:click', ['$event'])
  onClick(event) {
    if (!this.elementRef.nativeElement.contains(event.target)) {
      this.closeDropdown();
    }
  }

  @HostListener('window:resize', ['$event'])
  onResize(event) {
    this.syncWindowHeight();
  }

  getSelected(): HacDropdownOption {
    if (this.hasGroups()) {
      return this.findOptionByKey(this._selected);
    }

    return null;
  }

  select(key: number | string) {
    this.selected = key;
    if (this._control) {
      this._control.setValue(key);
    }
    this.closeDropdown();
    this.selectedChange.emit(this.selected);
  }

  hasGroups() {
    return this.optionGroups && this.optionGroups.length > 0;
  }

  openDropdown(e?: any) {
    this.markAsDirty();
    this.collapsed = false;
    if (e) {
      e.target.focus();
    }
  }

  closeDropdown(e?: any) {
    this.collapsed = true;
  }

  shouldApplyFilter(): boolean {
    const selected = this.getSelected();
    return selected && this.filter !== selected.label;
  }

  handleKey(e: KeyboardEvent) {
    switch (e.keyCode) {
      case 13: // Enter key
        this.selectFirstMatchingOption();
        break;
      case 27: //ESC key
        this.blurFilter();
        this.closeDropdown();
        break;
    }
  }

  /* Dropdown styling dimensions */
  getLabelElem(): HTMLElement {
    return this.elementRef.nativeElement.querySelector('.hac-dd-label');
  }

  calcDropdownHeight(): string {
    const el = this.elementRef.nativeElement.querySelector('.hac-dd-list');
    const pos = this.getPos(el);
    return `${window.innerHeight - 10 - pos.y}px`;
  }

  private findOptionByKey(key: string | number): HacDropdownOption {
    return this.optionGroups.map(f => f.options.find(o => o.key === key)).find(o => o != null);
  }

  private updateFilter() {
    const selection = this.getSelected();
    this.filter = selection ? selection.label : null;
  }

  private markAsDirty() {
    if (this._control) {
      this._control.markAsDirty();
    }
  }

  private syncWindowHeight() {
    this.windowHeight = window.innerHeight;
  }

  private getPos(el) {
    let lx, ly;
    for (lx = 0, ly = 0; el != null; lx += el.offsetLeft, ly += el.offsetTop, el = el.offsetParent) { };
    return { x: lx, y: ly };
  }

  private blurFilter() {
    this.elementRef.nativeElement.querySelector('.hac-dd-filter').blur();
  }

  private selectFirstMatchingOption() {
    for (let group of this.optionGroups) {
      const candidates = this.dropdownFilter.transform(group.options, this.filter);
      if (candidates.length > 0) {
        this.select(candidates[0].key);
        this.blurFilter();
        break;
      }
    }
  }

  /* Dropdown styling dimensions */
}