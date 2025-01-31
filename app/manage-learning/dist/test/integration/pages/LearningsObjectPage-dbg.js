sap.ui.define(['sap/fe/test/ObjectPage'], function(ObjectPage) {
    'use strict';

    var CustomPageDefinitions = {
        actions: {},
        assertions: {}
    };

    return new ObjectPage(
        {
            appId: 'cap.learning.managelearning',
            componentId: 'LearningsObjectPage',
            contextPath: '/LearningMD/to_Learnings'
        },
        CustomPageDefinitions
    );
});