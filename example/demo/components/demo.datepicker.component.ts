import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators, FormBuilder } from '@angular/forms';

import { HacDatepickerOptions } from 'handy-angular-components'

@Component({
  selector: 'demo-datepicker',
  templateUrl: './demo.datepicker.component.html'
})
export class DemoDatepickerComponent implements OnInit {
  selectedDate: Date = null;
  constructor(private formBuilder: FormBuilder) {

  }

  ngOnInit(): void {
  }
}
