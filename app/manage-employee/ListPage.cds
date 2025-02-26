using {employee.srv.EmployeeService.ManageEmployee.Employee} from '../../srv/empService';

    @cds.search: {
    firstName: true,
    lastName : true
}
annotate Employee with @(
    odata.draft.enabled: true,
    Capabilities       : {DeleteRestrictions: {
        $Type    : 'Capabilities.DeleteRestrictionsType',
        Deletable: deletable
    }},
    UI                 : {
        SelectionVariant #Active  : {
            $Type        : 'UI.SelectionVariantType',
            ID           : 'ActiveEmployees',
            Text         : 'Active',
            SelectOptions: [{
                $Type       : 'UI.SelectOptionType',
                PropertyName: status_code,
                Ranges      : [{
                    $Type : 'UI.SelectionRangeType',
                    Sign  : #I,
                    Option: #EQ,
                    Low   : '03',
                }, ],
            }, ],
        },
        SelectionVariant #All     : {
            $Type: 'UI.SelectionVariantType',
            Text : 'All',
            ID   : 'All'
        },
        SelectionVariant #Obsolete: {
            $Type        : 'UI.SelectionVariantType',
            ID           : 'ObsEmployees',
            Text         : 'Obsolete',
            SelectOptions: [{
                $Type       : 'UI.SelectOptionType',
                PropertyName: status_code,
                Ranges      : [{
                    $Type : 'UI.SelectionRangeType',
                    Sign  : #I,
                    Option: #EQ,
                    Low   : '05',
                }, ],
            }, ],
        },
        SelectionVariant #InPrep  : {
            $Type        : 'UI.SelectionVariantType',
            ID           : 'InPrepEmployees',
            Text         : 'In Preperation',
            SelectOptions: [{
                $Type       : 'UI.SelectOptionType',
                PropertyName: status_code,
                Ranges      : [{
                    $Type : 'UI.SelectionRangeType',
                    Sign  : #I,
                    Option: #EQ,
                    Low   : '01',
                }, ],
            }, ],
        },
        SelectionFields           : [
            empID,
            firstName,
            lastName
        ],
        HeaderInfo                : {
            $Type         : 'UI.HeaderInfoType',
            TypeName      : 'Employee',
            TypeNamePlural: 'Employees',
            Title         : {
                $Type: 'UI.DataField',
                Value: empID,
                Label: 'ID'
            },
            Description   : {$value: {
                $Type: 'UI.DataField',
                Value: firstName,
            }},
        },
        LineItem                  : [
            {
                $Type: 'UI.DataField',
                Value: empID
            },
            {
                $Type: 'UI.DataField',
                Value: firstName,
                Label: 'First Name'
            },
            {
                $Type: 'UI.DataField',
                Value: lastName,
                Label: 'Last Name'
            },
            {
                $Type                : 'UI.DataField',
                Value                : status.descr,
                Label                : 'Status',
                ![@HTML5.CssDefaults]: {width: '12em'}
            },
            {
                $Type: 'UI.DataField',
                Value: emialID,
                Label: 'Email ID'
            },
            {
                $Type : 'UI.DataFieldForAction',
                Action: 'employee.srv.EmployeeService.ManageEmployee.inActive',
                Label : 'In Activate'
            },
            {
                $Type : 'UI.DataFieldForAction',
                Action: 'employee.srv.EmployeeService.ManageEmployee.inActive',
                Label : 'In Activate',
                Inline: true
            }
        ],
    }
) {
    @(
        mandatory,
        Common                   : {Label: 'First Name'},
        Search.fuzzinessThreshold: '0.7'
    )
    firstName;
    @(
        mandatory,
        Common                   : {Label: 'Last Name'},
        Search.fuzzinessThreshold: '0.7'
    )
    lastName;
    @(Common: {
        Label    : 'Employee ID',
        ValueList: {
            $Type         : 'Common.ValueListType',
            CollectionPath: 'Employee',
            Parameters    : [
                {
                    $Type            : 'Common.ValueListParameterInOut',
                    LocalDataProperty: empID,
                    ValueListProperty: 'empID',
                },
                {
                    $Type            : 'Common.ValueListParameterIn',
                    LocalDataProperty: firstName,
                    ValueListProperty: 'firstName',
                },
                {
                    $Type            : 'Common.ValueListParameterIn',
                    LocalDataProperty: lastName,
                    ValueListProperty: 'lastName',
                },
            ],
        },
    })
    empID;
};
