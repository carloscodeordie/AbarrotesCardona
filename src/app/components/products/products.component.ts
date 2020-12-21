import { Component, OnInit } from '@angular/core';
import { PRODUCTS } from '../../mocks/mock-products';
import { ProductModel } from '../../interfaces/Product';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {

  constructor() { }

  products = PRODUCTS;
  selectedProduct: ProductModel;
  
  ngOnInit(): void {
    
  }

  onSelect(product: ProductModel): void {
    this.selectedProduct = product;
  }

}
