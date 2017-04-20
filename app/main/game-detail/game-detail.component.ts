import 'rxjs/add/operator/switchMap';
import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';

import { DataService } from '../../services/data-service';
import { EntryService } from '../../services/entry-service'

import { Game } from '../../models/game';
import { Entry } from '../../models/entry';

@Component({
  selector: 'game-detail',
  templateUrl: 'game-detail.component.html',
  providers: [EntryService]
})

export class GameDetailComponent implements OnInit {

  game: Game;
  entries: Entry[];

  constructor(private route: ActivatedRoute, private router: Router, public dataService: DataService, private entryService: EntryService){};

  ngOnInit(): void {
    let id: number;
    this.route.params.subscribe(params => this.getGameDetails(+params['id']));
  }

  setEntries(entries: Entry[]){
    this.entries = entries;
  }

  getGameDetails(id: number){
    this.game = this.dataService.getGameById(id);
    this.entryService.getEntries(id).subscribe(entries => this.setEntries(entries as Entry[]));
    console.log('selected game: ', this.game.id);
  }

}
