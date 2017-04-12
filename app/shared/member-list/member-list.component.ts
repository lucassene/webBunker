import { Component, Input } from '@angular/core';

@Component({
  selector: 'member-list',
  templateUrl: 'member-list.component.html',
})

export class MemberListComponent {

    @Input() members;
    @Input() title;
  
  getMemberLvl(likes: number, dislikes: number, created: number, played: number): string {
    const lfactor = likes * 16;
    const dfactor = dislikes * 16;
    const cfactor = created * 64;
    const pfactor = played * 48;
    
    const xp = ( lfactor + cfactor + pfactor) - dfactor;
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

}
