import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StepCollaboratorFormComponent } from './step-collaborator-form.component';

describe('StepCollaboratorFormComponent', () => {
  let component: StepCollaboratorFormComponent;
  let fixture: ComponentFixture<StepCollaboratorFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StepCollaboratorFormComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StepCollaboratorFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
