export class Medal {
  constructor(
    public name: string,
    public desc: string,
    public icon: string,
    public value: number,
    public next: number,
    public stars: Star[]
  ){}
}

export class Star {
  constructor (
    public opacity: string
  ) {}
}
