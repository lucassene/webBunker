import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProfileComponent } from './profile.component';

import { TabComponent, TabHolderComponent } from './tabs';
import { StatsModule } from './stats/stats.module';
import { MedalsComponent } from './medals/medals.component';

@NgModule({
    imports: [CommonModule, StatsModule],
    declarations: [ProfileComponent, TabComponent, TabHolderComponent, MedalsComponent],
    exports: [ProfileComponent]
})

export class ProfileModule { }
