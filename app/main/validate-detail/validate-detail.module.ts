import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ValidateDetailComponent } from './validate-detail.component';

import { EntryListModule } from '../../shared/entry-list/entry-list.module';

@NgModule({
    imports: [CommonModule, EntryListModule],
    declarations: [ValidateDetailComponent],
    exports: [ValidateDetailComponent]
})

export class ValidateDetailModule { }
