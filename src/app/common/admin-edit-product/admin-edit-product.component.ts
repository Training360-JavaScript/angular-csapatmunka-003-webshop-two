import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable, switchMap } from 'rxjs';
import { Product } from 'src/app/model/product';
import { ProductService } from 'src/app/service/product.service';

@Component({
  selector: 'app-admin-edit-product',
  templateUrl: './admin-edit-product.component.html',
  styleUrls: ['./admin-edit-product.component.scss']
})
export class AdminEditProductComponent implements OnInit {

  product$: Observable<Product> = this.activatedRoute.params.pipe(
    switchMap( params => this.ps.getOne(params['id']))
  )

  disabled: boolean = true;

  update:boolean = true

  constructor(
    private activatedRoute: ActivatedRoute,
    private ps: ProductService,
    private router: Router,
  ) { }

  ngOnInit(): void {
  }

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
      product => this.router.navigate(['/', 'admin']),
      err => console.error(err)
    )
}

}
