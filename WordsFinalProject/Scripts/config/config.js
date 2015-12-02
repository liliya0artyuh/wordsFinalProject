//<!--Repository Name for source code on github: finalProject-- >
//<!--Description: A game that allows to users practise with memorising English finalProject in different categories in a fun manner -- >
//<!--Author Name: Liliya Artyukh -- >
//<!--Creation Date: 06 - Nov - 2015 -- >
//<!--Last Modified Date: 12 - Nov - 2015 -- >
//<!--Last Modified by: Liliya Artyukh -- >
var finalProject;
(function (finalProject) {
    // state constants
    finalProject.START_STATE = 0;
    finalProject.LEVEL1_STATE = 1;
    finalProject.LEVEL2_STATE = 2;
    finalProject.LEVEL3_STATE = 3;
    finalProject.SCORE_STATE = 4;
    finalProject.END_STATE = 5;
    finalProject.INSTRUCTIONS_STATE = 6;
    //
    finalProject.winningNumber = 300;
    finalProject.centerX = 424;
    finalProject.collectorWidth = 227;
    finalProject.collectorHeight = 103;
    finalProject.wordHeight = 40;
})(finalProject || (finalProject = {}));
//# sourceMappingURL=config.js.map