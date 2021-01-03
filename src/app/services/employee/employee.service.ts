import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

import { MessageService } from '../message/message.service';

import { EMPLOYEES } from '../../mocks/mock-employees';
import { Employee } from '../../interfaces/Employee';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  constructor(private messageService: MessageService) { }

  getEmployees(): Observable<Employee[]> {
    this.messageService.add('employeeService: fetched employees');
    return of(EMPLOYEES);
  }

  getEmployeeById(id: string) {
    return of(EMPLOYEES[0]);
  }

  addEmployee(employee: Employee): Observable<Employee> {
    return of(employee);
  }

  editEmployee(employee: Employee): Observable<Employee> {
    return of(employee);
  }

  deleteEmployee(employee: Employee): Observable<Employee> {
    return of(employee);
  }
}
