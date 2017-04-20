import {Event} from './event';

export class Game{
  constructor(
    public id: number,
    public creator: Creator,
    public event: Event,
    public time: string,
    public light: number,
    public status: number,
    public comment: string,
    public inscriptions: number,
    public joined: boolean,
    public evaluated: boolean,
) {}
}

export class Creator {
  constructor(
    public membership: string,
    public name: string
  ) {}
}
