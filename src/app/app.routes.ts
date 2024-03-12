import { Routes } from '@angular/router';

export const routes: Routes = [
  { path: '', redirectTo: '/auth/login', pathMatch: 'full' },
  {
    path: 'auth',
    loadChildren: () => import('./auth/auth.routes').then((m) => m.authRoutes),
  },
  {
    path: '**',
    title: 'Page Not Found',
    loadComponent: () =>
      import('./page-not-found/page-not-found.component').then(
        (m) => m.PageNotFoundComponent
      ),
  },
  // { path: "", component: PostListComponent },
  // { path: "create", component: PostCreateComponent, canActivate: [AuthGuard] },
  // { path: "edit/:postId", component: PostCreateComponent, canActivate: [AuthGuard] },
  // { path: "auth", loadChildren: "./auth/auth.module#AuthModule"}
];
