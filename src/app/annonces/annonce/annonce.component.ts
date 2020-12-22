import {Component, Input, OnInit} from '@angular/core';
import {Annonce} from '../annonce.model';

@Component({
  selector: 'app-annonce',
  templateUrl: './annonce.component.html',
  styleUrls: ['./annonce.component.css'],
  providers : []
})
export class AnnonceComponent implements OnInit {
  @Input()
  element!: Annonce;
  constructor() { }

  ngOnInit(): void {
  }

}
