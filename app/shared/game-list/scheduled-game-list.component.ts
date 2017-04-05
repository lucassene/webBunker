import { Component, OnInit, Input } from '@angular/core';

import { GameService} from '../../services/game-service';
import { Game } from '../../models/game';

@Component({
  selector: 'scheduled-game-list',
  templateUrl: 'scheduled-game-list.component.html',
  providers: [GameService]
})

export class ScheduledGameListComponent implements OnInit {

  games: Game[];

  constructor(private gameService: GameService) { }

  getGames(): void {
    this.games = this.gameService.getAllGames();
  }

  ngOnInit(): void {
    this.getGames();
  }

}
