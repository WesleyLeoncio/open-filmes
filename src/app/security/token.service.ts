import { Injectable } from '@angular/core';
import { environment } from "../../environments/environment";
import { UserToken } from "./interfaces/user-token";

@Injectable({
  providedIn: 'root'
})
export class TokenService {

  constructor() { }

  save(token: UserToken): void {
    localStorage.setItem(environment.tokenKey, JSON.stringify(token));
  }

  search(): UserToken {
    return JSON.parse(localStorage.getItem(environment.tokenKey) || '{}');
  }

  clear(): void {
    localStorage.removeItem(environment.tokenKey)
  }

  itHasToken(): boolean{
    return !!this.search().token;
  }
}
