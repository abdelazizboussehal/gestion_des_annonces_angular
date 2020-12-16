import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {FormsModule} from '@angular/forms';
import { AnnonceComponent } from './annonces/annonce/annonce.component';
import { AnnoncesComponent } from './annonces/annonces.component';
import { WarningAlertComponent } from './warning-alert/warning-alert.component';
import { SuccessAlertComponent } from './success-alert/success-alert.component';
import { Tp1Component } from './tp1/tp1.component';
import { DetailsComponent } from './annonces/details/details.component';
import { GameControllerComponent } from './tp2/game-controller/game-controller.component';
import { GameEvenComponent } from './tp2/game-even/game-even.component';
import { GameOddComponent } from './tp2/game-odd/game-odd.component';
import {BackgroundcolorDirective} from './annonces/backgroundcolor.directive';
import { UnlessDirective } from './unless.directive';
import { NavBarButtonStatusDirective } from './nav-bar-button-status.directive';
import {AnnonceDataSevice} from './services/annonceData.sevice';
import {RouterModule, Routes} from '@angular/router';
import { UserComponent } from './user/user.component';

const myrouter: Routes = [
  { path: '',
    component: SuccessAlertComponent},
  { path: 'annonces',
    component: AnnoncesComponent, children: [
      {
        path: ':id/details',
        component: DetailsComponent
      }
    ]},
  { path: 'alert/:msg',
    component: WarningAlertComponent
  },
  { path: 'annonces/user/:id',
    component: UserComponent
  }
];
@NgModule({
  declarations: [
    AppComponent,
    AnnonceComponent,
    AnnoncesComponent,
    WarningAlertComponent,
    SuccessAlertComponent,
    Tp1Component,
    DetailsComponent,
    GameControllerComponent,
    GameEvenComponent,
    GameOddComponent,
    BackgroundcolorDirective,
    UnlessDirective,
    NavBarButtonStatusDirective,
    UserComponent
  ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        FormsModule,
      RouterModule.forRoot(myrouter)
    ],
  providers: [AnnonceDataSevice],
  bootstrap: [AppComponent]
})
export class AppModule { }
