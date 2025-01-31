namespace EmployeeFinal.srv;
using {employee.db.Employee as Emp} from '../db/Employee';
using {employee.db.Project} from '../db/Project';
using {employee.db.ProjectMasterData} from '../db/ProjectMD';

service ManageProjects {
    @readonly
    entity Employee as projection on Emp;
    entity Projects as projection on Project;
    entity ProjectsMD as projection on ProjectMasterData;    
}

