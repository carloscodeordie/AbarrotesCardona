import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProductsComponent } from './pages/products/products.component';
import { ProductSearchComponent } from './pages/product-search/product-search.component';

const routes: Routes = [
  { path: 'products', component: ProductsComponent },
  { path: 'products/search', component: ProductSearchComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
