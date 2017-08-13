import { Component, OnInit, HostListener } from '@angular/core';
import { FormControl, FormGroup, Validators, FormBuilder } from '@angular/forms';

import { HacDatepickerOptions } from 'handy-angular-components'

@Component({
  selector: 'demo-datepicker',
  templateUrl: './demo-datepicker.component.html'
})
export class DemoDatepickerComponent implements OnInit {
  datepickerOptions: HacDatepickerOptions;
  selectedStartDate: Date = null;
  selectedEndDate: Date = null;

  datepickerSingleOptions: HacDatepickerOptions;
  selectedSingleDate = '2017-02-01';

  datepickerWhitelistOptions: HacDatepickerOptions;
  selectedStartDateWhitelist: Date = null;
  selectedEndDateWhitelist: Date = null;

  datepickerMinMaxOptions: HacDatepickerOptions;
  selectedMinMaxDate: Date = null;
  today = new Date();

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit(): void {

    // Simple date picker with single dates and 1 visible month calendar, custom date formatting
    this.datepickerSingleOptions = {
      showMonths: 1,
      startDateFormat: 'yyyy-MM-dd',
      enableTodayAction: true,
      todayActionLabel: 'Today'
    };

    this.datepickerOptions = {
      // set placeholder for selected dates box
      startDatePlaceholder: 'from',
      endDatePlaceholder: 'to',

      // Enable date ranges selection with 2 month visible
      range: true,
      showMonths: 2,

      // Allow min and max dates from day 3 of previous month to day 8 in 2 months.
      minDate: new Date(this.today.getFullYear(), this.today.getMonth() - 1, 3),
      maxDate: new Date(this.today.getFullYear(), this.today.getMonth() + 2, 8),

      // Enable today action, but won't be shown because today is blacklisted
      enableTodayAction: true,

      dayListStartDate: {},
      dayListEndDate: {}
    };

    // Disable day 5 of current month and today when selecting start date, and day 6 of next month when selecting return date
    this.datepickerOptions.dayListKind = 'blacklist';
    this.datepickerOptions.dayListStartDate[this.today.getFullYear()] = {};
    this.datepickerOptions.dayListEndDate[this.today.getFullYear()] = {};
    this.datepickerOptions.dayListStartDate[this.today.getFullYear()][this.today.getMonth() + 1] = [5, this.today.getDate()];
    this.datepickerOptions.dayListEndDate[this.today.getFullYear()][this.today.getMonth() + 2] = [6];

    // Whitelisted days demo
    this.datepickerWhitelistOptions = {
      dayListKind: 'whitelist',
      dayListStartDate: {},
      dayListEndDate: {},
      range: true,
      elementId: 'test'
    };

    // Enable day 1, 3, 5, 8, 10, 20 of current month and today when selecting start date
    // Enable day 2, 4, 6 of next month when selecting end date
    this.datepickerWhitelistOptions.dayListStartDate[this.today.getFullYear()] = {};
    this.datepickerWhitelistOptions.dayListEndDate[this.today.getFullYear()] = {};
    this.datepickerWhitelistOptions.dayListStartDate[this.today.getFullYear()][this.today.getMonth() + 1] = [1, 3, 5, 8, 10, 20, this.today.getDate()];
    this.datepickerWhitelistOptions.dayListEndDate[this.today.getFullYear()][this.today.getMonth() + 2] = [2, 4, 6];

    this.checkScreenOptions();

    // Datepicker that tests the first month shown with future min/max range
    this.datepickerMinMaxOptions = {
      minDate: new Date(this.today.getFullYear(), this.today.getMonth() + 1, 4),
      maxDate: new Date(this.today.getFullYear(), this.today.getMonth() + 4, 15)
    };
  }

  forceTodayOnBlacklistDemo(): void {
    this.selectedStartDate = new Date();
  }

  forceTodayOnWhitelistDemo(): void {
    this.selectedStartDateWhitelist = new Date();
  }

  @HostListener('window:resize', ['$event'])
  checkScreenOptions($event?: Event): void {
    // On small screens, show only one month
    this.datepickerOptions.showMonths = window.innerWidth <= 640 ? 1 : 2;
  }

  testFiveMonthsOnSingleDemo() {
    // if you want to change this options, you need to do Object.assign to trigger input changes
    this.datepickerSingleOptions = Object.assign(
      {},
      this.datepickerSingleOptions,
      {
        showMonths: 5,
        useSelectorWidth: true
      });
  }

  forceMarchMonthOnSingleDemo() {
    // if you want to change this options, you need to do Object.assign to trigger input changes
    this.datepickerSingleOptions = Object.assign(
      {},
      this.datepickerSingleOptions,
      <HacDatepickerOptions>{
        currentDisplayMonth: new Date(2017, 2, 1)
      });
  }

  testMinMaxPastRanges() {
    this.datepickerMinMaxOptions = Object.assign(
      {},
      this.datepickerMinMaxOptions,
      {
        minDate: new Date(this.today.getFullYear(), this.today.getMonth() - 4, 4),
        maxDate: new Date(this.today.getFullYear(), this.today.getMonth() - 1, 15)
      });
  }
}
