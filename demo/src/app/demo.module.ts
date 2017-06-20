import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { DemoComponent } from './demo.component';
import { DemoDropdownComponent } from './components';
import { HacModule } from '../hac.alias'

@NgModule({
  declarations: [
    DemoComponent,
    DemoDropdownComponent
  ],
  imports: [
    BrowserModule,
    HacModule
  ],
  providers: [],
  bootstrap: [DemoComponent]
})
export class DemoModule { }
