import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';
import { Member } from '../../models/member';
import { OrderbyNamePipe } from './orderby-name.pipe';

@Component({
  selector: 'member-list',
  templateUrl: 'member-list.component.html',
  providers: [OrderbyNamePipe]
})

export class MemberListComponent implements OnInit {

    @Input() members;
    @Input() total;
    @Input() title;
    @Input() showTitleBar;

    value = 1;

    ngOnInit(){
      this.members.sort(function(a,b){return ((b.likes*16) + (b.gamesCreated*64) + (b.gamesPlayed*48) - (b.dislikes*16)) - ((a.likes*16) + (a.gamesCreated*64) + (a.gamesPlayed*48) - (a.dislikes*16))});
    }

  getMemberLvl(likes: number, dislikes: number, created: number, played: number): string {
    const xp = this.getMemberXP(likes, dislikes, created, played);
    const xp2 = xp / 8;
    const lvl = Math.sqrt(xp2);
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

  @Output() selectedMember = new EventEmitter<String>();

  onClick(member: Member){
    this.selectedMember.emit(member.membership);
  }

  getMemberXP(likes: number, dislikes: number, created: number, played: number){
    const lfactor = likes * 16;
    const dfactor = dislikes * 16;
    const cfactor = created * 64;
    const pfactor = played * 48;
    return (lfactor + cfactor + pfactor) - dfactor;
  }

  onChange(value: number){
    console.log(value);
    if (value == 0){
      this.members = OrderbyNamePipe.prototype.transform(this.members, '');
    }
    if (value == 1){
      this.members.sort(function(a,b){return ((b.likes*16) + (b.gamesCreated*64) + (b.gamesPlayed*48) - (b.dislikes*16)) - ((a.likes*16) + (a.gamesCreated*64) + (a.gamesPlayed*48) - (a.dislikes*16))});
    }
  }

}
