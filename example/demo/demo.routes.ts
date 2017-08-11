import { Routes } from '@angular/router';
import { DemoComponent } from './demo.component';
import { DemoDropdownComponent, DemoDatepickerComponent } from './components/index';
import { DemoMixComponent } from './components/demo-mix.component';

export const appRoutes: Routes = [
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
