import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

import { MatSelectChange } from '@angular/material/select';
import { MatTableDataSource } from '@angular/material/table';
import { MatDialog } from '@angular/material/dialog';

import { Product } from '../../interfaces/Product';
import { Provider } from '../../interfaces/Provider';

import { ProductDeleteDialogComponent } from '../product-delete-dialog/product-delete-dialog.component';
import { SelectionModel } from '@angular/cdk/collections';

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

  displayedColumns!: string[];
  dataSource!: any;
  selectedFilter: string;
  selectedProvider: string;
  
  constructor(public dialog: MatDialog) { }

  ngOnInit() {
    this.selectedFilter = '';
    
    this.displayedColumns = ['actions', 'name', 'brand', 'price'];
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

  OpenDeleteModal(product: Product): void {
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

}
