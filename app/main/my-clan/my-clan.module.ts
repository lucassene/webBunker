import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MyClanComponent } from './my-clan.component';

@NgModule({
    imports: [CommonModule],
    declarations: [MyClanComponent],
    exports: [MyClanComponent]
})

export class MyClanModule { }
