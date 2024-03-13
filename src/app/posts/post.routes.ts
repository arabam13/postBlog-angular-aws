import { Routes } from '@angular/router';

export const postRoutes: Routes = [
  {
    path: '',
    children: [
      {
        path: '',
        title: 'List of Posts',
        loadComponent: () =>
          import('./post-list/post-list.component.js').then(
            (m) => m.PostListComponent
          ),
      },
    ],
  },
  // { path: "create", component: PostCreateComponent, canActivate: [AuthGuard] },
  // { path: "edit/:postId", component: PostCreateComponent, canActivate: [AuthGuard] },
];
