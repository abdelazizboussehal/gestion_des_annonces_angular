import {ActivatedRouteSnapshot, Resolve, RouterStateSnapshot} from '@angular/router';
import {Annonce} from '../annonces/annonce.model';
import {Observable} from 'rxjs';
import {Injectable} from '@angular/core';
import {AnnonceDataSevice} from './annonceData.sevice';
@Injectable()
export class AnnonceResorverService implements Resolve<Annonce> {
  constructor(private annonceData: AnnonceDataSevice) {
  }
  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot):
    Observable<Annonce> | Promise<Annonce> | Annonce {
    return this.annonceData.getAnnonceByIndex(route.params.id);
  }

}
