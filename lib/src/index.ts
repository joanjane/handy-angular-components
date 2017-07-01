import { BrowserModule } from '@angular/platform-browser';
import { NgModule, ModuleWithProviders } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { HacDropdown } from './dropdown/components';
import { HacDropdownFilterPipe, HacDropdownColumnizerPipe } from './dropdown/pipes';

export * from './dropdown/components';
export * from './dropdown/hac.dropdown.model';

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
