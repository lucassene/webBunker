import { Component, OnInit} from '@angular/core';

import { GameService} from '../../services/game-service';
import { Game } from '../../models/game';
import { StatusJoinedPipe } from './game-status.pipe';

@Component({
  selector: 'home-cmp',
  templateUrl: 'home.component.html',
  providers: [GameService]
})

export class HomeComponent implements OnInit {

  games: Game[];
  recentGames: Game[];
  scheduledGames: Game[];
  finishedGames: Game[];

  constructor(private gameService: GameService) { }

  getGames(): void {
    this.gameService.getGamesFromWebAPI().then(games => this.setLists(games));
  }

  setLists(games: Game[]) {
    this.games = games;
    this.recentGames = StatusJoinedPipe.prototype.transform(games, 0, false);
    this.scheduledGames = StatusJoinedPipe.prototype.transform(games, 0, true);
    this.finishedGames = StatusJoinedPipe.prototype.transform(games, 1, true);
  }

  ngOnInit(): void {
    this.getGames();
  }

}
