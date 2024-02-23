import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) {}


  private backendUrl = 'http://localhost:8081/api/emails';
  createEmail(formData: any): Observable<any> {
    return this.http.post<any>(`${this.backendUrl}`, formData);
  }


  getAllEmails() {
    return this.http.get('http://localhost:8081/api/emails'); // Add the protocol part (http://)
  }


  deleteEmail(id: string): Observable<void> {
    const url = `${this.backendUrl}/${id}`;
    return this.http.delete<void>(url);
  }

}
