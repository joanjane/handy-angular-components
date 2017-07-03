import { BrowserModule } from '@angular/platform-browser';
import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { HacDropdown } from './dropdown/components';
import { HacDropdownFilterPipe, HacDropdownColumnizerPipe } from './dropdown/pipes';
import { HacDatepicker } from './datepicker';

export * from './dropdown/components';
export * from './dropdown/hac.dropdown.model';
export * from './datepicker';

@NgModule({
  declarations: [
    HacDropdown,
    HacDropdownFilterPipe,
    HacDropdownColumnizerPipe,
    HacDatepicker
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
