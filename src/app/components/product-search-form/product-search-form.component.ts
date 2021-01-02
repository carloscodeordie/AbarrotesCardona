import { Component, OnInit } from '@angular/core';

import { Product } from '../../interfaces/Product';

import { ProductService } from '../../services/product/product.service';

@Component({
  selector: 'app-product-search-form',
  templateUrl: './product-search-form.component.html',
  styleUrls: ['./product-search-form.component.scss']
})
export class ProductSearchFormComponent implements OnInit {

  constructor(private productService: ProductService) { }

  ngOnInit(): void {
  }

  search: string;
  product: Product;

  searchProduct(): void {
    this.productService.getProductByCode(this.search).subscribe((response: Product) => {
      this.product = response;
    });
  }

  doSearch(event: any): void {
    if(this.search.length === 12) {
      this.searchProduct();
    }
  }

  clearSearch(): void {
    this.search = null;
    this.product = null;
  }

}
