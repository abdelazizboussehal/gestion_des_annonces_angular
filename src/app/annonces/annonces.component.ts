import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {Annonce} from './annonce.model';
import {AnnonceDataSevice} from '../services/annonceData.service';
import {ActivatedRoute, Router} from '@angular/router';
import {Observable} from 'rxjs';
import {CanComponentDeactivate} from '../services/can-deactivate-guard.serice';
import {NgForm} from '@angular/forms';
import {HttpAnnonceService} from '../services/http-annonce.service';

@Component({
  selector: 'app-annonces',
  templateUrl: './annonces.component.html',
  styleUrls: ['./annonces.component.css']
})
export class AnnoncesComponent implements OnInit, CanComponentDeactivate {
  annonces;
  annonceDtails;
  isEnableForm = true;
  @ViewChild('nameInput')
  nameInput!: ElementRef;
  filterValue = '';
  constructor( private annonceDataService: AnnonceDataSevice,
               private router: Router,
               private route: ActivatedRoute,
               private http: HttpAnnonceService ) {
    this.annonces = this.annonceDataService.getAnnonces();
    this.annonceDtails = this.annonceDataService.getAnnonceDetails();
  }
  ngOnInit(): void {
    this.annonceDataService.annoncesSubject.subscribe((data: Annonce[]) => {this.annonces = data; });
    this.annonceDataService.annonceDetailsSubject.subscribe((data: Annonce) => {this.annonceDtails = data; });
  }
  onItemtChange(annonce: number): void {
    // this.http.getAnnonce(annonce);
    // this.annonceDataService.annonceDetailsEmitter.emit(annonce);
    this.router.navigate([ annonce, 'details'],
      {
        queryParams: {productName : this.annonces[annonce].productName},
        fragment: 'loading',
        relativeTo : this.route});
    this.annonceDataService.index = annonce;
    this.annonceDataService.setAnnonceDetails(this.annonces[annonce]);
    // this.annonceDataService.storeToServer();
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

  download(type: string): void {
    this.http.download(type);
  }
}
