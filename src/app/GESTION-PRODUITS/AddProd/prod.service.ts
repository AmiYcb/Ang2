import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProdService {


  constructor(private http: HttpClient) {}


  
  putProduct(productId: string | null, prod: any) {
    throw new Error('Method not implemented.');
  }

 
  private apiUrl = 'http://localhost:3000/produits'; // Replace with your backend API URL


  uploadFile(formData: FormData): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}/`, formData);
  }


  // getAllBrands() {
  //   return this.http.get('localhost:8080/api/brand-boycotts'); // Add the protocol part (http://)
  // }
  getAllAlt() {
    return this.http.get('http://localhost:8080/api/product-replacements'); // Add the protocol part (http://)
  }

  getAllBrands() {
    return this.http.get('http://localhost:8080/api/brand-boycotts'); // Add the protocol part (http://)
  }

  private backendUrl = 'http://localhost:8080/api/product-boycotts'; // Replace with your actual backend URL


  createProduct(formData: any): Observable<any> {
    return this.http.post<any>(`${this.backendUrl}`, formData);
  }


  editProduct(id: any): Observable<any> {
    return this.http.get<any>(`${this.backendUrl}/`+id);
  }

  updateProduct(id: any, productData: any): Observable<any> {
    return this.http.put<any>(`${this.backendUrl}/${id}`, productData);
  }

}
 