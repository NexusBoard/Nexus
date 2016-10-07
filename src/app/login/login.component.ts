import { Component } from '@angular/core';
import { NgForm } from "@angular/forms";

@Component({
  selector: 'login',
  templateUrl: './login.component.html',
  styles: [`
    .ng-invalid {
      border: 1px solid red;
    }
  `]
})
export class LoginComponent {
  user = {
    username: 'Max',
    email: 'chris@test.com',
    password: 'test',
  }

  onSubmit(form:NgForm){
    console.log(form.value);
  }
}