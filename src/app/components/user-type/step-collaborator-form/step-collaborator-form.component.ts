import { animate, state, style, transition, trigger } from '@angular/animations';
import { CommonModule } from '@angular/common';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { NgxMaskDirective, provideNgxMask } from 'ngx-mask';
import { SysCompanyService } from '../../../services/sys-company/sys-company.service';
import { Observable, forkJoin, of } from 'rxjs';

const fadeState = trigger('fadeState', [
  state(
    'false',
    style({
      opacity: '0',
    }),
  ),
  state(
    'true',
    style({
      opacity: '1',
    }),
  ),
  transition('show => hide', animate('600ms ease-out')),
  transition('hide => show', animate('1000ms ease-in')),
]);

@Component({
  selector: 'app-step-collaborator-form',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule, NgxMaskDirective],
  templateUrl: './step-collaborator-form.component.html',
  styleUrl: './step-collaborator-form.component.scss',
  providers: [provideNgxMask(), SysCompanyService],
  animations: [fadeState],
})
export class StepCollaboratorFormComponent implements OnInit {
  @Output() nextStep = new EventEmitter();
  @Output() comeBack = new EventEmitter();

  sysCompanies!: any[];

  collaboratorForm!: FormGroup;

  inputIsFocused: boolean = false;

  constructor(
    private fb: FormBuilder,
    private companyService: SysCompanyService,
  ) {
    this.collaboratorForm = this.fb.group({
      cnpj: ['', [Validators.required]],
    });
  }

  ngOnInit(): void {
    this.companyService.list()?.subscribe((sysCompanies) => {
      this.sysCompanies = sysCompanies;

      this.collaboratorForm.get('cnpj')?.valueChanges.subscribe((cnpj) => {
        this.sysCompanies = sysCompanies.filter((company: any) => {
          return company.cnpj.replace(/\D/g, '').includes(cnpj);
        });
      });
    });
  }

  selectCompany({ cnpj }: any) {
    this.collaboratorForm.get('cnpj')?.setValue(cnpj);
    this.inputIsFocused = false;
  }

  onNextStep() {
    this.nextStep.emit(3);
  }

  comeBackStep() {
    this.comeBack.emit();
  }
}
