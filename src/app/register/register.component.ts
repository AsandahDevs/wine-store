import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
})
export class RegisterComponent {
  registrationForm = new FormGroup({
    firstName: new FormControl('', [Validators.required]),
    lastName: new FormControl('', [Validators.required]),
    emailAddress: new FormControl('', [Validators.required, Validators.email]),
    physicalAddress: new FormControl('', [Validators.required]),
    suburb: new FormControl(''),
    province: new FormControl(''),
    sex: new FormControl('', [Validators.required]),
    checkMark: new FormControl(''),
  });
}

// todo: create a function that will create an alert to show the user of their submitted form.
// todo: initially the function shouldn't submit any data to a backend.
