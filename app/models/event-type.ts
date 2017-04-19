export class EventType {
  id: number;
  icon: string;
  en: string;
  pt: string;
  es: string;

  constructor(
    id: number,
    icon: string,
    en: string,
    pt: string,
    es: string
  ) {
    this.id = id;
    this.icon = icon;
    this.en = en;
    this.pt = pt;
    this.es = es;
  }

}

export const types: EventType[] = [
  {
    id: 1,
    icon: 'ic_court',
    en: 'Court of Oryx',
    pt: '',
    es: ''
  },
  {
    id: 2,
    icon: 'ic_crucible',
    en: 'Crucible',
    pt: '',
    es: ''
  },
  {
    id: 3,
    icon: 'ic_patrol',
    en: 'Patrol',
    pt: '',
    es: ''
  },
  {
    id: 4,
    icon: 'ic_elders',
    en: 'Prison of Elders',
    pt: '',
    es: ''
  },
  {
    id: 5,
    icon: 'ic_raid',
    en: 'Raid',
    pt: '',
    es: ''
  },
  {
    id: 6,
    icon: 'ic_story',
    en: 'Story',
    pt: '',
    es: ''
  },
  {
    id: 7,
    icon: 'ic_strike',
    en: 'Strike',
    pt: '',
    es: ''
  },
  {
    id: 8,
    icon: 'ic_strike_list',
    en: 'Strike List',
    pt: '',
    es: ''
  },
  {
    id: 9,
    icon: 'ic_srl',
    en: 'SRL',
    pt: '',
    es: ''
  },
    {
    id: 10,
    icon: 'ic_archons',
    en: 'Archon`s Forge',
    pt: '',
    es: ''
  },
];
