import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { HomeModule } from './home/home.module';
import { NewEventModule } from './new/new.module';
import { SearchModule } from './search/search.module';
import { MyEventsModule } from './my-events/my-events.module';
import { HistoryModule } from './history/history.module';
import { MyClanModule } from './my-clan/my-clan.module';
import { ProfileModule } from './profile/profile.module';
import { AboutModule } from './about/about.module';
import { GameDetailModule } from './game-detail/game-detail.module';
import { HistoryDetailModule } from './history-detail/history-detail.module';
import { ValidateDetailModule } from './validate-detail/validate-detail.module';

import { MainComponent } from './main.component';

import {TopNavComponent} from '../shared/index';
import {SidebarComponent} from '../shared/index';
import {ClanHeaderComponent} from '../shared/index';


@NgModule({
    imports: [
      CommonModule,
      RouterModule,
      HomeModule,
      NewEventModule,
      SearchModule,
      MyEventsModule,
      HistoryModule,
      MyClanModule,
      ProfileModule,
      AboutModule,
      GameDetailModule,
      HistoryDetailModule,
      ValidateDetailModule
    ],
    declarations: [MainComponent, TopNavComponent, ClanHeaderComponent, SidebarComponent],
    exports: [MainComponent, TopNavComponent, ClanHeaderComponent, SidebarComponent]
})

export class MainModule { }
