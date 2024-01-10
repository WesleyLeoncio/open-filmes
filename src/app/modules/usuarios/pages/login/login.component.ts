import { Component, OnInit } from '@angular/core';
import { LoginFormService } from "../../service/login/login-form.service";
import { AutenticacaoService } from "../../service/login/autenticacao.service";


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  hide: boolean = true;

  ngOnInit(): void {
  }

  constructor(
    public loginFormService: LoginFormService,
    private autenticacaoService: AutenticacaoService,
  ) {
  }

  login(): void {
    if (this.loginFormService.validarForm()) {
      this.autenticacaoService.login();
    }

  }

}
