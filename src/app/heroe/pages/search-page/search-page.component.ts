import { Component } from '@angular/core';
import {FormControl} from "@angular/forms";
import {HeroInterface} from "../../interfaces/hero.interface.";
import {HeroService} from "../../services/hero.service";
import {MatAutocompleteSelectedEvent} from "@angular/material/autocomplete";
import {Router} from "@angular/router";

@Component({
  selector: 'app-search-page',
  templateUrl: './search-page.component.html',
  styleUrl: './search-page.component.css'
})
export class SearchPageComponent {

  public searchInput = new FormControl('');
  public heroes: HeroInterface[] = [];
  public selectedHero?: HeroInterface;

  constructor(
    private heroService: HeroService,
    private router: Router
  ) { }

  searchHero(query:string = ''){
    this.heroService.getSuggestions(query)
      .subscribe(heroes => this.heroes = heroes);
  }

  onOptionSelected(event:MatAutocompleteSelectedEvent){
    console.log(event);
    if(!event.option.value){
      this.heroes = [];
       return;
    }
    const hero:HeroInterface = event.option.value;
    this.searchInput.setValue(hero.superhero);
    this.selectedHero = hero;
    console.log(this.selectedHero);

    //redirect to hero page by id
    //this.router.navigate(['/heroe', hero.id]).then(r => r);

  }

}
