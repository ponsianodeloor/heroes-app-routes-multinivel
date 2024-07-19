import { Pipe, PipeTransform } from '@angular/core';
import {HeroInterface} from "../interfaces/hero.interface.";

@Pipe({
  name: 'heroImage'
})
export class HeroImagePipe implements PipeTransform {

  transform(hero:HeroInterface): string {
    if(!hero.id && !hero.alt_img){
      return `assets/no-image.png`;
    }else if(hero.alt_img){
      return hero.alt_img;
    }else{
      return `assets/heroe/${hero.id}.jpg`;
    }
  }

}

