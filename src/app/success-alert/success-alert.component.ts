import { Component, OnInit } from '@angular/core';

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

  constructor() { }

  ngOnInit(): void {
  }

}
