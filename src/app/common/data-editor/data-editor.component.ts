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


  keys: string[] = Object.keys(new Product()).filter(item => item == "id" || item == "catId" || item == "name" || item == "price" || item == "stock" || item == "featured" || item == "active" );

  phrase: string = '';

  filterKey: string = '';

  sorterKey: string = '';

  direction: number = -1;

  directionId: number = 1;
  directionCatId: number = 1;
  directionPrice: number = 1;
  directionName: number = 1;
  directionStock: number = 1;
  directionFeatured: number = 1;
  directionActive: number = 1;

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

  onColumnSorter(key: string) : void {
    this.sorterKey = key;
    if (key === 'id') {
      this.direction = this.directionId;
      this.directionId = this.directionId*-1;
    }
    if (key === 'catId') {
      this.direction = this.directionCatId;
      this.directionCatId = this.directionCatId*-1;
    }
    if (key === 'name') {
      this.direction = this.directionName;
      this.directionName = this.directionName*-1;
    }
    if (key === 'price') {
      this.direction = this.directionPrice;
      this.directionPrice = this.directionPrice*-1;
    }
    if (key === 'stock') {
      this.direction = this.directionStock;
      this.directionStock = this.directionStock*-1;
    }
    if (key === 'featured') {
      this.direction = this.directionFeatured;
      this.directionFeatured = this.directionFeatured*-1;
    }
    if (key === 'active') {
      this.direction = this.directionActive;
      this.directionActive = this.directionActive*-1;
    }
  }

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
