import { Component, OnInit } from '@angular/core';

import { HistoryService} from '../../services/history-service';
import { Game } from '../../models/game';
import { types } from '../../models/event-type';

import { Router, ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'history-cmp',
  templateUrl: 'history.component.html',
  providers: []
})

export class HistoryComponent implements OnInit {

  types = types;
  games: Game[];
  filteredList: Game[];
  selectedType = 0;

  constructor(private historyService: HistoryService, private route: ActivatedRoute, private router: Router) { }

  getGames(): void {
    this.historyService.getHistoryGames().subscribe(games => this.setLists(games as Game[]));
  }

  setLists(games: Game[]) {
    this.games = games.filter((item) => item.status == 2 && item.joined == true && item.evaluated == true);
    if (this.selectedType > 0) {
      this.filteredList = games.filter((item) => item.event.eventType.id == this.selectedType);
    } else {
      this.filteredList = this.games;
    }
  }

  ngOnInit(): void {
    this.selectedType = 0;
    this.getGames();
  }

    onChange(typeID) {
    this.selectedType = typeID;
    console.log('selectedTypeID onChange: ', this.selectedType);
    if (this.selectedType > 0) {
      this.filteredList = this.games.filter((item) => item.event.eventType.id == this.selectedType);
    } else {
      this.filteredList = this.games;
    }
  }

  selectedGame(game: Game){
    let historyGame: Game;
    console.log('selected gameID: ', game.id);
    this.router.navigate(['/main/history-detail', game.id]);
  }

}
