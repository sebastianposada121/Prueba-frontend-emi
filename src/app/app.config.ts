import {ApplicationConfig, InjectionToken, provideZoneChangeDetection} from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import {provideHttpClient, withInterceptors} from '@angular/common/http';
import {apiInterceptorInterceptor} from './infraestructure/api-interceptor/api-interceptor.interceptor';
import {environment} from '../environments/environment';


export const BASE_URL = new InjectionToken("BASE_URL");

export const appConfig: ApplicationConfig = {
  providers: [
    {
      provide: BASE_URL,
      useValue: environment.BASE_URL,
    },
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes),
    provideHttpClient(
      withInterceptors([apiInterceptorInterceptor]),
    )
  ]
};
