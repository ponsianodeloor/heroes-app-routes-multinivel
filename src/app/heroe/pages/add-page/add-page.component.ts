import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup} from "@angular/forms";
import {MatSnackBar} from "@angular/material/snack-bar";
import {HeroInterface, Publisher} from "../../interfaces/hero.interface.";
import {HeroService} from "../../services/hero.service";
import {ActivatedRoute, Router} from "@angular/router";
import {switchMap} from "rxjs";

@Component({
  selector: 'app-add-page',
  templateUrl: './add-page.component.html',
  styleUrl: './add-page.component.css'
})
export class AddPageComponent implements OnInit {

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
    private heroesService: HeroService,
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private snackBar: MatSnackBar
  ) {}

  ngOnInit(): void {
    if(!this.router.url.includes('edit-hero')) return;

    this.activatedRoute.params.pipe(
      switchMap(({id}) => this.heroesService.getHeroById(id))
    ).subscribe(hero => {
      if (!hero) {
        this.router.navigateByUrl('/list-hero');
        return;
      }
      this.heroForm.reset(hero);
    });
  }

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
        .subscribe(
          hero => {
            console.log('Updated', hero);
            this.showSnackBar(`${this.currentHero.superhero} was updated`);
          }
        );
    }else {
      //create
      this.currentHero.id = new Date().getTime().toString();
      this.heroesService.addHero(this.currentHero)
        .subscribe(
          hero => {
            console.log('Created', hero);
            this.router.navigateByUrl('heroe/edit-hero/' + hero.id);
            this.showSnackBar(`${this.currentHero.superhero} was created`);
          }
        );
    }
  }

  showSnackBar(message: string) {
    this.snackBar.open(message, 'Ok!', {
      duration: 2500
    });
  }

}
