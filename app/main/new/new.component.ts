import { Component, OnInit} from '@angular/core';
import { Location } from '@angular/common';

import { Clan } from '../../models/clan';
import { types } from '../../models/event-type';
import { events } from '../../models/event';
import { EventType } from '../../models/event-type';
import { Event } from '../../models/event';
import { MemberService} from '../../services/member-service';
import { Member } from '../../models/member';
import { availableMember } from '../../models/member';
import { blockedMember } from '../../models/member';
import { Membership } from '../../models/json';
import { EventID } from '../../models/json';
import { CreateJSON, Entry } from '../../models/json';

import { DataService} from '../../services/data-service';
import { GameService} from '../../services/game-service';
import { ClanService} from '../../services/clan-service';

@Component({
  selector: 'new-cmp',
  templateUrl: 'new.component.html',
  providers: []
})

export class NewEventComponent implements OnInit {

  constructor(private memberService: MemberService, private dataService: DataService, private gameService: GameService, private clanService: ClanService, private _location: Location) { }

  types = types;
  events = events;
  availableMember = availableMember;
  blockedMember = blockedMember;
  members: Member[];
  invitedMembers: Member[] = [];
  invitedCount = 0;
  total = 0;
  selectedMember: Member;
  slotsUsed = 0;
  slotsAvailable = 0;
  reservedSlots = 0;

  selectedType = types[1].id;
  selectedEvent: Event;
  selectedLight= 5;
  selectedDate = '';
  selectedTime = '';

  creator: Membership = new Membership('4611686018437203239');
  //creator: Membership = new Membership('4611686018449763730');
  entryList: Entry[] = [];
  EventID = 0;
  wroteComment = '';

  maxGuardians = 0;

  btnActive = false;
  btnMessage= 'WAITING DATA';

  ngOnInit() {
    this.selectedType = types[1].id;
    this.events = events.filter((item) => item.eventType.id == this.selectedType);
    this.selectedEvent = this.events[0];
    this.maxGuardians = this.events[0].maxGuardians;
    this.selectedLight = this.events[0].minLight;
    this.slotsAvailable = this.maxGuardians;
    this.slotsUsed = this.maxGuardians-1;
    this.setDummyList();
    this.clanService.getClanInfo(548691).subscribe(clan => this.getMembers(clan));
  }

  getMembers(clan: Clan){
    let members = this.dataService.getMembers();
    if (members == null || members.length){
      this.memberService.getMembers(clan.groupId).subscribe(members => this.setMembers(members));
    } else {
      this.setMembers(members);
    }
  }

  setMembers(members: Member[]): void {
    this.members = members;
    for(let i=0;i<this.members.length;i++){
      if (this.creator.membership === this.members[i].membership){
        this.members.splice(i,1);
      }
    }
  }

  setDummyList(){
    for(let i=0;i<this.maxGuardians-1;i++){
      this.invitedMembers.push(this.availableMember);
    }
  }

  onChange(typeID) {
    this.selectedType = typeID;
    this.events = events.filter((item) => item.eventType.id == typeID);
    this.selectedEvent = this.events[0];
    this.maxGuardians = this.events[0].maxGuardians;
    this.selectedLight = this.events[0].minLight;
    this.adjustInvitedList();
  }

  onEventSelected(){
    this.maxGuardians = this.selectedEvent.maxGuardians;
    this.selectedLight = this.selectedEvent.minLight;
    this.adjustInvitedList();
  }

  adjustInvitedList(){
    this.maxGuardians = this.selectedEvent.maxGuardians;
    this.slotsAvailable = this.maxGuardians;
    this.slotsUsed = this.maxGuardians-1 - this.invitedCount;
    console.log('maxGuardians: ', this.maxGuardians);
    console.log('invitedMembers: ', this.invitedMembers.length);
    let diff = this.maxGuardians-1 - this.invitedMembers.length;
    console.log('diff: ', diff);
    if (diff < 0){
      while(diff<0){
        this.invitedMembers.splice(-1,1);
        diff++;
      }
    } else if (diff > 0){
      while(diff>0){
        this.invitedMembers.push(this.availableMember);
        diff--;
      }
    }
  }

  inviteMember() {
      let index = 99;
      let canAdd = true;
      for (let i=0;i<this.invitedMembers.length;i++){
        if (this.invitedMembers[i].membership === this.selectedMember.membership){
          canAdd = false;
        }
        if (this.invitedMembers[i].membership===''){
          if (index == 99) {
            index = i;
          }
        }
      }
      if (index != 99 && canAdd){
        this.invitedCount++;
        console.log('invited Members:',this.invitedCount);
        this.invitedMembers[index] = this.selectedMember;
        this.entryList.push(new Entry(new Membership(this.selectedMember.membership)));
        this.slotsUsed--;
      }
  }

  changeMember(member: Member){
    console.log('changeMember called!', member.name);
    let counter = 0;
    for(let i=0;i<this.invitedMembers.length;i++){
      if (this.invitedMembers[i].membership == '' || this.invitedMembers[i].membership != '0.25'){
        counter++;
      }
    }

    for(let i=this.maxGuardians-2;i>=0;i--){
      if (member.membership === this.invitedMembers[i].membership){
        if (this.invitedMembers[i].membership === ''){
          if (counter >1){
            this.invitedMembers[i] = blockedMember;
            this.slotsAvailable--;
            this.slotsUsed--;
            this.reservedSlots++;
          }
        } else {
            this.invitedMembers[i] = availableMember;
            this.slotsUsed++;
            this.invitedCount--;
            this.reservedSlots--;
            console.log('invited Members:',this.invitedCount);
            if (member.membership === '' || member.membership === '0.25'){
              this.slotsAvailable++;
            } else {
              for(let i=0;i<this.entryList.length;i++){
                if (member.membership === this.entryList[i].member.membership){
                  this.entryList.splice(i,1);
                }
              }
            }
        }
        break;
      }
    }
      this.invitedMembers.sort(function(a, b){return b.gamesPlayed-a.gamesPlayed});

  }

  onLightChange(value: number){
    if (value >400){
      value = 400;
    } else if (value < this.selectedEvent.minLight){
      value = this.selectedEvent.minLight;
    }
    this.selectedLight = value;
    console.log('light: ', value);
  }

  onDateChange(value: string){
    let y = value.substr(0, value.indexOf('-'));
    let m = +value.substr(5,2) - 1;
    let d = +value.substr(8,2);
    let date = new Date();
    if (y.length > 4){
      y = date.getFullYear().toString();
    }
    date.setDate(d);
    date.setMonth(m);
    date.setFullYear(+y);
    const today = new Date();
    if (date.getTime() < today.getTime()){
      date = today;
    }
    const next = new Date();
    next.setMinutes(today.getMinutes()+30);
    let min = '';
    if (next.getMinutes() < 10){
      min = '0' + next.getMinutes();
    } else { min = next.getMinutes() + ''}
    this.selectedTime = next.getHours() + ':' + min;
    let nd = date.toISOString().substr(0,date.toISOString().indexOf('T'));
    this.selectedDate = nd;
    this.checkBtnState();
  }

  onTimeChange(value: string){
    this.selectedTime = value;
    this.checkBtnState();
  }

  checkBtnState(){
    if (this.selectedDate !== ''){
      this.btnActive = true;
      this.btnMessage= 'CREATE EVENT';
    } else {
      this.btnActive = false;
      this.btnMessage= 'WAITING DATA';
     }
  }

  onCommentChange(value: string){
    this.wroteComment = value;
  }

  createEvent(){
    if (this.btnActive){
      console.log('create event called!');
      let createJSON = new CreateJSON(
        this.creator,
        new EventID(this.selectedEvent.id),
        this.selectedDate + 'T' + this.selectedTime + ':00',
        this.selectedLight,
        0,
        this.wroteComment,
        this.reservedSlots,
        this.entryList
      )
      console.log(JSON.stringify(createJSON));
      this.gameService.createEvent(JSON.stringify(createJSON)).subscribe(res => this.onCreateEvent(res));
    }
  }

  onCreateEvent(res: Response){
    if (res.status === 200){
      console.log('Game crated successfully!');
      this._location.back();
    } else { console.log('some error occurred!')}
  }

}
