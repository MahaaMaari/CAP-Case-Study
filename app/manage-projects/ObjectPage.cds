using { EmployeeFinal.srv.ManageProjects as Service} from '../../srv/projectService';

annotate Service.ProjectsMD with @(
    UI:{
        Facets  : [
            {
                $Type : 'UI.ReferenceFacet',
                Target : '@UI.FieldGroup#general',
            },
            {
                $Type : 'UI.ReferenceFacet',
                Target : 'projects/@UI.LineItem#employee',
            },
        ],
        FieldGroup #general : {
            $Type : 'UI.FieldGroupType',
            Data : [
                {
                    $Type : 'UI.DataField',
                    Value : projectName,
                },
                {
                    $Type : 'UI.DataField',
                    Value : projectDescription,
                },
            ],
        },
    }
);

annotate Service.Projects with @(
    UI:{
        LineItem #employee : [
            {
                $Type : 'UI.DataField',
                Value : employeeID.empID,
            },
            {
                $Type : 'UI.DataField',
                Value : employeeID.firstName,
            },
            {
                $Type : 'UI.DataField',
                Value : employeeID.lastName,
            },
        ],
    }
){
};

