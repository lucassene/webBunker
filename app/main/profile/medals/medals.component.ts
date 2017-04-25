import { Component, Input, OnInit } from '@angular/core';

import { Profile, PlayedType } from '../../../models/profile';
import { Medal, Star } from '../../../models/medal';

@Component({
  selector: 'medals',
  templateUrl: 'medals.component.html',
})

export class MedalsComponent implements OnInit{

  @Input() profile;
  medals: Medal[];

  ngOnInit(){
    this.medals = [];
    this.medals.push(new Medal(
      'My game, my rules',
      'Number of created events',
      'ic_created_medal.png',
      this.profile.member.gamesCreated,
      this.getNextValue(this.profile.member.gamesCreated),
      this.getStars(this.profile.member.gamesCreated)
    ));
    this.medals.push(new Medal(
      'Player',
      'Number of played events',
      'ic_played_medal.png',
      this.profile.member.gamesPlayed,
      this.getNextValue(this.profile.member.gamesPlayed),
      this.getStars(this.profile.member.gamesPlayed)
    ));
    this.medals.push(new Medal(
      'Eye of the beholder',
      'Evaluations made',
      'ic_eval_medal.png',
      this.profile.evaluationsMade,
      this.getNextValue(this.profile.evaluationsMade),
      this.getStars(this.profile.evaluationsMade)
    ));
    this.medals.push(new Medal(
      'The beloved one',
      'Number of likes received',
      'ic_like_medal.png',
      this.profile.member.likes,
      this.getNextValue(this.profile.member.likes),
      this.getStars(this.profile.member.likes)
    ));
    this.medals.push(new Medal(
      'Hated of feared?',
      'Number of dislikes received',
      'ic_dislike_medal.png',
      this.profile.member.dislikes,
      this.getNextValue(this.profile.member.dislikes),
      this.getStars(this.profile.member.dislikes)
    ));
    let timesPlayed: number;
    timesPlayed = this.getTimesPlayed(this.profile.playedTypes, 2);
    this.medals.push(new Medal(
      'No pain, no gain',
      'Crucible events played',
      'ic_crucible_medal.png',
      timesPlayed,
      this.getNextValue(timesPlayed),
      this.getStars(timesPlayed)
    ));
    timesPlayed = this.getTimesPlayed(this.profile.playedTypes, 7) + this.getTimesPlayed(this.profile.playedTypes, 8);
    this.medals.push(new Medal(
      'Striker',
      'Strike events played',
      'ic_strike_medal.png',
      timesPlayed,
      this.getNextValue(timesPlayed),
      this.getStars(timesPlayed)
    ));
    timesPlayed = this.getTimesPlayed(this.profile.playedTypes, 5);
    this.medals.push(new Medal(
      'Space cowboy',
      'Raid events played',
      'ic_raid_medal.png',
      timesPlayed,
      this.getNextValue(timesPlayed),
      this.getStars(timesPlayed)
    ));
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

  getTimesPlayed(playedTypes: PlayedType[], id: number){
    let count = 0;
    for (let i=0;i<playedTypes.length;i++){
      if (playedTypes[i].eventTypeId == id){
        count = playedTypes[i].typesPlayed;
      }
    }
    return count;
  }

  getStars(value: number){
    let stars: Star[] = [];
    let count = 0;
    if (value < 1){
      count = 0;
    } else if (value < 10){
      count = 1;
    } else if (value <50){
      count = 2;
    } else if (value <250){
      count = 3;
    } else if (value <500){
      count = 4;
    } else count = 5;

    for(let i=0;i<5;i++){
      if (i < count){
        stars.push(new Star('1.0'))
      } else stars.push(new Star('0.1'))
    }
    return stars;
  }

}
