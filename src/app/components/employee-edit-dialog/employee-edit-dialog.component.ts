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
  selectedEmployeeType: string;
  selectedSchedule: string;

  ngOnInit(): void { 
    this.employee = Object.assign({}, this.data.employee);
    this.employeeTypes = this.data.employeeTypes;
    this.schedules = this.data.schedules;
    this.selectedEmployeeType = this.employee.employeeType.name;
    this.selectedSchedule = this.employee.schedule.work_days;
    console.log(this.employee);
  }

  closeModal(): void {
    this.dialogRef.close();
  }

  edit(): void {
    this.dialogRef.close(this.employee);
  }

  changeEmployeeType(event: any): void {
    this.employee.employeeType = this.employeeTypeService.getEmployeeTypeByName(this.employeeTypes, event.value);
  }

  changeSchedule(event: any): void {
    this.employee.schedule = this.scheduleService.getScheduleByWorkDays(this.schedules, event.value);
  }

}
