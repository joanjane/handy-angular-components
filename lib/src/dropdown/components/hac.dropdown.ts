import { Component, Input, Output, EventEmitter, ElementRef, HostListener } from '@angular/core';
import { IHacDropdownOption, IHacDropdownOptionGroup } from "../models";
import { HacDropdownFilterPipe, HacDropdownColumnizerPipe } from "../pipes";

@Component({
  selector: 'hac-dropdown',
  templateUrl: './hac.dropdown.html',
  providers: [
    HacDropdownFilterPipe,
    HacDropdownColumnizerPipe
  ]
})
export class HacDropdown {
  @Input() optionGroups: IHacDropdownOptionGroup[] = [];
  @Input() placeholder = 'Select';
  @Input() allowEmpty = false;
  @Input() filtrable = false;
  @Input() columns = 1;
  @Output() selectedChange = new EventEmitter();

  private _selected: string | number;
  public get selected(): string | number {
    return this._selected;
  }
  @Input()
  public set selected(v: string | number) {
    this._selected = v;
    const selection = this.getSelected();
    this.filter = selection ? selection.label : null;
  }

  collapsed = true;
  filter: string;
  private windowHeight = 0;

  constructor(private elementRef: ElementRef, private dropdownFilter: HacDropdownFilterPipe) {
    this.syncWindowHeight();
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

  getSelected(): IHacDropdownOption {
    if (this.hasGroups()) {
      return this.optionGroups.map(f => f.options.find(o => o.key === this.selected)).find(o => o != null);
    }

    return null;
  }

  select(key: number | string) {
    this.selected = key;
    this.closeDropdown();
    this.selectedChange.emit(this.selected);
  }

  hasGroups() {
    return this.optionGroups && this.optionGroups.length > 0;
  }

  openDropdown(e?: any) {
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
    switch(e.keyCode) {
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

  calcDropdownWidth(): string {
    const labelElem = this.elementRef.nativeElement.querySelector('.hac-dd-label');
    const computedStyle = getComputedStyle(labelElem, null);
    const borderLeft = parseFloat(computedStyle.borderLeftWidth.replace('px', ''));
    const borderRight = parseFloat(computedStyle.borderRightWidth.replace('px', ''));
    return `${labelElem.offsetWidth - borderLeft - borderRight}px`;
  }

  calcDropdownHeight(): string {
    const el = this.elementRef.nativeElement.querySelector('.hac-dd-list');
    const pos = this.getPos(el);
    return `${window.innerHeight - 10 - pos.y}px`;
  }

  private syncWindowHeight() {
    this.windowHeight = window.innerHeight;
  }

  private getPos(el) {
    let lx, ly;
    for (lx = 0, ly = 0; el != null; lx += el.offsetLeft, ly += el.offsetTop, el = el.offsetParent);
    return { x: lx, y: ly };
  }

  private blurFilter() {
    this.elementRef.nativeElement.querySelector('.hac-dd-filter').blur();
  }

  private selectFirstMatchingOption() {
    for (var group of this.optionGroups) {
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