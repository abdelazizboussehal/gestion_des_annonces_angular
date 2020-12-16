import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

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

  constructor(private router: Router) {setTimeout(() => {
      this.router.navigate(['/annonces']);
    }, 2000 );
  }

  ngOnInit(): void {
  }

}
