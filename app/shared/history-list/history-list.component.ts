import { Component, Input, Output, EventEmitter } from '@angular/core';

import { History } from '../../models/history';

@Component({
  selector: 'history-list',
  templateUrl: 'history-list.component.html',
})

export class HistoryListComponent {

  @Input() members;

  @Output() selectedMember = new EventEmitter<String>();

  getGainedXP(member: History){
    const isCreator = this.getMemberPosition(member.membership);
    let xp = 0;
    if (isCreator){
      xp = xp + 64;
    } else {
      xp = xp + 48;
    }
    xp = xp + ( member.totalLikes * 16);
    xp = xp - ( member.totalDislikes * 16);

    let result: string;

    if (xp >= 0){
      result = '+ ' + xp + ' XP';
    } else {
      result = '- ' + xp + ' XP';
    }
    return result;
  }

  getMemberPosition(membership: string){
    let isCreator = false;
    for(let i=0;i<this.members.length;i++){
      if (this.members[0].membership === membership){
        isCreator = true;
      }
    }
    return isCreator;
  }

  onClick(entry: History){
    console.log(entry);
    this.selectedMember.emit(entry.membership);
  }

}
