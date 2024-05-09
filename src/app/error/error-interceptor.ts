import { HttpErrorResponse, HttpInterceptorFn } from '@angular/common/http';
import { inject } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { ErrorComponent } from './error.component.js';

export const ErrorsInterceptor: HttpInterceptorFn = (req, next) => {
  const dialog = inject(MatDialog);
  // const errorComponent = inject(ErrorComponent);

  return next(req).pipe(
    catchError((error: HttpErrorResponse) => {
      let errorMessage = 'An unknown error occurred!';
      if (error.error.message) {
        errorMessage = error.error.message;
      }
      dialog.open(ErrorComponent, { data: { message: errorMessage } });

      return throwError(() => error);
    })
  );
};
