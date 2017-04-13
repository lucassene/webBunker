import {Component, Input} from '@angular/core';

@Component({
  selector: 'clanheader-cmp',
  templateUrl: 'clanheader.html'
})

export class ClanHeaderComponent {

  @Input() clan;
  
}
