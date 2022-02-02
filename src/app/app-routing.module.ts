import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EditCategoryComponent } from './page/edit-category/edit-category.component';
import { AdminComponent } from './page/admin/admin.component';
import { Cat01Component } from './page/cat01/cat01.component';
import { Cat02Component } from './page/cat02/cat02.component';
import { HomeComponent } from './page/home/home.component';
import { ProductComponent } from './page/product/product.component';
import { EditProductComponent } from './page/edit-product/edit-product.component';
import { AddProductComponent } from './page/add-product/add-product.component';

export const routingComponents = [
  EditCategoryComponent,
  AdminComponent,
  Cat01Component,
  Cat02Component,
  HomeComponent,
  ProductComponent,
  EditProductComponent,
  AddProductComponent,
];

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
    path: 'editCategory',
    component: EditCategoryComponent,
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
