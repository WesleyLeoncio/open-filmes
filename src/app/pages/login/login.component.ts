import { Component, OnInit } from '@angular/core';
import { LoginFormService } from "../../service/login-form/login-form.service";
import { AutenticacaoService } from "../../service/autenticacao.service";
import { User } from "../../models/user";


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  hide = true;

  ngOnInit(): void {
  }

  constructor(
    public loginFormService: LoginFormService,
    private autenticacaoService: AutenticacaoService,

  ) {
  }

  login(){
    if (this.loginFormService.validarForm()){
      this.autenticacaoService.login(<User>this.loginFormService.formUser())
    }

  }

}
