import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { RegisterLoginRestService } from '../services/register-login.rest.service';
import { catchError, of, tap } from 'rxjs';
import { Router } from '@angular/router';
import { IUserData } from '../interfaces/register.interface';
import { UserService } from '../../shared/services/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {
  public userForm = new FormGroup({
    mail: new FormControl('', [Validators.required, Validators.minLength(3)]),
    password: new FormControl('', [Validators.required, Validators.minLength(6)]),
  });

  constructor(private loginRestServ: RegisterLoginRestService, private router: Router, private userService: UserService) {}

  public login() {
    this.loginRestServ.loginUSer().pipe(
      tap((users: IUserData[]) => {
        const user = users.find((user) => {
           return user.email === this.userForm.get('mail')?.value && user.password === this.userForm.get('password')?.value
        })

        if (user) {
          this.userService.logedUser = user
          this.router.navigate(['/dashboard/inbox'])
        } else {
          console.log('User not found')
        }
      }),
      catchError((err) => {
        console.log('Error catched')
        return of(null)
      })
    ).subscribe()
  }
}
