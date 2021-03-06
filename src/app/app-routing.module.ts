import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProductsComponent } from './pages/products/products.component';
import { ProductSearchComponent } from './pages/product-search/product-search.component';
import { EmployeesComponent } from './pages/employees/employees.component';

const routes: Routes = [
  { path: 'products', component: ProductsComponent },
  { path: 'products/search', component: ProductSearchComponent },
  { path: 'employees', component: EmployeesComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
