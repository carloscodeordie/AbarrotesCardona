import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

import {MatTableDataSource} from '@angular/material/table';

import { Product } from '../../interfaces/Product';

@Component({
  selector: 'app-products-table',
  templateUrl: './products-table.component.html',
  styleUrls: ['./products-table.component.scss']
})
export class ProductsTableComponent implements OnInit {

  @Input() products!: Product[];
  @Output() selectProduct = new EventEmitter();

  displayedColumns!: string[];
  dataSource!: any;

  ngOnInit() {
    this.displayedColumns = ['name', 'brand', 'price'];
    this.dataSource = new MatTableDataSource(this.products);
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  onSelect(product: Product): void {
    this.selectProduct.emit(product);
  }

}
