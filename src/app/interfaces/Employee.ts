import { Schedule } from "./Schedule";
import { EmployeeType } from "./EmployeeType";

export interface Employee
{
    id: number;
    name: string;
    born_date: Date;
    hire_date: Date;
    leave_date: Date;
    social_security_number: number;
    schedule: Schedule;
    employeeType: EmployeeType;
    salary: number;
}