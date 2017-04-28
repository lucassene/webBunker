import {Member} from './member';

export class Entry {
  constructor(
    public id: number,
    public member: Member,
    public time: string,
  ) {};
}

export class ValidationEntry{
  constructor(
    public entry: Entry,
    public icon: string,
    public opacity: string,
    public rate: number
  ){}

}
