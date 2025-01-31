namespace employee.db;
using { cuid } from '@sap/cds/common';
using {employee.db.Employee} from './Employee';
using { employee.db.LearningMasterData } from './LearningMD';

using { sap.common.CodeList };

entity Learning : cuid {
    
    employeeID:Association to Employee @assert.target;
    learningID:Association to one LearningMasterData @assert.target;
    status:Association to one LearningStatus;
}
@cds.odata.valuelist
entity LearningStatus : CodeList {
    key code:learningStatusCode;
}

type learningStatusCode : String(2) enum{
    Assigned='01';
    Inprocess='03';
    Completed='05';
};
