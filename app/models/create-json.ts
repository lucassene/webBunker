export class CreateJSON{
  constructor(
    public creator: Membership,
    public event: EventID,
    public time: string,
    public light: number,
    public status: number,
    public comment: string,
    public reserved: number,
    public entries: Entry[]
  ){}
}

export class Entry{
  constructor(
    public member: Membership
  ) {}
}

export class Membership{
  constructor(
    public membership: string
  ){}
}

export class EventID{
  constructor(
    public id: number
  ){}
}
