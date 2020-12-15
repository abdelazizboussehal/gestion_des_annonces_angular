import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-game-even',
  templateUrl: './game-even.component.html',
  styleUrls: ['./game-even.component.css']
})
export class GameEvenComponent implements OnInit {
  @Input()
  evenNumber!: number;

  constructor() { }

  ngOnInit(): void {
  }

}
