import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Annonce} from '../annonces/annonce.model';
import {map} from 'rxjs/operators';
import {CookieService} from 'ngx-cookie-service';
import {Observable} from 'rxjs';


@Injectable({providedIn: 'root'})
export class HttpAnnonceService {
  url = 'https://annonces-f0a61-default-rtdb.firebaseio.com/ads.json'; // we should specificate name of table in face base .json
  constructor(private http: HttpClient, private cookies: CookieService) {
  }

  storeAnnonces(annonces: Annonce[]): void {
    this.http.put(this.url, annonces).subscribe((request) => {
      console.log(request);
    });
  }

  storeAnnonce(annonce: Annonce): void {
    const urlSrping = 'http://localhost:8080/annonce';
    this.http.post(urlSrping, annonce).subscribe((request) => {
      console.log(request);
    });
  }

  getAnnonces(): any {
    /*const jwt = this.cookies.get('jwt');
    /!*const header = new HttpHeaders({Authorization: 'Bearer ' + this.cookies.get('jwt'),
      'Content-Type': 'application/json'
    });*!/
    let header = new HttpHeaders();
    header = header.set('Authorization', `Bearer ${jwt}`);
    header = header.set('Content-Type', 'application/json');
    */
    return this.http.get<Annonce []>('http://localhost:8080/annonce').pipe(map((annonces: Annonce[]) => {
      return annonces.map((annonce: Annonce) => {
        return {...annonce, url: 'https://www.generationsforpeace.org/wp-content/uploads/2018/07/empty.jpg'};
      });
    }));
    /*return this.http.get<Annonce []>(this.url).
  pipe(map((annonces: Annonce[]) => {
    return annonces.map((annonce: Annonce) => {
      return { ...annonce, url : 'https://www.generationsforpeace.org/wp-content/uploads/2018/07/empty.jpg'};
    });
  }));*/
  }

  getAnnonce(index: number): void {
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

  getAnnonceFromSpringBoot(): void {
    this.http.get<Annonce>('http://localhost:8080/annonce').subscribe(
      (annonce: Annonce) => {
        console.log(annonce);
      }
    );
  }
  download(type: string): void {
    const url = 'http://localhost:8080/annonce/reportd/' + type;
    this.http.get(url, {
        responseType: 'arraybuffer'
      }
    ).subscribe(response => this.downLoadFile(response, 'application/' + type));
  }

  downLoadFile(data: any, typePar: string): void {
    const blob = new Blob([data], {type: typePar});
    const url = window.URL.createObjectURL(blob);
    const pwa = window.open(url);
    if (!pwa || pwa.closed || typeof pwa.closed === 'undefined') {
      alert('Please disable your Pop-up blocker and try again.');
    }
  }
}
