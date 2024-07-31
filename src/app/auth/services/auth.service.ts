import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {environment} from "../../../environments/environment";
import {UserInterface} from "../interfaces/user.interface";
import {catchError, map, Observable, of, tap} from "rxjs";
import {OAuthService} from "angular-oauth2-oidc";
import {authConfig} from "../auth-config";
import {Router} from "@angular/router";

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private baseUrl = environment.baseUrl;
  private user?:UserInterface;

  constructor(
    private http: HttpClient,
    private oauthService: OAuthService,
    private router: Router
  ) {
    this.oauthService.configure(authConfig);
    this.oauthService.loadDiscoveryDocumentAndLogin().then(() => {
      this.handleLoginRedirect();
      this.checkSessionStatus();
    });
    this.checkSessionStatus();
  }

  get currentUser(): UserInterface | undefined {
    if (!this.user) { return undefined; }
    return structuredClone(this.user);
  }

  login(): void {
    //this.oauthService.initLoginFlow();
  }

  checkToken(): Observable<boolean> {
    if (this.oauthService.hasValidAccessToken()) {
      return of(true);
    }
    return of(false);
  }

  logout(): void {
    this.user = undefined;
    this.oauthService.logOut();
  }

  handleLoginRedirect(): void {
    if (this.oauthService.hasValidAccessToken()) {
      //localStorage.setItem('token', 'aaaa.bbb.ccc' );
      this.router.navigate(['/heroe']);
    }
  }

  checkSessionStatus(): void {
    this.oauthService.events.subscribe(event => {
      if (event.type === 'session_terminated' || event.type === 'token_expires') {
        this.logout();
      }
    });
  }



  /*login(email: string, password: string):Observable<UserInterface> {
    //return this.http.post(`${this.baseUrl}/auth/login`, { email, password });
    //return this.http.get<UserInterface>(`${this.baseUrl}/auth/login`, {params: {email, password}});
    return this.http.get<UserInterface>(`${this.baseUrl}/users/1`)
      .pipe(
        tap(user => this.user = user),
        tap( user => localStorage.setItem('token', 'aaaa.bbb.ccc' ))
      );
  }*/

  /*checkToken():Observable<boolean> {
    if (!localStorage.getItem('token')) return of(false);

    return new Observable<boolean>(subscriber => {
      this.http.get<UserInterface>(`${this.baseUrl}/users/1`)
        .subscribe(user => {
          this.user = user;
          subscriber.next(true);
          subscriber.complete();
        }, error => {
          this.user = undefined;
          localStorage.removeItem('token');
          localStorage.clear();
          subscriber.next(false);
          subscriber.complete();
        });
    })
  }*/

  /*logout() {
    this.user = undefined;
    localStorage.removeItem('token');
    localStorage.clear();
  }*/

}
