sap.ui.require(
    [
        'sap/fe/test/JourneyRunner',
        'cap/app/manageprojects/test/integration/FirstJourney',
		'cap/app/manageprojects/test/integration/pages/ProjectsMDList',
		'cap/app/manageprojects/test/integration/pages/ProjectsMDObjectPage'
    ],
    function(JourneyRunner, opaJourney, ProjectsMDList, ProjectsMDObjectPage) {
        'use strict';
        var JourneyRunner = new JourneyRunner({
            // start index.html in web folder
            launchUrl: sap.ui.require.toUrl('cap/app/manageprojects') + '/index.html'
        });

       
        JourneyRunner.run(
            {
                pages: { 
					onTheProjectsMDList: ProjectsMDList,
					onTheProjectsMDObjectPage: ProjectsMDObjectPage
                }
            },
            opaJourney.run
        );
    }
);