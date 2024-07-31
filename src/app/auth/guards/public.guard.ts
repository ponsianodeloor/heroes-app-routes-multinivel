import {Injectable} from '@angular/core';
import {
  CanActivate,
  Router,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
  UrlTree,
  MaybeAsync,
  GuardResult
} from '@angular/router';
import {Observable} from 'rxjs';
import {map} from 'rxjs/operators';
import {AuthService} from '../services/auth.service';

@Injectable({
  providedIn: 'root'
})
export class PublicGuard implements CanActivate {
  constructor(private authService: AuthService, private router: Router) {
  }

  /*canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    return this.authService.checkToken()
      .pipe(
        map(isAuthenticated => {
          if (isAuthenticated) {
            // If the user is authenticated, redirect to the home page or another appropriate route
            return this.router.createUrlTree(['/auth/login']);
          }
          // If not authenticated, allow access to the route
          return true;
        })
      );
  }*/

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): MaybeAsync<GuardResult> {
    return this.authService.checkToken().pipe(
      map(isAuthenticated => {
        if (isAuthenticated) {
          this.authService.login();
          return false;
        }
        return true;
      })
    );
  }
}
