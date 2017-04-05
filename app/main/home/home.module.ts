
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GameListModule } from '../../shared/game-list/game-list.module';
import { HomeComponent } from './home.component';

import { TabComponent, TabHolderComponent } from './tabs';


@NgModule({
    imports: [CommonModule, GameListModule],
    declarations: [HomeComponent, TabComponent, TabHolderComponent],
    exports: [HomeComponent]
})

export class HomeModule { }
