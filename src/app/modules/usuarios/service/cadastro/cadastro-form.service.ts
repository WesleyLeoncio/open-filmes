import { Injectable } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, ValidationErrors, Validators } from "@angular/forms";
import { ValidationStrategy } from "../../../../validation/strategy/validation-strategy";
import { Required } from "../../../../validation/validacoes/required";
import { Minlength } from "../../../../validation/validacoes/minlength";
import { Email } from "../../../../validation/validacoes/email";
import { UserCadastro } from "../../models/interfaces/user-cadastro";
import { EqualsValid } from "../../../../validation/validacoes/equals-valid";
import { ValidatorsPerson } from "../../../../validation/validacoes/validation-person/validators-person";




@Injectable({
  providedIn: 'root'
})
export class CadastroFormService {

    formCadastroUser: FormGroup;

    private validadoresForm: ValidationStrategy = new ValidationStrategy([
        new Required(),
        new Minlength(),
        new Email(),
        new EqualsValid()
    ]);

  constructor(
    private formBuilder: FormBuilder
  ) {
    this.formCadastroUser = this.formBuilder.group({
      name: [null, Validators.compose([
        Validators.required, Validators.minLength(3)
      ])],
      login: [null, Validators.compose([
          Validators.required, Validators.email
      ])],
      confirmLogin: [null, Validators.compose([
        Validators.required, Validators.email,ValidatorsPerson.equalsTo('login')
      ])],
      password: [null, Validators.compose([
          Validators.required, Validators.minLength(4),
      ])],
      confirmPassword: [null, Validators.compose([
        Validators.required, Validators.minLength(4),ValidatorsPerson.equalsTo('password')
      ])],
    });
  }

  public limparForm(): void{
    this.formCadastroUser.reset();
  }

    public validarForm(): boolean {
        return this.formCadastroUser.valid;
    }

    public obterControle(nome: string): FormControl {
        const control = this.formCadastroUser.get(nome);
        if (!control) {
            throw new Error(`FormControl com nome "${nome}" não existe.`);
        }
        return control as FormControl;
    }

    public valorCampo(campo: string) {
        return this.obterControle(campo)?.value;
    }

    public formUserCadastro(): UserCadastro{
        return new UserCadastro(
            this.valorCampo('name'),
            this.valorCampo('login'),
            this.valorCampo('password'));
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
