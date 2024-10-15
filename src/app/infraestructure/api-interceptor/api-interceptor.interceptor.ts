import {HttpInterceptorFn, HttpResponse} from '@angular/common/http';
import {tap} from 'rxjs';

export const apiInterceptorInterceptor: HttpInterceptorFn = (req, next) => {
  const clonedRequest = req.clone({
    setHeaders: {

    }
  });


  return next(clonedRequest).pipe(
    tap(event => {
      if (event instanceof HttpResponse) {
        // console.log('Respuesta recibida:', event);
      }
    })
  );

};
