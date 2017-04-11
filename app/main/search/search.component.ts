import { Component, OnInit } from '@angular/core';

import { types } from '../../models/event-type';

import { GameService} from '../../services/game-service';
import { Game } from '../../models/game';
import { StatusJoinedPipe } from './game-status.pipe';

@Component({
  selector: 'search-cmp',
  templateUrl: 'search.component.html',
  providers: [GameService]
})

export class SearchComponent implements OnInit{
  
  types = types;
  games: Game[];
  
  constructor(private gameService: GameService) { }

  getGames(): void {
    this.gameService.getGamesFromWebAPI().then(games => this.setLists(games));
  }

  setLists(games: Game[]) {
    this.games = StatusJoinedPipe.prototype.transform(games, 0, false);
  }

  ngOnInit(): void {
    this.getGames();
  }
}
