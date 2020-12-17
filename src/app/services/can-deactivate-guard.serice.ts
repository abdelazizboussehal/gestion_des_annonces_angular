import { Injectable } from '@angular/core';
import {ActivatedRouteSnapshot, CanDeactivate, RouterStateSnapshot, UrlTree} from '@angular/router';
import {Observable} from 'rxjs';


export interface CanComponentDeactivate { // connect component to canDeactivateguard
  canDeactivate: () => Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree;
}
@Injectable()
export class CanDeactivateGuardSerice implements CanDeactivate<CanComponentDeactivate>{// connect component to canDeactivateguard
  // this execute when user want leave route
  canDeactivate(component: CanComponentDeactivate,
                route: ActivatedRouteSnapshot,
                state: RouterStateSnapshot):
    Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    return component.canDeactivate ? component.canDeactivate() : true;
  }
}
