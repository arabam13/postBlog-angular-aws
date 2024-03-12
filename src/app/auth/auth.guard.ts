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

// @Injectable()
// export class AuthGuard implements CanActivate {
//   constructor(private authService: AuthService, private router: Router) {}

//   canActivate(
//     route: ActivatedRouteSnapshot,
//     state: RouterStateSnapshot
//   ): boolean | Observable<boolean> | Promise<boolean> {
//     const isAuth = this.authService.getIsAuth();
//     if (!isAuth) {
//       this.router.navigate(['/login']);
//     }
//     return isAuth;
//   }
// }
