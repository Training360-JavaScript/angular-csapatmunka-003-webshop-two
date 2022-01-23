import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/model/product';
import { ProductService } from 'src/app/service/product.service';

@Component({
  selector: 'app-cat02',
  templateUrl: './cat02.component.html',
  styleUrls: ['./cat02.component.scss'],
})
export class Cat02Component implements OnInit {
  catTwoFeatured: Product[] = [];
  catTwoList: Product[] = [];

  constructor(private productService: ProductService) {
    this.productService.getAll().subscribe((products) => {
      this.catTwoFeatured = products
        .filter((item) => item.featured === true && item.catId === 2)
        .sort((a, b) => 0.5 - Math.random())
        .slice(0, 5);

      this.catTwoList = products.filter((item) => item.catId === 2);
    });
  }

  ngOnInit(): void {}
}
