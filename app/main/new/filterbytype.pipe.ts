import { Pipe, PipeTransform } from '@angular/core';

import { Event } from '../../models/event';
import { EventType } from '../../models/event-type';

@Pipe({
  name: 'filterbyType'
})
export class FilterbytypePipe implements PipeTransform {

  transform(events: Event[], typeID: number): any {
    return events.filter(event => event.eventType.id === typeID);
  }

}
