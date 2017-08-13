import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators, FormBuilder } from '@angular/forms';

import { HacDropdownOption, HacDropdownOptionGroup, HacDatepickerOptions } from 'handy-angular-components'
import 'handy-angular-components/extensions/date'

@Component({
  selector: 'demo-mix',
  templateUrl: './demo-mix.component.html',
  styleUrls: ['./demo-mix.component.scss']
})
export class DemoMixComponent implements OnInit {
  datepickerOptions: HacDatepickerOptions = {};
  singleDatepickerOptions: HacDatepickerOptions = {};
  dropdownList: HacDropdownOptionGroup[] = [];
  form: FormGroup;

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      number: new FormControl(null, Validators.required),
      dates: new FormControl(null, Validators.required),
      singleDate: new FormControl(null, Validators.required),
    });

    this.datepickerOptions = {
      showMonths: 2,
      range: true,
      elementId: 'demo-mix-datepicker',
      enableTodayAction: false
    };

    this.singleDatepickerOptions = {
      elementId: 'demo-mix-singledatepicker'
    };

    this.dropdownList = [
      {
        options: [1, 2, 3, 4, 5].map(b => {
          return {
            key: b,
            label: b.toString()
          };
        })
      }
    ];
  }

  onSubmit(event: any): void {
    if (this.form.invalid) {
        console.log('Invalid form', this.form);
        return;
    }

    alert(JSON.stringify(this.form.value));
    console.log(this.form.value.dates.startDate.asUTC().formatDatePart());
    console.log(this.form.value.dates.endDate.asUTC().formatDatePart());
    console.log(this.form.value.singleDate.asUTC().formatDatePart());
  }

  forceFirstDropdownOption() {
    this.form.get('number').setValue(this.dropdownList[0].options[0].key);
  }
}
