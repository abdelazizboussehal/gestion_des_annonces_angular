import {Directive, ElementRef, HostBinding, HostListener, Input, ViewChild} from '@angular/core';

@Directive({
  selector: '[appNavBarButtonStatus]'
})
export class NavBarButtonStatusDirective {
isEnabled = false;
  @Input()
  list!: any;

@HostListener('click') onClick(): void {
  console.log( this.list.classList);
  if (!this.isEnabled){
    this.list.classList.add('show');
  }
  else {
    this.list.classList.remove('show');
  }
  this.isEnabled = !this.isEnabled;
}
  constructor() { }

}
