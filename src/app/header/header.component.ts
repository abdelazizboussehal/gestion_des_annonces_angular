import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  isactivate = false;
  constructor() { }

  ngOnInit(): void {
  }

  onlist(list: any): void {
    this.isactivate = ! this.isactivate;
    if (this.isactivate){
      list.classList.add('show');
    }
    else{
      list.classList.remove('show');
    }
  }
}
