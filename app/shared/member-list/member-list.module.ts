import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MemberListComponent } from './member-list.component';
import { InvitedMemberListComponent } from './invited-member-list.component';

import { OrderbyNamePipe } from './orderby-name.pipe';

@NgModule({
    imports: [CommonModule],
    declarations: [MemberListComponent, OrderbyNamePipe, InvitedMemberListComponent],
    exports: [MemberListComponent, InvitedMemberListComponent],
    providers: []
})

export class MemberListModule { }
