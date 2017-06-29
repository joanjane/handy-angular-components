import { BrowserModule } from '@angular/platform-browser';
import { NgModule, ModuleWithProviders } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { HacDropdown } from './dropdown/components/hac.dropdown';
import { HacDropdownFilterPipe } from './dropdown/pipes/hac.dropdown.filter';
import { HacDropdownColumnizerPipe } from './dropdown/pipes/hac.dropdown.columnizer';

export * from './dropdown/components/hac.dropdown';
export * from './dropdown/components/hac.dropdown.option';

@NgModule({
  declarations: [
    HacDropdown,
    HacDropdownFilterPipe,
    HacDropdownColumnizerPipe
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  exports: [
    HacDropdown
  ]
})
export class HacModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: HacModule
    };
  }
}
