import { Employee } from '../interfaces/Employee';

export const EMPLOYEES: Employee[] = [
    { 
      id: 1, 
      name: 'Jose Miguel Cardona Chavez',
      born_date: new Date(),
      hire_date: new Date(),
      leave_date: new Date(),
      salary: 12000,
      social_security_number: 1234567890,
      employeeType: {
        id: 1,
        name: 'Administrador'
      },
      schedule: {
        id: 1,
        check_in: new Date(),
        check_out: new Date(),
        work_days: 'LUNES-VIERNES'
      }
    }
  ];