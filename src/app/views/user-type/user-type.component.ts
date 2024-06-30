import { Component } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { LoaderService } from '../../components/loader/loader.service';

@Component({
  selector: 'app-user-type',
  standalone: false,
  templateUrl: './user-type.component.html',
  styleUrl: './user-type.component.scss',
})
export class UserTypeComponent {
  step$: BehaviorSubject<number> = new BehaviorSubject(1);

  youAre: string = '';

  constructor(private loaderService: LoaderService) {}

  nextStep(step: number) {
    this.step$.next(+step);
  }
}
