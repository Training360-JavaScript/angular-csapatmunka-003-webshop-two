import { Component, Input, OnInit } from '@angular/core';
import { Product } from '../../model/product';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss'],
})
export class ProductListComponent implements OnInit {
  @Input() products: Product[] = [];

  keys: string[] = Object.keys(new Product()).filter(item => item == "name" || item == "price" || item == "stock" || item == "featured" || item == "active" );

  phrase: string = '';

  filterKey: string = '';

  sorterKey: string = '';

  constructor() {}

  ngOnInit(): void {}

  onSorterSelect(key: string): void {
    this.sorterKey = key;
  }

}
