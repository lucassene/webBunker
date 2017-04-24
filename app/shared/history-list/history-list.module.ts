import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HistoryListComponent } from './history-list.component';

@NgModule({
    imports: [CommonModule],
    declarations: [HistoryListComponent],
    exports: [HistoryListComponent],
    providers: []
})

export class HistoryListModule { }
