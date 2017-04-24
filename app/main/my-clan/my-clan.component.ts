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
  providers: [MemberService, ClanService]
})

export class MyClanComponent implements OnInit {

  members: Member[];
  clan: Clan;
  total: number;

  constructor(private memberService: MemberService, private clanService: ClanService, private dataService: DataService, private route: ActivatedRoute, private router: Router) { }

  getData(): void {
    this.memberService.getMembers(this.dataService.getGroupID()).subscribe(members => this.setMembers(members as Member[]));
    this.clan = this.dataService.getClan();
  }

  setMembers(members: Member[]): void {
    this.members = members;
    this.total = members.length;
    console.log('members lenght: ', this.members.length);
  }

  ngOnInit(): void {
    this.getData();
  }

  selectedMember(membership: string){
    this.router.navigate(['/main/profile', membership]);
  }

}
