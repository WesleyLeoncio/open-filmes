import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { environment } from "../../environments/environment";
import { UserCadastro } from "../models/user-cadastro";
import { SnackBarService } from "../shared/service/snack-bar.service";
import { Router } from "@angular/router";

@Injectable({
  providedIn: 'root'
})
export class CadastroUserService {

  constructor(
    private http: HttpClient,
    private snackService: SnackBarService,
    private route: Router,
  ) { }

  public cadastrarUser(userCadastro: UserCadastro){
    this.http.post(`${environment.apiUrl}/usuarios/comum`, userCadastro).subscribe(
      {
        next: userCadastro => this.sucesso(userCadastro),
        error: err => this.erro(err)
      }
    )
  }

  private sucesso(userCadastro: any){
    if (userCadastro){
      this.snackService.snackBarOpenTop('Cadastro Realizado Com Sucesso!', 7);
      this.route.navigate(['login']).finally();
    }
  }

  private erro(msgErro: any | string): void{
    msgErro = msgErro.error;
    this.snackService.snackBarOpenTop(msgErro, 7);
  }


}
