import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CodeStorageService  {
  code$: BehaviorSubject<string> = new BehaviorSubject('')
  private email$: BehaviorSubject<string> = new BehaviorSubject('')

  constructor() { }

  set email(email: string) {
    this.email$.next(email)
  }

  get email() {
    return this.email$.value
  }

  hasEmail() {
    return !!this.email;
  }

  set code(code: string) {
    this.code$.next(code)
  }

  get code() {
    return this.code$.value
  }

}
