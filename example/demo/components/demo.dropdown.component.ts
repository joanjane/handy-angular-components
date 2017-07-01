import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators, FormBuilder } from '@angular/forms';

import { IHacDropdownOption, IHacDropdownOptionGroup } from 'handy-angular-components'

@Component({
  selector: 'demo-dropdown',
  templateUrl: './demo.dropdown.component.html'
})
export class DemoDropdownComponent implements OnInit {
  dropdownGroupsList: IHacDropdownOptionGroup[];
  demoForm: FormGroup;
  dropdownList: IHacDropdownOptionGroup[] = [];
  selectedNumber: number = null;
  groupsSelectedNumber: number = null;

  constructor(private formBuilder: FormBuilder) {

  }

  ngOnInit(): void {
    this.buildOptions();
    this.buildForm();
  }

  buildOptions() {
    this.dropdownList = [
      {
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
          }]
      }
    ]

    for (let i = 4; i < 100; i++) {
      this.dropdownList[0].options.push({
        key: i,
        value: i,
        label: i.toString(),
      })
    }

    this.dropdownGroupsList = [
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
          },
          {
            key: 11,
            value: 'oneone',
            label: 'oneone'
          },
          {
            key: 22,
            value: 'twotwo',
            label: 'twotwo'
          },
          {
            key: 33,
            value: 'threethree',
            label: 'threethree'
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
          },{
            key: 44,
            value: 'fourfour',
            label: 'fourfour'
          },
          {
            key: 55,
            value: 'fivefive',
            label: 'fivefive'
          },
          {
            key: 66,
            value: 'sixsix',
            label: 'sixsix'
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
