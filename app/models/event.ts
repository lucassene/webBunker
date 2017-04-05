import {EventType} from './event-type';

export class Event {
  id: number;
  icon: string;
  minLight: number;
  maxGuardians: number;
  eventType: EventType;
  en: string;
  pt: string;
  es: string;
}
