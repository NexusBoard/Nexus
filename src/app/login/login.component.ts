import { Component } from '@angular/core';
import { NgForm } from "@angular/forms";
import axios from 'axios';
<<<<<<< 4ac7e6342710614e3cc3a241cbb07e2145e98416
=======

>>>>>>> [feature] - adds controller for user

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
  };

  onSubmit(form:NgForm) {
    axios.post('/api/admin/signup', {
      username: form.value.username,
      email: form.value.email,
      password: form.value.password,
    }).then(resp => {
      if(resp.data.error) console.log("Error in post");
    })
  }
}
