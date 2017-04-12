import { Component, OnInit} from '@angular/core';

import { GameService} from '../../services/game-service';
import { Game } from '../../models/game';

@Component({
  selector: 'home-cmp',
  templateUrl: 'home.component.html',
  providers: [GameService]
})

export class HomeComponent implements OnInit {

  games: Game[];
  recentGames: Game[];
  scheduledGames: Game[];
  waitingGames: Game[];
  forEvaluationGames: Game[];

  constructor(private gameService: GameService) { }

  getGames(): void {
    this.gameService.getGamesFromWebAPI().then(games => this.setLists(games));
  }

  setLists(games: Game[]) {
    this.games = games;
    this.recentGames = this.games.filter((item) => item.status == 0 && item.joined == false);
    this.scheduledGames = this.games.filter((item) => item.status == 0 && item.joined == true);
    this.waitingGames = this.games.filter((item) => item.status == 1 && item.joined == true);
    this.forEvaluationGames = this.games.filter((item) => item.status == 2 && item.joined == true && item.evaluated == false);
  }

  ngOnInit(): void {
    this.getGames();
  }

}
