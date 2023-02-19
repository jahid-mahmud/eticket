import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ReusableComponentsServiceService {

  private _shareInputValue=new Subject();
  public shareInput=this._shareInputValue.asObservable();

  private clearAllFilter=new BehaviorSubject<boolean>(false);

  filterCleared$=this.clearAllFilter.asObservable();

  constructor() { }
  setShareInput(value){

    this._shareInputValue.next(value);

  }
  setFilter(value){
    this.clearAllFilter.next(value);
  }
}
