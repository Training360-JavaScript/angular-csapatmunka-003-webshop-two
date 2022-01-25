import { Component, Input, OnInit } from '@angular/core';
import { Product } from '../../model/product';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss'],
})
export class ProductListComponent implements OnInit {
  @Input() products: Product[] = [];

  phrase: string = '';

  constructor() {}

  ngOnInit(): void {}

  Search(): void {
    if (this.phrase !== '') {
      this.products = this.products.filter((result) => {
        return result.name.toLowerCase().includes(this.phrase.toLowerCase());
      });
    }
  }
}
