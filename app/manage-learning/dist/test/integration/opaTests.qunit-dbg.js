sap.ui.require(
    [
        'sap/fe/test/JourneyRunner',
        'cap/learning/managelearning/test/integration/FirstJourney',
		'cap/learning/managelearning/test/integration/pages/LearningMDList',
		'cap/learning/managelearning/test/integration/pages/LearningMDObjectPage',
		'cap/learning/managelearning/test/integration/pages/LearningsObjectPage'
    ],
    function(JourneyRunner, opaJourney, LearningMDList, LearningMDObjectPage, LearningsObjectPage) {
        'use strict';
        var JourneyRunner = new JourneyRunner({
            // start index.html in web folder
            launchUrl: sap.ui.require.toUrl('cap/learning/managelearning') + '/index.html'
        });

       
        JourneyRunner.run(
            {
                pages: { 
					onTheLearningMDList: LearningMDList,
					onTheLearningMDObjectPage: LearningMDObjectPage,
					onTheLearningsObjectPage: LearningsObjectPage
                }
            },
            opaJourney.run
        );
    }
);