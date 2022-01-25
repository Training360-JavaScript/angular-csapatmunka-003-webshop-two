import { Category } from './../model/category';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  list: Category[] = [{
    id: 1,
    name: "...",
    description: "..."
  }, {
    id: 2,
    name: "...",
    description: "..."
  }]

  constructor() { }
}
