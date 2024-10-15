import {HttpInterceptorFn, HttpResponse} from '@angular/common/http';
import {tap} from 'rxjs';

export const apiInterceptorInterceptor: HttpInterceptorFn = (req, next) => {
  const clonedRequest = req.clone({
    setHeaders: {
      Authorization: `token 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`
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
