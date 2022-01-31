import { Observable } from 'rxjs';
import { ProductService } from './../../../service/product.service';
import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/model/product';

@Component({
  selector: 'app-data-editor',
  templateUrl: './data-editor.component.html',
  styleUrls: ['./data-editor.component.scss'],
})
export class DataEditorComponent implements OnInit {
  productList: Observable<Product[]>;

  constructor(private ps: ProductService) {
    this.productList = this.ps.getAll();
  }

  ngOnInit(): void {}
}
