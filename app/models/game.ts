import {Creator} from './member';
import {Event} from './event';

export class Game{
  id: number;
  creator: Creator;
  event: Event;
  time: string;
  light: number;
  status: number;
  comment: string;
  reserved: number;
  inscriptions: number;
  joined: boolean;
  evaluated: boolean;
}
