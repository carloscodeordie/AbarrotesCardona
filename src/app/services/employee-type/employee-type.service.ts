import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

import { MessageService } from '../message/message.service';

import { EMPLOYEETYPES } from '../../mocks/mock-employee-types';
import { EmployeeType } from '../../interfaces/EmployeeType';

@Injectable({
  providedIn: 'root'
})
export class EmployeeTypeService {

  constructor(private messageService: MessageService) { }

  getEmployeeTypes(): Observable<EmployeeType[]> {
    this.messageService.add('employeeTypeService: fetched employee types');
    return of(EMPLOYEETYPES);
  }

}
