import { Routes } from '@angular/router';
import {
  DemoDropdownComponent,
  DemoDatepickerComponent,
  DemoMixComponent,
  DocsComponent
} from './components/index';

export const appRoutes: Routes = [
  {
    path: '',
    component: DocsComponent
  },
  {
    path: 'dropdown',
    component: DemoDropdownComponent
  },
  {
    path: 'datepicker',
    component: DemoDatepickerComponent
  },
  {
    path: 'mixed',
    component: DemoMixComponent
  },
  {
    path: '**',
    redirectTo: '/',
    pathMatch: 'full'
  }
];
