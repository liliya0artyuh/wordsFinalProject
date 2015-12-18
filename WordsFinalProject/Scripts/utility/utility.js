var finalProject;
(function (finalProject) {
    //distance utility method
    function distance(p1, p2) {
        return Math.floor(Math.sqrt(Math.pow((p2.x - p1.x), 2) + Math.pow((p2.y - p1.y), 2)));
    }
    finalProject.distance = distance;
    //creates aray with ramdom unique numbers
    function randomNumberArray(randomMax, positionsInArray) {
        var arrayOut = new Array(); // create array to be send out after populating it
        var randomNum; // will hold random number to populate in the array
        var numExist; // boolean to check if randomly generated number is already in array
        arrayOut = []; // set array to empty
        randomNum = Math.floor(Math.random() * (randomMax - 0 + 0) + 0); // get first random number
        arrayOut[0] = randomNum; //populate first position in array with random number
        // loop through to populate the rest of positions in the arrray with unique random numbers
        while (arrayOut.length != positionsInArray) {
            numExist = false;
            randomNum = Math.floor(Math.random() * (randomMax - 0 + 0) + 0);
            for (var x = 0; x <= arrayOut.length; x++) {
                if (arrayOut[x] == randomNum) {
                    numExist = true;
                    break;
                }
            }
            if (numExist == false) {
                arrayOut[arrayOut.length] = randomNum;
            }
        }
        return arrayOut;
    }
    finalProject.randomNumberArray = randomNumberArray;
})(finalProject || (finalProject = {}));
//# sourceMappingURL=utility.js.map