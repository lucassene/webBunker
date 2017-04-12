import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MyClanComponent } from './my-clan.component';

import { MemberListModule } from '../../shared/member-list/member-list.module';

@NgModule({
    imports: [CommonModule, MemberListModule],
    declarations: [MyClanComponent],
    exports: [MyClanComponent]
})

export class MyClanModule { }
