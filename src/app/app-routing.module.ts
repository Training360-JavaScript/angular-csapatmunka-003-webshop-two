import { AdminComponent } from './page/admin/admin.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { Cat01Component } from './page/cat01/cat01.component';
import { Cat02Component } from './page/cat02/cat02.component';
import { HomeComponent } from './page/home/home.component';
import { ProductComponent } from './page/product/product.component';
import { EditProductComponent } from './page/edit-product/edit-product.component';
import { AddProductComponent } from './page/add-product/add-product.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
  },
  {
    path: 'cat01',
    component: Cat01Component,
  },
  {
    path: 'cat02',
    component: Cat02Component,
  },
  {
    path: 'product/:id',
    component: ProductComponent,
  },
  {
    path: 'admin',
    component: AdminComponent,
  },
  {
    path: 'editProduct/:id',
    component: EditProductComponent,
  },
  {
    path: 'newProduct',
    component: AddProductComponent,
  },
  {
    path: '**',
    component: HomeComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
