import {Member} from './member';

export class Entry {
  constructor(
    public id: number,
    public member: Member,
    public time: string,
  ) {};

}
