import { Component, Input, Output, EventEmitter, ElementRef, HostListener } from '@angular/core';

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
  private windowHeight = 0;

  constructor(private elementRef: ElementRef) {
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
    this.selected = key;
    this.closeDropdown();
    this.selectedChange.emit(this.selected);
  }

  toggleDropdown() {
    this.collapsed = !this.collapsed;
  }

  openDropdown() {
    this.collapsed = false;
  }

  closeDropdown() {
    this.collapsed = true;
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

  private syncWindowHeight() {
    this.windowHeight = window.innerHeight;
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