import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Params} from '@angular/router';

@Component({
  selector: 'app-warning-alert',
  templateUrl: './warning-alert.component.html',
  styles: [
    `
      h4{
        padding: 20px;
        background-color: brown;
        border: 1px solid darkred;
      }
    `
  ]
})
export class WarningAlertComponent implements OnInit {
  alaertMessage: any;
  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.alaertMessage = this.route.snapshot.params.msg;
    this.route.params.subscribe((data: Params) => {
      this.alaertMessage = data.msg;
    });
  }

}
