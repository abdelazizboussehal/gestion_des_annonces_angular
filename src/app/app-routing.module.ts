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
import {CreateUserComponent} from './user/create-user/create-user.component';

const routes: Routes = [
  { path: '',
    redirectTo: 'home',
    pathMatch: 'full'},
  { path: 'home',
    // canDeactivate: [CanDeactivateGuardSerice],
    component: SuccessAlertComponent},
  { path: 'annonces',
    // canDeactivate: [CanDeactivateGuardSerice],
    // canActivate: [RouteGuardService],
    component: AnnoncesComponent,
    // canActivateChild: [RouteGuardService],
    children: [
      {
        path: ':id/details',
        component: DetailsComponent,
        resolve: { annonceDetails: AnnonceResorverService}
      }
    ]},
  { path: 'alert/:msg',
    component: WarningAlertComponent
  },
  { path: 'annonces/user/:id',
    component: UserComponent
  },
  { path: 'user',
    component: CreateUserComponent
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
    RouterModule.forRoot(routes, {useHash: true})],
  exports: [RouterModule] // what is accessible from outside
})
export class AppRoutingModule { }
