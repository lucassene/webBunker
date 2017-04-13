import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Member } from '../../models/member';

@Component({
  selector: 'invited-member-list',
  templateUrl: 'invited-member-list.component.html',
})

export class InvitedMemberListComponent {

    @Input() members;

    @Output() changeMember = new EventEmitter<Member>();

    onClick(member: Member){
      this.changeMember.emit(member);
    }

}
