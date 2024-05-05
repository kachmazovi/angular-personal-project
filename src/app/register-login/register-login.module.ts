import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { RouterModule } from '@angular/router';
import { SharedModule } from '../shared/shared.module';
import { WrapperComponent } from './wrapper/wrapper.component';
import { RegisterLoginRestService } from './services/register-login.rest.service';

@NgModule({
  declarations: [RegisterComponent, LoginComponent, WrapperComponent],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule.forChild([
      {
        path: '',
        component: WrapperComponent,
        children: [
          {
            path: 'login',
            component: LoginComponent,
          },
          {
            path: 'register',
            component: RegisterComponent,
          },
        ],
      },
    ]),
  ],
  providers: [RegisterLoginRestService],
})
export class RegisterLoginModule {}
