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

  getEmployeeTypeByName(employeeTypes: EmployeeType[], name: string): EmployeeType {
    let searched: EmployeeType;
    // TODO: Change this later to use something more complex
    for(let i = 0; i < employeeTypes.length; i++)
    {
      const aux = employeeTypes[i];
      if(aux.name == name)
      {
        searched = aux;
        break;
      }
    }
    return searched;
  }

}
