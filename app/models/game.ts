import {Member} from './member';
import {Event} from './event';
import {Entry} from './entry';

export class Game {
  id: number;
  creator: Member;
  event: Event;
  time: string;
  light: number;
  status: number;
  comment: string;
  reserved: number;
  inscriptions: number;
  entries: Entry[];
  joined: boolean;
  evaluated: boolean;
  available: number;
}
