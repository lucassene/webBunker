import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChartsModule } from 'ng2-charts/ng2-charts';
import { StatsComponent } from './stats.component';


@NgModule({
    imports: [CommonModule, ChartsModule],
    declarations: [StatsComponent],
    exports: [StatsComponent]
})

export class StatsModule { }
