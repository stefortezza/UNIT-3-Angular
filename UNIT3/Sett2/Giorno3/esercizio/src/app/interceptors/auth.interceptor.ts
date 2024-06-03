import { Injectable } from '@angular/core';
import {
    HttpRequest,
    HttpHandler,
    HttpEvent,
    HttpInterceptor,
} from '@angular/common/http';
import { Observable, tap } from 'rxjs';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {
    constructor() {}

    intercept(
        request: HttpRequest<unknown>,
        next: HttpHandler
    ): Observable<HttpEvent<unknown>> {
        console.log('Interceptor attivato');

        if (request.url == 'https://dummyjson.com/products') {
            const newReq = request.clone({
                headers: request.headers.append(
                    'Authorization',
                    'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c'
                ),
            });
            return next.handle(newReq).pipe(
                tap((event) => {
                    console.log('Controllo del token: ', newReq);
                })
            );
        } else {
            return next.handle(request);
        }
    }
}
