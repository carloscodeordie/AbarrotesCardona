import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Product } from '../../interfaces/Product';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.scss']
})
export class ProductDetailComponent implements OnInit {

  constructor() { }

  @Input() product!: Product;
  @Output() closeProduct = new EventEmitter();

  ngOnInit(): void {
  }

  onClose(): void {
    this.closeProduct.emit();
  }

}
