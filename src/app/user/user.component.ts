import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Params} from '@angular/router';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  adId: any;
  typeOfFragment: any;
  constructor(private router: ActivatedRoute) { }

  ngOnInit(): void {
    this.adId = this.router.snapshot.queryParamMap.get('ad_id');
    this.typeOfFragment = this.router.snapshot.fragment ;
    this.router.fragment.subscribe((fragment: string) => {
      this.typeOfFragment = fragment;
    });
    this.router.queryParams.subscribe( (data: Params) => {
      this.adId = data.ad_id;
    });
  }

}
