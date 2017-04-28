import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EntryListComponent } from './entry-list.component';
import { ValidateListComponent } from './validate-list.component'

@NgModule({
    imports: [CommonModule],
    declarations: [EntryListComponent, ValidateListComponent],
    exports: [EntryListComponent, ValidateListComponent],
    providers: []
})

export class EntryListModule { }
