import {Component, Input, OnInit} from '@angular/core';
import {Annonce} from '../annonce.model';
import {TestService} from '../../test.service';

@Component({
  selector: 'app-annonce',
  templateUrl: './annonce.component.html',
  styleUrls: ['./annonce.component.css'],
  providers : [TestService]
})
export class AnnonceComponent implements OnInit {
  @Input()
  element!: Annonce;
  constructor(private serice: TestService) { }

  ngOnInit(): void {
    console.log('annonce');
    this.serice.onCreate();
  }

}
