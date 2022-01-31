import { Observable } from 'rxjs';
import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/model/product';
import { ProductService } from 'src/app/service/product.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-data-editor',
  templateUrl: './data-editor.component.html',
  styleUrls: ['./data-editor.component.scss'],
})
export class DataEditorComponent implements OnInit {

  keys: string[] = Object.keys(new Product())

  phrase: string = '';

  filterKey: string = '';

  productList: Observable<Product[]>;

  disabled: boolean = true;

  update:boolean = true

  constructor(private ps: ProductService, private router: Router) {
    this.productList = this.ps.getAll();
  }

  ngOnInit(): void {}

  onUpdateProduct(product: Product): void {
    product['disabled'] = false,
    this.update = false
  }

  onSaveProduct(product: Product): void {
    product['disabled'] = true,
    this.update = true
    this.ps.update(product).subscribe(
      product => this.router.navigate(['/', 'admin']),
      err => console.error(err)
    )
  }

  onDeleteProduct(product: Product): void {
    product['disabled'] = true,
    this.update = true
    this.ps.remove(product.id).subscribe(
      product => this.router.navigateByUrl('/', {skipLocationChange: true}).then(() => {
        this.router.navigate(['/', 'admin'])}
      )
    )
  }
}
