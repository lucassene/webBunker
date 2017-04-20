import { Injectable } from '@angular/core';

import { Game } from '../models/game';

@Injectable()
export class DataService {

    games: Game[];
    pageTitle = 'The Bunker';

    setGames(games: Game[]){
      this.games = games;
    }

    getGames(): Game[]{
      return this.games;
    }

    getGameById(id: number){
      return this.games.find(game => game.id === id);
    }


}
