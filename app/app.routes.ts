import { Routes } from '@angular/router';

import { LoginRoutes } from './login/login.routes';
import { MainRoutes } from './main/main.routes';

import { LoginComponent } from './login/index';

export const routes: Routes = [
  ...LoginRoutes,
  ...MainRoutes,
  { path: '**', component: LoginComponent }
];
