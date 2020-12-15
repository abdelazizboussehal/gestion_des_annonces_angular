import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {Annonce} from './annonce.model';
import {AnnonceDataSevice} from '../services/annonceData.sevice';

@Component({
  selector: 'app-annonces',
  templateUrl: './annonces.component.html',
  styleUrls: ['./annonces.component.css']
})
export class AnnoncesComponent implements OnInit {
  annonces: Annonce[] = this.annonceDataService.annonces;
  annonceDtails: Annonce | undefined;
  @ViewChild('nameInput')
  nameInput!: ElementRef;
  constructor( private annonceDataService: AnnonceDataSevice) {
  }
  onChildEvent(annonce: Annonce): void {
    this.annonces[0] = annonce;
  }
  ngOnInit(): void {
  }
  onItemtChange(annonce: Annonce): void {
    this.annonceDtails = annonce;
  }

  addAnnonce(nameInput: HTMLInputElement, typeInput: HTMLInputElement): void {
    this.annonceDataService.annonces.push(
      new Annonce(1, 1, typeInput.value,
        this.nameInput.nativeElement.value, 'jdod gasba', '***', 1, 1, '2020-12-1')
    );
  }
}
