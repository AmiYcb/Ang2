import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class ServicessService {

  constructor(private http: HttpClient) { }


  getAllProducts() {
    return this.http.get('https://fakestoreapi.com/products');
  }
}