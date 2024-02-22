import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BrandService {

  
 
  constructor(private http: HttpClient) {}


  private backendUrl = 'http://localhost:8081/api/brand-boycotts';
  createBrand(formData: any): Observable<any> {
    return this.http.post<any>(`${this.backendUrl}`, formData);
  }


  getAllBrands() {
    return this.http.get('http://localhost:8081/api/brand-boycotts'); // Add the protocol part (http://)
  }


  deleteBrand(id: string): Observable<void> {
    const url = `${this.backendUrl}/${id}`;
    return this.http.delete<void>(url);
  }

  editBrand(id: any): Observable<any> {
    return this.http.get<any>(`${this.backendUrl}/`+id);
  }

  updateBrand(id: any, BrandData: any): Observable<any> {
    return this.http.put<any>(`${this.backendUrl}/${id}`, BrandData);
  }

}
