import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';

import { MemberService } from '../../services/member-service';
import { Profile } from '../../models/profile';

@Component({
  selector: 'profile-cmp',
  templateUrl: 'profile.component.html',
  providers: []
})

export class ProfileComponent implements OnInit{

  defaultMembership = '4611686018437203239';
  membership: string;
  profile: Profile;

  constructor(private route: ActivatedRoute, private router: Router, public memberService: MemberService){};

  ngOnInit(): void {
    this.route.params.subscribe(params => this.getMemberProfile(params['membership']));
  }

  getMemberProfile(membership: string){
    if (typeof membership === 'undefined'){
      console.log('membership is empty, replacing...');
      this.membership = this.defaultMembership;
    } else { this.membership = membership; }
    console.log(this.membership);
    this.memberService.getMemberProfile(this.membership).subscribe(profile => this.setProfile(profile as Profile));
  }

  setProfile(profile: Profile){
    this.profile = profile;
  }
}
