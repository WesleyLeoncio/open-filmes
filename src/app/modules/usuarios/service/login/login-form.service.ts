import { Injectable } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, ValidationErrors, Validators } from "@angular/forms";
import { User } from "../../models/user";
import { ValidationStrategy } from "../../../../validation/strategy/validation-strategy";
import { Required } from "../../../../validation/validacoes/required";
import { Minlength } from "../../../../validation/validacoes/minlength";
import { Email } from "../../../../validation/validacoes/email";

@Injectable({
  providedIn: 'root'
})
export class LoginFormService {

  formLogin: FormGroup;

  private validadoresForm: ValidationStrategy = new ValidationStrategy([
    new Required(),
    new Minlength(),
    new Email()
  ]);

  constructor(
    private formBuilder: FormBuilder,
  ) {
    this.formLogin = this.formBuilder.group({
      login: [null, Validators.compose([
        Validators.required, Validators.email,
      ])],
      password: [null, Validators.compose([
        Validators.required, Validators.minLength(4)
      ])],
    });
  }

  public limparForm(): void{
    this.formLogin.reset();
  }

  public validarForm(): boolean {
    return this.formLogin.valid;
  }

  public obterControle(nome: string): FormControl {
    const control = this.formLogin.get(nome);
    if (!control) {
      throw new Error(`FormControl com nome "${nome}" não existe.`);
    }
    return control as FormControl;
  }

  public valorCampo(campo: string) {
    return this.obterControle(campo)?.value;
  }

  public formUser(): User {
    return new User(this.valorCampo('login'), this.valorCampo('password'));
  }

  public msgErrorForm(campo: string, controlName: string): string {
    const control: FormControl = this.obterControle(controlName)
    let msg: string = '';
    if (!control.valid){
      const erro: ValidationErrors = <ValidationErrors>control.errors;
      msg = this.validadoresForm.verificarErros(campo, erro);
    }
    return msg;
  }


}
