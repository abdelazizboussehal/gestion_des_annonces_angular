import {Annonce} from '../annonces/annonce.model';
import {EventEmitter} from '@angular/core';

export class AnnonceDataSevice{
  annonces: Annonce[] = [new Annonce(1, 1, 'telephone',
    'samsung a6', 'jdod gasba', '*** // ***', 1, 1, '2020-12-1'),
    new Annonce(1, 1, 'telephone',
      'samsung a5', 'jdod gasba', '***', 1, 1, '2020-12-1'),
    new Annonce(1, 1, 'caba',
      'samsung ooredoo a5', 'jdod bzf gasba', '***', 1, 1, '2020-12-1')
  ];
  private annonceDetails: Annonce = this.annonces[0];
  annonceDetailsEmitter = new EventEmitter<Annonce>();
  annoncesEmitter = new EventEmitter<Annonce[]>();
  getAnnonces(): Annonce[]{
    return this.annonces.slice();
  }
  removeAnnonce(annoncee: Annonce): void{
    this.annonces = this.annonces.filter(( annonce: Annonce) => annonce !== annoncee);
    this.annoncesEmitter.emit(this.annonces);
  }
  addAnnonce(annonce: Annonce): void{
    this.annonces.push(annonce);
    this.annoncesEmitter.emit(this.annonces);
  }
  getAnnonceDetails(): any {
    return this.annonceDetails;
  }

}
