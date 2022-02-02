import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { AngularPaginatorModule } from 'angular-paginator';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavigationComponent } from './navigation/navigation.component';
import { ProductCardComponent } from './common/product-card/product-card.component';
import { ProductPagerComponent } from './common/product-pager/product-pager.component';
import { ProductListComponent } from './common/product-list/product-list.component';
import { FilterPipe } from './pipe/filter.pipe';
import { SorterPipe } from './pipe/sorter.pipe';
import { ProductPageComponent } from './common/product-page/product-page.component';
import { DataEditorComponent } from './common/data-editor/data-editor.component';
import { AdminEditProductComponent } from './common/admin-edit-product/admin-edit-product.component';
import { NewProductComponent } from './common/new-product/new-product.component';
import { CategoryEditorComponent } from './common/category-editor/category-editor.component';
import { NewCategoryComponent } from './common/new-category/new-category.component';
import { routingComponents } from './app-routing.module';

@NgModule({
  declarations: [
    routingComponents,
    AppComponent,
    NavigationComponent,
    ProductCardComponent,
    ProductPagerComponent,
    ProductListComponent,
    FilterPipe,
    SorterPipe,
    ProductPageComponent,
    DataEditorComponent,
    AdminEditProductComponent,
    NewProductComponent,
    CategoryEditorComponent,
    NewCategoryComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    AngularPaginatorModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
