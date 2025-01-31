using  {employee.srv.LearningService.LearningService as Service}  from '../../srv/learningService';
annotate Service.LearningMD with @(
    odata.draft.enabled,
    UI:{
        SelectionFields  : [
            courseDescription
        ],        
        HeaderInfo  : {
            $Type : 'UI.HeaderInfoType',
            TypeName : 'Learning',
            TypeNamePlural : 'Learnings',
            Title : {
                $Type : 'UI.DataField',
                Value : courseDescription,
                Label : 'Description',
            }
        },
        LineItem  : [
            {
                $Type : 'UI.DataField',
                Value : courseDescription,
                Label:'Course Description'
            },
            {
                $Type : 'UI.DataField',
                Value : availability,
                Label:'Availability'
            },
            {
                $Type : 'UI.DataField',
                Value : assignToType_code,
                Label:'Type'
            },
        ],
    }
){
    @Common:{
        ValueList : {
            $Type : 'Common.ValueListType',
            CollectionPath : 'LearningMD',
            Parameters : [
                {
                    $Type : 'Common.ValueListParameterInOut',
                    LocalDataProperty : courseDescription,
                    ValueListProperty : 'courseDescription',
                },
            ],
        },
    }
    courseDescription;
};
