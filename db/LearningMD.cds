namespace employee.db;
using { cuid } from '@sap/cds/common';
using { sap.common.CodeList as CodeList };
using {employee.db.Employee} from './Employee';
using { employee.db.Learning } from './Learning';

entity LearningMasterData : cuid {
    courseDescription:String;
    availability:Int16;
    @Common:{
        Text :{
            $value: assignToType.descr,
            ![@UI.TextArrangement] : #TextOnly,
        },
    }
    assignToType:Association to one CourseType;
    courseContacts:Association to many CourseContacts on courseContacts.courseID=$self;
    to_Learnings:Composition of  many Learning on to_Learnings.learningID=$self;
}

entity CourseContacts : cuid {
    employeeID:Association to Employee;
    courseID:Association to LearningMasterData;
}
type courseType : String(2) enum{
    Onboarding='OB';
    GeneralCources='GC';
};

@cds.odata.valuelist
entity CourseType : CodeList {
    key code:courseType;
}