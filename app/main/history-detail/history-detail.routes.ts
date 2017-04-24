import { Route } from '@angular/router';
import { HistoryDetailComponent } from './index';

export const HistoryDetailRoutes: Route[] = [
    {
      path: 'history-detail/:id',
      component: HistoryDetailComponent
    }
];
