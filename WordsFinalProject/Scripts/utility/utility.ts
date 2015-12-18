module finalProject {

      //distance utility method
    export function distance(p1: createjs.Point, p2: createjs.Point): number {
            return Math.floor(Math.sqrt(Math.pow((p2.x - p1.x), 2) + Math.pow((p2.y - p1.y), 2)));
    }

    //creates aray with ramdom unique numbers
    export function randomNumberArray(randomMax: number, positionsInArray: number): Array<number> {
        var arrayOut: Array<number> = new Array<number>(); // create array to be send out after populating it
        var randomNum: number; // will hold random number to populate in the array
        var numExist: boolean; // boolean to check if randomly generated number is already in array

        arrayOut = []; // set array to empty
        randomNum = Math.floor(Math.random() * (randomMax - 0 + 0) + 0); // get first random number
        arrayOut[0] = randomNum;//populate first position in array with random number
        
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

    }