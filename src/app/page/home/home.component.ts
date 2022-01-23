import { Observable } from 'rxjs';
import { ProductService } from './../../service/product.service';
import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/model/product';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  productList: Product[] = [];
  discountList: Product[] = [];

  constructor(private productService: ProductService) {
    this.productService.getAll().subscribe((products) => {
      this.productList = products
        .filter((item) => item.featured === true)
        .sort((a, b) => 0.5 - Math.random())
        .slice(0, 5);

      this.discountList = products
        .filter((item) => item.featured === false)
        .sort((a, b) => 0.5 - Math.random())
        .slice(0, 5);
    });
  }

  ngOnInit(): void {}
}
