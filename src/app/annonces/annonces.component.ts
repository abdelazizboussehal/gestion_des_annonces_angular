import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {Annonce} from './annonce.model';
import {AnnonceDataSevice} from '../services/annonceData.sevice';
import {ActivatedRoute, Router} from '@angular/router';

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
  constructor( private annonceDataService: AnnonceDataSevice,
               private router: Router,
               private route: ActivatedRoute) {
    this.annonces = this.annonceDataService.getAnnonces();
    this.annonceDtails = this.annonceDataService.getAnnonceDetails();
  }
  ngOnInit(): void {
    this.annonceDataService.annoncesEmitter.subscribe((data: Annonce[]) => {this.annonces = data; });
    this.annonceDataService.annonceDetailsEmitter.subscribe((data: Annonce) => {this.annonceDtails = data; });
  }
  onItemtChange(annonce: Annonce): void {
    this.annonceDataService.annonceDetailsEmitter.emit(annonce);
    this.router.navigate([ annonce.id, 'details'],
      {
        queryParams: {productName : annonce.productName},
        fragment: 'loading',
        relativeTo : this.route});
  }

  addAnnonce(nameInput: HTMLInputElement, typeInput: HTMLInputElement): void {
    this.annonceDataService.addAnnonce(
      new Annonce(1, 1, typeInput.value,
        this.nameInput.nativeElement.value, 'jdod gasba', '***', 1, 1, '2020-12-1')
    );
  }
}
