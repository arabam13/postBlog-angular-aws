import { Routes } from '@angular/router';
import { AuthGuard } from '../auth/auth.guard.js';

export const postRoutes: Routes = [
  {
    path: '',
    title: 'List of Posts',
    loadComponent: () =>
      import('./post-list/post-list.component.js').then(
        (m) => m.PostListComponent
      ),
  },

  {
    path: 'create',
    title: 'Create Post',
    loadComponent: () =>
      import('./post-create/post-create.component.js').then(
        (m) => m.PostCreateComponent
      ),
    canActivate: [AuthGuard],
  },
  {
    path: 'edit/:postId',
    title: 'Edit Post',
    loadComponent: () =>
      import('./post-create/post-create.component.js').then(
        (m) => m.PostCreateComponent
      ),
    canActivate: [AuthGuard],
  },
];
