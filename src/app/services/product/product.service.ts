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
    // TODO: send the message _after_ fetching the heroes
    this.messageService.add('ProductService: fetched products');
    return of(PRODUCTS);
  }

  deleteProduct(product: Product): Observable<Product> {
    return of(product);
  }
}
