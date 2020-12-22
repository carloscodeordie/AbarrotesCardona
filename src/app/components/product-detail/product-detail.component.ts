import { Component, OnInit, Input } from '@angular/core';
import { ProductModel } from '../../interfaces/Product';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.scss']
})
export class ProductDetailComponent implements OnInit {

  constructor() { }

  @Input() product!: ProductModel;

  ngOnInit(): void {
  }

}
