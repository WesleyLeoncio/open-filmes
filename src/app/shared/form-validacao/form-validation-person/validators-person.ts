import { AbstractControl, ValidationErrors, ValidatorFn } from "@angular/forms";

export class ValidatorsPerson {

  static equalsTo(otherField: string): ValidatorFn {
    return (control: AbstractControl): ValidationErrors | null => {
      const fieldValue = control.value;
      if (otherField == null) {
        throw new Error('É necessário informar um campo');
      }

      const otherFieldValue = control.root.get(otherField)?.value;

      if(fieldValue !== otherFieldValue) {
        return { equalTo: true }
      }

      return null
    }
  }
}
