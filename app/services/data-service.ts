import { Injectable } from '@angular/core';

import { Game } from '../models/game';
import { Clan } from '../models/clan';
import { Member } from '../models/member';

@Injectable()
export class DataService {

    games: Game[];
    pageTitle = 'The Bunker';
    clan: Clan;
    members: Member[];
    history: Game[];
    loggedMembership = '4611686018437203239';

    setGames(games: Game[]){
      this.games = games;
    }

    setClan(clan: Clan){
      this.clan = clan;
    }

    setMembers(members: Member[]){
      this.members = members;
    }

    setHistory(games: Game[]){
      this.history = games;
    }

    getGames(): Game[]{
      return this.games;
    }

    getGameById(id: number){
      return this.games.find(game => game.id === id);
    }

    getClan(){
      return this.clan;
    }

    getMembers(){
      return this.members;
    }

    getGroupID(){
      return this.clan.groupId;
    }

    getHistory(){
      return this.history;
    }

    getHistoryByGameId(id: number){
      return this.history.find(game => game.id === id);
    }

    getLoggedMember(){
      return this.loggedMembership;
    }


}
