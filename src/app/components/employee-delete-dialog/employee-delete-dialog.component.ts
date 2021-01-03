import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Employee } from 'src/app/interfaces/Employee';

@Component({
  selector: 'app-employee-delete-dialog',
  templateUrl: './employee-delete-dialog.component.html',
  styleUrls: ['./employee-delete-dialog.component.scss']
})
export class EmployeeDeleteDialogComponent {

  constructor(public dialogRef: MatDialogRef<EmployeeDeleteDialogComponent>, @Inject(MAT_DIALOG_DATA) public data: Employee) { }

  closeModal(): void {
    this.dialogRef.close();
  }

  delete(): void {
    this.dialogRef.close(this.data);
  }

}
