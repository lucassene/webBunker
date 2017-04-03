import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NewEventComponent } from './new.component';

@NgModule({
    imports: [CommonModule],
    declarations: [NewEventComponent],
    exports: [NewEventComponent]
})

export class NewEventModule { }
