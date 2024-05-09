import { ApplicationConfig, importProvidersFrom } from '@angular/core';
import { provideRouter } from '@angular/router';

import { provideHttpClient, withInterceptors } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { routes } from './app.routes';
import { AuthInterceptor } from './auth/auth-interceptor.js';
import { ErrorsInterceptor } from './error/error-interceptor.js';

export const appConfig: ApplicationConfig = {
  providers: [
    provideHttpClient(withInterceptors([AuthInterceptor, ErrorsInterceptor])),
    importProvidersFrom(BrowserModule, BrowserAnimationsModule, FormsModule),
    provideRouter(routes),
  ],
};
