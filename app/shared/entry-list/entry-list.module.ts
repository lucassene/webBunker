import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EntryListComponent } from './entry-list.component';

@NgModule({
    imports: [CommonModule],
    declarations: [EntryListComponent],
    exports: [EntryListComponent],
    providers: []
})

export class EntryListModule { }
