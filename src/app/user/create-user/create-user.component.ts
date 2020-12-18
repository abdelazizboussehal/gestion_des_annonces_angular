import {Component, OnInit, ViewChild} from '@angular/core';
import {NgForm} from '@angular/forms';

@Component({
  selector: 'app-create-user',
  templateUrl: './create-user.component.html',
  styleUrls: ['./create-user.component.css']
})
export class CreateUserComponent implements OnInit {
  gender: string[] = ['male', 'female'];
  suggestionEmail = 'azizboussehal@gmail.com';
  @ViewChild('from')
  viewForm!: NgForm;
  constructor() { }

  ngOnInit(): void {
  }

  onSubmis(form: NgForm): void {
    console.log(form);
    // this.viewForm.reset();
  }

  showSuggestion(): void {
    this.viewForm.form.patchValue({
      email: this.suggestionEmail
    });
  }
}
