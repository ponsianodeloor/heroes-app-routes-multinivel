export interface HeroInterface{
  "id": string,
  "superhero": string,
  "publisher": Publisher,
  "alter_ego": string,
  "first_appearance": string,
  "characters": string,
  "alt_img"?: string,
  "img"?: string
}

export enum Publisher{
  DCComics = 'DC Comics',
  MARVELComics = 'Marvel Comics'
}


