import { Component, Input } from '@angular/core';

@Component({
  selector: 'recent-game-list',
  templateUrl: 'recent-game-list.component.html',
})

export class RecentGameListComponent {

    @Input() games;

}
