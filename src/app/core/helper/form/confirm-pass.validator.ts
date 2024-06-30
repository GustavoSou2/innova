import { AbstractControl, ValidationErrors } from '@angular/forms';

function confirmPasswordMachValidator(): ValidationErrors | null {
  return (control: AbstractControl): ValidationErrors | null => {
    const password = control.get('password');
    const confirmPassword = control.get('confirmPassword');

    if (password?.pristine || confirmPassword?.pristine) return null;

    if (password?.value === confirmPassword?.value) return null;

    return {
      confirmPasswordMismatch: true,
    };
  };
}

export { confirmPasswordMachValidator };
