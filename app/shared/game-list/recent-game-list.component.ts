import { Component, OnInit, Input } from '@angular/core';

import { GameService} from '../../services/game-service';
import { Game } from '../../models/game';

@Component({
  selector: 'recent-game-list',
  templateUrl: 'recent-game-list.component.html',
  providers: [GameService]
})

export class RecentGameListComponent implements OnInit {

  games: Game[];

  constructor(private gameService: GameService) { }

  getGames(): void {
    this.games = this.gameService.getAllGames();
  }

  ngOnInit(): void {
    this.getGames();
  }

}
