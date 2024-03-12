import { Routes } from '@angular/router';

export const authRoutes: Routes = [
  {
    path: 'login',
    title: 'Login',
    loadComponent: () =>
      import('./login/login.component').then((m) => m.LoginComponent),
  },
  {
    path: 'signup',
    title: 'Signup',
    loadComponent: () =>
      import('./signup/signup.component').then((m) => m.SignupComponent),
  },
];
