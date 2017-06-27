import { Component, Input, Output, EventEmitter, ElementRef, HostListener } from '@angular/core';
import { IHacDropdownOption } from "./hac.dropdown.option";
import { HacDropdownFilterPipe } from "../pipes/hac.dropdown.filter";

@Component({
  selector: 'hac-dropdown',
  templateUrl: './hac.dropdown.html',
  providers: [
    HacDropdownFilterPipe
  ]
})
export class HacDropdown {
  @Input() options: IHacDropdownOption[] = [];
  @Input() placeholder = 'Select';
  @Input() allowEmpty = false;
  @Input() filtrable = false;
  @Output() selectedChange = new EventEmitter();

  collapsed = true;
  filter: string;
  // @Input() selected: string | number;

  
  private _selected : string | number;
  public get selected() : string | number {
    return this._selected;
  }
  @Input()
  public set selected(v : string | number) {
    this._selected = v;
    const selection = this.getSelected();
    if(selection) {
      this.filter = selection.label;
    }
  }
  

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
    if (!this.options) return null;

    return this.options.find(o => o.key === this.selected);
  }

  select(key: number | string) {
    this.selected = key;
    this.closeDropdown();
    this.selectedChange.emit(this.selected);
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

  handleEnter(e: KeyboardEvent) {
    if (e.keyCode == 13) {
      const candidates = this.dropdownFilter.transform(this.options, this.filter);
      if (candidates.length > 0) {
        this.select(candidates[0].key);
      }
    }
  }

  /* Dropdown styling dimmensions */

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

  /* Dropdown styling dimmensions */
}
