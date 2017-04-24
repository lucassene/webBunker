import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProfileComponent } from './profile.component';

import { TabComponent, TabHolderComponent } from './tabs';
import { StatsComponent } from './stats/stats.component';
import { MedalsComponent } from './medals/medals.component';

@NgModule({
    imports: [CommonModule],
    declarations: [ProfileComponent, TabComponent, TabHolderComponent, StatsComponent, MedalsComponent],
    exports: [ProfileComponent]
})

export class ProfileModule { }
