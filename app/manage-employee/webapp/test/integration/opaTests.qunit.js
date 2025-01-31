sap.ui.require(
    [
        'sap/fe/test/JourneyRunner',
        'cap/app/manageemployee/test/integration/FirstJourney',
		'cap/app/manageemployee/test/integration/pages/EmployeeList',
		'cap/app/manageemployee/test/integration/pages/EmployeeObjectPage'
    ],
    function(JourneyRunner, opaJourney, EmployeeList, EmployeeObjectPage) {
        'use strict';
        var JourneyRunner = new JourneyRunner({
            // start index.html in web folder
            launchUrl: sap.ui.require.toUrl('cap/app/manageemployee') + '/index.html'
        });

       
        JourneyRunner.run(
            {
                pages: { 
					onTheEmployeeList: EmployeeList,
					onTheEmployeeObjectPage: EmployeeObjectPage
                }
            },
            opaJourney.run
        );
    }
);