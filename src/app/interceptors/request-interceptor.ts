

import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent, HttpErrorResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { Injectable } from '@angular/core';
import { NzMessageService } from 'ng-zorro-antd';


@Injectable()
export class RequestInterceptor  implements HttpInterceptor {

    constructor(private message: NzMessageService) {
    }

    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    return next.handle(req).pipe(tap((event: HttpEvent<any>) => { }, (err: any) => {

if(err instanceof HttpErrorResponse)
{
    this.message.error(err.error.error);
    
}


    }));
   }



}
