import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';

import { TabComponent, TabHolderComponent } from './tabs';

@NgModule({
    imports: [CommonModule],
    declarations: [HomeComponent, TabComponent, TabHolderComponent],
    exports: [HomeComponent]
})

export class HomeModule { }
