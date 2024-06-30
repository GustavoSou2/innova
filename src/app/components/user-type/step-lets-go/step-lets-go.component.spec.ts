import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StepLetsGoComponent } from './step-lets-go.component';

describe('StepLetsGoComponent', () => {
  let component: StepLetsGoComponent;
  let fixture: ComponentFixture<StepLetsGoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StepLetsGoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StepLetsGoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
