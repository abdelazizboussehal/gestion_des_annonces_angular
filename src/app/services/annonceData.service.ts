import {Annonce} from '../annonces/annonce.model';
import {Subject} from 'rxjs';
import {Injectable} from '@angular/core';
import {HttpAnnonceService} from './http-annonce.service';

@Injectable()
export class AnnonceDataSevice{
   annoncesInit: Annonce[] = [new Annonce(1, 'ihpone', 2500, 'telephone',
     'electro', 'jdid gassba', '13 mp', 0, 0, new Date('12-12-2020')),
     new Annonce(1, 'frigidaire', 4500, 'froid',
       'electro', 'jdid gassba', '13 mp', 0, 0, new Date('12-12-2020'))
  ];
  private annonces: Annonce[] = [];
  private annonceDetails: any;
  index = -1;

  constructor(private annonceHttp: HttpAnnonceService) {

  }

  annonceDetailsSubject = new Subject<Annonce>();
  annoncesSubject = new Subject<Annonce[]>();
  annonceDetailsIndexSubject = new Subject<number>();

  getAnnonces(): Annonce[]{
    this.annonceHttp.getAnnonces().
    subscribe((annonce: Annonce[]) => {
      this.annonces = annonce;
      this.annoncesSubject.next(this.annonces);
    });
    return this.annonces.slice();
  }
  removeAnnonce(annoncee: Annonce): void{
    this.annonces = this.annonces.filter(( annonce: Annonce) => annonce !== annoncee);
    this.annoncesSubject.next(this.annonces);
  }
  addAnnonce(annonce: Annonce): void{
    this.annonces.push(annonce);
    this.annoncesSubject.next(this.annonces);
    this.storeToServer(annonce);
  }
  getAnnonceDetails(): any {
    return this.annonceDetails;
  }
  getAnnonceByIndex(index: number): Annonce{
    console.log(this.annonces);
    return this.annonces[index];
  }

  setAnnonceDetails(annonce1: Annonce): void {
    this.annonceDetailsSubject.next(annonce1);
  }
  storeToServer(annonce: Annonce): void{
    this.annonceHttp.storeAnnonce(annonce);
  }
  modify( annonce: Annonce, index: number): void{
    this.annonces[index] = annonce;
    this.annoncesSubject.next(this.annonces);
  }
}
