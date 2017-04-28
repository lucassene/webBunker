import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';

import { MemberService} from '../../services/member-service';
import { ClanService } from '../../services/clan-service';
import { DataService } from '../../services/data-service';
import { Member } from '../../models/member';
import { Clan } from '../../models/clan';

@Component({
  selector: 'my-clan-cmp',
  templateUrl: 'my-clan.component.html',
  providers: []
})

export class MyClanComponent implements OnInit {

  members: Member[];
  clan: Clan;
  total: number;

  constructor(private memberService: MemberService, private clanService: ClanService, private dataService: DataService, private route: ActivatedRoute, private router: Router) { }

  getData(): void {
    this.clanService.getClanInfo(548691).subscribe(clan => {
      this.clan = clan;
      this.memberService.getMembers(this.clan.groupId).subscribe(members => this.setMembers(members as Member[]));
    });
  }

  setMembers(members: Member[]): void {
    this.members = members;
    this.total = members.length;
  }

  ngOnInit(): void {
    this.getData();
  }

  selectedMember(membership: string){
    this.router.navigate(['/main/profile', membership]);
  }

}
