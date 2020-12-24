import {HttpHandler, HttpHeaders, HttpInterceptor, HttpRequest} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {CookieService} from 'ngx-cookie-service';
@Injectable()
export class MainInterceptorService implements HttpInterceptor{
  constructor(private cookies: CookieService) {
  }
  intercept(req: HttpRequest<any>, next: HttpHandler): any {
    const jwt = this.cookies.get('jwt');
    /*const header = new HttpHeaders({Authorization: 'Bearer ' + this.cookies.get('jwt'),
      'Content-Type': 'application/json'
    });*/
    let modifyRequest: HttpRequest<any>;
    if (req.url !== 'http://localhost:8080/authenticate'){
      let header = new HttpHeaders();
      header = header.set('Authorization', `Bearer ${jwt}`);
      header = header.set('Content-Type', 'application/json');
      modifyRequest = req.clone({headers: header});
      console.log(1);
    }
    else {
      modifyRequest = req;
      console.log(2);
    }
    return next.handle(modifyRequest);
  }

}
