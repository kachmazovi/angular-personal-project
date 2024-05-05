import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { passwordMatchValidator } from './validators';
import { RegisterLoginRestService } from '../services/register-login.rest.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrl: './register.component.scss',
})
export class RegisterComponent {
  public userForm = new FormGroup({
    name: new FormControl('', [Validators.required]),
    surname: new FormControl('', [Validators.required]),
    email: new FormControl('', [Validators.required, Validators.email]),
    passwordGroup: new FormGroup(
      {
        password: new FormControl('', [
          Validators.required,
          Validators.pattern(
            '^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[^ws]).{8,}$'
          ),
        ]),
        confirmPassword: new FormControl('', [
          Validators.required,
          Validators.minLength(6),
        ]),
      },
      [passwordMatchValidator()]
    ),
    address: new FormGroup({
      street: new FormControl(''),
      city: new FormControl(''),
    }),
    terms: new FormControl(false, [Validators.requiredTrue]),
  });

  constructor(
    private registerServ: RegisterLoginRestService,
    private router: Router
  ) {}

  public hasFormControlError(name: string): boolean {
    return (
      (this.userForm.get(name)?.invalid && this.userForm.get(name)?.touched) ||
      false
    );
  }

  public register() {
    this.router.navigate(['/user-not-logged/login']);
  }
}
