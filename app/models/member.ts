export class Member {
  membership: string;
  name: string;
  icon: string;
  platform: number;
  likes: number;
  dislikes: number;
  gamesCreated: number;
  gamesPlayed: number;
  memberTitle: Title;
}

export class Title {
  pt: string;
  en: string;
  es: string;
}

export const titles: Title[] = [
  {
    pt: 'Novo no pedaço',
    en: 'New on the block',
    es: 'Nuevo no pedaço'
  },
  {
    pt: 'Novato de Ferro',
    en: 'Iron Beginner',
    es: 'Principiante de Hierro'
  }
];

export const defaultTitle: Title = {
    pt: 'Novo no pedaço',
    en: 'New on the block',
    es: 'Nuevo no pedaço'
};

export const availableMember: Member = {
  membership: '',
  name: 'Available slot',
  icon: '/img/profile/avatars/Destiny04.jpg',
  platform: 2,
  likes: 0,
  dislikes: 0,
  gamesCreated: 0,
  gamesPlayed: -1,
  memberTitle: {
    en: 'Choose a member',
    pt: 'Escolha um membro',
    es: 'Selecciona un miembro'
  }
}

export const blockedMember: Member = {
  membership: '0.25',
  name: '',
  icon: '',
  platform: 2,
  likes: 0,
  dislikes: 0,
  gamesCreated: 0,
  gamesPlayed: -2,
  memberTitle: {
    en: '',
    pt: 'Vaga indisponível',
    es: 'Slot unavailable'
  }
}

export const members: Member[] = [
  {
    membership: '4611686018449763730',
    name: 'FernandoFontoura',
    icon: '/img/profile/avatars/Destiny26.jpg',
    platform: 2,
    likes: 0,
    dislikes: 0,
    gamesCreated: 0,
    gamesPlayed: 0,
    memberTitle: null
  },
  {
    membership: '4611686018450253378',
    name: 'Zeri121',
    icon: '/img/profile/avatars/bungieday_03.jpg',
    platform: 2,
    likes: 0,
    dislikes: 0,
    gamesCreated: 0,
    gamesPlayed: 0,
    memberTitle: null
  },
  {
    membership: '4611686018439224227',
    name: 'tim3zero364',
    icon: '/img/profile/avatars/bungieday_19.jpg',
    platform: 2,
    likes: 0,
    dislikes: 0,
    gamesCreated: 0,
    gamesPlayed: 0,
    memberTitle: null
  },
  {
    membership: '4611686018442220415',
    name: 'vinyrob_br',
    icon: '/img/profile/avatars/bungiedayav3.jpg',
    platform: 2,
    likes: 0,
    dislikes: 0,
    gamesCreated: 0,
    gamesPlayed: 0,
    memberTitle: null
  },
  {
    membership: '4611686018457864895',
    name: 'Y4S4K4M4N-',
    icon: '/img/profile/avatars/bungie_day_15_44.jpg',
    platform: 2,
    likes: 0,
    dislikes: 0,
    gamesCreated: 0,
    gamesPlayed: 0,
    memberTitle: null
  },
  {
    membership: '4611686018456783207',
    name: 'rafanestle',
    icon: '/img/profile/avatars/th_Bn67.jpg',
    platform: 2,
    likes: 0,
    dislikes: 0,
    gamesCreated: 0,
    gamesPlayed: 0,
    memberTitle: null
  },
  {
    membership: '4611686018432713903',
    name: 'ronnymcp',
    icon: '/img/profile/avatars/Destiny26.jpg',
    platform: 2,
    likes: 0,
    dislikes: 0,
    gamesCreated: 0,
    gamesPlayed: 0,
    memberTitle: null
  },
  {
    membership: '4611686018433014309',
    name: 'Eniad11',
    icon: '/common/destiny_content/icons/f1e01ad736a961e22ee1b0c087294916.jpg',
    platform: 2,
    likes: 0,
    dislikes: 0,
    gamesCreated: 0,
    gamesPlayed: 0,
    memberTitle: null
  },
  {
    membership: '4611686018440585742',
    name: 'noslead',
    icon: '/img/profile/avatars/e2015_12.jpg',
    platform: 2,
    likes: 0,
    dislikes: 0,
    gamesCreated: 0,
    gamesPlayed: 0,
    memberTitle: null
  },
  {
    membership: '4611686018461680311',
    name: 'FabriPFL',
    icon: '/common/destiny_content/icons/87781086cca964cceaa7bc4b5f65d87d.jpg',
    platform: 2,
    likes: 0,
    dislikes: 0,
    gamesCreated: 0,
    gamesPlayed: 0,
    memberTitle: null
  },
  {
    membership: '4611686018428867206',
    name: 'F-L-A-M-Es',
    icon: '/img/profile/avatars/default_avatar.gif',
    platform: 2,
    likes: 3,
    dislikes: 0,
    gamesCreated: 2,
    gamesPlayed: 0,
    memberTitle: titles[1]
  },
  {
    membership: '4611686018444413912',
    name: 'mtx013',
    icon: '/img/profile/avatars/bungieday_01.jpg',
    platform: 2,
    likes: 4,
    dislikes: 0,
    gamesCreated: 0,
    gamesPlayed: 2,
    memberTitle: titles[1]
  },
  {
    membership: '4611686018434509539',
    name: 'eshibuya',
    icon: '/img/profile/avatars/cc25.jpg',
    platform: 2,
    likes: 0,
    dislikes: 0,
    gamesCreated: 0,
    gamesPlayed: 0,
    memberTitle: null
  }
];
