import { Component, Input } from '@angular/core';

@Component({
  selector: 'scheduled-game-list',
  templateUrl: 'scheduled-game-list.component.html',
})

export class ScheduledGameListComponent {

  @Input() games;

}
