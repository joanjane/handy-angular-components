import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { DemoComponent } from './demo.component';
import {
  DocsComponent,
  DemoDropdownComponent,
  DemoDatepickerComponent,
  DemoMixComponent
} from './components';
import { HacModule } from 'handy-angular-components';
import { appRoutes } from './demo.routes';

@NgModule({
  declarations: [
    DocsComponent,
    DemoComponent,
    DemoDropdownComponent,
    DemoDatepickerComponent,
    DemoMixComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HacModule.forRoot(),
    RouterModule.forRoot(
      appRoutes
    )
  ],
  providers: [],
  bootstrap: [DemoComponent]
})
export class DemoModule { }
