import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { passwordMatchValidator } from './validators';
import { RegisterLoginRestService } from '../services/register-login.rest.service';
import { Router } from '@angular/router';
import { catchError, of, switchMap, tap } from 'rxjs';

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
    const userData = {
      name: this.userForm.get('name')?.value as string,
      surname: this.userForm.get('surname')?.value as string,
      email: this.userForm.get('email')?.value as string,
      password: this.userForm.get('passwordGroup')?.get('password')?.value as string,
      address: {
        street: this.userForm.get('address')?.get('street')?.value as string,
        city: this.userForm.get('address')?.get('city')?.value as string,
      },
    }

    this.registerServ.registerUSer(userData).pipe(
      switchMap((user) => {
        return this.registerServ.addMailDadaForUser(user.id as string);
      }),
      tap(() => {
        this.router.navigate(['/user-not-logged/login']);
      }),
      catchError(() => {
        console.log('Error registering user');
        return of(null)
      })
    ).subscribe();
  }
}
