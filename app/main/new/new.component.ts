import { Component, OnInit} from '@angular/core';

import { types } from '../../models/event-type';
import { events } from '../../models/event';
import { EventType } from '../../models/event-type';
import { Event } from '../../models/event';
import { MemberService} from '../../services/member-service';
import { Member } from '../../models/member';
import { availableMember } from '../../models/member';
import { blockedMember } from '../../models/member';

@Component({
  selector: 'new-cmp',
  templateUrl: 'new.component.html',
  providers: [MemberService]
})

export class NewEventComponent implements OnInit {

  types = types;
  events = events;
  availableMember = availableMember;
  blockedMember = blockedMember;
  members: Member[];
  invitedMembers: Member[] = [];
  total = 0;
  selectedMember: Member;

  selectedType = types[1].id;
  selectedEvent: Event;

  maxGuardians = 0;

  constructor(private memberService: MemberService) { }

  ngOnInit() {
    this.selectedType = types[1].id;
    this.events = events.filter((item) => item.eventType.id == this.selectedType);
    this.selectedEvent = this.events[0];
    this.maxGuardians = this.events[0].maxGuardians;
    this.setDummyList();
    this.memberService.getMembersFromWebAPI().then(members => this.setMembers(members));
  }

  setMembers(members: Member[]): void {
    this.members = members;
    this.members.splice(0, 0, this.availableMember);
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
          }
        } else {
            this.invitedMembers[i] = availableMember;
        }
        break;
      }
    }
      this.invitedMembers.sort(function(a, b){return b.gamesPlayed-a.gamesPlayed});

  }

}
