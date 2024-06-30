import { Component, Inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { confirmPasswordMachValidator } from '../../core/helper/form/confirm-pass.validator';
import { ApiService } from '../../core/helper/api/api.service';
import { environment } from '../../../assets/environment/environment';
import { getEndpointPath } from '../../core/helper/endpoints/endpoints.helper';

@Component({
  selector: 'app-register',
  standalone: false,
  templateUrl: './register.component.html',
  styleUrl: './register.component.scss',
})
export class RegisterComponent {
  registerForm!: FormGroup;
  apiSource: string = getEndpointPath('register');

  constructor(
    @Inject(FormBuilder) private fb: FormBuilder,
    private apiService: ApiService<any>,
  ) {
    this.registerForm = this.fb.group(
      {
        name: ['', Validators.required],
        email: ['', [Validators.required, Validators.email]],
        password: ['', Validators.required],
        confirmPassword: ['', Validators.required],
      },
      { validators: confirmPasswordMachValidator() },
    );
  }

  signUp() {
    this.apiService.post(this.apiSource, this.registerForm.value).subscribe((data) => {
      console.log(data);
    });
  }
}
