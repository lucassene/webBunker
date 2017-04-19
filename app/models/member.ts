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

export class Creator {
  membership: string;
  name: string;
  constructor(
    membership: string,
    name: string
  ) {
    this.membership = membership;
    this.name = name
    }
}

export class Title {
  pt: string;
  en: string;
  es: string;
}

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
