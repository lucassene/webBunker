import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GameDetailComponent } from './game-detail.component';

import { EntryListModule } from '../../shared/entry-list/entry-list.module';

@NgModule({
    imports: [CommonModule, EntryListModule],
    declarations: [GameDetailComponent],
    exports: [GameDetailComponent]
})

export class GameDetailModule { }
