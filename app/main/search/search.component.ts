import { Component, OnInit } from '@angular/core';

import { types } from '../../models/event-type';

import { GameService} from '../../services/game-service';
import { Game } from '../../models/game';

@Component({
  selector: 'search-cmp',
  templateUrl: 'search.component.html',
  providers: [GameService]
})

export class SearchComponent implements OnInit {

  types = types;
  games: Game[];
  filteredList: Game[];
  selectedType = 0;

  constructor(private gameService: GameService) { }

  getGames(): void {
    this.gameService.getGamesFromServer().subscribe(games => this.setLists(games as Game[]));
  }

  setLists(games: Game[]) {
    this.games = games.filter((item) => item.status == 0 && item.joined == false);
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

}
