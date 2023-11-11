import { Injectable } from '@angular/core';
import { BehaviorSubject, finalize, Observable } from "rxjs";
import { TokenService } from "./token.service";
import { jwtDecode } from "jwt-decode";
import { UserToken } from "../../models/interfaces/user-token";
import { UserInfo } from "../../models/interfaces/user-info";
import { Router } from "@angular/router";

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private userSubject = new BehaviorSubject<UserInfo | null>(null);

  private usuarioTeste!: UserInfo;
  constructor(
    private tokenService: TokenService,
    private router: Router
  ) {
    if(this.tokenService.itHasToken()){
      this.decodificarJWT();
    }
  }

  private decodificarJWT(){
    const token: string = this.tokenService.search().token;
    const user: UserInfo = jwtDecode(token) as UserInfo;
    this.usuarioTeste = user;
    this.userSubject.next(user);
  }

  //TODO REMOVER METODO
  getUserTesteRemoverEsseMetodo(){
    return this.usuarioTeste;
  }

  public retornarUser():Observable<UserInfo | null> {
    return this.userSubject.asObservable();
  }

  public salvarToken(token: UserToken){
    this.tokenService.save(token);
    this.decodificarJWT();
  }

  logout() {
    this.tokenService.clear();
    this.router.navigate(['/login']).finally();
    this.userSubject.next(null);
  }

  estaLogado() {
    return this.tokenService.itHasToken();
  }
}
