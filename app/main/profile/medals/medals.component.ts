import { Component, Input, OnInit } from '@angular/core';

import { Profile, PlayedType } from '../../../models/profile';

@Component({
  selector: 'medals',
  templateUrl: 'medals.component.html',
})

export class MedalsComponent implements OnInit{

  @Input() profile;

  nextGamesCreated: number;
  nextGamesPlayed: number;
  nextEvaluationsMade: number;
  nextLikesReceived: number;
  nextDislikedReceived: number;
  cruciblePlayed: number;
  strikesPlayed: number;
  raidsPlayed: number;
  nextCruciblePlayed: number;
  nextStrikesPlayed: number;
  nextRaidsPlayed: number;

  ngOnInit(){
    this.cruciblePlayed = this.getTypesPlayed(this.profile.playedTypes, 2);
    this.strikesPlayed = this.getTypesPlayed(this.profile.playedTypes, 7);
    this.strikesPlayed = this.strikesPlayed + this.getTypesPlayed(this.profile.playedTypes,8);
    this.raidsPlayed = this.getTypesPlayed(this.profile.playedTypes, 5);

    this.nextGamesCreated = this.getNextValue(this.profile.member.gamesCreated);
    this.nextGamesPlayed = this.getNextValue(this.profile.member.gamesPlayed);
    this.nextEvaluationsMade = this.getNextValue(this.profile.evaluationsMade);
    this.nextLikesReceived = this.getNextValue(this.profile.member.likes);
    this.nextDislikedReceived = this.getNextValue(this.profile.member.dislikes);
    this.nextCruciblePlayed = this.getNextValue(this.cruciblePlayed);
    this.nextStrikesPlayed = this.getNextValue(this.strikesPlayed);
    this.nextRaidsPlayed = this.getNextValue(this.raidsPlayed);
  }

  getNextValue(value: number){
    if (value < 1){
      return 1;
    } else if (value < 10){
      return 10;
    } else if (value <50){
      return 50;
    } else if (value <250){
      return 250;
    } else return 500;
  }

  getTypesPlayed(playedTypes: PlayedType[], id: number){
    let count = 0;
    for (let i=0;i<playedTypes.length;i++){
      if (playedTypes[i].eventTypeId == id){
        count = playedTypes[i].typesPlayed;
      }
    }
    return count;
  }


}
