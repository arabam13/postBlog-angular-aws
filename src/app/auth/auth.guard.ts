import { inject } from '@angular/core';
import { Router } from '@angular/router';

import { AuthService } from './auth.service';

export const AuthGuard = () => {
  const authService = inject(AuthService);
  const router = inject(Router);
  const isAuth = authService.getIsAuth();
  if (!isAuth) {
    router.navigate(['/login']);
    return false;
  }
  return true;
};
