import { Component, Input } from '@angular/core';

@Component({
  selector: 'hac-dropdown',
  templateUrl: './hac.dropdown.html'
})
export class HacDropdown {
  @Input() options: IHacDropdownOption[]
  @Input() selected: string | number
  @Input() placeholder: string

  constructor() {
    this.options = []
  }

  getSelected(): IHacDropdownOption {
    if (!this.options) return null;

    return this.options.find(o => o.key === this.selected);
  }

}

export interface IHacDropdownOption {
  key: string | number,
  value: any,
  label: string
}