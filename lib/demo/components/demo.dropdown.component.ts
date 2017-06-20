import { Component, OnInit } from '@angular/core';
import { IHacDropdownOption } from '../../src/hac'

@Component({
  selector: 'demo-dropdown',
  templateUrl: './demo.dropdown.component.html'
})
export class DemoDropdownComponent implements OnInit {
  dropdownList: IHacDropdownOption[];
  selectedNumber: number;

  ngOnInit(): void {
    this.dropdownList = [{
      key: 1,
      value: 'one',
      label: 'one'
    },
    {
      key: 2,
      value: 'two',
      label: 'two'
    },
    {
      key: 3,
      value: 'three',
      label: 'three'
    }]
  }
  
}
