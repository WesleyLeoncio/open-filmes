import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Router } from "@angular/router";
import { User } from "../models/user";
import { Subscription } from "rxjs";
import { UserToken } from "../models/interfaces/user-token";
import { environment } from "../../environments/environment";
import { SnackBarService } from "../shared/service/snack-bar.service";
import { UserService } from "../shared/service/user.service";

@Injectable({
  providedIn: 'root'
})
export class AutenticacaoService {

  constructor(
    private http: HttpClient,
    private userService: UserService,
    private route: Router,
    private snackService: SnackBarService
  ) {
  }

  public login(user: User): Subscription {
    return this.http.post<UserToken>(`${environment.apiUrl}/login`, user).subscribe(
      {
        next: user => this.sucesso(user),
        error: erro => this.erro(erro)
      }
    );
  }

  private sucesso(token: UserToken): void{
    this.userService.salvarToken(token);
    this.route.navigate(['']).finally();
  }

  private erro(msgErro: any | string): void{
    msgErro = msgErro.error;
    this.snackService.snackBarOpenTop(msgErro, 7);
    this.userService.logout();
  }


}
