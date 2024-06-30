import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserVerificationCodeValidationComponent } from './user-verification-code-validation.component';

describe('UserVerificationCodeValidationComponent', () => {
  let component: UserVerificationCodeValidationComponent;
  let fixture: ComponentFixture<UserVerificationCodeValidationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UserVerificationCodeValidationComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UserVerificationCodeValidationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
