import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { FormControl, FormGroup } from '@angular/forms'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  login(formData: any) {
    const { username, password } = formData;
    if (username && password) {
      // Replace with your login logic, e.g., authentication service call
      alert(`Login Successful!\nUsername: ${username}`);
    } else {
      alert('Please enter both username and password.');
    }
  }
}
