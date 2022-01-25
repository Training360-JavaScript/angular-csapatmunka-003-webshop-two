import { CategoryService } from './../../service/category.service';
import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/model/product';
import { ProductService } from 'src/app/service/product.service';
import { Category } from 'src/app/model/category';

@Component({
  selector: 'app-cat01',
  templateUrl: './cat01.component.html',
  styleUrls: ['./cat01.component.scss'],
})
export class Cat01Component implements OnInit {
  businessFeatured: Product[] = [];
  businessList: Product[] = [];
  category: Category = this.categoryService.list[0];

  constructor(
    private productService: ProductService,
    private categoryService: CategoryService
  ) {
    this.productService.getAll().subscribe(
      (product) =>
        (this.businessFeatured = Object.values(product)
          .filter((item) => item.catId == 1)
          .filter((item) => item.featured == true)
          .sort((a, b) => 0.5 - Math.random())
          .slice(0, 5))
    );
    this.productService
      .getAll()
      .subscribe(
        (product) =>
          (this.businessList = Object.values(product).filter(
            (item) => item.catId == 1
          ))
      );
  }

  ngOnInit(): void {}
}
