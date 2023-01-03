import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
})
export class RegisterComponent {
  message: HTMLElement | null | undefined;
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

  get firstName() {
    return this.registrationForm.get('firstName');
  }

  get lastName() {
    return this.registrationForm.get('lastName');
  }

  get emailAddress() {
    return this.registrationForm.get('emailAddress');
  }

  get physicalAddress() {
    return this.registrationForm.get('physicalAddress');
  }

  submit = (e: any) => {
    e.preventDefault();
    console.log(this.registrationForm.value);
    this.message = document.getElementById('successMessage')!;
    this.message.innerHTML = `<i class="fa-solid fa-check"></i> Successfully registered!`;
  };
}
