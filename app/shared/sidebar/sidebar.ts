import { Component, Output, EventEmitter, OnInit } from '@angular/core';
import { ClanService } from '../../services/clan-service';
import { DataService } from '../../services/data-service';
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

  constructor(private clanService: ClanService, private dataService: DataService) { }

  isActive = false;
  showMenu: string = '';
  groupdID = 548691; //Temporary

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
    this.clanService.getClanInfo(this.groupdID).subscribe(clan => this.setClan(clan));
  }

  setClan(clan: Clan){
    this.clan = clan;
  }

  changeTitle(title: string) {
    this.isActive = !this.isActive;
    this.changeTitleString.emit(title);
  }

}
