import {Injectable} from '@angular/core';
import { CanActivate, Router, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, CanMatch,
  Route, UrlSegment, MaybeAsync, GuardResult
} from '@angular/router';
import {map, Observable} from 'rxjs';
import {AuthService} from '../services/auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate, CanMatch {
  constructor(private authService: AuthService, private router: Router) {
  }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean | UrlTree> {
    return this.authService.checkToken().pipe(
      map(isAuthenticated => {
        if (!isAuthenticated) {
          this.authService.login();
          return false;
        }
        return true;
      })
    );
  }

  canMatch(route: Route, segments: UrlSegment[]): Observable<boolean | UrlTree> {
    return this.authService.checkToken().pipe(
      map(isAuthenticated => {
        if (!isAuthenticated) {
          this.authService.login();
          return false;
        }
        return true;
      })
    );
  }

  /*canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    return this.authService.checkToken()
      .pipe(
        map(isAuthenticated => {
          if (!isAuthenticated) {
            // Redirect to login page or another appropriate route
            return this.router.createUrlTree(['/auth/login']);
          }
          return true;
        })
      );
  }

  canMatch(route: Route, segments: UrlSegment[]): MaybeAsync<GuardResult> {
    return this.authService.checkToken()
      .pipe(
        map(isAuthenticated => {
          if (!isAuthenticated) {
            // Redirect to login page or another appropriate route
            return this.router.createUrlTree(['/auth/login']);
          }
          return true;
        })
      );
  }*/

}
