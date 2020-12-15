import {Directive, ElementRef, HostBinding, HostListener, Input, OnInit} from '@angular/core';

@Directive({
  selector: '[appBackGroundColor]'
})
export class BackgroundcolorDirective implements OnInit{
  @Input()
  colorInput!: string;
  @HostBinding('style.backgroundColor')  color = 'transparent';
  constructor(private elemnt: ElementRef) {
  }
  ngOnInit(): void {
    this.elemnt.nativeElement.style.color = 'white';
  }
  @HostListener('mouseenter') aziz(event: Event): void{
    this.elemnt.nativeElement.style.backgroundColor = 'green';
  }

  @HostListener('mouseleave') aziz2(event: Event): void{
    this.elemnt.nativeElement.style.backgroundColor = 'transparent';
  }
  @HostListener('click') aziz3(event: Event): void{
    /*this.elemnt.nativeElement.style.backgroundColor = 'red ';*/
    this.color = this.colorInput;
  }

}
