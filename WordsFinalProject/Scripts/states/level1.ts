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
        _textLabel: finalProject.Label;
        _truck: finalProject.Truck;
        _word: finalProject.Word;
        _antiWords: finalProject.Word[] = [];
        _currentWord: string;
        _wordOrder: number[] = [0];
        _category: string;
        _numExists: boolean;
        _currentCategory: string[];
        _antagonistWords: string[];
        _background: createjs.Bitmap;
        _yPositions: number = 7;
        _xPositions: number = 3;
        _positionX: Array<number> = new Array(141.5, 424, 706.5);
        _positionY: number = 50;
        _incrementYBy: number = 50;
        _itemInArray: number;
        _itemsInArray: number = 5;
        _totalPositions: number = 18;
        _isInitialPositions: boolean;
        _wordHitArea: createjs.Shape;
        _enemyHitArea: createjs.Shape;
        _tickLevel1: number;
        _isEnemy: boolean;
        _isFirstWord: boolean;
        _nextWordPosition: number;
        _nextAntiWordPosition: number;
        _nextWordText: string;
        _nextAntiWordText: string;

        _nextEnemy: number = 0;
        _positionCounter: number = 0;
        _enemyOrFriend: number;
        _friendExist: boolean = false;
        _EorFArray: Array<number> = new Array<number>();
        _orderOfWords: Array<number> = new Array<number>();

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
            //create array to hold positions of words
            this._createArrays();


            finalProject.positionsTaken = new Array<number>();
            this._isInitialPositions = true;
            this._getInitialPositions();

          
            //add selected category finalProject
            this._word = new finalProject.Word(true);// collectibe word
            this._word.name = "friend";
            this._word.setPositionLevel1(0);
            this._word.reset();
            this._wordHitArea = new createjs.Shape();
            this._wordHitArea.graphics.beginFill("#000").drawRect(0, 0, this._word.getMeasuredWidth(), this._word.height);
            this._word.hitArea = this._wordHitArea;
            this.addChild(this._word);
            this._word.on("click", this._wordClicked, this);
            this._orderOfWords[0] = 0;


            //add enemy finalProject
            finalProject.numOfAntiWords = 4;
            var enemyName: string;
            for (var antiWord = 0; antiWord < finalProject.numOfAntiWords; antiWord++) {
                this._antiWords[antiWord] = new finalProject.Word(false);// antogonist finalProject
                switch (antiWord) {
                    case 0:
                        enemyName = "enemy1";
                        break;
                    case 1:
                        enemyName = "enemy2";
                        break;
                    case 2:
                        enemyName = "enemy3";
                        break;
                    case 3:
                        enemyName = "enemy4";
                        break;
                }
                this._antiWords[antiWord].name = enemyName;
                this._antiWords[antiWord].setPositionLevel1(antiWord + 1);
                this._antiWords[antiWord].reset();
                this._enemyHitArea = new createjs.Shape();
                this._enemyHitArea.graphics.beginFill("#000").drawRect(0, 0, this._antiWords[antiWord].getMeasuredWidth(), this._antiWords[antiWord].height);
                this._antiWords[antiWord].hitArea = this._enemyHitArea;
                this.addChild(this._antiWords[antiWord]);
                this._antiWords[antiWord].on("click", this._enemyClicked, this);
                this._orderOfWords[antiWord + 1] = antiWord + 1;
            }

            //add all objects to the stage
            stage.addChild(this);

            scoreboard = new finalProject.Scoreboard;
            collision = new finalProject.Collision;
        }

        private _nextTckerWord() {
            var smallest: number = 0;
            var largest: number = 4;
            for (var w = 0; w < this._orderOfWords.length; w++) {
                if (this._orderOfWords[w] == largest) {
                    this._updateTickerWord(w);
                    this._orderOfWords[w] = smallest;
                } else {
                    this._orderOfWords[w] = this._orderOfWords[w] + 1;
                }
            }
        }


        private _updateTickerWord(wordToUpdate: number) {
            if (wordToUpdate == 0) {
                this._updateFriend();
            } else {
                this._updateEnemy(wordToUpdate);
            }
        }

        // click events
        private _wordClicked(event: createjs.MouseEvent): void {
            scoreboard.score += 100;
            this._isEnemy = this._checkCategory(event.target.text);
            //  this._removeWord(event.target.text);
            this._updateFriend();
        }

        private _enemyClicked(event: createjs.MouseEvent): void {
            scoreboard.lives--;
            this._isEnemy = this._checkCategory(event.target.text);
            // this._removeWord(event.target.text);
            var wordNum: number;
            switch (event.target.name) {
                case "enemy1":
                    wordNum = 1;
                    break;
                case "enemy2":
                    wordNum = 2;
                    break;
                case "enemy3":
                    wordNum = 3;
                    break;
                case "enemy4":
                    wordNum = 4;
                    break;
            }
            this._updateEnemy(wordNum);
        }


        private _updateFriend(){
                    this._getNextWord();
    this._nextWordPosition = this._getNextPosition();
    finalProject.positionsTaken[0] = this._nextWordPosition;
    this._nextWordText = this._determineNextWord(true);
    this._word.text = this._nextWordText;
    this._word.y = finalProject.positionsAllY[finalProject.positionsTaken[0]] + 10;
    this._word.x = finalProject.positionsAllX[finalProject.positionsTaken[0]];
    this._word.width = this._word.getBounds().width;
    this._word.height = 40;
    this._word.regX = this._word.width * 0.5;
}

        private _updateEnemy(num: number) {
            this._getNextWord();
            this._nextAntiWordPosition = this._getNextPosition();
            var wordNum: number;
            switch (num) {
                case 1:
                    wordNum = 0;
                    finalProject.positionsTaken[1] = this._nextAntiWordPosition;
                    break;
                case 2:
                    wordNum = 1;
                    finalProject.positionsTaken[2] = this._nextAntiWordPosition;
                    break;
                case 3:
                    wordNum = 2;
                    finalProject.positionsTaken[3] = this._nextAntiWordPosition;
                    break;
                case 4:
                    wordNum = 3;
                    finalProject.positionsTaken[4] = this._nextAntiWordPosition;
                    break;
            }
            this._nextAntiWordText = this._determineNextWord(false);
            this._antiWords[wordNum].text = this._nextAntiWordText;
            this._antiWords[wordNum].y = finalProject.positionsAllY[finalProject.positionsTaken[wordNum + 1]] + 10;
            this._antiWords[wordNum].x = finalProject.positionsAllX[finalProject.positionsTaken[wordNum + 1]];
            this._antiWords[wordNum].width = this._antiWords[wordNum].getBounds().width;
            this._antiWords[wordNum].height = 40;
            this._antiWords[wordNum].regX = this._antiWords[wordNum].width * 0.5;
        }

        private _removeWord(eventTarget: string) {
            if (this._isEnemy == false) {
                this._word.text = " ";
            }
            else {
                for (var f = 0; f < this._antiWords.length; f++) {
                    if (this._antiWords[f].text == eventTarget) {
                        this._antiWords[f].text = " ";
                    }
                }
            }
        }


        // randomly determine the next word - order of friend word is different every time
        private _getNextWord() {
            if (this._isFirstWord == true) {
                this._isFirstWord = false;
                this._enemyOrFriend = Math.floor(Math.random() * (1 - 0 + 1) + 0);
                this._EorFArray[this._positionCounter] = this._enemyOrFriend;
                this._positionCounter++;
            } else {
                for (var s = 0; s < this._EorFArray.length && this._EorFArray.length <= 4; s++) {
                    if (this._EorFArray[s] != this._nextEnemy) {
                        this._friendExist = true;
                        break;
                    }
                }

                if (this._friendExist == true) {
                    this._EorFArray[this._positionCounter] = 0;
                    this._positionCounter++;
                } else if (this._EorFArray.length == 4 && this._friendExist == true) {
                    this._EorFArray[this._positionCounter] = 1;
                    this._positionCounter++;
                } else {
                    this._enemyOrFriend = Math.floor(Math.random() * (1 - 0 + 1) + 0);
                    this._EorFArray[this._positionCounter] = this._enemyOrFriend;
                    this._positionCounter++;
                }
            }
            if (this._EorFArray.length == 5) {
                this._isFirstWord = true;
                this._EorFArray = [];
            }
        }

        //determines the next word
        private _determineNextWord(friendWord: boolean): string {
            var nextWordText: string;
            var nextWordItem: number;
            //determine next collectible word (out of 10)
            if (friendWord) {
                nextWordItem = Math.floor(Math.random() * (10 - 0 + 0) + 0);
                nextWordText = finalProject.currentCategory[nextWordItem];// friend word
            } else {
                //determine next antagonist word (out of 30)
                nextWordItem = Math.floor(Math.random() * (30 - 0 + 0) + 0);
                nextWordText = finalProject.antagonistWords[nextWordItem];// antogonist words
            }
            return nextWordText;
        }

        //get next position
        private _getNextPosition(): number {
            var position: number;
            var exists: boolean = true;
            while (exists) {
                exists = false;
                position = Math.floor(Math.random() * (this._totalPositions - 0 + 0) + 0);
                for (var x = 0; x <= finalProject.positionsTaken.length; x++) {
                    if (finalProject.positionsTaken[x] == position) {
                        exists = true;
                        break;
                    }
                }
                if (exists == false) {
                    return position;
                }
            }
        }

        private _checkCategory(eventTarget: string): boolean {
            var isEnemy = true;
            for (var d = 0; d < finalProject.currentCategory.length; d++){
                if (finalProject.currentCategory[d] == eventTarget) {
                    isEnemy = false;
                    break;
                }
            }
            return isEnemy;
        }

        //creates list of x and their pair y values later used for positioning of the words
        private _createArrays(): void {
            //create array to hold positions of words
            finalProject.positionsAllX = new Array<number>();
            finalProject.positionsAllY = new Array<number>();
            var positionInArray = 0;
            for (var counterY = 0; counterY < this._yPositions; counterY++) {
                for (var counterX = 0; counterX < this._xPositions; counterX++) {
                    finalProject.positionsAllX[positionInArray] = this._positionX[counterX];
                    finalProject.positionsAllY[positionInArray] = this._positionY;
                    positionInArray++;
                }
                this._positionY += this._incrementYBy;
            }
        }

        //private method

        /*
        private _checkIfExists(x: number): number {
        //    console.log("this.nextItem " + this.nextItem );
         //   console.log("this.wordOrder.length " + this.wordOrder.length);
        //    console.log("this.wordOrder[0] " + this.wordOrder[0] );
            while (this.wordOrder.length < 10) {
                if (this.wordOrder.length == 1) {
                    this.wordOrder[0] = this.nextItem;
                } else {
                    for (var i = 0; i <= this.wordOrder.length; i++) {
                        console.log("this.wordOrder.length " + this.wordOrder.length);
                        console.log("this.nextItem " + this.nextItem);
                        console.log("this.wordOrder[i] " + this.wordOrder[i]);

                        if (this.nextItem == this.wordOrder[i]) {
                            this.numExists = true;
                            break;
                        } else {
                            this.numExists = false;
                            if (i == this.wordOrder.length) {
                                this.wordOrder[i + 1] = this.nextItem;
                            }
                        }
                    }

                }

            }
            return this.nextItem;
        }
        */

        // creates a list of current positions taken by the  words - 5 words - 5 positions
        // this positions are then serve as a parameter for the two arrays that hold x and y positions
        private _getInitialPositions(): void {
            finalProject.positionsTaken  = [];
            this._itemInArray = Math.floor(Math.random() * (this._totalPositions - 0 + 0) + 0);
            finalProject.positionsTaken[0] = this._itemInArray;
           // console.log(" testing array " + finalProject.positionsTaken.length);
            while (finalProject.positionsTaken.length != this._itemsInArray) {
                this._numExists = false;
                this._itemInArray = Math.floor(Math.random() * (this._totalPositions - 0 + 0) + 0);
                for (var x = 0; x <= finalProject.positionsTaken.length; x++) {
                    if (finalProject.positionsTaken[x] == this._itemInArray) {
                        this._numExists = true;
                        break;
                    }
                }
                if (this._numExists == false) {
                    finalProject.positionsTaken[finalProject.positionsTaken.length] = this._itemInArray;
                }
            }
            this._isInitialPositions = false;
        }


                    //determine categories for collectible finalProject and the antagonist finalProject
     private  _determineCategories(): void {
        if (wordCategory == "foodBtn") {
            finalProject.currentCategory = finalProject.foodWords;
            finalProject.antagonistWords = finalProject.furnitureWords;
            Array.prototype.push.apply(finalProject.antagonistWords, finalProject.clothesWords);
            Array.prototype.push.apply(finalProject.antagonistWords, finalProject.animalsWords);
        } else if (wordCategory == "furnitureBtn") {
            finalProject.currentCategory = finalProject.furnitureWords;
            finalProject.antagonistWords = finalProject.foodWords;
            Array.prototype.push.apply(finalProject.antagonistWords, finalProject.clothesWords);
            Array.prototype.push.apply(finalProject.antagonistWords, finalProject.animalsWords);
        } else if (wordCategory == "clothesBtn") {
            finalProject.currentCategory = finalProject.clothesWords;
            finalProject.antagonistWords = finalProject.furnitureWords;
            Array.prototype.push.apply(finalProject.antagonistWords, finalProject.foodWords);
            Array.prototype.push.apply(finalProject.antagonistWords, finalProject.animalsWords);
        } else if (wordCategory == "animalsBtn") {
            finalProject.currentCategory = finalProject.animalsWords;
            finalProject.antagonistWords = finalProject.furnitureWords;
            Array.prototype.push.apply(finalProject.antagonistWords, finalProject.clothesWords);
            Array.prototype.push.apply(finalProject.antagonistWords, finalProject.foodWords);
        }
    }

     public update(): void {
         this._tickLevel1++;
         console.log(" tick level " + this._tickLevel1);
         if (this._tickLevel1 == 250) {
             this._tickLevel1 = 0;
             this._nextTckerWord();
         }
         //update position
            this._word.update();
            for (var antiWord = 0; antiWord < finalProject.numOfAntiWords; antiWord++) {
                this._antiWords[antiWord].update();
            }

            scoreboard.update();// update score
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