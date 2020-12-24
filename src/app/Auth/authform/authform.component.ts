import { Component, OnInit } from '@angular/core';
import {FormGroup, NgForm} from '@angular/forms';
import {AuthService} from '../../services/auth.service';
import {AuthHttpService} from '../authHttp.service';

@Component({
  selector: 'app-authform',
  templateUrl: './authform.component.html',
  styleUrls: ['./authform.component.css']
})
export class AuthformComponent implements OnInit {
  isSingUp = false;
  constructor(private auth: AuthHttpService) { }

  ngOnInit(): void {
  }

  onSubmit(form: NgForm): void {
    if ( !this.isSingUp ){
      this.auth.signIn(form.value);
    }else{
      this.auth.signUp(form.value);
    }

  }
}
