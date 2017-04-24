import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HistoryDetailComponent } from './history-detail.component';

import { HistoryListModule } from '../../shared/history-list/history-list.module';

@NgModule({
    imports: [CommonModule, HistoryListModule],
    declarations: [HistoryDetailComponent],
    exports: [HistoryDetailComponent]
})

export class HistoryDetailModule { }
