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
            label: 'one'
          },
          {
            key: 2,
            label: 'two'
          },
          {
            key: 3,
            label: 'three'
          }]
      }
    ]

    for (let i = 4; i < 100; i++) {
      this.dropdownList[0].options.push({
        key: i,
        label: i.toString()
      })
    }

    this.dropdownGroupsList = [
      {
        label: 'This is an option group',
        options: [
          {
            key: 1,
            label: 'one'
          },
          {
            key: 2,
            label: 'two'
          },
          {
            key: 3,
            label: 'three'
          },
          {
            key: 11,
            label: 'oneone'
          },
          {
            key: 22,
            label: 'twotwo'
          },
          {
            key: 33,
            label: 'threethree'
          }
        ]
      },
      {
        label: 'Another option group',
        options: [
          {
            key: 4,
            label: 'four'
          },
          {
            key: 5,
            label: 'five'
          },
          {
            key: 6,
            label: 'six'
          },{
            key: 44,
            label: 'fourfour'
          },
          {
            key: 55,
            label: 'fivefive'
          },
          {
            key: 66,
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
