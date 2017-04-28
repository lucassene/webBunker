import 'rxjs/add/operator/switchMap';
import { Component, OnInit } from '@angular/core';
import { Response } from '@angular/http';
import { Location } from '@angular/common';
import { Router, ActivatedRoute, Params } from '@angular/router';

import { DataService } from '../../services/data-service';
import { EntryService } from '../../services/entry-service'
import { GameService } from '../../services/game-service'

import { Game } from '../../models/game';
import { Entry } from '../../models/entry';
import { Evaluation } from '../../models/evaluation';
import { ValidateJSON } from '../../models/json';

@Component({
  selector: 'validate-detail',
  templateUrl: 'validate-detail.component.html',
  providers: []
})

export class ValidateDetailComponent implements OnInit {

  game: Game;
  entries: Entry[];
  btnMessage = '';
  btnActive = true;
  showValidate = false;
  evalList: Evaluation[] = [];

  constructor(private route: ActivatedRoute, private router: Router, public dataService: DataService, private entryService: EntryService, private _location: Location, private gameService: GameService){};

  ngOnInit(): void {
    let id: number;
    this.route.params.subscribe(params => this.getGameDetails(+params['id']));
  }

  setPageType(){
    if (this.game.status == 2 && this.game.evaluated){
      this.btnMessage = 'BACK';
    } else if (this.game.creator.membership === this.dataService.getLoggedMember()){
      if (this.game.status === 0){
        this.btnMessage = 'DELETE';
      } else if (this.game.status === 1){
        if (this.entries.length > 1){
          this.btnMessage = 'VALIDATE';
          this.showValidate = true;
        } else { this.btnMessage = 'DELETE' }
      }
    } else if (this.game.status === 0){
      if (this.game.joined){
        this.btnMessage = 'LEAVE';
      } else { this.btnMessage = 'JOIN'; }
    } else if (this.game.status === 1){
      this.btnMessage = 'WAITING'
      this.btnActive = false;
    } else {
      this.btnMessage = 'EVALUATE';
      this.showValidate = true;
    }
  }

  setEntries(entries: Entry[]){
    this.entries = entries;
    this.setPageType();
  }

  getGameDetails(id: number){
    console.log('selected Game:', id);
    this.game = this.gameService.getGameById(id);
    if (this.game){
      this.entryService.getEntries(id).subscribe(entries => this.setEntries(entries as Entry[]));
    } else {
      this.gameService.getGamesFromServer().subscribe(games => {
        this.game = games.find(game => game.id === id);
        this.entryService.getEntries(id).subscribe(entries => this.setEntries(entries as Entry[]));
      })
    }
  }

  onClick(){
    if (this.btnMessage === 'BACK' || this.btnMessage === 'WAITING'){
      this._location.back();
    }
    if (this.btnMessage === 'DELETE'){
      this.gameService.deleteEvent(this.game.id).subscribe(res => this.checkSuccess(res));
    }
    if (this.btnMessage === 'JOIN'){
      this.gameService.joinEvent(this.game.id).subscribe(res => this.checkSuccess(res));
    }
    if (this.btnMessage === 'LEAVE'){
      this.gameService.leaveEvent(this.game.id).subscribe(res => this.checkSuccess(res));
    }
    if (this.btnMessage === 'VALIDATE'){
      this.makeValidateRequest();
    }
  }

  makeValidateRequest(){
    let jsonString = '{"entries":[' + this.entries[0].member.membership;
    for(let i=0;i<this.evalList.length;i++){
        jsonString = jsonString + ',' + this.evalList[i].memberB;
    }
    jsonString = jsonString + '],"evaluations":[';
    for(let i=0;i<this.evalList.length;i++){
      if (i === 0){
        jsonString = jsonString + '{"memberB":' + this.evalList[i].memberB + ',"rate":' + this.evalList[i].rate + '}';
      } else {
        jsonString = jsonString + ',{"memberB":' + this.evalList[i].memberB + ',"rate":' + this.evalList[i].rate + '}';
      }
    }
    jsonString = jsonString + ']}';
    console.log(jsonString);
    this.gameService.validateEvent(this.game.id, jsonString).subscribe(res => this.checkSuccess(res));
  }

  checkSuccess(res: Response){
    if (res.status == 200){
      console.log('Request done successfully');
      this._location.back();
    } else { console.log('Error on request')}
  }

  onMemberSelected(membership: string){
    this.router.navigate(['/main/profile',membership]);
  }

  onCheckChange(isChecked: boolean){
    if (isChecked){
      this.btnMessage = 'VALIDATE';
    } else { this.btnMessage = 'DELETE'}
  }

  rateChanged(e: Evaluation){
    if (this.evalList.length <= 0){
      this.evalList.push(e);
    } else {
      for (let i=0;i<this.evalList.length;i++){
        if (this.evalList[0].memberB === e.memberB){
          this.evalList.splice(i,1);
        }
      }
      this.evalList.push(e);
    }
  }

  removeMember(memberID: string){
    for (let i=0;i<this.evalList.length;i++){
      if (this.evalList[0].memberB === memberID){
        this.evalList.splice(i,1);
      }
    }
  }

}
