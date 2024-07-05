import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent {
  getData(formValues: any) {
    const { id, name, dateOfBirth, email, password } = formValues;
    if (id && name && dateOfBirth && email && password) {
      alert(`Registration Successful!\nId: ${id}\nName: ${name}\nDate of Birth: ${dateOfBirth}\nEmail: ${email}`);
    } else {
      alert('Please fill out all fields.');
    }
  }
}
