export class CreateJSON{
  creator: Membership;
  event: EventID;
  time: string;
  light: number;
  status: number;
  comment: string;
  reserved: number;
  entries: Membership[];
}

export class Membership{
  membership: string;
}

export class EventID{
  id: number;
}
