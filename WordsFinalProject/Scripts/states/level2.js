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
    // menu class
    var Level2 = (function (_super) {
        __extends(Level2, _super);
        //constructor
        function Level2() {
            _super.call(this);
            this._antiWords = [];
            this._wordOrder = [0];
            this._itemsInArray = 8;
            this._totalPositions = 14;
            this._bulletNum = 0;
        }
        //public methods
        Level2.prototype.start = function () {
            this._determineCategories();
            finalProject.positionsAllX = new Array(141.5, 424, 706.5, 283, 565, 141.5, 424, 706.5, 283, 565, 141.5, 424, 706.5, 283, 565);
            finalProject.positionsAllY = new Array(-50, -50, -50, -100, -100, -150, -150, -150, -200, -200, -250, -250, -250, -300, -300);
            this._numEnemy = new Array(0, 2, 4, 5, 6, 7, 8, 9, 11, 13);
            this._bullets = new Array();
            this._bullets = [];
            this._background = new finalProject.Background("back_vert", false);
            this.addChild(this._background);
            //get positions for words
            finalProject.positionsTaken = new Array();
            this._getPositions();
            //
            // this._numEnemy = 
            //add truck/collector to the game
            this._shooter = new finalProject.Shooter("shooter", this._currentCatString);
            this.addChild(this._shooter);
            this._shooter.on("click", this._shooterClick, this);
            //add selected category finalProject
            this._word1 = new finalProject.Word(true); // collectibe word
            this._word1.setPositionLevel1(1);
            this._word1.reset();
            this.addChild(this._word1);
            //this._word2 = new finalProject.Word(true);// collectibe word
            //this._word2.setPositionLevel1(3);
            //this.addChild(this._word2);
            //this._word3 = new finalProject.Word(true);// collectibe word
            //this._word3.setPositionLevel1(10);
            //this.addChild(this._word3);
            //this._word4 = new finalProject.Word(true);// collectibe word
            //this._word4.setPositionLevel1(12);
            //this.addChild(this._word4);
            //this._word5 = new finalProject.Word(true);// collectibe word
            //this._word5.setPositionLevel1(14);
            //this.addChild(this._word5);
            //add enemy finalProject
            for (var antiWord = 0; antiWord < finalProject.numOfAntiWords2; antiWord++) {
                this._antiWords[antiWord] = new finalProject.Word(false); // antogonist finalProject
                this._antiWords[antiWord].setPositionLevel1(this._numEnemy[antiWord]);
                this._antiWords[antiWord].reset();
                this.addChild(this._antiWords[antiWord]);
            }
            //add all objects to the stage
            stage.addChild(this);
            scoreboard = new finalProject.Scoreboard;
            collision = new finalProject.Collision;
        };
        //private method
        // creates a list of current positions taken by the  words - 5 words - 5 positions
        // this positions are then serve as a parameter for the two arrays that hold x and y positions
        Level2.prototype._getPositions = function () {
            finalProject.positionsTaken = []; //set array to empty
            // populate array with random numbers
            finalProject.positionsTaken = finalProject.randomNumberArray(this._totalPositions, this._itemsInArray);
        };
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
        //determine categories for collectible finalProject and the antagonist finalProject
        Level2.prototype._determineCategories = function () {
            console.log("wordCategory " + wordCategory);
            if (wordCategory == "foodBtn") {
                this._currentCatString = "FOOD";
                finalProject.currentCategory = finalProject.foodWords;
                finalProject.antagonistWords = finalProject.furnitureWords;
                Array.prototype.push.apply(finalProject.antagonistWords, finalProject.clothesWords);
                Array.prototype.push.apply(finalProject.antagonistWords, finalProject.animalsWords);
                console.log("this._currentCategory " + finalProject.currentCategory);
                console.log("this._antagonistWords " + finalProject.antagonistWords);
            }
            else if (wordCategory == "furnitureBtn") {
                this._currentCatString = "FURNITURE";
                finalProject.currentCategory = finalProject.furnitureWords;
                finalProject.antagonistWords = finalProject.foodWords;
                Array.prototype.push.apply(finalProject.antagonistWords, finalProject.clothesWords);
                Array.prototype.push.apply(finalProject.antagonistWords, finalProject.animalsWords);
            }
            else if (wordCategory == "clothesBtn") {
                this._currentCatString = "CLOTHES";
                finalProject.currentCategory = finalProject.clothesWords;
                finalProject.antagonistWords = finalProject.furnitureWords;
                Array.prototype.push.apply(finalProject.antagonistWords, finalProject.foodWords);
                Array.prototype.push.apply(finalProject.antagonistWords, finalProject.animalsWords);
            }
            else if (wordCategory == "animalsBtn") {
                this._currentCatString = "ANIMAL";
                finalProject.currentCategory = finalProject.animalsWords;
                finalProject.antagonistWords = finalProject.furnitureWords;
                Array.prototype.push.apply(finalProject.antagonistWords, finalProject.clothesWords);
                Array.prototype.push.apply(finalProject.antagonistWords, finalProject.foodWords);
            }
        };
        //callback function that change the apha transparency of the button
        //mousover event
        Level2.prototype._shooterClick = function (event) {
            this._bullets[this._bulletNum] = new finalProject.Bullet();
            this._bullets[this._bulletNum].bulletMoving = true;
            this._bullets[this._bulletNum].x = this._shooter.x + this._shooter.getBounds().width * 0.5;
            console.log(" this._bullets[this._bulletNum].x " + this._bullets[this._bulletNum].x);
            this._bullets[this._bulletNum].y = 450;
            stage.addChild(this._bullets[this._bulletNum]);
            this._bulletNum++;
        };
        Level2.prototype.update = function () {
            this._shooter.update();
            this._word1.update();
            //this._word2.update();
            //this._word3.update();
            //this._word4.update();
            //this._word5.update();
            // var this._word1.update();
            for (var antiWord = 0; antiWord < finalProject.numOfAntiWords2; antiWord++) {
                this._antiWords[antiWord].update();
            }
            for (var x = 0; x < this._bullets.length; x++) {
                if (this._bullets[x].bulletMoving) {
                    this._bullets[x].update();
                    //  this._bullets[x].y -= 1;
                    for (var antiWord = 0; antiWord < finalProject.numOfAntiWords2; antiWord++) {
                        collision.checkLevel2(this._antiWords[antiWord].y, this._antiWords[antiWord], this._bullets[x]);
                    }
                    collision.checkLevel2(this._word1.y, this._word1, this._bullets[x]);
                }
            }
            this._background.update();
            scoreboard.update();
            if (scoreboard.lives <= 0) {
                outcome = 2;
                numOfCollectedWords[1] = scoreboard.score / 100;
                numOfLivesLost[1] = 3;
                changeState(finalProject.SCORE_STATE);
            }
            if (scoreboard.score == 1000) {
                outcome = 1;
                numOfCollectedWords[1] = 10;
                numOfLivesLost[1] = 3 - scoreboard.lives;
                changeState(finalProject.SCORE_STATE);
            }
        };
        return Level2;
    })(finalProject.Scene);
    finalProject.Level2 = Level2;
})(finalProject || (finalProject = {}));
//# sourceMappingURL=level2.js.map