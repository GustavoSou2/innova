import { AfterViewInit, Component, OnInit, QueryList, ViewChild, ViewChildren } from '@angular/core';
import { SendCodeService } from '../../services/send-code/send-code.service';
import { VerificationCodeService } from '../../services/verification-code/verification-code.service';
import { LoaderService } from '../../components/loader/loader.service';
import { CodeStorageService } from '../../services/code-storage/code-storage.service';
import { CommonModule, Location } from '@angular/common';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { NgxMaskDirective, provideNgxMask } from 'ngx-mask';
import { BehaviorSubject } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-verification-code-validation',
  standalone: true,
  imports: [ReactiveFormsModule, NgxMaskDirective, CommonModule],
  templateUrl: './user-verification-code-validation.component.html',
  styleUrl: './user-verification-code-validation.component.scss',
  providers: [SendCodeService, VerificationCodeService, provideNgxMask()],
})
export class UserVerificationCodeValidationComponent implements OnInit, AfterViewInit {
  @ViewChildren('index') inputs!: QueryList<any>;

  formControlArr = new Array(6).fill(1);
  form$ = new BehaviorSubject<any>(null);

  constructor(
    private verificationCodeService: VerificationCodeService,
    private sendCodeService: SendCodeService,
    public codeStorage: CodeStorageService,
    private loaderService: LoaderService,
    private location: Location,
    private router: Router,
    private formBuilder: FormBuilder,
  ) {
    this.loaderService.loader('show');

    const form = this.formBuilder.group({});

    this.initFormGroupFields(form);

    this.form$.next(form);
  }

  ngOnInit(): void {
    this.loaderService.loader('show');
    if (!this.codeStorage.hasEmail()) {
      this.location.back();
      return;
    }
    const email = this.codeStorage.email;
    this.sendCodeService.send(email).subscribe((res) => {
      this.loaderService.hide();
    });
  }

  ngAfterViewInit(): void {
    let beforeElementInput = this.inputs.get(0);

    beforeElementInput.nativeElement.focus();

    this.form$.subscribe(async (form: any) => {
      const lastIndexOfFormControls = this.formControlArr.length - 1 + 1;

      await this.formControlArr.forEach((_, index) => {
        const nextCodeField = index + 2;
        const currentCode = index + 1;

        form.get(`code${currentCode}`)?.valueChanges.subscribe((value: any) => {
          if (value && nextCodeField <= lastIndexOfFormControls) {
            let nextElementInput = this.inputs.get(currentCode);

            return nextElementInput.nativeElement.focus();
          }

          if (!value && currentCode > 1) {
            let beforeElementInput = this.inputs.get(index - 1);

            beforeElementInput.nativeElement.focus();
          }
        });
      });

      this.loaderService.loader('hide');
    });
  }

  initFormGroupFields(form: FormGroup) {
    const formControlArr = this.formControlArr;

    formControlArr.forEach((_, index) => {
      const currentCode = index + 1;

      form.addControl(`code${currentCode}`, this.formBuilder.control(''));
    });
  }

  verifyCode(formValue: any) {
    const email = this.codeStorage.email;

    const code = Object.values(formValue).reduce((str, code) => {
      return `${str}${code}`;
    });

    console.log(code);

    this.verificationCodeService.verify(email, <string>code).subscribe(({ response: { complete } }: any) => {
      if (!complete) return this.router.navigate(['/user/r/type']);

      return this.router.navigate(['/home']);
    });
  }
}
