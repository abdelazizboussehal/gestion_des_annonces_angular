import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';
import {SuccessAlertComponent} from './success-alert/success-alert.component';
import {AnnoncesComponent} from './annonces/annonces.component';
import {DetailsComponent} from './annonces/details/details.component';
import {WarningAlertComponent} from './warning-alert/warning-alert.component';
import {UserComponent} from './user/user.component';
import {PageNotFoundComponent} from './page-not-found/page-not-found.component';
import {RouteGuardService} from './services/route-guard.service';
import {CanDeactivateGuardSerice} from './services/can-deactivate-guard.serice';
import {AnnonceResorverService} from './services/annonceResorver.service';

const routes: Routes = [
  { path: '',
    // canDeactivate: [CanDeactivateGuardSerice],
    component: SuccessAlertComponent},
  { path: 'annonces',
    // canDeactivate: [CanDeactivateGuardSerice],
    // canActivate: [RouteGuardService],
    component: AnnoncesComponent,
    canActivateChild: [RouteGuardService],
    children: [
      {
        path: ':id/details',
        resolve: { ad: AnnonceResorverService},
        component: DetailsComponent
      }
    ]},
  { path: 'alert/:msg',
    component: WarningAlertComponent
  },
  { path: 'annonces/user/:id',
    component: UserComponent
  },
  { path: 'pagenotfound',
    component: PageNotFoundComponent
  },
  { path: '**',
    redirectTo: 'pagenotfound'
  }
];

@NgModule({
  imports: [FormsModule,
    RouterModule.forRoot(routes)],
  exports: [RouterModule] // what is accessible from outside
})
export class AppRoutingModule { }
