    //<!--Repository Name for source code on github: finalProject-- >
    //<!--Description: A game that allows to users practise with memorising English finalProject in different categories in a fun manner -- >
    //<!--Author Name: Liliya Artyukh -- >
    //<!--Creation Date: 06 - Nov - 2015 -- >
    //<!--Last Modified Date: 12 - Nov - 2015 -- >
    //<!--Last Modified by: Liliya Artyukh -- >

module finalProject {
    // menu class
    export class Level1 extends finalProject.Scene {
        // private instance variables
          counter = 1;
        _textLabel: finalProject.Label;
     //   _truck: finalProject.Truck;
   //     _friend: finalProject.Word;
   //     _friendNew: finalProject.Word;
    //    _enemy: finalProject.Word;
        _enemies: Array<finalProject.Word>;
        _friends: Array<finalProject.Word>;
  //      _enemyNew: finalProject.Word;
        _currentWord: string;
        _wordOrder: number[] = [0];
        _category: string;
        _numExists: boolean;
        _currentCategory: string;
        _antagonistWords: string[];
        _background: createjs.Bitmap;
        _yPositions: number = 7;
        _xPositions: number = 3;
        _itemInArray: number;
        _itemsInArray: number = 5;
        _totalPositions: number = 14;
        _wordHitArea: createjs.Shape;
        _enemyHitArea: createjs.Shape;
        _tickLevel1: number;
        _isEnemy: boolean;
        _isFirstWord: boolean;
        _nextWordPosition: number;
        _nextAntiWordPosition: number;
        _nextWordText: string;
        _nextAntiWordText: string;
        _box: createjs.Bitmap;
        _boxLabel: finalProject.Label;
        _update: boolean = false;
        _tempCatArray: Array<number>;
        _tempEnemyArray: Array<number>;
        _curCatArrayLength: number = 10;
        _enemyArrayLength: number = 30;
        _tempAntagonistWords: Array<string>;
        _wordNumber: number = 0;
        _enemyNumber: number = 0;
        _allWordsArray: Array<finalProject.Word>;
        _takeThisPosition: number = 0;
        _wordClickedNum: number;
        _firstCall: boolean = true;
        _isWordMoving: boolean;
        _friendOrEnemy: number;
        _newposXY: number;

        _nextEnemy: number = 0;
        _positionCounter: number = 0;
        _enemyOrFriend: number;
        _friendExist: boolean = false;
        _EorFArray: Array<number> = new Array<number>();
        _nextWordPos: number = 0;

        //constructor
        constructor() {
            super();
        }

        //public methods
        public start(): void {
            this._tickLevel1 = 0;
            this._determineCategories();
            //add background
            this._background = new createjs.Bitmap(assets.loader.getResult("backPaper"));
            this.addChild(this._background);
            //create arrays to hold positions of y and x coordinates of words
            finalProject.positionsAllX = new Array<number>(141.5, 424, 706.5, 283, 565, 141.5, 424, 706.5, 283, 565, 141.5, 424, 706.5, 283, 565);
            finalProject.positionsAllY = new Array<number>(50, 50, 50, 100, 100, 150, 150, 150, 200, 200, 250, 250, 250, 300, 300);

            //get positions for words
            finalProject.positionsTaken = new Array<number>();
            this._getPositions();

            //add box
            this._box = new createjs.Bitmap(assets.loader.getResult("box"));
            this._box.x = finalProject.boxXPosition;
            this._box.y = finalProject.boxYPosition;
            this.addChild(this._box);
            this._boxLabel = new finalProject.Label(this._currentCategory, "30px Consolas", "#000000", finalProject.centerX, finalProject.boxYPosition + this._box.getBounds().height * 0.5, true);
            this._boxLabel.regX = this._boxLabel.getBounds().width * 0.5;
            this.addChild(this._boxLabel);

            //add one friend and four enemy words to the scene
            this._allWordsArray = new Array<finalProject.Word>();
            this._allWordsArray = [];
            this._enemies = new Array<finalProject.Word>();
            this._enemies = [];
            this._friends = new Array<finalProject.Word>();
            this._friends = [];

            this._allWordsArray[this._takeThisPosition] = this._getFriend();
            this.addChild(this._allWordsArray[this._takeThisPosition]);
            this._takeThisPosition++;
            this._allWordsArray[this._takeThisPosition] = this._getEnemy();
            this.addChild(this._allWordsArray[this._takeThisPosition]);
            this._takeThisPosition++;
            this._enemyNumber++;
            this._allWordsArray[this._takeThisPosition] = this._getEnemy();
            this.addChild(this._allWordsArray[this._takeThisPosition]);
            this._takeThisPosition++;
            this._enemyNumber++;
            this._allWordsArray[this._takeThisPosition] = this._getEnemy();
            this.addChild(this._allWordsArray[this._takeThisPosition]);
            this._takeThisPosition++;
            this._enemyNumber++;
            this._allWordsArray[this._takeThisPosition] = this._getEnemy();
            this.addChild(this._allWordsArray[this._takeThisPosition]);

            //add all objects to the stage
            stage.addChild(this);

            //instantiate scoreboard and collision classes
            scoreboard = new finalProject.Scoreboard;
            collision = new finalProject.Collision;

            for (var x = 0; x < this._allWordsArray.length; x++){
                console.log(" width " + [x] + " " + this._allWordsArray[x].getBounds().width);
            }

            this._nextTckerWord();
        }


        // creates a list of current positions taken by the  words - 5 words - 5 positions
        // this positions are then serve as a parameter for the two arrays that hold x and y positions
        private _getPositions(): void {
            finalProject.positionsTaken = []; //set array to empty
            // populate array with random numbers
            finalProject.positionsTaken = finalProject.randomNumberArray(this._totalPositions, this._itemsInArray);
        }

        // -----------------------------------  start initial methods ---------------------------------------------

         private _getFriend(): finalProject.Word {
            //add selected category finalProject
            this._friends[this._wordNumber] = new finalProject.Word(true);
             this._friends[this._wordNumber].text = finalProject.currentCategory[this._wordNumber];
             this._friends[this._wordNumber].name = "friend";
             this._friends[this._wordNumber].setPositionLevel1(finalProject.positionsTaken[this._takeThisPosition]);
             this._friends[this._wordNumber].reset();
            this._wordHitArea = new createjs.Shape();
            this._wordHitArea.graphics.beginFill("#000").drawRect(0, 0, this._friends[this._wordNumber].getMeasuredWidth(), this._friends[this._wordNumber].height);
            this._friends[this._wordNumber].hitArea = this._wordHitArea;
            this._friends[this._wordNumber].on("click", this._wordClicked, this);
            return this._friends[this._wordNumber];
        }


         private _getEnemy(): finalProject.Word {
            //add enemy finalProject
             var enemyName: string;
             this._enemies[this._enemyNumber] = new finalProject.Word(false);
             this._enemies[this._enemyNumber].text = finalProject.antagonistWords[this._enemyNumber];
             this._enemies[this._enemyNumber].name = "enemy" + this._enemyNumber;//enemyName;
             this._enemies[this._enemyNumber].setPositionLevel1(finalProject.positionsTaken[this._takeThisPosition]);
             this._enemies[this._enemyNumber].reset();
            this._enemyHitArea = new createjs.Shape();
            this._enemyHitArea.graphics.beginFill("#000").drawRect(0, 0, this._enemies[this._enemyNumber].getMeasuredWidth(), this._enemies[this._enemyNumber] .height);
            this._enemies[this._enemyNumber].hitArea = this._enemyHitArea;
            this._enemies[this._enemyNumber].on("click", this._wordClicked, this);
            return this._enemies[this._enemyNumber];
        }

        //determine categories for collectible finalProject and the antagonist finalProject
        private _determineCategories(): void {
            this._tempCatArray = new Array<number>();
            this._tempCatArray = [];
            this._tempCatArray = finalProject.randomNumberArray(this._curCatArrayLength , this._curCatArrayLength );
            this._tempEnemyArray = new Array<number>();
            this._tempEnemyArray = [];
            this._tempEnemyArray = finalProject.randomNumberArray(this._enemyArrayLength, this._enemyArrayLength);
            this._tempAntagonistWords = new Array<string>();
            this._tempAntagonistWords = [];
            if (wordCategory == "foodBtn") {
                this._currentCategory = "FOOD";
                this._tempAntagonistWords = finalProject.furnitureWords;
                Array.prototype.push.apply(this._tempAntagonistWords, finalProject.clothesWords);
                Array.prototype.push.apply(this._tempAntagonistWords, finalProject.animalsWords);
                // fill array with words of selected category
                for (var x = 0; x < this._curCatArrayLength; x++){
                    finalProject.currentCategory[x] = finalProject.foodWords[this._tempCatArray[x]];
                }
                //fill array with enemy words
                for (var x = 0; x < this._enemyArrayLength; x++){
                    finalProject.antagonistWords[x] = this._tempAntagonistWords[this._tempEnemyArray[x]];
                }
            } else if (wordCategory == "furnitureBtn") {
                this._currentCategory = "FURNITURE";
                this._tempAntagonistWords  = finalProject.foodWords;
                Array.prototype.push.apply(this._tempAntagonistWords , finalProject.clothesWords);
                Array.prototype.push.apply(this._tempAntagonistWords , finalProject.animalsWords);
                // fill array with words of selected category
                for (var x = 0; x < this._curCatArrayLength; x++) {
                    finalProject.currentCategory[x] = finalProject.foodWords[this._tempCatArray[x]];
                }
                //fill array with enemy words
                for (var x = 0; x < this._enemyArrayLength; x++) {
                    finalProject.antagonistWords[x] = this._tempAntagonistWords[this._tempEnemyArray[x]];
                }
            } else if (wordCategory == "clothesBtn") {
                this._currentCategory = "CLOTHES";
                this._tempAntagonistWords  = finalProject.furnitureWords;
                Array.prototype.push.apply(this._tempAntagonistWords , finalProject.foodWords);
                Array.prototype.push.apply(this._tempAntagonistWords , finalProject.animalsWords);
                // fill array with words of selected category
                for (var x = 0; x < this._curCatArrayLength; x++) {
                    finalProject.currentCategory[x] = finalProject.foodWords[this._tempCatArray[x]];
                }
                //fill array with enemy words
                for (var x = 0; x < this._enemyArrayLength; x++) {
                    finalProject.antagonistWords[x] = this._tempAntagonistWords[this._tempEnemyArray[x]];
                }

            } else if (wordCategory == "animalsBtn") {
                this._currentCategory = "ANIMALS";
                this._tempAntagonistWords  = finalProject.furnitureWords;
                Array.prototype.push.apply(this._tempAntagonistWords , finalProject.clothesWords);
                Array.prototype.push.apply(this._tempAntagonistWords , finalProject.foodWords);
                // fill array with words of selected category
                for (var x = 0; x < this._curCatArrayLength; x++) {
                    finalProject.currentCategory[x] = finalProject.foodWords[this._tempCatArray[x]];
                }
                //fill array with enemy words
                for (var x = 0; x < this._enemyArrayLength; x++) {
                    finalProject.antagonistWords[x] = this._tempAntagonistWords[this._tempEnemyArray[x]];
                }
            }
        }

        // -------------------------------------- end initial methods -------------------------------------------


        // get next word --------------------------------------------------------------------------
        // get next word randomly - called from update()
        private _nextTckerWord() {
            // decide whether next word is enemy or friend
            this._friendOrEnemy = this._friendOrEnemyNext();
           // console.log(" friend = 0; enemy = 1-3 ::: " + friendOrEnemy);

            //get position for X and Y for new word that is not currently occupied
            this._newposXY = this._getNewPosition();
       //     console.log(" newposXY btw 0-14 " + this._newposXY);
            //if (this._takeThisPosition == positionsTaken.length) {
            //    this._takeThisPosition = 0;
            //}            
            //get position of next word to update
            this._isWordMoving = false;
            this._orderForNewWord();
            //this._isWordMoving = this._allWordsArray[this._nextWordPos].getIsMoving();
            //while (this._isWordMoving == true){
            //   this._orderForNewWord();
            //   this._isWordMoving = this._allWordsArray[this._nextWordPos].getIsMoving();
            //}
        }

        private _friendOrEnemyNext(): number {
            var nextWordInt = Math.floor(Math.random() * (3 - 0 + 1) + 0);
            return nextWordInt;
        }

        private _getNewPosition(): number {
            var numXY: number;
          //  console.log("  positionsTaken " + positionsTaken);
            var newPosDetermined: boolean = false;
            while (newPosDetermined == false) {
                numXY = Math.floor(Math.random() * (this._totalPositions - 0 + 0) + 0); // random number between 0 and 14
                for (var x = 0; x < positionsTaken.length; x++) {
                    if (numXY == positionsTaken[x]) {
                      //  console.log(" x x---- " + x);
                        newPosDetermined = false;
                        break;
                    } else {
                        newPosDetermined = true;
                    }
                }
                if (newPosDetermined == true) {
                    return numXY;
                    //num is the new position for the new word
                }
            }
        }

        //decide which word to update
        private _orderForNewWord() {
            if (this._nextWordPos == this._allWordsArray.length-1) {
                    this._nextWordPos = 0;
                    this._firstCall == true;
                }
                if (this._firstCall == true) {
                    this._firstCall = false;
                } else {
                    this._nextWordPos++;
            }
             //   console.log(" next position 0 " + this._nextWordPos);
        }

 

        private _addNewWord(friendOrEnemy: number, newposXY: number) {
            delete finalProject.positionsTaken[this._nextWordPos];
            finalProject.positionsTaken[this._nextWordPos] = newposXY;     
           this.removeChild(this._allWordsArray[this._nextWordPos]);
            delete this._allWordsArray[this._nextWordPos];
            if (friendOrEnemy == 0) {
                this._allWordsArray[this._nextWordPos] = this._newFriend();
            } else {
                this._allWordsArray[this._nextWordPos] = this._newEnemy();
            }
            this.addChild(this._allWordsArray[this._nextWordPos]);
            for (var x = 0; x < this._allWordsArray.length; x++) {
              //  console.log([x]+ " = " + this._allWordsArray[x].text);
            }
            //console.log(" word.length " + this._allWordsArray.length);
            //console.log(" 99999999999   newposXY " + newposXY );
            //console.log("  positionsTaken " + positionsTaken);
   }

        //valid method
        private _newFriend(): finalProject.Word {
            this._wordNumber++;
            this._friends[this._wordNumber] = new finalProject.Word(false);
            //add selected category finalProject
            this._enemies[this._wordNumber].text = finalProject.currentCategory[this._wordNumber];
            this._enemies[this._wordNumber].name = "friend";
            this._enemies[this._wordNumber].setPositionLevel1(finalProject.positionsTaken[this._nextWordPos]);
            this._enemies[this._wordNumber].reset();
            this._wordHitArea = new createjs.Shape();
            this._wordHitArea.graphics.beginFill("#000").drawRect(0, 0, this._enemies[this._wordNumber].getMeasuredWidth(), this._enemies[this._wordNumber].height);
            this._enemies[this._wordNumber].hitArea = this._wordHitArea;
            this._enemies[this._wordNumber].on("click", this._wordClicked, this);
            return this._enemies[this._wordNumber];
        }


        //valid method
        private _newEnemy(): finalProject.Word {
            this._enemyNumber++;
            //add enemy finalProject
            this._enemies[this._enemyNumber] = new finalProject.Word(false);
            var enemyName: string;
            this._enemies[this._enemyNumber].text = finalProject.antagonistWords[this._enemyNumber];
            this._enemies[this._enemyNumber].name = "enemy" + this._enemyNumber; // enemyName;
            this._enemies[this._enemyNumber].setPositionLevel1(finalProject.positionsTaken[this._nextWordPos]);
            this._enemies[this._enemyNumber].reset();
            this._enemyHitArea = new createjs.Shape();
            this._enemyHitArea.graphics.beginFill("#000").drawRect(0, 0, this._enemies[this._enemyNumber].getMeasuredWidth(), this._enemies[this._enemyNumber].height);
            this._enemies[this._enemyNumber].hitArea = this._enemyHitArea;
            this._enemies[this._enemyNumber].on("click", this._wordClicked, this);
            return this._enemies[this._enemyNumber];
        }



        // --------------------------------------- get next word  ------------------------------------
       

        //private method
        //private _checkCategory(eventTarget: string): boolean {
        //    var isEnemy = true;
        //    for (var d = 0; d < finalProject.currentCategory.length; d++) {
        //        if (finalProject.currentCategory[d] == eventTarget) {
        //            isEnemy = false;
        //            break;
        //        }
        //    }
        //    return isEnemy;
        //}



        // click events -----------------------------------------------------------------
        private _wordClicked(event: createjs.MouseEvent): void {
            for (var i = 0; i < this._allWordsArray.length; i++){
                if (this._allWordsArray[i].text == event.target.text) {
                    this._allWordsArray[i].setIsMoving(true);
                    this._allWordsArray[i].setUpdate(true);
                    this._allWordsArray[i].setDY();
                }
            }
        }
        //--------------------------------------- end click events ----------------------

        public update(): void {
            // reset word
            this._tickLevel1++;

         if (this._tickLevel1 == 500) {        
           //  console.log("counter " + this.counter);
             if (this.counter < 10) {
                 //add new word
                 this._addNewWord(this._friendOrEnemy, this._newposXY);
                 this._tickLevel1 = 0;
                 this._nextTckerWord();
             }
             this.counter++;
         }

            //check scoring
         for (var i = 0; i < this._allWordsArray.length; i++) {
             this._allWordsArray[i].update();
             collision.checkLevel1(this._allWordsArray[i], this._box);
             if (this._allWordsArray[i].isColliding == true) {
                 this._allWordsArray[i].setUpdate(false);
                 this._allWordsArray[i].setIsMoving(false);
                 this._allWordsArray[i].text = " ";
             }
         }

         // update score
            scoreboard.update();

         //exit logic
            if (scoreboard.lives <= 0) {
                outcome = 2;
                numOfCollectedWords[0] = scoreboard.score / 100;
                numOfLivesLost[0] = 3;
                changeState(finalProject.SCORE_STATE);
            }
            if (scoreboard.score == winningNumber) {
                outcome = 1;
                numOfCollectedWords[0] = winningNumber/100;
                numOfLivesLost[0] = 3 - scoreboard.lives;
                changeState(finalProject.SCORE_STATE);
            }
        }
    }
}