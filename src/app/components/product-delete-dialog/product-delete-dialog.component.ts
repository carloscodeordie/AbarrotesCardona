import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Product } from 'src/app/interfaces/Product';

@Component({
  selector: 'app-product-delete-dialog',
  templateUrl: './product-delete-dialog.component.html'
})
export class ProductDeleteDialogComponent {

  constructor(public dialogRef: MatDialogRef<ProductDeleteDialogComponent>, @Inject(MAT_DIALOG_DATA) public data: Product) { }

  closeModal(): void {
    this.dialogRef.close();
  }

  delete(): void {
    this.dialogRef.close(this.data);
  }

}
