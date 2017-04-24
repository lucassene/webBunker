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

export class FavoriteEvent {
  constructor(
    public timesPlayed: number,
    public event: Event
  ) {}
}
