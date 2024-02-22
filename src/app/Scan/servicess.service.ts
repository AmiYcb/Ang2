import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Iauth } from '../Adm/models/iauth';
import { StateManagerService } from '../Adm/serviceslogin/state-manager.service';
@Injectable({
  providedIn: 'root'
})
export class ServicessService {

  constructor(private http: HttpClient,private stateManagerService:StateManagerService) { }

  login(auth: Iauth): Observable<any> {
    return this.http.post<any>('http://localhost:8081/api/users/login', auth);
  }

  logOut() {
    // @ts-ignore
    this.stateManagerService.curUser = null;
  }
  
}