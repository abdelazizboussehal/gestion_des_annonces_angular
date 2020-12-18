import {Annonce} from '../annonces/annonce.model';
import {Subject} from 'rxjs';


export class AnnonceDataSevice{
  private annonces: Annonce[] = [new Annonce(1, 1, 'telephone',
    'samsung a6', 'jdod gasba', '*** // ***', 1, 1, '2020-12-1'),
    new Annonce(1, 1, 'telephone',
      'samsung a5', 'jdod gasba', '***', 1, 1, '2020-12-1'),
    new Annonce(1, 1, 'caba',
      'samsung ooredoo a5', 'jdod bzf gasba', '***', 1, 1, '2020-12-1')
  ];
  private annonceDetails: any;

  annonceDetailsSubject = new Subject<Annonce>();
  annoncesSubject = new Subject<Annonce[]>();

  getAnnonces(): Annonce[]{
    return this.annonces.slice();
  }
  removeAnnonce(annoncee: Annonce): void{
    this.annonces = this.annonces.filter(( annonce: Annonce) => annonce !== annoncee);
    this.annoncesSubject.next(this.annonces);
  }
  addAnnonce(annonce: Annonce): void{
    this.annonces.push(annonce);
    this.annoncesSubject.next(this.annonces);
  }
  getAnnonceDetails(): any {
    return this.annonceDetails;
  }
  getAnnonceByIndex(id: number): Annonce{
    return this.annonces[id];
  }

  setAnnonceDetails(annonce1: Annonce): void {
    this.annonceDetailsSubject.next(annonce1);
  }
}
