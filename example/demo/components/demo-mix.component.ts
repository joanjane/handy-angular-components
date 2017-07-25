import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators, FormBuilder } from '@angular/forms';

import { HacDropdownOption, HacDropdownOptionGroup, HacDatepickerOptions } from 'handy-angular-components'

@Component({
  selector: 'demo-mix',
  templateUrl: './demo-mix.component.html',
  styleUrls: ['./demo-mix.component.scss']
})
export class DemoMixComponent implements OnInit {
  submitted: boolean;
  datepickerOptions: HacDatepickerOptions = {};
  dropdownList: HacDropdownOptionGroup[] = [];
  form: FormGroup;

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      number: new FormControl(null, Validators.required),
      startDate: new FormControl(null, Validators.required),
      endDate: new FormControl(null, Validators.required)
    });

    this.setDatepickerOptions({
      showMonths: 2,
      range: true,
      elementId: 'demo-mix-datepicker',
      enableTodayAction: false
    });

    this.dropdownList = [
      {
        options: [1, 2, 3, 4, 5].map(b => {
          return {
            key: b.toString(),
            label: b.toString()
          };
        })
      }
    ];
  }

  onSubmit(event: any): void {
    this.submitted = true;
    if (this.form.invalid) {
        console.log('Invalid form', this.form);
        return;
    }

    alert(JSON.stringify(this.form.value));
  }

  // Important! When updating datepicker options:
  // Use immutability when changing options properties, because angular detects
  // changes on inputs when the object reference has changed, but NOT when a property
  // of an object changes. In angular 1.x maybe you used $scope.apply().
  private setDatepickerOptions(updatedProperties: HacDatepickerOptions) {
    this.datepickerOptions = Object.assign({}, this.datepickerOptions, updatedProperties);
  }
}
