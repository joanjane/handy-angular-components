import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { DemoComponent } from './demo.component';
import { DemoDropdownComponent, DemoDatepickerComponent } from './components';
import { HacModule } from 'handy-angular-components';

@NgModule({
  declarations: [
    DemoComponent,
    DemoDropdownComponent,
    DemoDatepickerComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HacModule.forRoot()
  ],
  providers: [],
  bootstrap: [DemoComponent]
})
export class DemoModule { }
