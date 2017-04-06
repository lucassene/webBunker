import { Component, OnInit } from '@angular/core';

import { GameService} from '../../services/game-service';
import { Game } from '../../models/game';

@Component({
  selector: 'home-cmp',
  templateUrl: 'home.component.html',
  providers: [GameService]
})

export class HomeComponent implements OnInit {

  games: Game[];

  constructor(private gameService: GameService) { }

  getGames(): void {
    this.gameService.getGamesFromServer().then(games => this.games = games);
  }

  ngOnInit(): void {
    this.getGames();
  }

}
