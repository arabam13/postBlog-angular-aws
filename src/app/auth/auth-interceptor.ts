import { HttpInterceptorFn } from '@angular/common/http';
import { inject } from '@angular/core';
import { AuthService } from './auth.service.js';

export const AuthInterceptor: HttpInterceptorFn = (req, next) => {
  // console.log(`Request is on its way to url: ${req.url}`);
  const authService = inject(AuthService);
  const authToken = authService.getToken();
  const authRequest = req.clone({
    headers: req.headers.set('Authorization', 'Bearer ' + authToken),
  });
  return next(authRequest);
};
