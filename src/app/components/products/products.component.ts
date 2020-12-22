import { Component, OnInit } from '@angular/core';

import { Product } from '../../interfaces/Product';
import { ProductService } from '../../services/product/product.service';
import { MessageService } from '../../services/message/message.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {

  constructor(private productService: ProductService, private messageService: MessageService) { }

  products!: Product[];
  selectedProduct!: Product;
  
  ngOnInit(): void {
    this.getProducts();
  }

  getProducts(): void {
    this.productService.getProducts().subscribe(response => {
      this.products = response;
    });
  }

  setSelectedProduct(product: Product): void {
    this.selectedProduct = product;
    this.messageService.add(`ProductsComponent: Selected product id=${product.id}`);
  }

  unsetSelectedProduct(): void {
    this.selectedProduct = null;
  }

}
