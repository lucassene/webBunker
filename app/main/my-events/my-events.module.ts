import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MyEventsComponent } from './my-events.component';
import { GameListModule } from '../../shared/game-list/game-list.module';

import { FormsModule } from '@angular/forms';

@NgModule({
    imports: [CommonModule, FormsModule, GameListModule],
    declarations: [MyEventsComponent],
    exports: [MyEventsComponent]
})

export class MyEventsModule { }
