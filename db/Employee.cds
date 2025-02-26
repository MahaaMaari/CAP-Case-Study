namespace employee.db;
using { cuid } from '@sap/cds/common';
using {sap.common.CodeList as CodeList};
using {employee.db.Learning} from './Learning';
using {employee.db.Project} from './Project';
using {employee.db.Rating} from './Rating';
@Common : { SemanticKey  : [
    empID
], }
entity Employee : cuid {
    empID:String(10) @(
        Common:{
            Label : 'Employee ID',
        }
    );
    firstName:String(20) @(
        Common:{
            Label : 'First Name',
        }
    );
    lastName:String(20) @(
        Common:{
            Label : 'Last Name',
        }
    );
    emialID:String(40) @(
        Common:{
            Label : 'Email ID',
        }
    );
    address:String;
    phoneNumber:String(10);
    status:Association to one EmpStatus;
    bankeName:String(30);
    bankAccountNumber:String(30);
    bankCode:String(10);
    annualLeavesGranted:Int16;
    annualLeavesUsed:Int16;
    @cds.persistance.skip:true
    deletable:Boolean @Core.Computed:false;
    to_Learnings:Association to many Learning on to_Learnings.employeeID=$self;
    to_Ratings:Association to many Rating on to_Ratings.employeeID=$self;
    to_projects:Association to many Project on to_projects.employeeID=$self;
}

@cds.odata.valuelist
entity EmpStatus : CodeList {
    key code:empStatusCode
}

type empStatusCode : String(2) enum{
    InPreperation='01';
    Active='03';
    Obsolete='05';
}
