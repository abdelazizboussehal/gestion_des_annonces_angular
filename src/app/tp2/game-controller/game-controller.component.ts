import {Component, EventEmitter, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-game-controller',
  templateUrl: './game-controller.component.html',
  styleUrls: ['./game-controller.component.css']
})
export class GameControllerComponent implements OnInit {
  interval: any;
  number = 0;
  @Output() lastNumber = new EventEmitter <number> ();
  constructor() { }

  ngOnInit(): void {
  }
  Onstart(): void {
    this.interval = setInterval(() => {
      this.lastNumber.emit(this.number);
      this.number = this.number + 1; }, 1000);
  }

  Onstop(): void {
    clearInterval(this.interval);
  }
}
