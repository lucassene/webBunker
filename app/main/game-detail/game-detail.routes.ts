import { Route } from '@angular/router';
import { GameDetailComponent } from './index';

export const GameDetailRoutes: Route[] = [
    {
      path: 'game-detail/:id',
      component: GameDetailComponent
    }
];
