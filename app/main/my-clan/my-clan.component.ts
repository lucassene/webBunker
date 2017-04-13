import { Component, OnInit } from '@angular/core';

import { MemberService} from '../../services/member-service';
import { ClanService } from '../../services/clan-service';
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

  constructor(private memberService: MemberService, private clanService: ClanService) { }

  getData(): void {
    this.memberService.getMembersFromWebAPI().then(members => this.setMembers(members));
    this.clanService.getClanFromWebAPI().then(clan => this.setClan(clan));
  }

  setClan(clan: Clan): void {
    this.clan = clan;
    console.log('clan id: ', clan.groupId);
  }

  setMembers(members: Member[]): void {
    this.members = members;
    this.total = members.length;
    console.log('members lenght: ', this.members.length);
  }

  ngOnInit(): void {
    this.getData();
  }

}
