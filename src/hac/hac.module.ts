import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { HacDropdown } from './components';

@NgModule({
  declarations: [
    HacDropdown
  ],
  imports: [
    BrowserModule
  ],
  exports: [
    HacDropdown
  ],
  providers: []
})
export class HacModule { }