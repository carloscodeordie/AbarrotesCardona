import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

import { MatSelectChange } from '@angular/material/select';
import { MatTableDataSource } from '@angular/material/table';
import { MatDialog } from '@angular/material/dialog';

import { Employee } from '../../interfaces/Employee';
import { EmployeeType } from '../../interfaces/EmployeeType';
import { Schedule } from '../../interfaces/Schedule';

import { EmployeeAddDialogComponent } from '../employee-add-dialog/employee-add-dialog.component';
import { EmployeeDeleteDialogComponent } from '../employee-delete-dialog/employee-delete-dialog.component';
import { EmployeeEditDialogComponent } from '../employee-edit-dialog/employee-edit-dialog.component';

@Component({
  selector: 'app-employees-table',
  templateUrl: './employees-table.component.html',
  styleUrls: ['./employees-table.component.scss']
})
export class EmployeesTableComponent implements OnInit {

  @Input() employees!: Employee[];
  @Input() employeeTypes!: EmployeeType[];
  @Input() schedules!: Schedule[];
  @Input() selectedEmployee: Employee;

  @Output() onSelectRow = new EventEmitter();
  @Output() onDelete = new EventEmitter();
  @Output() onEdit = new EventEmitter();
  @Output() onAdd = new EventEmitter();

  displayedColumns!: string[];
  dataSource!: any;
  selectedFilter: string;
  
  constructor(public dialog: MatDialog) { }

  ngOnInit() {
    this.selectedFilter = '';
    
    this.displayedColumns = ['actions', 'name', 'born_date', 'work_days'];
    this.dataSource = new MatTableDataSource(this.employees);
  }

  isFiltersSelected(): boolean {
    let isFilters: boolean = false;
    if(this.selectedFilter !== '') {
      isFilters = true;
    }
    return isFilters;
  }

  clearFilters(): void {
    this.selectedFilter = '';
    
    this.dataSource.filter = this.selectedFilter;
  }

  applyGeneralFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  onSelect(employee: Employee): void {
    this.onSelectRow.emit(employee);
  }

  openAddModal(): void {
    let newRow: Employee = {
      id: null,
      name: null,
      born_date: null,
      hire_date: null,
      leave_date: null,
      salary: null,
      social_security_number: null,
      employeeType: {
        id: null,
        name: null
      },
      schedule: {
        id: null,
        check_in: null,
        check_out: null,
        work_days: null
      }
    }
    
    const dialogRef = this.dialog.open(EmployeeAddDialogComponent, {
      data: {
        employee: newRow,
        employeeTypes: this.employeeTypes,
        schedules: this.schedules
      }
    });

    dialogRef.afterClosed().subscribe(result => {
      if(result) {
        this.onAdd.emit(result);
      }
    });
  }

  openDeleteModal(employee: Employee): void {
    const dialogRef = this.dialog.open(EmployeeDeleteDialogComponent, {
      data: {
        employee: employee
      }
    });

    dialogRef.afterClosed().subscribe(result => {
      if(result) {
        this.onDelete.emit(result.employee);
      }
    });
  }

  openEditModal(employee: Employee): void {
    const dialogRef = this.dialog.open(EmployeeEditDialogComponent, {
      data: {
        employee: employee,
        employeeTypes: this.employeeTypes,
        schedules: this.schedules
      }
    });

    dialogRef.afterClosed().subscribe(employee => {
      if(employee) {
        this.onEdit.emit(employee);
      }
    });
  }

}