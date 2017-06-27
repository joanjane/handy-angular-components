import { BrowserModule } from '@angular/platform-browser';
import { NgModule, ModuleWithProviders } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { HacDropdown, HacDropdownFilterPipe } from './dropdown';

export * from './dropdown';

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
export class HacModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: HacModule,
      providers: [HacDropdownFilterPipe]
    };
  }
}
