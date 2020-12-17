import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {AuthService} from '../services/auth.service';
import {Observable} from 'rxjs';

@Component({
  selector: 'app-success-alert',
  templateUrl: './success-alert.component.html',
  styles: [
    `
    h4{
    padding: 20px;
      background-color: aquamarine;
      border: 1px solid aqua;
    }
    `
  ]
})
export class SuccessAlertComponent implements OnInit {

  constructor(private router: Router, private auth: AuthService) {
    setTimeout(() => {
      this.router.navigate(['/annonces']);
    }, 20000 );
  }

  ngOnInit(): void {
  }

  login(): void {
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
}
