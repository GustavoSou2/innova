import { CommonModule } from '@angular/common';
import { Component, Output, EventEmitter } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { NgxMaskDirective, provideNgxMask } from 'ngx-mask';

@Component({
  selector: 'app-step-company-form',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, NgxMaskDirective],
  templateUrl: './step-company-form.component.html',
  styleUrl: './step-company-form.component.scss',
  providers: [provideNgxMask()],
})
export class StepCompanyFormComponent {
  @Output() nextStep = new EventEmitter();
  @Output() comeBack = new EventEmitter();

  companyForm = this.formBuilder.group({
    email: ['', Validators.required],
    name: ['', Validators.required],
    cnpj: ['', Validators.required],
    address: ['', Validators.required],
    city: ['', Validators.required],
    state: ['', Validators.required],
    postalCode: ['', Validators.required],
    acceptTerms: [false, Validators.requiredTrue],
  });

  constructor(private formBuilder: FormBuilder) {}

  onNextStep() {
    this.nextStep.emit(3);
  }
  comeBackStep() {
    this.comeBack.emit();
  }
}
