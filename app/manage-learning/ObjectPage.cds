using {employee.srv.LearningService.LearningService as Service} from '../../srv/learningService';

annotate Service.LearningMD with @(UI: {
    HeaderFacets      : [{
        $Type : 'UI.ReferenceFacet',
        Target: '@UI.FieldGroup#header',
    }, ],
    FieldGroup #header: {
        $Type: 'UI.FieldGroupType',
        Data : [
            {
                $Type: 'UI.DataField',
                Value: availability,
                Label: 'Availability'
            },
            {
                $Type: 'UI.DataField',
                Value: assignToType_code,
                Label: 'Type'
            },
        ],
    },
    Facets            : [
        {
            $Type : 'UI.ReferenceFacet',
            Target : '@UI.FieldGroup#general',
            Label:'General'
        },
        {
        $Type : 'UI.ReferenceFacet',
        Target: 'to_Learnings/@UI.LineItem',
        Label : 'Employees Assigned',
    }, ],
    FieldGroup #general : {
        $Type : 'UI.FieldGroupType',
        Data : [
            {
                $Type : 'UI.DataField',
                Value : courseDescription,
                Label:'Cource Description'
            },
            {
                $Type : 'UI.DataField',
                Value : assignToType_code,
                Label:'Type'
            },
            {
                $Type : 'UI.DataField',
                Value : availability,
                Label:'Availability'
            },
        ],
    },
}) {
    @Common: {ValueListWithFixedValues}
    assignToType
};

annotate Service.Learnings with @(UI: {

LineItem: [
    {
        $Type: 'UI.DataField',
        Value: employeeID_ID,
        Label: 'Employee ID'
    },
    {
        $Type : 'UI.DataField',
        Value : employeeID.firstName,
        Label:'First Name'
    },
    {
        $Type: 'UI.DataField',
        Value: employeeID.lastName,
        Label: 'Last Name'
    },
    {
        $Type : 'UI.DataField',
        Value : employeeID.emialID,
        Label:'Email ID'
    },
    {
        $Type: 'UI.DataField',
        Value: status_code,
        Label: 'Status'
    }
], }) {
    @Common: {
        ValueList: {
            $Type         : 'Common.ValueListType',
            CollectionPath: 'Employee',
            Parameters    : [
                {
                    $Type            : 'Common.ValueListParameterIn',
                    LocalDataProperty: employeeID.empID,
                    ValueListProperty: 'empID',
                },
                {
                    $Type            : 'Common.ValueListParameterOut',
                    LocalDataProperty: employeeID_ID,
                    ValueListProperty: 'ID',
                },
                {
                    $Type : 'Common.ValueListParameterDisplayOnly',
                    ValueListProperty : 'firstName',
                },
                {
                    $Type : 'Common.ValueListParameterDisplayOnly',
                    ValueListProperty : 'lastName',
                },
            ],
        },
        Text     : {
            $value                : employeeID.empID,
            ![@UI.TextArrangement]: #TextOnly,
        },
    }
    employeeID;
    @Common: {
        ValueListWithFixedValues,
        Text     : {
            $value                : status.descr,
            ![@UI.TextArrangement]: #TextOnly,
        }
    }
    status;
};
annotate Service.Employee with {
    @(
        Common:{
            Text : {
                $value: empID,
                ![@UI.TextArrangement] : #TextOnly,
            },
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

