import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StepYouAreComponent } from './step-you-are.component';

describe('StepYouAreComponent', () => {
  let component: StepYouAreComponent;
  let fixture: ComponentFixture<StepYouAreComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StepYouAreComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StepYouAreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
