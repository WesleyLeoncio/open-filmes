import { Injectable } from '@angular/core';
import { TokenService } from "./token.service";
import { jwtDecode } from "jwt-decode";
import { UserToken } from "../../models/interfaces/user-token";
import { UserInfo } from "../../models/interfaces/user-info";
import { Router } from "@angular/router";

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private userLoginInfor!: UserInfo;
  constructor(
    private tokenService: TokenService,
    private router: Router
  ) {
    if(this.tokenService.itHasToken()){
      this.decodificarJWT();
    }
  }

  private decodificarJWT(){
    const token: string = this.getToken();
    this.userLoginInfor = jwtDecode(token) as UserInfo;
  }

  getUserLoginInfor(): UserInfo{
    return this.userLoginInfor;
  }

  public salvarToken(token: UserToken): void{
    this.tokenService.save(token);
    this.decodificarJWT();
  }

  logout(): void {
    this.tokenService.clear();
    this.router.navigate(['/login']).finally();
  }

  estaLogado(): boolean {
    return this.tokenService.itHasToken();
  }

  getToken(): string{
    return this.tokenService.search().token;
  }
}
