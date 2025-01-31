namespace employee.srv.EmployeeService;

using {employee.db.Employee as Emp} from '../db/Employee';
using {employee.db.Learning} from '../db/Learning';
using {employee.db.LearningMasterData} from '../db/LearningMD';
using {employee.db.Project} from '../db/Project';
using {employee.db.ProjectMasterData} from '../db/ProjectMD';
using {employee.db.Rating} from '../db/Rating';

@(
    requires: 'authenticated-user',
    impl    : 'srv/EmployeeService/empService.ts'
)
service ManageEmployee {
    @(restrict: [
        {
            grant: [
                'READ'
            ],
            to   : ['admin','End-User']
        },
        {
            grant: ['WRITE','inActive','addProject'],
            to   : 'admin'
        }
    ])
    entity Employee   as
        projection on Emp {
            *,
            @Core.Computed          : false
            deletable
        }
        actions {
            @Common.SideEffects     : {
                TargetEntities  : [emp],
                TargetProperties: [emp.status_code],
                SourceEntities  : [emp],
                SourceProperties: [
                    emp.status_code,
                    emp.deletable
                ],
            }
            @Core.OperationAvailable: {$edmJson: {$If: [
                {$Path: 'emp/deletable'},
                false,
                true
            ]}}
            action inActive(emp : $self);
            @(
                Common:{
                    SideEffects : {
                        $Type : 'Common.SideEffectsType',
                        TargetEntities : [
                            in.to_projects
                        ],
                        SourceEntities : [
                            in
                        ],
                    }
                },
                Core:{
                    OperationAvailable:{$edmJson:{
                        $If:[
                            {$Eq:[{$Path:'in/status_code'},'03']},
                            true,
                            false
                        ]
                    }}
                }
            )
            action addProject(@(
                Common : { 
                    ValueList : {
                        $Type : 'Common.ValueListType',
                        CollectionPath : 'ProjectMD',
                        Parameters : [
                            {
                                $Type : 'Common.ValueListParameterOut',
                                LocalDataProperty : projectID,
                                ValueListProperty : 'ID',
                            },
                            {
                                $Type : 'Common.ValueListParameterIn',
                                ValueListProperty : 'projectName',
                                LocalDataProperty : projectID,
                            },
                            {
                                $Type : 'Common.ValueListParameterDisplayOnly',
                                ValueListProperty : 'projectDescription',
                            },
                        ],
                    },
                 },
            )projectID:UUID);
        };

    @readonly
    entity Learnings  as projection on Learning;

    @readonly
    entity LearningMD as projection on LearningMasterData;

    @readonly
    entity Projects   as projection on Project;

    @readonly
    entity ProjectMD  as projection on ProjectMasterData;

    @readonly
    entity Ratings    as projection on Rating;
}
