using { EmployeeFinal.srv.ManageProjects as Service} from '../../srv/ProjectService';

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
