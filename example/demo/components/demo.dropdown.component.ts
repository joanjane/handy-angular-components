import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators, FormBuilder } from '@angular/forms';

import { IHacDropdownOption, IHacDropdownGroup } from 'handy-angular-components'

@Component({
  selector: 'demo-dropdown',
  templateUrl: './demo.dropdown.component.html'
})
export class DemoDropdownComponent implements OnInit {
  dropdownGroupList: IHacDropdownGroup[];
  demoForm: FormGroup;
  dropdownList: IHacDropdownOption[] = [];
  selectedNumber: number = null;
  groupsSelectedNumber: number = null;

  constructor(private formBuilder: FormBuilder) {

  }

  ngOnInit(): void {
    this.buildOptions();
    this.buildForm();
  }

  buildOptions() {
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
    }];

    for (let i = 4; i < 100; i++) {
      this.dropdownList.push({
        key: i,
        value: i,
        label: i.toString(),
      })
    }

    this.dropdownGroupList = [
      {
        label: 'This is an option group',
        options: [
          {
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
          }
        ]
      },
      {
        label: 'Another option group',
        options: [
          {
            key: 4,
            value: 'four',
            label: 'four'
          },
          {
            key: 5,
            value: 'five',
            label: 'five'
          },
          {
            key: 6,
            value: 'six',
            label: 'six'
          }
        ]
      }
    ];
  }

  buildForm() {
    this.demoForm = this.formBuilder.group({
      number: [null, Validators.required],
    });
  }
}
