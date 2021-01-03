import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

import { Employee } from 'src/app/interfaces/Employee';
import { EmployeeType } from 'src/app/interfaces/EmployeeType';
import { Schedule } from 'src/app/interfaces/Schedule';

import { EmployeeTypeService } from '../../services/employee-type/employee-type.service';
import { ScheduleService } from '../../services/schedule/schedule.service';

@Component({
  selector: 'app-employee-edit-dialog',
  templateUrl: './employee-edit-dialog.component.html',
  styleUrls: ['./employee-edit-dialog.component.scss']
})
export class EmployeeEditDialogComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<EmployeeEditDialogComponent>, 
    @Inject(MAT_DIALOG_DATA) public data: any,
    private employeeTypeService: EmployeeTypeService,
    private scheduleService: ScheduleService) { }

  employee: Employee;
  employeeTypes: EmployeeType[];
  schedules: Schedule[];
  selectedEmployee: string;

  ngOnInit(): void { 
    this.employee = Object.assign({}, this.data.employee);
    this.employeeTypes = this.data.employeeTypes;
    this.schedules = this.data.schedules;
  }

  closeModal(): void {
    this.dialogRef.close();
  }

  edit(): void {
    this.dialogRef.close(this.employee);
  }

}
