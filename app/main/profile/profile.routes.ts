import { Route } from '@angular/router';
import { ProfileComponent } from './index';

export const ProfileRoutes: Route[] = [
    {
      path: 'profile/:membership',
      component: ProfileComponent
    },
    {
      path: 'profile',
      component: ProfileComponent
    }
];
