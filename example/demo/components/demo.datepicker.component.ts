import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators, FormBuilder } from '@angular/forms';

import { HacDatepickerOptions } from 'handy-angular-components'

@Component({
  selector: 'demo-datepicker',
  templateUrl: './demo.datepicker.component.html'
})
export class DemoDatepickerComponent implements OnInit {
  datepickerOptions: HacDatepickerOptions;
  selectedStartDate: Date = null;
  selectedEndDate: Date = null;

  datepickerSingleOptions: HacDatepickerOptions;
  selectedSingleDate: Date = null;
  
  datepickerWhitelistOptions: HacDatepickerOptions;
  selectedDateWhitelist: Date = null;

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    const today = new Date();

    this.datepickerOptions = {
      // set placeholder for selected dates box
      startDatePlaceholder: 'from',
      endDatePlaceholder: 'to',
      
      // Enable date ranges selection with 2 month visible
      range: true,
      showMonths: 2,
      
      // Allow min and max dates from day 3 of previous month to day 8 in 2 months.
      minDate: new Date(today.getFullYear(), today.getMonth()-1, 3),
      maxDate: new Date(today.getFullYear(), today.getMonth()+2, 8),
    };

    // Disable day 5 of current month
    this.datepickerOptions.dayListKind = 'blacklist';
    this.datepickerOptions.dayList = {};
    this.datepickerOptions.dayList[today.getFullYear()] = {};
    this.datepickerOptions.dayList[today.getFullYear()][today.getMonth()+1] = [5];
    

    // Simple date picker with single dates and 1 visible month calendar, custom date formatting
    this.datepickerSingleOptions = {
      showMonths: 1,
      startDateFormat: 'yyyy-MM-dd'
    };


    // Whitelisted days demo
    this.datepickerWhitelistOptions = {
      dayListKind: 'whitelist',
      dayList: { },
      range: true
    };

    // Enable day 1, 3, 5, 8, 10, 20 of current month
    this.datepickerWhitelistOptions.dayList[today.getFullYear()] = {};
    this.datepickerWhitelistOptions.dayList[today.getFullYear()][today.getMonth()+1] = [1, 3, 5, 8, 10, 20];
  }
}
