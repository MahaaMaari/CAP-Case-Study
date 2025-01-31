using {EmployeeFinal.srv.ManageProjects as Service} from '../../srv/projectService';
annotate Service.ProjectsMD with @(
    odata.draft.enabled,
    UI:{
        HeaderInfo  : {
            $Type : 'UI.HeaderInfoType',
            TypeName : 'Project',
            TypeNamePlural : 'Projects',
            Title : {
                $Type : 'UI.DataField',
                Value : projectName,
            },
            Description : {
                $Type : 'UI.DataField',
                Value : projectDescription,
            },
        },
        LineItem  : [
            {
                $Type : 'UI.DataField',
                Value : projectName,
            },
            {
                $Type : 'UI.DataField',
                Value : projectDescription,
            },
        ],
    }
){
    @(
        Common:{
            Text : {
                $value: projectName,
                ![@UI.TextArrangement] : #TextOnly,
            },
        }
    )
    ID;
    @(
        Common:{
            Label : 'Project Name',
        }
    )
    projectName;
    @(
        Common:{
            Label : 'Project Description',
        }
    )
    projectDescription;

};


