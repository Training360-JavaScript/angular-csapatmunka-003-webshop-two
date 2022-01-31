import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable, switchMap } from 'rxjs';
import { Product } from 'src/app/model/product';
import { ProductService } from 'src/app/service/product.service';

@Component({
  selector: 'app-new-product',
  templateUrl: './new-product.component.html',
  styleUrls: ['./new-product.component.scss']
})
export class NewProductComponent implements OnInit {

  product: Product = new Product()

  products$: Observable<Product> = this.activatedRoute.params.pipe(
    switchMap( params => this.ps.getOne(params['id']))
  );

  constructor(
    private activatedRoute: ActivatedRoute,
    private ps: ProductService,
    private router: Router,
  ) { }

  ngOnInit(): void {
  }

  onUpdate(product: Product) :void {
    this.ps.add(product).subscribe(
      product => this.router.navigate(['/', 'admin']),
      err => console.error(err)
    )
  }
}
