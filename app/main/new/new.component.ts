import { Component, OnInit} from '@angular/core';

import { types } from '../../models/event-type';
import { events } from '../../models/event';
import { EventType } from '../../models/event-type';
import { Event } from '../../models/event';
import { MemberService} from '../../services/member-service';
import { Member } from '../../models/member';
import { availableMember } from '../../models/member';
import { blockedMember } from '../../models/member';
import { Membership } from '../../models/create-json';
import { EventID } from '../../models/create-json';
import { CreateJSON } from '../../models/create-json';

@Component({
  selector: 'new-cmp',
  templateUrl: 'new.component.html',
  providers: [MemberService]
})

export class NewEventComponent implements OnInit {

  constructor(private memberService: MemberService) { }

  types = types;
  events = events;
  availableMember = availableMember;
  blockedMember = blockedMember;
  members: Member[];
  invitedMembers: Member[] = [];
  total = 0;
  selectedMember: Member;
  slotsUsed = 0;
  slotsAvailable = 0;

  selectedType = types[1].id;
  selectedEvent: Event;
  selectedLight: number;
  selectedDate: string;
  selectedTime: string;

  creator: Membership = { membership: '4611686018437203239'};
  entryList: Membership[] = [];
  EventID = 0;

  maxGuardians = 0;

  ngOnInit() {
    this.selectedType = types[1].id;
    this.events = events.filter((item) => item.eventType.id == this.selectedType);
    this.selectedEvent = this.events[0];
    this.maxGuardians = this.events[0].maxGuardians;
    this.slotsAvailable = this.maxGuardians;
    this.slotsUsed = this.maxGuardians;
    this.setDummyList();
    //this.memberService.getMembersFromWebAPI().then(members => this.setMembers(members));
    const today = new Date();
    this.selectedDate = today.getFullYear() + '-' + today.getMonth() + '-' + today.getDate();

  }

  setMembers(members: Member[]): void {
    this.members = members;
    console.log('members lenght: ', this.members.length);
    console.log('selectedEvent: ', this.selectedEvent.en);
    console.log('maxGuardians: ', this.maxGuardians);
  }

  setDummyList(){
    for(let i=0;i<this.maxGuardians;i++){
      this.invitedMembers.push(this.availableMember);
    }
  }

  onChange(typeID) {
    this.selectedType = typeID;
    this.events = events.filter((item) => item.eventType.id == typeID);
    this.selectedEvent = this.events[0];
    this.maxGuardians = this.events[0].maxGuardians;
    this.adjustInvitedList();
    console.log('selectedEvent: ', this.selectedEvent.en);
    console.log('maxGuardians: ', this.maxGuardians);
  }

  onEventSelected(){
    this.maxGuardians = this.selectedEvent.maxGuardians;
    this.adjustInvitedList();
    console.log('selectedEvent: ', this.selectedEvent.en);
    console.log('maxGuardians: ', this.maxGuardians);
  }

  adjustInvitedList(){
    console.log('maxGuardians: ', this.maxGuardians);
    console.log('invitedMembers: ', this.invitedMembers.length);
    let diff = this.maxGuardians - this.invitedMembers.length;
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
        this.invitedMembers[index] = this.selectedMember;
        const member: Membership = { membership: this.selectedMember.membership };
        this.entryList.push(member);
        console.log('entryList lenght: ', this.entryList.length);
        this.slotsUsed--;
        console.log('invitedMembers lenght: ', this.invitedMembers.length);
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

    for(let i=this.maxGuardians-1;i>=0;i--){
      if (member.membership === this.invitedMembers[i].membership){
        if (this.invitedMembers[i].membership === ''){
          if (counter >1){
            this.invitedMembers[i] = blockedMember;
            this.slotsAvailable--;
            this.slotsUsed--;
          }
        } else {
            this.invitedMembers[i] = availableMember;
            this.slotsUsed++;
            if (member.membership === '' || member.membership === '0.25'){
              this.slotsAvailable++;
            } else {
              for(let i=0;i<this.entryList.length;i++){
                if (member.membership === this.entryList[i].membership){
                  this.entryList.splice(i,1);
                  console.log('entryList lenght: ', this.entryList.length);
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
    let nd = date.toISOString().substr(0,date.toISOString().indexOf('T'));
    console.log(nd);
    this.selectedDate = nd;
  }

  onTimeChange(value: string){
    this.selectedTime = value;
  }

}
