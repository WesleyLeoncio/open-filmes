import { ValidationError } from "../interfaces/ValidationError";
import { ValidationErrors } from "@angular/forms";

export class EqualsValid implements ValidationError{
  validar(campo: string, error: ValidationErrors): string {
    if (error?.['equalTo']) {
      return `${this.pluralMaiusculo(campo)} não coincidem`;
    }
    return '';
  }

  private pluralMaiusculo(campo: string): string{
    return `${this.maiusculo(campo)}s`;
  }

  private maiusculo(texto: string): string{
    const minusculo: string = texto.toLowerCase();
    const primeiraLetra: string = texto[0].toUpperCase();

    return minusculo.replace(minusculo[0], primeiraLetra);
  }
}
