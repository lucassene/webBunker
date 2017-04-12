export class Status {
  status: number;
  en: string;
}

export const statuses: Status[] = [
  {
    status: 0,
    en: 'Scheduled'
  },
  {
    status: 1,
    en: 'Waiting for validation'
  },
  {
    status: 2,
    en: 'For evaluation'
  }
];
