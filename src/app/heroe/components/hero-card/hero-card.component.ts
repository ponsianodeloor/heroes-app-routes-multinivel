import {Component, Input} from '@angular/core';
import {HeroInterface} from "../../interfaces/hero.interface.";

@Component({
  selector: 'heroe-hero-card',
  templateUrl: './hero-card.component.html',
  styleUrl: './hero-card.component.css'
})
export class HeroCardComponent {

  @Input() hero!: HeroInterface;

}
