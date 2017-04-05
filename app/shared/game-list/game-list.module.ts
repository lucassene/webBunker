
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RecentGameListComponent } from './recent-game-list.component';
import { ScheduledGameListComponent } from './scheduled-game-list.component';
import { FinishedGameListComponent } from './finished-game-list.component';

import { StatusJoinedPipe } from './game-status.pipe';

@NgModule({
    imports: [CommonModule],
    declarations: [RecentGameListComponent, ScheduledGameListComponent, FinishedGameListComponent, StatusJoinedPipe],
    exports: [RecentGameListComponent, ScheduledGameListComponent, FinishedGameListComponent, StatusJoinedPipe],
    providers: [StatusJoinedPipe]
})

export class GameListModule { }
