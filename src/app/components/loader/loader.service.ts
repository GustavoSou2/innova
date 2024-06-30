import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, delay, interval, of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class LoaderService {
  $state = new BehaviorSubject<boolean>(false);

  constructor() {}

  loader(state: 'show' | 'hide') {
    const loaderStateDict = {
      show: true,
      hide: false,
    };

    this.$state.next(loaderStateDict[state]);
    return of(loaderStateDict[state]).pipe(delay(1000));
  }

  hide() {
    this.loader('hide');
  }

  show() {
    this.loader('show');
  }
}
