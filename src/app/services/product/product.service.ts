import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

import { MessageService } from '../message/message.service';

import { PRODUCTS } from '../../mocks/mock-products';
import { Product } from '../../interfaces/Product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private messageService: MessageService) { }

  getProducts(): Observable<Product[]> {
    this.messageService.add('ProductService: fetched products');
    return of(PRODUCTS);
  }

  getProductByCode(code: string) {
    return of(PRODUCTS[0]);
  }

  editProduct(product: Product): Observable<Product> {
    return of(product);
  }

  deleteProduct(product: Product): Observable<Product> {
    return of(product);
  }
}
