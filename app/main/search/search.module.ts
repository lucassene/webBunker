import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SearchComponent } from './search.component';
import { OrderbyNamePipe } from './orderby-name.pipe';
import { FormsModule } from '@angular/forms';

import { GameListModule } from '../../shared/game-list/game-list.module';
import { StatusJoinedPipe } from'./game-status.pipe';

@NgModule({
    imports: [CommonModule, FormsModule, GameListModule],
    declarations: [SearchComponent, OrderbyNamePipe, StatusJoinedPipe],
    exports: [SearchComponent]
})

export class SearchModule { }
