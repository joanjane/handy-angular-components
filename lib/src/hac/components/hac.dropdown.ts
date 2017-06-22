import { Component, Input, Output, EventEmitter, ElementRef } from '@angular/core';

@Component({
  selector: 'hac-dropdown',
  templateUrl: './hac.dropdown.html',
  host: {
    '(document:click)': 'onClick($event)',
  }
})
export class HacDropdown {
  @Input() options: IHacDropdownOption[];
  @Input() placeholder = 'Select';
  @Input() selected: string | number;
  @Input() allowEmpty: boolean;
  @Output() selectedChange = new EventEmitter();

  collapsed = true;

  constructor(private elementRef: ElementRef) {
    this.options = [];
    this.allowEmpty = false;
  }

  onClick(event) {
   if (!this.elementRef.nativeElement.contains(event.target))
     this.closeDropdown();
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
    const borderLeft = parseInt(computedStyle.borderLeft.replace('px', ''));
    const borderRight = parseInt(computedStyle.borderRight.replace('px', ''));
    return `${labelElem.offsetWidth-borderLeft-borderRight}px`
  }
}

export interface IHacDropdownOption {
  key: string | number,
  value: any,
  label: string
}