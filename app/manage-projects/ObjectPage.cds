using { EmployeeFinal.srv.ManageProjects as Service} from '../../srv/projectService';

annotate Service.ProjectsMD with @(
    UI:{
        Facets  : [
            {
                $Type : 'UI.ReferenceFacet',
                Target : '@UI.FieldGroup#general',
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

annotate Service.Employee with @(
    UI:{
        LineItem #employee : [
            {
                $Type : 'UI.DataField',
                Value : ID
            },
            {
                $Type : 'UI.DataField',
                Value : firstName,
            },
            {
                $Type : 'UI.DataField',
                Value : lastName,
            },
        ],
    }
){
    @(
        Common:{
            Text : {
                $value: empID,
                ![@UI.TextArrangement] : #TextOnly,
            },
            Label : 'Employee ID',
        }

    )
    ID;
    @(
        Common:{
            Label : 'First Name',
        }
    )
    firstName;
    @(
        Common:{
            Label : 'Last Name',
        }
    )
    lastName;
};

