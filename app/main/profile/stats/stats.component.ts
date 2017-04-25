import { Component, Input, OnInit } from '@angular/core';
import { Profile } from '../../../models/profile';
import { types } from '../../../models/profile';
import { chartColors, ChartData } from '../../../models/chart';

@Component({
  selector: 'stats',
  templateUrl: 'stats.component.html',
})

export class StatsComponent implements OnInit {
  @Input() profile;

  lvl: number;
  lvlString: string;
  xp: number;
  xpNeeded: number;
  progressWidth = '0%';

  types = types;

  evalChartLabels: string[] = [];
  evalChartData: number[] = [];
  pieChartType: string = 'pie';
  chartColors = chartColors;
  evalData: ChartData[] = [];

  eventsChartLabels: string[] = [];
  eventsChartData: number[] = [];
  eventsData: ChartData[] = [];

  typesChartLabels: string[] = [];
  typesChartData: number[] = [];
  typesData: ChartData[] = [];

  ngOnInit(){
    this.lvlString = this.getMemberLvl(this.profile.member.likes, this.profile.member.dislikes, this.profile.member.gamesCreated, this.profile.member.gamesPlayed);
    this.setEvaluationChartData();
    this.setEventsChartData();
    this.setTypesChartData();
  }

  getMemberLvl(likes: number, dislikes: number, created: number, played: number): string {
    const xp = this.getMemberXP(likes, dislikes, created, played) / 8;
    const lvl = Math.sqrt(xp);
    this.lvl = lvl;
    this.xpNeeded = this.getXPNeeded(lvl);
    this.setProgress(xp, this.xpNeeded);
    let inteiro = Math.floor(lvl);
    const resto = lvl % 1;
    if (resto > 0) {
      inteiro = inteiro + 1;
    }

    if (inteiro < 1) {
      return '01';
    } else {
      if (inteiro < 10) {
        const s = '0' + inteiro.toString();
        return s;
      } else {
        return inteiro.toString();
      }
    }
  }

  getMemberXP(likes: number, dislikes: number, created: number, played: number){
    const lfactor = likes * 16;
    const dfactor = dislikes * 16;
    const cfactor = created * 64;
    const pfactor = played * 48;
    this.xp = ( lfactor + cfactor + pfactor) - dfactor;
    return this.xp;
  }

  getXPNeeded(lvl: number){
    const result = 8 * Math.pow(lvl,2);
    if (result <= 0){
      return 8;
    } else return Math.round(result);
  }

  setProgress(xp: number, xpNeeded: number){
    this.progressWidth = (100 * xp) / xpNeeded + '%';
    console.log('progressWidth:',this.progressWidth);
  }

  setEvaluationChartData(){
    if (this.profile.member.likes > 0){
      this.evalChartData.push(this.profile.member.likes);
      this.evalChartLabels.push('Likes');
    }
    if (this.profile.member.dislikes > 0){
      this.evalChartData.push(this.profile.member.dislikes);
      this.evalChartLabels.push('Dislikes');
    }

    let sum = 0;
    for(let i=0;i<this.evalChartData.length;i++){
      sum = sum + this.evalChartData[i];
    }

    for(let i=0;i<this.evalChartData.length;i++){
      let item = new ChartData(
        this.chartColors[0].backgroundColor[i],
        this.evalChartLabels[i],
        this.evalChartData[i],
        Math.round((100 * this.evalChartData[i])/sum)
      )
      this.evalData.push(item);
    }

  }

  setEventsChartData(){
    if (this.profile.member.gamesCreated > 0){
      this.eventsChartData.push(this.profile.member.gamesCreated);
      this.eventsChartLabels.push('Created');
    }
    if (this.profile.member.gamesPlayed > 0){
      this.eventsChartData.push(this.profile.member.gamesPlayed);
      this.eventsChartLabels.push('Played');
    }

    let sum = 0;
    for(let i=0;i<this.eventsChartData.length;i++){
      sum = sum + this.eventsChartData[i];
    }

    for(let i=0;i<this.eventsChartData.length;i++){
      let item = new ChartData(
        this.chartColors[0].backgroundColor[i],
        this.eventsChartLabels[i],
        this.eventsChartData[i],
        Math.round((100 * this.eventsChartData[i])/sum)
      )
      this.eventsData.push(item);
    }

  }

  setTypesChartData(){
    let sum = 0;
    for(let i=0;i<this.profile.playedTypes.length;i++){
      this.typesChartData.push(this.profile.playedTypes[i].typesPlayed);
      this.typesChartLabels.push(this.profile.playedTypes[i].en);
      sum = sum + this.profile.playedTypes[i].typesPlayed;
    }

    for(let i=0;i<this.typesChartData.length;i++){
      let item = new ChartData(
        this.chartColors[0].backgroundColor[i],
        this.typesChartLabels[i],
        this.typesChartData[i],
        Math.round((100 * this.typesChartData[i])/sum)
      )
      this.typesData.push(item);
    }
  }

  // events
  public chartClicked(e:any):void {

  }

  public chartHovered(e:any):void {

  }

}
