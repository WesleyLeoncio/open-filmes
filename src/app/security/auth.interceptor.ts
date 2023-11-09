import { Injectable } from '@angular/core';
import {
    HttpRequest,
    HttpHandler,
    HttpEvent,
    HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { TokenService } from "../shared/service/token.service";



@Injectable()
export class AuthInterceptor implements HttpInterceptor {

    constructor(private token: TokenService) {
    }

    intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {

        const meuToken: string = this.token.search().token;

        if (meuToken != null) {
            const authRequest: HttpRequest<any> = request.clone({
                setHeaders: {'Authorization': `Bearer ${meuToken}`}
            });
            return next.handle(authRequest);
        }

        return next.handle(request);
    }
}
