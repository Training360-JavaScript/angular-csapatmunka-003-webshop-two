import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from '../model/product';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  jsonUrl: string = 'http://localhost:3000/products';

  constructor(private http: HttpClient) {}

  getAll(): Observable<Product[]> {
    return this.http.get<Product[]>(this.jsonUrl);
  }

  getOne(id: string | number): Observable<Product> {
    return this.http.get<Product>(`${this.jsonUrl}/${id}`);
  }

  add(pen: Product): Observable<any> {
    pen['disabled'] = true
    return this.http.post<Observable<any>>(this.jsonUrl, pen);
  }

  update(pen: Product): Observable<any> {
    return this.http.put(`${this.jsonUrl}/${pen.id}`, pen);
  }

  remove(pen: any): Observable<any> {
    pen = pen.id ? pen.id : pen;
    return this.http.delete(`${this.jsonUrl}/${pen}`);
  }
}
