import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators, FormBuilder } from '@angular/forms';

import { HacDatepickerOptions } from 'handy-angular-components'

@Component({
  selector: 'demo-datepicker',
  templateUrl: './demo.datepicker.component.html'
})
export class DemoDatepickerComponent implements OnInit {
  datepickerOptions: HacDatepickerOptions;
  datepickerSingleOptions: HacDatepickerOptions;
  selectedSingleDate: Date = null;
  selectedStartDate: Date = null;
  selectedEndDate: Date = null;

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    const today = new Date();
    this.datepickerOptions = new HacDatepickerOptions();
    this.datepickerOptions.showMonths = 2;
    this.datepickerOptions.startDatePlaceholder = 'from';
    this.datepickerOptions.endDatePlaceholder = 'to';
    this.datepickerOptions.range = true;
    this.datepickerOptions.minDate = new Date(today.getFullYear(), today.getMonth()-1, 3);
    this.datepickerOptions.maxDate = new Date(today.getFullYear(), today.getMonth()+2, 8);

    this.datepickerSingleOptions = new HacDatepickerOptions();
    this.datepickerSingleOptions.showMonths = 1;
    this.datepickerSingleOptions.startDateFormat = 'yyyy-MM-dd';
  }
}
