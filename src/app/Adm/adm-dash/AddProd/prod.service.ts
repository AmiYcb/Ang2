import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProdService {


  private apiUrl = 'http://localhost:3000/produits'; // Replace with your backend API URL

  constructor(private http: HttpClient) {}

  uploadFile(formData: FormData): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}/`, formData);
  }


  getAllProducts() {
    return this.http.get('http://localhost:8080/api/product-boycotts'); // Add the protocol part (http://)
  }


  private backendUrl = 'http://localhost:8080/api/product-boycotts'; // Replace with your actual backend URL


  createProduct(formData: any): Observable<any> {
    return this.http.post<any>(`${this.backendUrl}`, formData);
  }

}
 