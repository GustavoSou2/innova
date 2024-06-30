import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { LoginService } from '../../services/login/login.service';
import { Router } from '@angular/router';
import { VerificationCodeStorageService } from '../../services/verification-code/verification-code-storage.service';
import { CodeStorageService } from '../../services/code-storage/code-storage.service';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-login',
  standalone: false,
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss',
})
export class LoginComponent implements OnInit {
  logInForm!: FormGroup;

  constructor(
    @Inject(FormBuilder) private fb: FormBuilder,
    private loginService: LoginService,
    private router: Router,
    private codeStorage: CodeStorageService,
    private cookieService: CookieService,
  ) {
    this.logInForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required],
    });
  }

  ngOnInit(): void {
    if (!!this.cookieService.get('token')) {
      this.router.navigate(['/home']);
    }
  }

  logIn() {
    const formValue = this.logInForm.value;

    this.loginService.logIn(this.logInForm.value).subscribe(({ user: { complete, isVerified } }) => {
      if (complete && isVerified) return this.router.navigate(['/u/prefixia-io']);

      if (!isVerified) {
        this.codeStorage.email = formValue.email;

        return this.router.navigate(['/user/r/verify-code']);
      }

      if (!complete) return this.router.navigate(['/user/r/type']);

      return this.router.navigate(['/login']);
    });
  }
}
