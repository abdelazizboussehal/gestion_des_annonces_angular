import {ActivatedRouteSnapshot, CanActivate, CanActivateChild, Router, RouterStateSnapshot, UrlTree} from '@angular/router';
import {Observable} from 'rxjs';
import {Injectable} from '@angular/core';
import {AuthService} from './auth.service';
@Injectable()
export class RouteGuardService implements CanActivate, CanActivateChild{
  constructor(private auth: AuthService, private route: Router) {
  }
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot)
    : Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    return this.auth.isAccessible().then(
      (authenticate: boolean) => {
        if (authenticate){
          return true;
        }
        else {
          this.route.navigate(['/']);
          return false;
        }
      }
    );
  }
  canActivateChild(childRoute: ActivatedRouteSnapshot,
                   state: RouterStateSnapshot):
    Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    return this.canActivate(childRoute, state);
  }



}
