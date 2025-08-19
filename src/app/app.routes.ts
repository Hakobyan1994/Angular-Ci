import { Routes } from '@angular/router';
import { Home } from './home/home';
import { Navigieren } from './navigieren/navigieren';

export const routes: Routes = [
    {path: '', component: Home }, 
    {path:'navigieren',component:Navigieren}
];
