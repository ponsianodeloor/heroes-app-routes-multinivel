import {Component, OnInit} from '@angular/core';
import {HeroService} from "../../services/hero.service";
import {ActivatedRoute, Router} from "@angular/router";
import {HeroInterface} from "../../interfaces/hero.interface.";
import {delay, switchMap} from "rxjs";

@Component({
  selector: 'app-hero-page',
  templateUrl: './hero-page.component.html',
  styleUrl: './hero-page.component.css'
})
export class HeroPageComponent implements OnInit{

  public hero?: HeroInterface;

  constructor(
    private heroService: HeroService,
    private activatedRoute: ActivatedRoute,
    private router: Router
  ) {
  }

  ngOnInit(): void {
    /*this.activatedRoute.params.subscribe( ({id}) => {
      console.log(id);
      this.heroService.getHeroById(id)
        .subscribe(
          hero => {
            delay(3000);
            if( !hero ) { this.router.navigate(['/heroe/list-hero']); return; }
            this.hero = hero;
          }
        );
    });*/

    this.activatedRoute.params
      .pipe(
        delay(1000),
        switchMap( ({id}) => this.heroService.getHeroById(id)),
      )
      .subscribe(
        hero => {
          if (!hero) { this.router.navigate(['/heroe/list-hero']); return; }
          this.hero = hero
        }
      );

  }

  goBack() {
    this.router.navigate(['/heroe/list-hero']);
  }

}
