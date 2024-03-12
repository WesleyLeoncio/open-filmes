import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor, HttpErrorResponse
} from '@angular/common/http';
import { catchError, Observable, throwError } from 'rxjs';
import { UserService } from "../modules/usuarios/service/user.service";


@Injectable()
export class AuthInterceptor implements HttpInterceptor {

  constructor(private userService: UserService) {
  }

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {

    const meuToken: string = this.userService.getToken();
    if (meuToken != null) {
      request = request.clone({
        setHeaders: {'Authorization': `Bearer ${meuToken}`}
      });
    }

    return next.handle(request).pipe(
      catchError((erro: HttpErrorResponse) => {
        return this.handler401Error(erro);
      })
    );
  }

  private handler401Error(erro: HttpErrorResponse): Observable<HttpErrorResponse | any> {
    if (erro.status === 401 || erro.status == 403 || erro.status === 0) {
      this.userService.logout();
    }
    return throwError(() => erro);
  }
}
