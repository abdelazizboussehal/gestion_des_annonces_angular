import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {UserModel} from '../user/user.model';
import {CookieService} from 'ngx-cookie-service';

@Injectable(
  {
    providedIn: 'root'
  }
)
export class AuthHttpService {
  url = 'http://localhost:8080/authenticate';
  urlUser = 'http://localhost:8080/user';
  constructor(private  http: HttpClient, private  cookie: CookieService) {
  }

  signIn(user: UserModel): void {
    console.log(user);
    this.http.post(this.url,  user).subscribe((respense: any) => {
      console.log(respense);
      this.cookie.set('jwt', respense.jwt);
      console.log(this.cookie.get('jwt'));
    });
  }

  signUp(user: UserModel): void {
    console.log(user);
    this.http.post(this.urlUser,  user).subscribe((respense: any) => {
      console.log(respense);
    });
  }
}
