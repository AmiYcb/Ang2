
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TabService {

  constructor(private http: HttpClient) { }

  getAllProducts1() {
    return this.http.get('https://fakestoreapi.com/products');
  }
  getAllProducts() {
    return this.http.get('http://localhost:8080/api/product-boycotts'); // Add the protocol part (http://)
  }


  private backendUrl = 'http://localhost:8080/api/product-boycotts'; // Replace with your actual backend URL


 

  deleteProduct(id: string): Observable<void> {
    const url = `${this.backendUrl}/${id}`;
    return this.http.delete<void>(url);
  }

}
