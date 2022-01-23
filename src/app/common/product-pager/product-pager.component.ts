import { Product } from './../../model/product';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-product-pager',
  templateUrl: './product-pager.component.html',
  styleUrls: ['./product-pager.component.scss'],
})
export class ProductPagerComponent implements OnInit {
  @Input() products: Product[] = [];
  constructor() {}

  ngOnInit(): void {}
}
