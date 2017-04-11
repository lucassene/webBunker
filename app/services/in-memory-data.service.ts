import { InMemoryDbService } from 'angular-in-memory-web-api';

import { Game } from '../models/game';
import { Member } from '../models/member';
import { Event } from '../models/event';
import { EventType} from '../models/event-type';
import { Entry } from '../models/entry';
import { Title } from '../models/member';

export class InMemoryDataService implements InMemoryDbService {
  createDb() {
      const title: Title = { en: 'Title', pt: 'Title', es: 'Title' };
    
      const member1: Member = { membership: '01234', name: 'Joaozinho', icon: '', platform: 2, likes: 0, dislikes: 0, gamesCreated: 1, gamesPlayed: 1, memberTitle: title };
      const member2: Member = { membership: '98765', name: 'Mariazinha', icon: '', platform: 2, likes: 0, dislikes: 0, gamesCreated: 1, gamesPlayed: 1, memberTitle: title };
      const member3: Member = { membership: '63542', name: 'Fulano', icon: '', platform: 2, likes: 0, dislikes: 0, gamesCreated: 1, gamesPlayed: 1, memberTitle: title };

      const type1: EventType = { id: 1, icon: 'ic_raid.png', en: 'Raid', pt: 'Raid', es: 'Raid' };
      const type2: EventType = { id: 2, icon: 'ic_crucible.png', en: 'Crucible', pt: 'Crucible', es: 'Crucible' };
      const type3: EventType = { id: 3, icon: 'ic_prison.png', en: 'Prison of Elders', pt: 'Prison of Elders', es: 'Prison of Elders' };

      const event1: Event = {
        id: 1,
        icon: 'ic_raid.png',
        minLight: 350,
        maxGuardians: 6,
        eventType: type1,
        en: 'Vault of Glass',
        pt: 'Vault of Glass',
        es: 'Vault of Glass'
        };

      const event2: Event = {
        id: 2,
        icon: 'ic_control.png',
        minLight: 5,
        maxGuardians: 6,
        eventType: type2,
        en: 'Control',
        pt: 'Control',
        es: 'Control'
        };

      const event3: Event = {
        id: 3,
        icon: 'ic_elimination.png',
        minLight: 100,
        maxGuardians: 3,
        eventType: type2,
        en: 'Elimination',
        pt: 'Elimination',
        es: 'Elimination'
      };
      
      const event4: Event = {
        id: 4,
        icon: 'ic_skolas.png',
        minLight: 100,
        maxGuardians: 3,
        eventType: type3,
        en: 'Skolas`s Revenge',
        pt: 'Skolas`s Revenge',
        es: 'Skolas`s Revenge'
      };
      
      
      const entryList1: Entry[] = [
        { id: 1, member: member1, time: '1/1/1'},
        { id: 2, member: member2, time: '2/2/2'},
        { id: 3, member: member3, time: '4/4/4'}
      ];

      const entryList2: Entry[] = [
        { id: 3, member: member1, time: '1/1/1'},
        { id: 4, member: member2, time: '2/2/2'}
      ];
      
      let games: Game[] = [
        { id: 1,
          creator: member1,
          event: event1,
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
          creator: member2,
          event: event2,
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
          creator: member3,
          event: event3,
          time: '2017-04-05T09:30',
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
         { id: 4,
          creator: member1,
          event: event4,
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
        }
      ];
    return {games};
  }
}