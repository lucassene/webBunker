export class Clan {
  constructor(
    public groupId: number,
    public name: string,
    public icon: string,
    public background: string,
    public description: string,
  ){};
};

export const clan: Clan = {
  groupId: 548691,
  name: 'Cruz de Ferro',
  icon: '/img/profile/avatars/group/026.png',
  background: '/img/Themes/Group_Crucible/struct_images/group_top_banner.jpg',
  description: 'Apenas os dignos recebem a Cruz de Ferro'
};
