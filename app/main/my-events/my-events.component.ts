import { Component, OnInit } from '@angular/core';

import { GameService} from '../../services/game-service';

import { statuses } from '../../models/status';
import { Status } from '../../models/status';
import { Game } from '../../models/game';

@Component({
  selector: 'my-events-cmp',
  templateUrl: 'my-events.component.html',
  providers: [GameService]
})

export class MyEventsComponent implements OnInit {

  statuses = statuses;
  games: Game[];
  filteredList: Game[];
  selectedStatus = 99;

  constructor(private gameService: GameService) { }

  getGames(): void {
    this.gameService.getGamesFromServer().subscribe(games => this.setLists(games as Game[]));
  }

  setLists(games: Game[]) {
    this.games = games.filter((item) => item.joined == true && item.evaluated == false);
    console.log('selectedStatus onInit: ', this.selectedStatus);
    if (this.selectedStatus === 99) {
      this.filteredList = this.games;
    } else {
      this.filteredList = this.games.filter((item) => item.status == this.selectedStatus);
    }
  }

  ngOnInit(): void {
    this.selectedStatus = 99;
    this.getGames();
  }

    onChange(status) {
    this.selectedStatus = status;
    console.log('selectedStatus onChange: ', this.selectedStatus);
    if (this.selectedStatus == 99) {
      this.filteredList = this.games;
    } else {
      this.filteredList = this.games.filter((item) => item.status == this.selectedStatus);
    }
  }

}
