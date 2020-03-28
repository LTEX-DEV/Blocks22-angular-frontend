import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable()
export class AuthInterceptor implements HttpInterceptor {
    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<any> {
       const idtoken = localStorage.getItem('id_token');

       if(idtoken) {
           const cloned = req.clone({
               headers: req.headers.set('Authorization', 'Bearer ' + idtoken)
           });
           return next.handle(cloned);

       } else
    {
        return next.handle(req);

       }

 
    }
}
