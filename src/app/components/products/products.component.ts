import { Component, OnInit } from '@angular/core';

import { Product } from '../../interfaces/Product';
import { Provider } from '../../interfaces/Provider';

import { ProductService } from '../../services/product/product.service';
import { MessageService } from '../../services/message/message.service';
import { ProviderService } from '../../services/provider/provider.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {

  constructor(
    private productService: ProductService, 
    private messageService: MessageService,
    private providerService: ProviderService) { }

  products!: Product[];
  providers!: Provider[];
  selectedProduct!: Product;
  
  ngOnInit(): void {
    this.getProducts();
    this.getProviders();
  }

  getProducts(): void {
    this.productService.getProducts().subscribe(response => {
      this.products = response;
    });
  }

  getProviders(): void {
    this.providerService.getProviders().subscribe(response => {
      this.providers = response;
    });
  }

  onSelectProduct(product: Product): void {
    this.selectedProduct = product;
    this.messageService.add(`ProductsComponent: Selected product id=${product.id}`);
  }

  onDeleteProduct(product: Product): void {
    if(product)
    {
      this.productService.deleteProduct(product).subscribe(response => {
        this.getProducts();
      });
    }
  }

  unsetSelectedProduct(): void {
    this.selectedProduct = null;
  }

}
