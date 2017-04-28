import { Route } from '@angular/router';
import { ValidateDetailComponent } from './index';

export const ValidateDetailRoutes: Route[] = [
    {
      path: 'validate-detail/:id',
      component: ValidateDetailComponent
    }
];
