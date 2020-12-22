import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Annonce} from '../annonces/annonce.model';
import {map} from 'rxjs/operators';


@Injectable({providedIn : 'root'})
export class HttpAnnonceService{
  url = 'https://annonces-f0a61-default-rtdb.firebaseio.com/ads.json'; // we should specificate name of table in face base .json
  constructor(private http: HttpClient) {
  }
  storeAnnonces(annonces: Annonce[]): void{
    this.http.put(this.url, annonces).subscribe((request) => {
      console.log(request);
    });
  }

  storeAnnonce(annonces: Annonce []): void{
    this.http.post(this.url, annonces).subscribe((request) => {
      console.log(request);
    });
  }
  getAnnonces(): any{
    return this.http.get<Annonce []>('http://localhost:8080/annonce').
    pipe(map((annonces: Annonce[]) => {
      return annonces.map((annonce: Annonce) => {
        return { ...annonce, url : 'https://www.generationsforpeace.org/wp-content/uploads/2018/07/empty.jpg'};
      });
    }));
      /*return this.http.get<Annonce []>(this.url).
    pipe(map((annonces: Annonce[]) => {
      return annonces.map((annonce: Annonce) => {
        return { ...annonce, url : 'https://www.generationsforpeace.org/wp-content/uploads/2018/07/empty.jpg'};
      });
    }));*/
  }
  getAnnonce(index: number): void{
    /*this.http.get<Annonce>('https://annonces-f0a61-default-rtdb.firebaseio.com/ads/' + (index)).subscribe(
      (annonce: Annonce) => {
        console.log(annonce);
      }
    );*/
    this.http.get<Annonce>('http://localhost:8080/annonce/' + (index)).subscribe(
      (annonce: Annonce) => {
        console.log(annonce);
      }
    );
  }
  getAnnonceFromSpringBoot(): void{
    this.http.get<Annonce>('http://localhost:8080/annonce').subscribe(
      (annonce: Annonce) => {
        console.log(annonce);
      }
    );
  }
}
