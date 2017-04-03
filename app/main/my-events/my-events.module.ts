import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MyEventsComponent } from './my-events.component';

@NgModule({
    imports: [CommonModule],
    declarations: [MyEventsComponent],
    exports: [MyEventsComponent]
})

export class MyEventsModule { }
