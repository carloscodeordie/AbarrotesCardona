import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

import { MessageService } from '../message/message.service';

import { SCHEDULES } from '../../mocks/mock-schedules';
import { Schedule } from '../../interfaces/Schedule';

@Injectable({
  providedIn: 'root'
})
export class ScheduleService {

  constructor(private messageService: MessageService) { }

  getSchedules(): Observable<Schedule[]> {
    this.messageService.add('schedulesService: fetched schedules');
    return of(SCHEDULES);
  }

  getScheduleByWorkDays(schedules: Schedule[], workDays: string): Schedule {
    let searched: Schedule;
    // TODO: Change this later to use something more complex
    for(let i = 0; i < schedules.length; i++)
    {
      const aux = schedules[i];
      if(aux.work_days == workDays)
      {
        searched = aux;
        break;
      }
    }
    return searched;
  }
  
}
