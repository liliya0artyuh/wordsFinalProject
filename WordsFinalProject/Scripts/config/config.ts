    //<!--Repository Name for source code on github: finalProject-- >
    //<!--Description: A game that allows to users practise with memorising English finalProject in different categories in a fun manner -- >
    //<!--Author Name: Liliya Artyukh -- >
    //<!--Creation Date: 06 - Nov - 2015 -- >
    //<!--Last Modified Date: 12 - Nov - 2015 -- >
//<!--Last Modified by: Liliya Artyukh -- >

module finalProject {

    // state constants
    export var START_STATE: number = 0;
    export var LEVEL1_STATE: number = 1;
    export var LEVEL2_STATE: number = 2;
    export var LEVEL3_STATE: number = 3;
    export var SCORE_STATE: number = 4;
    export var END_STATE: number = 5;
    export var INSTRUCTIONS_STATE: number = 6;


    //
    export var winningNumber = 100;

    //level 1 vars
    export var positionsTaken: Array<number>;
    export var positionsAllX: Array<number>;
    export var positionsAllY: Array<number>;
    export var boxYPosition: number = 404;
    export var boxXPosition: number = 304.5;
    export var boxWidth: number = 239;
    export var boxHeight: number = 96;



    export var numOfAntiWords: number = 5;
    export var centerX: number = 424;
    export var collectorWidth: number = 227;
    export var collectorHeight: number = 103;
    export var wordHeight: number = 40;
}