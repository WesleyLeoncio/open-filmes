import { ValidationError } from "../interfaces/ValidationError";
import { ValidationErrors } from "@angular/forms";

export class Email implements ValidationError{
  validar(campo: string, error: ValidationErrors): string {
    if (error?.['email']) {
      return `O ${campo} deve seguir o padrão exemplo@dominio.com`;
    }
    return '';
  }
}
