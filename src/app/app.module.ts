import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSliderModule } from '@angular/material/slider';
import { LayoutModule } from '@angular/cdk/layout';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatDialogModule } from '@angular/material/dialog';
import { MatCheckboxModule } from '@angular/material/checkbox';

import { ProductsComponent } from './pages/products/products.component';
import { ProductSearchComponent } from './pages/product-search/product-search.component';
import { EmployeesComponent } from './pages/employees/employees.component';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LayoutComponent } from './layout/layout.component';

import { ProductDetailComponent } from './components/product-detail/product-detail.component';
import { MessagesComponent } from './components/messages/messages.component';
import { ProductsTableComponent } from './components/products-table/products-table.component';
import { ProductDeleteDialogComponent } from './components/product-delete-dialog/product-delete-dialog.component';
import { ProductSearchFormComponent } from './components/product-search-form/product-search-form.component';
import { ProductEditDialogComponent } from './components/product-edit-dialog/product-edit-dialog.component';
import { ProductAddDialogComponent } from './components/product-add-dialog/product-add-dialog.component';
import { EmployeeDetailComponent } from './components/employee-detail/employee-detail.component';
import { EmployeesTableComponent } from './components/employees-table/employees-table.component';
import { EmployeeAddDialogComponent } from './components/employee-add-dialog/employee-add-dialog.component';
import { EmployeeEditDialogComponent } from './components/employee-edit-dialog/employee-edit-dialog.component';
import { EmployeeDeleteDialogComponent } from './components/employee-delete-dialog/employee-delete-dialog.component';

@NgModule({
  declarations: [
    AppComponent,
    ProductsComponent,
    ProductDetailComponent,
    MessagesComponent,
    LayoutComponent,
    ProductsTableComponent,
    ProductDeleteDialogComponent,
    ProductSearchComponent,
    ProductSearchFormComponent,
    ProductEditDialogComponent,
    ProductAddDialogComponent,
    EmployeesComponent,
    EmployeeDetailComponent,
    EmployeesTableComponent,
    EmployeeAddDialogComponent,
    EmployeeEditDialogComponent,
    EmployeeDeleteDialogComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatSliderModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    MatToolbarModule,
    LayoutModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    MatGridListModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatDialogModule,
    MatCheckboxModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
