import { BrowserModule } from '@angular/platform-browser';
import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule, DatePipe } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { HacDropdown, HacDropdownFilterPipe, HacDropdownColumnizerPipe } from './dropdown';
import { HacDatepicker, HacWeekDayFormatter } from './datepicker';

export * from './dropdown';
export * from './datepicker';

@NgModule({
  declarations: [
    HacDropdown,
    HacDropdownFilterPipe,
    HacDropdownColumnizerPipe,
    HacDatepicker,
    HacWeekDayFormatter
  ],
  imports: [
    BrowserModule,
    FormsModule,
    CommonModule
  ],
  exports: [
    HacDropdown,
    HacDatepicker
  ]
  //, providers: [
  //   HacWeekDayFormatter,
  //   DatePipe
  // ]
})
export class HacModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: HacModule
    };
  }
}
