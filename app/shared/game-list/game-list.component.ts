import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Game } from '../../models/game';

@Component({
  selector: 'game-list',
  templateUrl: 'game-list.component.html',
})

export class GameListComponent {

    @Input() games;
    @Input() title;

    @Output() selectedGame = new EventEmitter<Game>();

    constructor(private route: ActivatedRoute, private router: Router) {};

    onClick(game: Game){
      this.selectedGame.emit(game);
    }

}
