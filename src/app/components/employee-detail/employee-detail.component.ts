import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Employee } from '../../interfaces/Employee';

@Component({
  selector: 'app-employee-detail',
  templateUrl: './employee-detail.component.html',
  styleUrls: ['./employee-detail.component.scss']
})
export class EmployeeDetailComponent implements OnInit {

  constructor() { }

  @Input() employee!: Employee;
  @Output() closeDetails = new EventEmitter();

  ngOnInit(): void {
  }

  onClose(): void {
    this.closeDetails.emit();
  }

}
