import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {FormsModule} from '@angular/forms';
import { AnnonceComponent } from './annonces/annonce/annonce.component';
import { AnnoncesComponent } from './annonces/annonces.component';
import { WarningAlertComponent } from './warning-alert/warning-alert.component';
import { SuccessAlertComponent } from './success-alert/success-alert.component';
import { DetailsComponent } from './annonces/details/details.component';
import {BackgroundcolorDirective} from './annonces/backgroundcolor.directive';
import { UnlessDirective } from './unless.directive';
import { NavBarButtonStatusDirective } from './nav-bar-button-status.directive';
import {AnnonceDataSevice} from './services/annonceData.service';
import { UserComponent } from './user/user.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import {AuthService} from './services/auth.service';
import {RouteGuardService} from './services/route-guard.service';
import {CanDeactivateGuardSerice} from './services/can-deactivate-guard.serice';
import {AnnonceResorverService} from './services/annonceResorver.service';
import { HeaderComponent } from './header/header.component';
import { CommentsComponent } from './comments/comments.component';
import { CommentItemComponent } from './comments/comment-item/comment-item.component';
import { CreateUserComponent } from './user/create-user/create-user.component';
import { FormAnnonceComponent } from './annonces/form-annonce/form-annonce.component';
import {ShortenPipe} from './custom-pipe/shorten.pipe';
import { FilterPipe } from './custom-pipe/filter.pipe';
import { AuthformComponent } from './Auth/authform/authform.component';
import {CookieService} from 'ngx-cookie-service';
import {MainInterceptorService} from './services/mainInterceptor.service';


@NgModule({
  declarations: [
    AppComponent,
    AnnonceComponent,
    AnnoncesComponent,
    WarningAlertComponent,
    SuccessAlertComponent,
    DetailsComponent,
    BackgroundcolorDirective,
    UnlessDirective,
    NavBarButtonStatusDirective,
    UserComponent,
    PageNotFoundComponent,
    HeaderComponent,
    CommentsComponent,
    CommentItemComponent,
    CreateUserComponent,
    FormAnnonceComponent,
    ShortenPipe,
    FilterPipe,
    AuthformComponent
  ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        FormsModule,
        HttpClientModule,
        AppRoutingModule
    ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: MainInterceptorService, multi: true},
    AnnonceDataSevice,
    AuthService,
    RouteGuardService,
    CanDeactivateGuardSerice,
    AnnonceResorverService,
  CookieService],
  bootstrap: [AppComponent]
})
export class AppModule { }
