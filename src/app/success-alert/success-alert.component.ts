import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {AuthService} from '../services/auth.service';
import {Observable} from 'rxjs';
import {AnnonceDataSevice} from '../services/annonceData.service';
import {HttpAnnonceService} from '../services/http-annonce.service';

@Component({
  selector: 'app-success-alert',
  templateUrl: './success-alert.component.html',
  styles: [
    `
    h4{
    padding: 20px;
      background-color: #7CB9E8;
      border: 3px solid #1C6EA4;
      border-radius: 10px;
      background: #1519CE;
      background: -moz-linear-gradient(left, #1519CE 0%, #0C7CC5 100%);
      background: -webkit-linear-gradient(left, #1519CE 0%, #0C7CC5 100%);
      background: linear-gradient(to right, #1519CE 0%, #0C7CC5 100%);
    }

    `
  ]
})
export class SuccessAlertComponent implements OnInit {

  constructor(private router: Router, private auth: AuthService,
              private dataAnnonce: AnnonceDataSevice, private http: HttpAnnonceService) {
    setTimeout(() => {
      this.router.navigate(['/annonces']);
    }, 20000 );
  }

  ngOnInit(): void {
  }

  login(): void {
    this.http.getAnnonceFromSpringBoot();
    this.auth.login();
  }
  logout(): void {
    this.auth.logout();
  }
  canDeactivate(): Observable<boolean> | boolean {
    if (true) {
      if (confirm('Are you sure you want to save this thing into the database?')) {
        return true;
      } else {
        return false;
      }
    }
  }

  store(): void {
    this.http.storeAnnonces(this.dataAnnonce.annoncesInit);

  }
}
