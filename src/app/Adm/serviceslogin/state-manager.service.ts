import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Iuser } from '../models/iuser';

@Injectable({
  providedIn: 'root'
})
export class StateManagerService {

  private currentUserSubject: BehaviorSubject<Iuser>;
  public currentUser: Observable<Iuser>;

  constructor() {
    this.currentUserSubject = new BehaviorSubject<Iuser>(JSON.parse(sessionStorage.getItem('curUser') || '{}'));
    this.currentUser = this.currentUserSubject.asObservable();
  }

  public get currentUserValue(): Iuser {
    return this.currentUserSubject.value;
  }

  public setCurrentUser(user: Iuser): void {
    this.currentUserSubject.next(user);
    sessionStorage.setItem('curUser', JSON.stringify(user));
  }
  public clearCurrentUser(): void {
    // @ts-ignore
    this.currentUserSubject.next(null);
    sessionStorage.removeItem('curUser');
  }
}
