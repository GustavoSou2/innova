import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-step-lets-go',
  standalone: true,
  imports: [],
  templateUrl: './step-lets-go.component.html',
  styleUrl: './step-lets-go.component.scss'
})
export class StepLetsGoComponent {
  @Output() nextStep = new EventEmitter();
}
