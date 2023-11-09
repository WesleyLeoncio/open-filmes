import { Component } from '@angular/core';
import { CadastroFormService } from "../../service/cadastro-form/cadastro-form.service";
import { Location } from "@angular/common";
import { CadastroUserService } from "../../service/cadastro-user.service";

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.scss']
})
export class CadastroComponent {
  constructor(
    public cadastroForm: CadastroFormService,
    private location: Location,
    private cadastroService: CadastroUserService
  ) {
  }


  public cadastrar(){
    if (this.cadastroForm.validarForm()){
      this.cadastroService.cadastrarUser(this.cadastroForm.formUserCadastro());
    }
  }

  public cancelar(){
    this.cadastroForm.limparForm();
    this.location.back();
  }
}
