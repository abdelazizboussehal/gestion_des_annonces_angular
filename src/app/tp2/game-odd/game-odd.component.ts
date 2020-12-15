import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-game-odd',
  templateUrl: './game-odd.component.html',
  styleUrls: ['./game-odd.component.css']
})
export class GameOddComponent implements OnInit {

  @Input()
  oddNumber!: number;
  constructor() { }

  ngOnInit(): void {
  }

}
