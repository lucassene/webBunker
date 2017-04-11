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
