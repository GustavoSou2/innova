import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserTypeComponent } from './user-type.component';
import { RouterModule } from '@angular/router';
import { StepLetsGoComponent } from '../../components/user-type/step-lets-go/step-lets-go.component';
import { StepYouAreComponent } from '../../components/user-type/step-you-are/step-you-are.component';
import { StepCompanyFormComponent } from '../../components/user-type/step-company-form/step-company-form.component';
import { StepCollaboratorFormComponent } from '../../components/user-type/step-collaborator-form/step-collaborator-form.component';
import { StepSubscriptionPlanComponent } from '../../components/user-type/step-subscription-plan/step-subscription-plan.component';

@NgModule({
  declarations: [UserTypeComponent],
  imports: [
    CommonModule,
    RouterModule.forChild([
      {
        path: '',
        component: UserTypeComponent,
      },
    ]),
    StepLetsGoComponent,
    StepYouAreComponent,
    StepCompanyFormComponent,
    StepCollaboratorFormComponent,
    StepSubscriptionPlanComponent,
  ],
})
export class UserTypeModule {}
