import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MemberListComponent } from './member-list.component';
import { InvitedMemberListComponent } from './invited-member-list.component';
import { FormsModule } from '@angular/forms';

import { OrderbyNamePipe } from './orderby-name.pipe';

@NgModule({
    imports: [CommonModule, FormsModule],
    declarations: [MemberListComponent, OrderbyNamePipe, InvitedMemberListComponent],
    exports: [MemberListComponent, InvitedMemberListComponent],
    providers: []
})

export class MemberListModule { }
