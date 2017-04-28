import { Component } from '@angular/core';
import { Game } from '../models/game';
import { DataService } from '../services/data-service';
import { GameService } from '../services/game-service';
import { HistoryService } from '../services/history-service';
import { ClanService } from '../services/clan-service';
import { EntryService } from '../services/entry-service';
import { MemberService } from '../services/member-service';
import { TopNavComponent } from '../shared/topnav/topnav';

@Component({
  selector: 'main-cmp',
  templateUrl: 'main.component.html',
  providers: [DataService, GameService, HistoryService, ClanService, EntryService, MemberService, TopNavComponent]
})

export class MainComponent {

  pageTitle = 'The Bunker';

  games: Game[];

  isActive: boolean;

  changeTitleString(title: string) {
    this.pageTitle = title;
  }

 }
