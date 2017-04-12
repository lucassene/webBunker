import { Component, OnInit} from '@angular/core';

import { types } from '../../models/event-type';
import { events } from '../../models/event';
import { EventType } from '../../models/event-type';
import { Event } from '../../models/event';

@Component({
  selector: 'new-cmp',
  templateUrl: 'new.component.html',
})

export class NewEventComponent implements OnInit {

  types = types;
  events = events;

  selectedType = types[1].id;
  
  ngOnInit() {
    this.selectedType = types[1].id;
    this.events = events.filter((item) => item.eventType.id == this.selectedType);
  }

  onChange(typeID) {
    this.selectedType = typeID;
    console.log('selectedTypeID onChange: ', this.selectedType);
    this.events = events.filter((item) => item.eventType.id == typeID);
  }

}
