import { Component } from '@angular/core';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent {
  email: string = '';
  password: string = '';

  constructor() {}

  login() {
    if (this.email && this.password) {
      console.log('Login successful:', { email: this.email, password: this.password });
      // Add your authentication logic here
    } else {
      console.log('Please fill in both fields.');
    }
  }
}
