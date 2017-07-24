import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators, FormBuilder } from '@angular/forms';

import { HacDropdownOption, HacDropdownOptionGroup } from 'handy-angular-components'

@Component({
  selector: 'demo-mix',
  templateUrl: './demo-mix.component.html'
})
export class DemoMixComponent implements OnInit {
  constructor(private formBuilder: FormBuilder) { }

  ngOnInit(): void {
  }
}
