import { Component, OnInit } from '@angular/core';

import { Employee } from 'src/app/interfaces/Employee';
import { EmployeeType } from 'src/app/interfaces/EmployeeType';
import { Schedule } from 'src/app/interfaces/Schedule';

import { EmployeeTypeService } from 'src/app/services/employee-type/employee-type.service';
import { EmployeeService } from 'src/app/services/employee/employee.service';
import { MessageService } from 'src/app/services/message/message.service';
import { ScheduleService } from 'src/app/services/schedule/schedule.service';

@Component({
  selector: 'app-employees',
  templateUrl: './employees.component.html',
  styleUrls: ['./employees.component.scss']
})
export class EmployeesComponent implements OnInit {

  constructor(
    private employeeService: EmployeeService, 
    private employeeTypeService: EmployeeTypeService, 
    private scheduleService: ScheduleService, 
    private messageService: MessageService) { }

  employees!: Employee[];
  employeeTypes!: EmployeeType[];
  schedules!: Schedule[];
  selectedEmployee!: Employee;
  
  ngOnInit(): void {
    this.getEmployees();
    this.getEmployeeTypes();
    this.getSchedules();
  }

  getEmployees(): void {
    this.employeeService.getEmployees().subscribe(response => {
      this.employees = response;
    });
  }

  getEmployeeTypes(): void {
    this.employeeTypeService.getEmployeeTypes().subscribe(response => {
      this.employeeTypes = response;
    });
  }

  getSchedules(): void {
    this.scheduleService.getSchedules().subscribe(response => {
      this.schedules = response;
    });
  }

  onSelectRow(employee: Employee): void {
    this.selectedEmployee = employee;
    this.messageService.add(`EmployeeComponent: Selected employee id=${employee.id}`);
  }

  onAdd(employee: Employee): void {
    console.log(employee);
    this.employeeService.addEmployee(employee).subscribe(response => {
      this.getEmployees();
    });
  }

  onEdit(employee: Employee): void {
    console.log(employee);
    this.employeeService.editEmployee(employee).subscribe(response => {
      this.getEmployees();
    });
  }

  onDelete(employee: Employee): void {
    console.log(employee);
    this.employeeService.deleteEmployee(employee).subscribe(response => {
      this.getEmployees();
    });
  }

  unsetSelected(): void {
    this.selectedEmployee = null;
  }

}
