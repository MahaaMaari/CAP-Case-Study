namespace employee.db;
using { cuid } from '@sap/cds/common';
using {employee.db.Employee} from './Employee';
using { employee.db.ProjectMasterData as ProjectMasterData } from './ProjectMD';

entity Project : cuid {
    employeeID:Association to Employee @assert.target; 
    projectID:Association to one ProjectMasterData @assert.target;    
}
