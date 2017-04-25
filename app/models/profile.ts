import { Member } from './member';
import { Event } from './event';

export class Profile {
  constructor (
    public member: Member,
    public evaluationsMade: number,
    public playedTypes: PlayedType[],
    public favoriteEvent: FavoriteEvent,
  ) {}
}

export class PlayedType {
  constructor(
    public eventTypeId: number,
    public eventTypeName: string,
    public typesPlayed: number,
    public en: string,
    public pt: string,
    public es: string
  ){}
}

export const types: PlayedType[] = [
  {
    eventTypeId: 2,
    eventTypeName: '',
    typesPlayed: 2,
    en: 'Crucible',
    pt: '',
    es: ''
  },
  {
    eventTypeId: 5,
    eventTypeName: '',
    typesPlayed: 4,
    en: 'Raid',
    pt: '',
    es: ''
  },
  {
    eventTypeId: 7,
    eventTypeName: '',
    typesPlayed: 1,
    en: 'Strike',
    pt: '',
    es: ''
  },
  {
    eventTypeId: 4,
    eventTypeName: '',
    typesPlayed: 4,
    en: 'Prison of Elders',
    pt: '',
    es: ''
  },
]

export class FavoriteEvent {
  constructor(
    public timesPlayed: number,
    public event: Event
  ) {}
}
