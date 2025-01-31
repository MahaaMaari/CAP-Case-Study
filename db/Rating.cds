namespace employee.db;

using { cuid } from '@sap/cds/common';
using {employee.db.Employee} from './Employee';

entity Rating : cuid {
    employeeID:Association to Employee;
    year:Int16;
    rating:Decimal(3,2);
    reviewerID:Association to Employee;
}