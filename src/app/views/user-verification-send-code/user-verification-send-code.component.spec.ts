import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserVerificationSendCodeComponent } from './user-verification-send-code.component';

describe('UserVerificationSendCodeComponent', () => {
  let component: UserVerificationSendCodeComponent;
  let fixture: ComponentFixture<UserVerificationSendCodeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UserVerificationSendCodeComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UserVerificationSendCodeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
