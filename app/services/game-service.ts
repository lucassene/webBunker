import { Injectable } from '@angular/core';

import { Game } from '../models/game';
import { GAMES } from './mock-games';

@Injectable()
export class GameService {
  
  recentGames: Game[];

  getRecentGames(): Game[] {
    for (const game of GAMES){
      if (game.status === 0 && game.joined === false) {
        console.log('id: ' + game.id + '; event: ' + game.event.en);
      }
    }
    return GAMES;
  }

  getScheduledGames(): void { }

  getFinishedGames(): void { }

  getAllGames(): Game[] {
    return GAMES;
  }

}
