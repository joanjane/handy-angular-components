import { Component, Input, Output, EventEmitter } from '@angular/core';

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

  constructor() {
    this.options = [];
    this.allowEmpty = false;
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
}

export interface IHacDropdownOption {
  key: string | number,
  value: any,
  label: string
}