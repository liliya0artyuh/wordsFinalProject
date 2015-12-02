//<!--Repository Name for source code on github: finalProject-- >
//<!--Description: A game that allows to users practise with memorising English finalProject in different categories in a fun manner -- >
//<!--Author Name: Liliya Artyukh -- >
//<!--Creation Date: 06 - Nov - 2015 -- >
//<!--Last Modified Date: 12 - Nov - 2015 -- >
//<!--Last Modified by: Liliya Artyukh -- >
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var finalProject;
(function (finalProject) {
    var Word = (function (_super) {
        __extends(Word, _super);
        //CONSTRUCTOR --------------------------------------------------
        function Word(curWord) {
            _super.call(this, "placeholder", "40px Consolas", "green");
            this.isColliding = false;
            this.sound = "";
            //PRIVATE PROPERTIES
            this._name = "";
            this._dx = 1;
            //determines the next set of finalProject
            this._currentWordItem = 0;
            this._antiWordItem = 0;
            //check if the word is enemy or hero
            if (curWord) {
                this._currentWord = true; //hero
                this.sound = "wellDone";
            }
            else {
                this._currentWord = false; //enemy
                this.sound = "oh";
            }
        }
        Word.prototype.setPositionLevel1 = function (position) {
            this._positionLevel1 = position;
        };
        Word.prototype.getPositionLevel1 = function () {
            return this._positionLevel1;
        };
        Word.prototype.setName = function (name) {
            this._name = name;
        };
        Word.prototype.getName = function () {
            return this._name;
        };
        //PRIVATE METHODS --------------------------------------------------------
        //determines the next word
        Word.prototype._determineNextWord = function () {
            //determine next collectible word (out of 10)
            if (this._currentWord) {
                this._currentWordItem = Math.floor(Math.random() * (10 - 0 + 0) + 0);
            }
            else {
                //determine next antagonist word (out of 30)
                this._antiWordItem = Math.floor(Math.random() * (30 - 0 + 0) + 0);
            }
        };
        //checks if word left the screen and if so calls functions to reset word to new word
        Word.prototype._checkBounds = function () {
            //check if word has left the screen
            if (this.x < 0) {
                this.reset();
            }
        };
        //PUBLIC METHODS ---------------------------------------------------------
        //resets the text of of the word and its positions
        Word.prototype.reset = function () {
            this._determineNextWord();
            if (this._currentWord) {
                this.text = finalProject.currentCategory[this._currentWordItem];
            }
            else {
                // for (var antiWord = 0; antiWord < config.numOfAntiWords; antiWord++) {
                this.text = finalProject.antagonistWords[this._antiWordItem]; // antogonist finalProject
            }
            this._positionWord();
        };
        Word.prototype._positionWord = function () {
            switch (currentLevel) {
                case finalProject.LEVEL1_STATE:
                    this.y = finalProject.positionsAllY[finalProject.positionsTaken[this._positionLevel1]] + 10;
                    // console.log("1. y position = " + finalProject.positionsTaken[this._positionLevel1]);
                    // console.log("2. y position = " + finalProject.positionsAllY[finalProject.positionsTaken[this._positionLevel1]]);
                    ////  console.log("y = " + finalProject.positionsAllY[finalProject.positionsTaken[this._positionLevel1]]);
                    this.x = finalProject.positionsAllX[finalProject.positionsTaken[this._positionLevel1]];
                    //   console.log(" x = " + finalProject.positionsAllX[finalProject.positionsTaken[this._positionLevel1]]);
                    this.width = this.getBounds().width;
                    this.height = 40;
                    this.regX = this.width * 0.5;
                    // console.log(" w = " + this.width);
                    // console.log(" h = " + this.height);
                    break;
                case finalProject.LEVEL2_STATE:
                    this._dx = (Math.random() * (1.5 - 0.5 + 0.5) + 0.5); //sets random speed between 1 and 2
                    this.y = Math.floor(Math.random() * (400 - 50 + 50) + 50); // start word at random location
                    this.x = 848;
                    this.width = this.getBounds().width;
                    this.height = this.getBounds().height;
                    //console.log(" w = " + this.width);
                    //console.log(" h = " + this.height);
                    break;
                case finalProject.LEVEL3_STATE:
                    this._dx = (Math.random() * (1.5 - 0.5 + 0.5) + 0.5); //sets random speed between 1 and 2
                    this.y = Math.floor(Math.random() * (400 - 50 + 50) + 50); // start word at random location
                    this.x = 848;
                    this.width = this.getBounds().width;
                    this.height = this.getBounds().height;
                    //console.log(" w = " + this.width);
                    //console.log(" h = " + this.height);
                    break;
            }
        };
        Word.prototype.update = function () {
            switch (currentLevel) {
                case finalProject.LEVEL1_STATE:
                    break;
                case finalProject.LEVEL2_STATE:
                    this.x -= this._dx;
                    this._checkBounds();
                    break;
                case finalProject.LEVEL3_STATE:
                    this.x -= this._dx;
                    this._checkBounds();
                    break;
            }
        };
        return Word;
    })(createjs.Text);
    finalProject.Word = Word;
})(finalProject || (finalProject = {}));
//# sourceMappingURL=word.js.map