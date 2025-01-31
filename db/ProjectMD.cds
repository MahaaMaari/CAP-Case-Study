namespace employee.db;
using { cuid } from '@sap/cds/common';
using {employee.db.Project} from './Project';
entity ProjectMasterData : cuid {
    projectName:String;
    projectDescription:String;
    projects:Composition of many Project on projects.projectID=$self;
}