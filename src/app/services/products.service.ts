import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { Product } from '../models/product';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  url = "";

  constructor(private http : HttpClient) { }

  public getAllProducts() : Observable<Product[]>{
    return this.http.get<Product[]>("https://localhost:7170/api/Products");
  }

  public getProductsByType(productType: string): Observable<Product[]> {
    return this.http.get<Product[]>(`https://localhost:7170/api/Products/type/${productType}`);
  }
}
