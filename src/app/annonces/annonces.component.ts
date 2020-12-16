import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {Annonce} from './annonce.model';
import {AnnonceDataSevice} from '../services/annonceData.sevice';

@Component({
  selector: 'app-annonces',
  templateUrl: './annonces.component.html',
  styleUrls: ['./annonces.component.css']
})
export class AnnoncesComponent implements OnInit {
  annonces;
  annonceDtails;
  @ViewChild('nameInput')
  nameInput!: ElementRef;
  constructor( private annonceDataService: AnnonceDataSevice) {
    this.annonces = this.annonceDataService.getAnnonces();
    this.annonceDtails = this.annonceDataService.getAnnonceDetails();
  }
  ngOnInit(): void {
    this.annonceDataService.annoncesEmitter.subscribe((data: Annonce[]) => {this.annonces = data; });
    this.annonceDataService.annonceDetailsEmitter.subscribe((data: Annonce) => {this.annonceDtails = data; });
  }
  onItemtChange(annonce: Annonce): void {
    this.annonceDataService.annonceDetailsEmitter.emit(annonce);
  }

  addAnnonce(nameInput: HTMLInputElement, typeInput: HTMLInputElement): void {
    this.annonceDataService.addAnnonce(
      new Annonce(1, 1, typeInput.value,
        this.nameInput.nativeElement.value, 'jdod gasba', '***', 1, 1, '2020-12-1')
    );
  }
}
