import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Product } from '../model/product';

@Injectable({
  providedIn: 'root',
})
export class ProductService {

  jsonUrl: string = environment.jsonUrl
  entityName: string = 'products'

  constructor(private http: HttpClient) {}

  getAll(): Observable<Product[]> {
    return this.http.get<Product[]>(`${this.jsonUrl}${this.entityName}`);
  }

  getOne(id: string | number): Observable<Product> {
    return this.http.get<Product>(`${this.jsonUrl}${this.entityName}/${id}`);
  }

  add(pen: Product): Observable<any> {
    pen['disabled'] = true
    return this.http.post<Observable<any>>(`${this.jsonUrl}${this.entityName}`, pen);
  }

  update(pen: Product): Observable<any> {
    return this.http.put(`${this.jsonUrl}${this.entityName}/${pen.id}`, pen);
  }

  remove(pen: any): Observable<any> {
    pen = pen.id ? pen.id : pen;
    return this.http.delete(`${this.jsonUrl}${this.entityName}/${pen}`);
  }
}
