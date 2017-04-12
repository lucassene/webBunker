import { InMemoryDbService } from 'angular-in-memory-web-api';

import { Game } from '../models/game';
import { Member } from '../models/member';
import { Event } from '../models/event';
import { EventType} from '../models/event-type';
import { Entry } from '../models/entry';
import { Title } from '../models/member';
import { events } from '../models/event';
import { members } from '../models/member';
import { clan } from '../models/clan';

export class InMemoryDataService implements InMemoryDbService {

  events = events;
  members = members;
  clan = clan;

  createDb() {

      const members = this.members;
      const clan = this.clan;

      const entryList1: Entry[] = [
        { id: 1, member: members[0], time: '1/1/1'},
        { id: 2, member: members[3], time: '2/2/2'},
        { id: 3, member: members[7], time: '4/4/4'}
      ];

      const entryList2: Entry[] = [
        { id: 3, member: members[4], time: '1/1/1'},
        { id: 4, member: members[9], time: '2/2/2'}
      ];

      const entryList3: Entry[] = [
        { id: 3, member: members[12], time: '1/1/1'},
        { id: 4, member: members[10], time: '2/2/2'}
      ];

      const games: Game[] = [
        { id: 1,
          creator: members[0],
          event: this.events[1],
          time: '2017-04-04T11:19',
          light: 350,
          status: 0,
          comment: 'Bora!',
          reserved: 0,
          inscriptions: 3,
          entries: entryList1,
          joined: true,
          evaluated: false,
          available: 3
        },
          { id: 2,
          creator: members[4],
          event: this.events[4],
          time: '2017-04-11T16:15',
          light: 350,
          status: 1,
          comment: 'Bora!',
          reserved: 0,
          inscriptions: 2,
          entries: entryList2,
          joined: true,
          evaluated: false,
          available: 4
        },
          { id: 3,
          creator: members[10],
          event: this.events[43],
          time: '2017-04-05T09:30',
          light: 350,
          status: 0,
          comment: 'Bora!',
          reserved: 0,
          inscriptions: 2,
          entries: entryList3,
          joined: false,
          evaluated: false,
          available: 4
        },
         { id: 4,
          creator: members[9],
          event: this.events[23],
          time: '2017-04-09T20:21',
          light: 350,
          status: 0,
          comment: 'Bora!',
          reserved: 0,
          inscriptions: 2,
          entries: entryList2,
          joined: false,
          evaluated: false,
          available: 4
        },
         { id: 5,
          creator: members[7],
          event: this.events[68],
          time: '2017-04-02T14:08',
          light: 350,
          status: 2,
          comment: 'Bora!',
          reserved: 0,
          inscriptions: 2,
          entries: entryList1,
          joined: true,
          evaluated: false,
          available: 4
        },
         { id: 6,
          creator: members[4],
          event: this.events[2],
          time: '2017-04-05T07:00',
          light: 350,
          status: 2,
          comment: 'Bora!',
          reserved: 0,
          inscriptions: 2,
          entries: entryList2,
          joined: true,
          evaluated: true,
          available: 4
        },
         { id: 6,
          creator: members[3],
          event: this.events[50],
          time: '2017-04-05T04:20',
          light: 350,
          status: 2,
          comment: 'Bora!',
          reserved: 0,
          inscriptions: 2,
          entries: entryList1,
          joined: false,
          evaluated: false,
          available: 4
        }
      ];
    return {games, members, clan};
  }

}
