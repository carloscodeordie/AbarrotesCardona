import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

import { Product } from 'src/app/interfaces/Product';
import { Provider } from 'src/app/interfaces/Provider';

import { ProviderService } from '../../services/provider/provider.service';

@Component({
  selector: 'app-product-add-dialog',
  templateUrl: './product-add-dialog.component.html',
  styleUrls: ['./product-add-dialog.component.scss']
})
export class ProductAddDialogComponent implements OnInit {

  product: Product;
  providers: Provider[];
  selectedProvider: string;

  constructor(public dialogRef: MatDialogRef<ProductAddDialogComponent>, 
    @Inject(MAT_DIALOG_DATA) public data: any,
    private providerService: ProviderService) { }

  ngOnInit(): void {
    this.product = this.data.product;
    this.providers = this.data.providers;
    this.selectedProvider = null;
  }

  closeModal(): void {
    this.dialogRef.close();
  }

  addProduct(): void {
    this.dialogRef.close(this.product);
  }

  changeProvider(event: any): void {
    this.product.provider = this.providerService.getProviderByName(this.providers, event.value);
  }

}
