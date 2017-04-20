import { Route } from '@angular/router';

import { HomeRoutes } from './home/home.routes';
import { NewEventRoutes } from './new/new.routes';
import { SearchRoutes } from './search/search.routes';
import { MyEventsRoutes } from './my-events/my-events.routes';
import { HistoryRoutes } from './history/history.routes';
import { MyClanRoutes } from './my-clan/my-clan.routes';
import { ProfileRoutes } from './profile/profile.routes';
import { AboutRoutes} from './about/about.routes';
import { GameDetailRoutes } from './game-detail/game-detail.routes';

import { MainComponent } from './index';

export const MainRoutes: Route[] = [
    {
      path: 'main',
      component: MainComponent,
      children: [
        ...HomeRoutes,
        ...NewEventRoutes,
        ...SearchRoutes,
        ...MyEventsRoutes,
        ...HistoryRoutes,
        ...MyClanRoutes,
        ...ProfileRoutes,
        ...AboutRoutes,
        ...GameDetailRoutes
      ]
    }
];
