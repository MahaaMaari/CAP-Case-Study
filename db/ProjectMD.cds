namespace employee.db;
using { cuid } from '@sap/cds/common';

entity ProjectMasterData : cuid {
    projectName:String;
    projectDescription:String;
}