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

  direction: number = -1;

  directionPrice: number = 1;
  directionName: number = 1;
  directionStock: number = 1;
  directionFeatured: number = 1;
  directionActive: number = 1;

  constructor() {}

  ngOnInit(): void {}

  onSorterSelect(key: string): void {
    this.sorterKey = key;
    if (this.sorterKey == 'price') {
      this.directionPrice = 1;
      this.direction = this.directionPrice
    }
    if (this.sorterKey == 'name') {
      this.directionName = 1;
      this.direction = this.directionName
    }
    if (this.sorterKey == 'stock') {
      this.directionStock = 1;
      this.direction = this.directionStock
    }
    if (this.sorterKey == 'featured') {
      this.directionFeatured = 1;
      this.direction = this.directionFeatured
    }
    if (this.sorterKey == 'active') {
      this.directionActive = 1;
      this.direction = this.directionActive
    }
  }

  onBackSorterSelect(key: string): void {
    this.sorterKey = key;
    if (this.sorterKey == 'price') {
      this.directionPrice = -1;
      this.direction = this.directionPrice
    }
    if (this.sorterKey == 'name') {
      this.directionName = -1;
      this.direction = this.directionName
    }
    if (this.sorterKey == 'stock') {
      this.directionStock = -1;
      this.direction = this.directionStock
    }
    if (this.sorterKey == 'featured') {
      this.directionFeatured = -1;
      this.direction = this.directionFeatured
    }
    if (this.sorterKey == 'active') {
      this.directionActive = -1;
      this.direction = this.directionActive
    }
  }

}
