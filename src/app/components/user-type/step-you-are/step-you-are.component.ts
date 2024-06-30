import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-step-you-are',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './step-you-are.component.html',
  styleUrl: './step-you-are.component.scss',
})
export class StepYouAreComponent {
  @Output() nextStep = new EventEmitter();

  @Output() youAreEmit = new EventEmitter();

  youAre: 'company' | 'collaborator' | '' = '';

  onNextStep() {
    this.youAreEmit.emit(this.youAre);
    this.nextStep.emit(2);
  }
}
