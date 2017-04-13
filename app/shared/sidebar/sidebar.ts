import { Component, Output, EventEmitter, OnInit } from '@angular/core';
import { ClanService } from '../../services/clan-service';
import { Clan } from '../../models/clan';

@Component({
  selector: 'sidebar-cmp',
  templateUrl: 'sidebar.html',
  providers: [ClanService]
})

export class SidebarComponent implements OnInit{

  @Output()
  changeTitleString = new EventEmitter<string>();

  clan: Clan;

  constructor(private clanService: ClanService) { }

  isActive = false;
  showMenu: string = '';
  eventCalled() {
    this.isActive = !this.isActive;
  }
  addExpandClass(element: any) {
    if (element === this.showMenu) {
      this.showMenu = '0';
    } else {
      this.showMenu = element;
    }
  }

  ngOnInit(){
    this.clanService.getClanFromWebAPI().then(clan => this.setClan(clan));
  }

  setClan(clan: Clan){
    this.clan = clan;
    console.log('clanName: ', this.clan.name);
  }

  changeTitle(title: string) {
    this.changeTitleString.emit(title);
  }

}
