import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tp1',
  templateUrl: './tp1.component.html',
  styleUrls: ['./tp1.component.css']
})
export class Tp1Component implements OnInit {
  toggle = true;
  log = [];

  constructor() { }

  ngOnInit(): void {
  }
  addSecret(): void {
    this.toggle = !this.toggle;
    // @ts-ignore
    this.log.push(Date.now());
  }
  }
