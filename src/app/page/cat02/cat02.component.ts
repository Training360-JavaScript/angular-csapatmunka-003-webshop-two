import { Component, OnInit } from '@angular/core';
import { Category } from 'src/app/model/category';
import { Product } from 'src/app/model/product';
import { CategoryService } from 'src/app/service/category.service';
import { ProductService } from 'src/app/service/product.service';

@Component({
  selector: 'app-cat02',
  templateUrl: './cat02.component.html',
  styleUrls: ['./cat02.component.scss'],
})
export class Cat02Component implements OnInit {
  calligraphyFeatured: Product[] = [];
  calligraphyList: Product[] = [];

  category: Category = new Category()

  constructor(
    private productService: ProductService,
    private categoryService: CategoryService
  ) {
    this.productService.getAll().subscribe(
      (product) =>
        (this.calligraphyFeatured = Object.values(product)
          .filter((item) => item.catId == 2)
          .filter((item) => item.featured == true)
          .sort((a, b) => 0.5 - Math.random())
          .slice(0, 5))
    );
    this.productService
      .getAll()
      .subscribe(
        (product) =>
          (this.calligraphyList = Object.values(product).filter(
            (item) => item.catId == 2
          ))
      );
  }

  ngOnInit(): void {
    this.categoryService.getOne(2).subscribe(
      category => this.category = category
    )
  }
}
