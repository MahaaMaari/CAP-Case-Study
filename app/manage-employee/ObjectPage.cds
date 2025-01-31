using {employee.srv.EmployeeService.ManageEmployee as Service} from '../../srv/empService';

annotate Service.Employee with @(UI: {
    HeaderFacets       : [{
        $Type : 'UI.ReferenceFacet',
        Target: '@UI.FieldGroup#header',
    }, ],
    Identification     : [{
        $Type : 'UI.DataFieldForAction',
        Action: 'employee.srv.EmployeeService.ManageEmployee.inActive',
        Label : 'Inactivate'
    },
    {
        $Type : 'UI.DataFieldForAction',
        Action: 'employee.srv.EmployeeService.ManageEmployee.addProject',
        Label : 'Assign Project'
    }
    
    ],
    Facets             : [
        {
            $Type : 'UI.CollectionFacet',
            Label : 'General',
            Facets: [
                {
                    $Type : 'UI.ReferenceFacet',
                    Target: '@UI.FieldGroup#general',
                    Label : 'Details'
                },
                {
                    $Type : 'UI.ReferenceFacet',
                    Target: '@UI.FieldGroup#leaves',
                    Label : 'Leaves',
                },
            ],
        },
        {
            $Type : 'UI.ReferenceFacet',
            Target: '@UI.FieldGroup#bank',
            Label : 'Bank Details'
        },
        {
            $Type : 'UI.ReferenceFacet',
            Target: 'to_Learnings/@UI.LineItem',
            Label : 'Learnings'
        },
        {
            $Type : 'UI.ReferenceFacet',
            Target: 'to_projects/@UI.LineItem',
            Label : 'Projects'
        },
    ],
    FieldGroup #general: {
        $Type: 'UI.FieldGroupType',
        Data : [
            {
                $Type: 'UI.DataField',
                Value: firstName,
            },
            {
                $Type: 'UI.DataField',
                Value: lastName,
            },
            {
                $Type                  : 'UI.DataField',
                Value                  : emialID,
                Label                  : 'Email ID',
                ![@Common.FieldControl]: #ReadOnly,
            },
            {
                $Type: 'UI.DataField',
                Value: address,
                Label: 'Address'
            }
        ],
    },
    FieldGroup #leaves : {
        $Type: 'UI.FieldGroupType',
        Label: 'Leave Details',
        Data : [
            {
                $Type: 'UI.DataField',
                Value: annualLeavesGranted,
                Label: 'Total Annual Leaves'
            },
            {
                $Type: 'UI.DataField',
                Value: annualLeavesUsed,
                Label: 'Leaved Used'
            }
        ],
    },
    FieldGroup #bank   : {
        $Type: 'UI.FieldGroupType',
        Data : [
            {
                $Type: 'UI.DataField',
                Value: bankeName,
                Label: 'Bank Name'
            },
            {
                $Type: 'UI.DataField',
                Value: bankAccountNumber,
                Label: 'Bank Account Number'
            },
            {
                $Type: 'UI.DataField',
                Value: bankCode,
                Label: 'Bank Code'
            }
        ]
    },
    FieldGroup #header : {
        $Type: 'UI.FieldGroupType',
        Data : [
            {
                $Type: 'UI.DataField',
                Value: firstName,
                Label: 'First Name'
            },
            {
                Value: lastName,
                Label: 'Last Name'
            },
            {
                Value                  : status.descr,
                Label                  : 'Status',
                ![@Common.FieldControl]: #ReadOnly
            }
        ],
    }
}, ) {
    address @UI.MultiLineText: true;
    @(mandatory)
    bankeName;
    @(mandatory)
    bankAccountNumber;
    @(mandatory)
    bankCode;
    @(readonly)
    annualLeavesGranted;
    @(readonly)
    annualLeavesUsed;
    @(readonly)
    empID;
};

annotate Service.Learnings with @(UI: {LineItem: [
    {
        $Type: 'UI.DataField',
        Value: ID,
        Label: 'Course Name'
    },
    {
        $Type                  : 'UI.DataField',
        Value                  : status.descr,
        Label                  : 'Status',
        ![@Common.FieldControl]: #ReadOnly,
    },
], }) {
    @(Common: {Text: {
        $value                : learningID.courseDescription,
        ![@UI.TextArrangement]: #TextOnly,
    }, })
    ID
};

annotate Service.Projects with @(UI: {LineItem: [
    {
        $Type: 'UI.DataField',
        Value: projectID.projectName,
        Label: 'Project Name'
    },
    {
        $Type: 'UI.DataField',
        Value: projectID.projectDescription,
        Label: 'Description'
    }
], });

annotate Service.ProjectMD with {
    @(Common: {Text: {
        $value                : projectName,
        ![@UI.TextArrangement]: #TextOnly,
    }, })
    ID;
};
