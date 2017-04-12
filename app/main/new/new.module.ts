import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NewEventComponent } from './new.component';
import { OrderbyNamePipe } from './orderby-name.pipe';
import { FormsModule } from '@angular/forms';

@NgModule({
    imports: [CommonModule, FormsModule],
    declarations: [NewEventComponent, OrderbyNamePipe],
    exports: [NewEventComponent]
})

export class NewEventModule { }
