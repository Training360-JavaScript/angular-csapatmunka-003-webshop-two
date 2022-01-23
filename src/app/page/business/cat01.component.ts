import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/model/product';
import { ProductService } from 'src/app/service/product.service';

@Component({
  selector: 'app-cat01',
  templateUrl: './cat01.component.html',
  styleUrls: ['./cat01.component.scss'],
})
export class Cat01Component implements OnInit {
  catOneFeatured: Product[] = [];
  catOneList: Product[] = [];

  constructor(private productService: ProductService) {
    this.productService.getAll().subscribe((products) => {
      this.catOneFeatured = products
        .filter((item) => item.featured === true && item.catId === 1)
        .sort((a, b) => 0.5 - Math.random())
        .slice(0, 5);

      this.catOneList = products.filter((item) => item.catId === 1);
    });
  }

  ngOnInit(): void {}
}
