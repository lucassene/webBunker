import { Component } from '@angular/core';
import { Game } from '../models/game';
import { DataService } from '../services/data-service';
import { TopNavComponent } from '../shared/topnav/topnav';

@Component({
  selector: 'main-cmp',
  templateUrl: 'main.component.html',
  providers: [DataService, TopNavComponent]
})

export class MainComponent {

  pageTitle = 'The Bunker';

  games: Game[];

  isActive: boolean;

  changeTitleString(title: string) {
    this.pageTitle = title;
  }

 }
