import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

import { MatSelectChange } from '@angular/material/select';
import { MatTableDataSource } from '@angular/material/table';
import { MatDialog } from '@angular/material/dialog';

import { Product } from '../../interfaces/Product';
import { Provider } from '../../interfaces/Provider';

import { ProductAddDialogComponent } from '../product-add-dialog/product-add-dialog.component';
import { ProductDeleteDialogComponent } from '../product-delete-dialog/product-delete-dialog.component';
import { ProductEditDialogComponent } from '../product-edit-dialog/product-edit-dialog.component';

@Component({
  selector: 'app-products-table',
  templateUrl: './products-table.component.html',
  styleUrls: ['./products-table.component.scss']
})
export class ProductsTableComponent implements OnInit {

  @Input() products!: Product[];
  @Input() providers!: Provider[];
  @Input() selectedProduct: Product;

  @Output() onSelectProduct = new EventEmitter();
  @Output() onDeleteProduct = new EventEmitter();
  @Output() onEditProduct = new EventEmitter();
  @Output() onAddProduct = new EventEmitter();

  displayedColumns!: string[];
  dataSource!: any;
  selectedFilter: string;
  selectedProvider: string;
  
  constructor(public dialog: MatDialog) { }

  ngOnInit() {
    this.selectedFilter = '';
    
    this.displayedColumns = ['actions', 'name', 'description', 'price_sale'];
    this.dataSource = new MatTableDataSource(this.products);
  }

  isFiltersSelected(): boolean {
    let isFilters: boolean = false;
    if(this.selectedFilter !== '' || this.selectedProvider) {
      isFilters = true;
    }
    return isFilters;
  }

  clearFilters(): void {
    this.selectedFilter = '';
    this.selectedProvider = null;

    this.dataSource.filter = this.selectedFilter;
  }

  applyGeneralFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    this.selectedProvider = null;
  }

  applyProviderFilter(option: MatSelectChange) {
    this.dataSource.filter = this.selectedProvider.trim().toLowerCase();

    this.selectedFilter = null;
  }

  onSelect(product: Product): void {
    this.onSelectProduct.emit(product);
  }

  openAddModal(): void {
    let newProduct: Product = {
      id: null,
      code: null,
      name: null,
      description: null,
      current_stock: null,
      minimum_stock: null,
      price_buy: null,
      price_sale: null,
      provider: null
    }
    
    const dialogRef = this.dialog.open(ProductAddDialogComponent, {
      data: {
        product: newProduct,
        providers: this.providers
      }
    });

    dialogRef.afterClosed().subscribe(result => {
      if(result) {
        this.onAddProduct.emit(result);
      }
    });
  }

  openDeleteModal(product: Product): void {
    const dialogRef = this.dialog.open(ProductDeleteDialogComponent, {
      data: {
        product: product
      }
    });

    dialogRef.afterClosed().subscribe(result => {
      if(result) {
        this.onDeleteProduct.emit(result.product);
      }
    });
  }

  openEditModal(product: Product): void {
    const dialogRef = this.dialog.open(ProductEditDialogComponent, {
      data: {
        product: product,
        providers: this.providers
      }
    });

    dialogRef.afterClosed().subscribe(product => {
      if(product) {
        this.onEditProduct.emit(product);
      }
    });
  }

}
