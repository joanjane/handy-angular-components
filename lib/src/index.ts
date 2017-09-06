import { BrowserModule } from '@angular/platform-browser';
import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { HacDropdownComponent } from './dropdown/components/hac.dropdown';
import { HacDropdownOption, HacDropdownOptionGroup } from './dropdown/models';
import { HacDropdownFilterPipe } from './dropdown/pipes/hac.dropdown.filter';
import { HacDropdownColumnizerPipe } from './dropdown/pipes/hac.dropdown.columnizer';

import { HacDatepickerComponent } from './datepicker/components/hac.datepicker';
import { HacDatepickerOptions } from './datepicker/components/hac.datepicker.options';
import { HacWeekDayFormatter } from './datepicker/pipes/hac.weekday.formatter';
import { HacCopyWidthDirective } from './common/directives/copy-width.directive';
import { HacLabelFocusDirective } from './common/directives/label-focus.directive';

// Export for AOT compilation
export { 
  // datepicker
  HacDatepickerComponent, HacDatepickerOptions, HacWeekDayFormatter,
  // dropdown
  HacDropdownComponent, HacDropdownOption, HacDropdownOptionGroup, HacDropdownFilterPipe, HacDropdownColumnizerPipe,
  // common
  HacCopyWidthDirective, HacLabelFocusDirective
};

@NgModule({
  declarations: [
    HacDropdownComponent,
    HacDropdownFilterPipe,
    HacDropdownColumnizerPipe,
    HacDatepickerComponent,
    HacWeekDayFormatter,
    HacCopyWidthDirective,
    HacLabelFocusDirective
  ],
  imports: [
    BrowserModule,
    FormsModule,
    CommonModule
  ],
  exports: [
    HacDropdownComponent,
    HacDatepickerComponent,
    HacCopyWidthDirective,
    HacLabelFocusDirective
  ]
})
export class HacModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: HacModule
    };
  }
}
