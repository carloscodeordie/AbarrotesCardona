import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

import { Employee } from 'src/app/interfaces/Employee';
import { EmployeeType } from 'src/app/interfaces/EmployeeType';
import { Schedule } from 'src/app/interfaces/Schedule';

import { EmployeeTypeService } from '../../services/employee-type/employee-type.service';
import { ScheduleService } from '../../services/schedule/schedule.service';

@Component({
  selector: 'app-employee-add-dialog',
  templateUrl: './employee-add-dialog.component.html',
  styleUrls: ['./employee-add-dialog.component.scss']
})
export class EmployeeAddDialogComponent implements OnInit {

  employee: Employee;
  employeeTypes: EmployeeType[];
  schedules: Schedule[];
  selectedEmployee: string;

  constructor(public dialogRef: MatDialogRef<EmployeeAddDialogComponent>, 
    @Inject(MAT_DIALOG_DATA) public data: any,
    private employeeTypeService: EmployeeTypeService,
    private scheduleService: ScheduleService) { }

  ngOnInit(): void {
    this.employee = this.data.employee;
    this.employeeTypes = this.data.employeeTypes;
    this.schedules = this.data.schedules;
    this.selectedEmployee = null;
  }

  closeModal(): void {
    this.dialogRef.close();
  }

  add(): void {
    this.dialogRef.close(this.employee);
  }

}