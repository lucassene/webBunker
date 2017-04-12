import { Component, Input } from '@angular/core';

@Component({
  selector: 'game-list',
  templateUrl: 'game-list.component.html',
})

export class GameListComponent {

    @Input() games;
    @Input() title;

}
