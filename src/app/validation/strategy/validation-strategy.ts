import { ValidationErrors } from "@angular/forms";
import { ValidationError } from "../interfaces/ValidationError";

export class ValidationStrategy {

  validadores: ValidationError[];

  constructor(validadores: ValidationError[]) {
    this.validadores = validadores;
  }

  public verificarErros(campo: string, error: ValidationErrors): string {
    for (const valor of this.validadores) {
      let msg: string = valor.validar(campo, error);
      if (msg != '') {
        return msg;
      }
    }
    return '';
  }
}
