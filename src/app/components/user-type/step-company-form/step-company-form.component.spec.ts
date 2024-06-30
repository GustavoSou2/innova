import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StepCompanyFormComponent } from './step-company-form.component';

describe('StepCompanyFormComponent', () => {
  let component: StepCompanyFormComponent;
  let fixture: ComponentFixture<StepCompanyFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StepCompanyFormComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StepCompanyFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
