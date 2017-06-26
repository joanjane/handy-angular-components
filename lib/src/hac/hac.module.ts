import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { HacDropdown } from './components';
import { HacDropdownFilterPipe } from "./components/hac.dropdown.filter";

@NgModule({
  declarations: [
    HacDropdown,
    HacDropdownFilterPipe
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  exports: [
    HacDropdown
  ],
  providers: [
    HacDropdownFilterPipe
  ]
})
export class HacModule { }