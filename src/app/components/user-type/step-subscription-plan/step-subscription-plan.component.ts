import { Component, EventEmitter, Output } from '@angular/core';

export type SubscriptionPlan = 'basic' | 'standard' | 'enterprise';

enum SubscriptionPlanEnum {
  basic = 'basic',
  advanced = 'standard',
  enterprise = 'enterprise',
}

@Component({
  selector: 'app-step-subscription-plan',
  standalone: true,
  imports: [],
  templateUrl: './step-subscription-plan.component.html',
  styleUrl: './step-subscription-plan.component.scss',
})
export class StepSubscriptionPlanComponent {
  @Output() nextStep = new EventEmitter();
  @Output() subscriptionPlan = new EventEmitter<SubscriptionPlan>();
  @Output() comeBack = new EventEmitter();

  comeBackStep() {
    this.comeBack.emit();
  }

  getSubscriptionPlanEnum = SubscriptionPlanEnum;

  subscriptionPlanSelected(subscriptionPlan: SubscriptionPlan) {
    this.subscriptionPlan.emit(subscriptionPlan);
    this.nextStep.emit(5);
  }
}
