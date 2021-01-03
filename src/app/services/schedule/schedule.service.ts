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
  
}
