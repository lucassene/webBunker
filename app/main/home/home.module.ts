
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GameListModule } from '../../shared/game-list/game-list.module';
import { HomeComponent } from './home.component';
import { StatusJoinedPipe } from'./game-status.pipe';

import { TabComponent, TabHolderComponent } from './tabs';


@NgModule({
    imports: [CommonModule, GameListModule],
    declarations: [HomeComponent, StatusJoinedPipe, TabComponent, TabHolderComponent],
    exports: [HomeComponent]
})

export class HomeModule { }
