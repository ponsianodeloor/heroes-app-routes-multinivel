import {Component} from '@angular/core';
import {FormControl, FormGroup} from "@angular/forms";
import {HeroInterface, Publisher} from "../../interfaces/hero.interface.";
import {HeroService} from "../../services/hero.service";

@Component({
  selector: 'app-add-page',
  templateUrl: './add-page.component.html',
  styleUrl: './add-page.component.css'
})
export class AddPageComponent {

  public heroForm = new FormGroup(
    {
      id: new FormControl<string>(''),
      superhero: new FormControl<string>('', {nonNullable: true}),
      publisher: new FormControl<Publisher>(Publisher.DCComics),
      alter_ego: new FormControl(''),
      first_appearance: new FormControl(''),
      characters: new FormControl(''),
      alt_img: new FormControl(''),
    }
  );

  public publishers = [
    { id: 'DC Comics', desc: 'DC - Comics' },
    { id: 'Marvel Comics', desc: 'Marvel - Comics' },
  ];

  constructor(
    private heroesService: HeroService
  ) {}

  get currentHero(): HeroInterface {
    return this.heroForm.value as HeroInterface;
  }

  save() {
    //validate if the form is valid
    if (this.heroForm.invalid) {
      console.log('The form is invalid');
      this.heroForm.markAllAsTouched();
      return;
    }

    if (this.currentHero.id) {
      //update
      this.heroesService.updateHero(this.currentHero)
        .subscribe( hero => console.log('Updated', hero));
    }else {
      //create
      this.currentHero.id = new Date().getTime().toString();
      this.heroesService.addHero(this.currentHero)
        .subscribe( hero => console.log('Created', hero));
    }

  }

}
