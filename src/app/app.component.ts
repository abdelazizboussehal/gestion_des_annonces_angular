import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'project';
  oddNumber: number[] = [];
  evenNumber: number[] = [];
  condition = false;

  testNumber(last: number): void {
    if (last % 2 === 0){
      this.evenNumber.push( last );
    }
    else {
      this.oddNumber.push( last );
    }
  }
}
