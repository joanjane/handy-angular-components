import { BrowserModule } from '@angular/platform-browser';
import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { HacDropdown } from './dropdown/components/hac.dropdown';
import { HacDropdownOption, HacDropdownOptionGroup } from './dropdown/models';
import { HacDropdownFilterPipe } from './dropdown/pipes/hac.dropdown.filter';
import { HacDropdownColumnizerPipe } from './dropdown/pipes/hac.dropdown.columnizer';

import { HacDatepicker } from './datepicker/components/hac.datepicker';
import { HacDatepickerOptions } from './datepicker/components/hac.datepicker.options';
import { HacWeekDayFormatter } from './datepicker/pipes/hac.weekday.formatter';

// Export for AOT compilation
export { 
  HacDatepicker, HacDatepickerOptions, HacWeekDayFormatter,
  HacDropdown, HacDropdownOption, HacDropdownOptionGroup, HacDropdownFilterPipe, HacDropdownColumnizerPipe
};

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
})
export class HacModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: HacModule
    };
  }
}
