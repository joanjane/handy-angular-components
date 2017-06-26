import { Component, Input, Output, EventEmitter, ElementRef, HostListener } from '@angular/core';
import { HacDropdownFilterPipe } from "./hac.dropdown.filter";

@Component({
  selector: 'hac-dropdown',
  templateUrl: './hac.dropdown.html'
})
export class HacDropdown {
  @Input() options: IHacDropdownOption[];
  @Input() placeholder = 'Select';
  @Input() selected: string | number;
  @Input() allowEmpty: boolean;
  @Output() selectedChange = new EventEmitter();

  collapsed = true;

  private _filter: string;

  public get filter(): string {
    return this._filter;
  }

  public set filter(v: string) {
    this._filter = v;

    if (!v && !this.selected) {
      this.focusLabel();
    } else {
      this.focusFilter();
    }
  }


  private windowHeight = 0;

  constructor(private elementRef: ElementRef, private dropdownFilter: HacDropdownFilterPipe) {
    this.options = [];
    this.allowEmpty = false;
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
    this.filter = null;
    this.selected = key;
    this.closeDropdown();
    this.selectedChange.emit(this.selected);
  }

  toggleDropdown() {
    this.collapsed = !this.collapsed;
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

  filterOnKey(e: KeyboardEvent) {
    if (this.isCharTyped(e)) {
      this.filter = !this.filter ? e.key : this.filter + e.key;
    }
  }

  filterOnPaste(e: ClipboardEvent) {
    this.filter = e.clipboardData.getData('text/plain');
  }

  handleEnter(e: KeyboardEvent) {
    if (e.keyCode == 13) {
      const candidates = this.dropdownFilter.transform(this.options, this.filter);
      if (candidates.length > 0) {
        this.select(candidates[0].key);
      }
    }
  }

  calcDropdownWidth(): string {
    const labelElem = this.elementRef.nativeElement.querySelector('.hac-dd-label');
    const computedStyle = getComputedStyle(labelElem, null);
    const borderLeft = parseFloat(computedStyle.borderLeftWidth.replace('px', ''));
    const borderRight = parseFloat(computedStyle.borderRightWidth.replace('px', ''));
    return `${labelElem.offsetWidth - borderLeft - borderRight}px`;
  }

  calcDropdownHeight(): string {
    const el = this.elementRef.nativeElement.querySelector('.hac-dd-list');
    const pos = getPos(el);
    return `${window.innerHeight - 10 - pos.y}px`;
  }

  focusLabel() {
    setTimeout(() => {
      const label = this.elementRef.nativeElement.querySelector('.hac-dd-placeholder');
      label.focus();
      label.setSelectionRange(0, label.value.length);
    }, 0);
  }

  focusFilter() {
    setTimeout(() => {
      const filter = this.elementRef.nativeElement.querySelector('.hac-dd-filter');
      filter.focus();
    }, 0);
  }

  private syncWindowHeight() {
    this.windowHeight = window.innerHeight;
  }

  private isCharTyped(e: KeyboardEvent) {
    return e.key.length === 1 && !e.ctrlKey;
  }
}

export interface IHacDropdownOption {
  key: string | number,
  value: any,
  label: string
}

function getPos(el) {
  let lx, ly;
  for (lx = 0, ly = 0; el != null; lx += el.offsetLeft, ly += el.offsetTop, el = el.offsetParent);
  return { x: lx, y: ly };
}