import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

import { Product } from 'src/app/interfaces/Product';
import { Provider } from 'src/app/interfaces/Provider';

import { ProviderService } from '../../services/provider/provider.service';

@Component({
  selector: 'app-product-edit-dialog',
  templateUrl: './product-edit-dialog.component.html',
  styleUrls: ['./product-edit-dialog.component.scss']
})
export class ProductEditDialogComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<ProductEditDialogComponent>, 
    @Inject(MAT_DIALOG_DATA) public data: any,
    private providerService: ProviderService) { }

  product: Product;
  providers: Provider[];
  selectedProvider: string;

  ngOnInit(): void { 
    this.product = Object.assign({}, this.data.product);
    this.providers = this.data.providers;
    this.selectedProvider = this.product.provider.name;
  }

  closeModal(): void {
    this.dialogRef.close();
  }

  editProduct(): void {
    this.dialogRef.close(this.product);
  }

  changeProvider(event: any): void {
    this.product.provider = this.providerService.getProviderByName(this.providers, event.value);
  }
}
