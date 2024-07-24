import { Component } from '@angular/core';
import {AuthService} from "../../services/auth.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrl: './login-page.component.css'
})
export class LoginPageComponent {

  constructor(
    private authService: AuthService,
    private Router: Router
  ) { }

  login() {
    this.authService.login('ponsianodeloor@gmail.com', '123456')
      .subscribe(user => {
        console.log(user);
        this.Router.navigate(['/heroe/list']);
      });
  }

}
