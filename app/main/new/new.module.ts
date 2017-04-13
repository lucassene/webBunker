import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NewEventComponent } from './new.component';
import { OrderbyNamePipe } from './orderby-name.pipe';
import { OrderMemberNamePipe } from './ordermember-name.pipe';
import { FormsModule } from '@angular/forms';

import { MemberListModule } from '../../shared/member-list/member-list.module';

@NgModule({
    imports: [CommonModule, FormsModule, MemberListModule],
    declarations: [NewEventComponent, OrderbyNamePipe, OrderMemberNamePipe],
    exports: [NewEventComponent]
})

export class NewEventModule { }
