import 'rxjs/add/operator/switchMap';
import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';

import { HistoryService} from '../../services/history-service';

import { Game } from '../../models/game';
import { History } from '../../models/history';

@Component({
  selector: 'history-detail',
  templateUrl: 'history-detail.component.html',
  providers: []
})

export class HistoryDetailComponent implements OnInit {

  game: Game;
  members: History[];

  constructor(private route: ActivatedRoute, private router: Router, private historyService: HistoryService){};

  ngOnInit(): void {
    let id: number;
    this.route.params.subscribe(params => this.getGameHistory(+params['id']));
  }

  setEntries(entries: History[]){
    this.members = entries;
  }

  getGameHistory(id: number){
    this.game = this.historyService.getHistoryDetails(id);
    if (this.game){
      this.historyService.getGameHistory(id).subscribe(entries => this.setEntries(entries as History[]));
    } else {
      this.historyService.getHistoryGames().subscribe(games => {
          this.game = games.find(game => game.id === id);
          this.historyService.getGameHistory(id).subscribe(entries => this.setEntries(entries as History[]));
      })
    }

  }

  onBack(){
    this.router.navigate(['/main/history']);
  }

  onMemberSelected(membership: string){
    this.router.navigate(['/main/profile',membership]);
  }

}
