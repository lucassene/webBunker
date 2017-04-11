import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
  name: 'gameStatus',
})
export class StatusJoinedPipe implements PipeTransform {
  transform(games: any[], status: number, joined: boolean): any {
    const nGames = games.filter(game => game.status === status);
    return nGames.filter(game => game.joined === joined);
  }
}
