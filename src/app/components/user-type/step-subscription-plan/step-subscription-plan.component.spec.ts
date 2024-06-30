import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StepSubscriptionPlanComponent } from './step-subscription-plan.component';

describe('StepSubscriptionPlanComponent', () => {
  let component: StepSubscriptionPlanComponent;
  let fixture: ComponentFixture<StepSubscriptionPlanComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StepSubscriptionPlanComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StepSubscriptionPlanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
