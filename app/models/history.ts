import { Title } from '../models/member';

export class History{
  constructor(
    public membership: string,
    public name: string,
    public icon: string,
    public totalLikes: number,
    public totalDislikes: number,
    public memberTitle: Title
  ){}
}
