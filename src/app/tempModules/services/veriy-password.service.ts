import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class VeriyPasswordService {
  


  forEmailVerify = new BehaviorSubject<boolean>(false);
  forPassVerify = new BehaviorSubject<boolean>(false);
  forAdminRole = new BehaviorSubject<boolean>(false);

  proceedForemialVerify$ = this.forEmailVerify.asObservable();
  proceedPassVerify$ = this.forPassVerify.asObservable();
  proceedForAdminRole$ = this.forAdminRole.asObservable();

  constructor() { }

  setEmailVerify(value: boolean) {
    this.forEmailVerify.next(value);
  }
  setPassVerify(value: boolean) {
    this.forPassVerify.next(value);
  }
  setAdminRole(value: boolean) {
    this.forAdminRole.next(value);
  }
}
