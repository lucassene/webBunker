import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HistoryComponent } from './history.component';

import { OrderbyNamePipe } from './orderby-name.pipe';
import { FormsModule } from '@angular/forms';

import { GameListModule } from '../../shared/game-list/game-list.module';

@NgModule({
    imports: [CommonModule, FormsModule, GameListModule],
    declarations: [HistoryComponent, OrderbyNamePipe],
    exports: [HistoryComponent]
})

export class HistoryModule { }
