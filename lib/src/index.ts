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
import { HacCopyWidthDirective } from './common/directives/copy-width.directive';

// Export for AOT compilation
export { 
  // datepicker
  HacDatepicker, HacDatepickerOptions, HacWeekDayFormatter,
  // dropdown
  HacDropdown, HacDropdownOption, HacDropdownOptionGroup, HacDropdownFilterPipe, HacDropdownColumnizerPipe,
  // common
  HacCopyWidthDirective
};

@NgModule({
  declarations: [
    HacDropdown,
    HacDropdownFilterPipe,
    HacDropdownColumnizerPipe,
    HacDatepicker,
    HacWeekDayFormatter,
    HacCopyWidthDirective
  ],
  imports: [
    BrowserModule,
    FormsModule,
    CommonModule
  ],
  exports: [
    HacDropdown,
    HacDatepicker,
    HacCopyWidthDirective
  ]
})
export class HacModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: HacModule
    };
  }
}
