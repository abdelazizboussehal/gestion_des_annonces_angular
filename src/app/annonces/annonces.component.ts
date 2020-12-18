import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {Annonce} from './annonce.model';
import {AnnonceDataSevice} from '../services/annonceData.sevice';
import {ActivatedRoute, Router} from '@angular/router';
import {Observable} from 'rxjs';
import {CanComponentDeactivate} from '../services/can-deactivate-guard.serice';
import {NgForm} from '@angular/forms';

@Component({
  selector: 'app-annonces',
  templateUrl: './annonces.component.html',
  styleUrls: ['./annonces.component.css']
})
export class AnnoncesComponent implements OnInit, CanComponentDeactivate {
  annonces;
  annonceDtails;
  @ViewChild('nameInput')
  nameInput!: ElementRef;
  defaultType: any = 'of';
  constructor( private annonceDataService: AnnonceDataSevice,
               private router: Router,
               private route: ActivatedRoute) {
    this.annonces = this.annonceDataService.getAnnonces();
    this.annonceDtails = this.annonceDataService.getAnnonceDetails();
  }
  ngOnInit(): void {
    this.annonceDataService.annoncesSubject.subscribe((data: Annonce[]) => {this.annonces = data; });
    this.annonceDataService.annonceDetailsSubject.subscribe((data: Annonce) => {this.annonceDtails = data; });
  }
  onItemtChange(annonce: number): void {
    // this.annonceDataService.annonceDetailsEmitter.emit(annonce);
    this.router.navigate([ annonce, 'details'],
      {
        queryParams: {productName : this.annonces[annonce].productName},
        fragment: 'loading',
        relativeTo : this.route});
    this.annonceDataService.setAnnonceDetails(this.annonces[annonce]);
  }

  addAnnonce(annonceJson: NgForm): void {
    if (annonceJson.valid){
    this.annonceDataService.addAnnonce(
      new Annonce(1, 1500, annonceJson.value.name,
        annonceJson.value.type, 'jdod gasba', '***', 1, 1, '2020-12-1')
    );
    }else{
      alert('champ not valid');
    }
  }

  canDeactivate(): Observable<boolean> | boolean {
    if (true) {
      if (confirm('Are you sure you want leave this route ?')) {
        return true;
      } else {
        return false;
      }
    }
  }

  onSubmit(form: NgForm): void {
    console.log(form.value);
  }
}
