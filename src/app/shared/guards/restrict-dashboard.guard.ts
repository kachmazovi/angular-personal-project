import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { UserService } from '../services/user.service';

export const restrictDashboardGuard: CanActivateFn = (route, state) => {
  if (!inject(UserService).logedUser) {
    inject(Router).navigateByUrl('/user-not-logged/login');
  }
  return inject(UserService).logedUser ? true : false;
};
