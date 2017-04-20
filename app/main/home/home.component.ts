import { Component, OnInit, EventEmitter} from '@angular/core';
import { Game } from '../../models/game';
import { GameService} from '../../services/game-service';
import { DataService } from '../../services/data-service';
import { Router, ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'home-cmp',
  templateUrl: 'home.component.html',
  providers: [GameService]
})

export class HomeComponent implements OnInit {

  games: Game[]
  recentGames: Game[];
  scheduledGames: Game[];
  waitingGames: Game[];
  forEvaluationGames: Game[];

  hasRecent = false;
  hasScheduled = false;
  hasWaiting = false;
  hasEvaluation = false;

  constructor(private gameService: GameService, private route: ActivatedRoute, private router: Router, private dataService: DataService) { }

  getGames(): void {
    this.gameService.getGamesFromServer().subscribe(games => this.setLists(games as Game[]));
  }

  setLists(games: Game[]) {
    this.games = games;

    this.recentGames = this.games.filter((item) => item.status == 0 && item.joined == false);
    if (this.recentGames.length >0){
      this.hasRecent = true;
    }
    this.scheduledGames = this.games.filter((item) => item.status == 0 && item.joined == true);
    if (this.scheduledGames.length >0){
      this.hasScheduled = true;
    }
    this.waitingGames = this.games.filter((item) => item.status == 1 && item.joined == true);
    if (this.waitingGames.length >0){
      this.hasWaiting = true;
    }
    this.forEvaluationGames = this.games.filter((item) => item.status == 2 && item.joined == true && item.evaluated == false);
    if (this.forEvaluationGames.length >0){
      this.hasEvaluation = true;
    }
  }

  selectedGame(game: Game){
    this.router.navigate(['/main/game-detail', game.id]);
  }

  ngOnInit(): void {
    this.getGames();
  }

}
