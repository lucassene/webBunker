import { Component, OnInit } from '@angular/core';
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

export class MainComponent implements OnInit {

  pageTitle = 'The Bunker';
  games: Game[];
  isActive: boolean;
  private membership = '4611686018437203239';
  ///*Fernando*/ private membership = '4611686018449763730';
  private groupId = '548691';
  private authorization = 'eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiI0NjExNjg2MDE4NDM3MjAzMjM5IiwiZXhwIjoxNDkzODE4NTc3fQ.HMTba_QE7k3LyA2o_brpu-KFdjS6Pk8vjsPB6L87yYk18ZhH1wc35ZqOC-dOBkU6MuxmTh3OKbjwsQfMfX2v4w';
  private platform = '2';

  changeTitleString(title: string) {
    this.pageTitle = title;
  }

  ngOnInit(){
    localStorage.setItem('membership', this.membership);
    localStorage.setItem('groupId', this.groupId);
    sessionStorage.setItem('authKey', this.authorization);
    localStorage.setItem('platform', this.platform);
  }

 }
