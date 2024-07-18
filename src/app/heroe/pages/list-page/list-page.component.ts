import {Component, OnInit} from '@angular/core';
import {HeroInterface} from "../../interfaces/hero.interface.";
import {HeroService} from "../../services/hero.service";

@Component({
  selector: 'app-list-page',
  templateUrl: './list-page.component.html',
  styleUrl: './list-page.component.css'
})
export class ListPageComponent implements OnInit{

  public heroes: HeroInterface[] = [];

  constructor(
    private heroService: HeroService
  ) {
  }

  ngOnInit(): void {
    this.heroService.getHeroes()
      .subscribe(
        heroes => this.heroes = heroes
      );
  }

}
