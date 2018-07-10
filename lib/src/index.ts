import { BrowserModule } from '@angular/platform-browser';
import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { HacDropdownComponent } from './dropdown/components/hac.dropdown';
import { HacDropdownOption, HacDropdownOptionGroup } from './dropdown/models';
import { HacDropdownFilterPipe } from './dropdown/pipes/hac.dropdown.filter';

import { HacDatepickerComponent } from './datepicker/components/hac.datepicker';
import { HacDatepickerOptions } from './datepicker/components/hac.datepicker.options';
import { HacWeekDayFormatter } from './datepicker/pipes/hac.weekday.formatter';
import { HacLabelFocusDirective } from './common/directives/label-focus.directive';
import { HacUseScreenHeightDirective } from './common/directives/use-screen-height.directive';
import { DateUtils } from './utils/date-utils';

// Export for AOT compilation
export {
  // datepicker
  HacDatepickerComponent, HacDatepickerOptions, HacWeekDayFormatter,
  // dropdown
  HacDropdownComponent, HacDropdownOption, HacDropdownOptionGroup, HacDropdownFilterPipe,
  // common
  HacLabelFocusDirective, HacUseScreenHeightDirective,
  // utils
  DateUtils
};

@NgModule({
  declarations: [
    HacDropdownComponent,
    HacDropdownFilterPipe,
    HacDatepickerComponent,
    HacWeekDayFormatter,
    HacUseScreenHeightDirective,
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
    HacUseScreenHeightDirective,
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
