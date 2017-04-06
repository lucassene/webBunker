import { Component, Input } from '@angular/core';

@Component({
  selector: 'finished-game-list',
  templateUrl: 'finished-game-list.component.html',
})

export class FinishedGameListComponent {

  @Input() games;

}
