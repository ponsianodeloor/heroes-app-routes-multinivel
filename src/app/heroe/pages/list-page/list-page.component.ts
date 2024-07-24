import {Component, OnInit} from '@angular/core';
import {HeroInterface} from "../../interfaces/hero.interface.";
import {HeroService} from "../../services/hero.service";
import {AuthService} from "../../../auth/services/auth.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-list-page',
  templateUrl: './list-page.component.html',
  styleUrl: './list-page.component.css'
})
export class ListPageComponent implements OnInit{

  public heroes: HeroInterface[] = [];

  constructor(
    private authService: AuthService,
    private router: Router,
    private heroService: HeroService
  ) {
  }

  ngOnInit(): void {
    this.authService.checkToken().subscribe(isLogged => {
      if (!isLogged) {
        this.authService.logout();
        this.router.navigate(['/auth/login']);
      }
    });

    this.loadHeroes();
  }

  loadHeroes() {
    this.heroService.getHeroes()
      .subscribe(
        heroes => this.heroes = heroes
      );
  }

}
