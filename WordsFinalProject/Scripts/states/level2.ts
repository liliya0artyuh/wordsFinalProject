//<!--Repository Name for source code on github: finalProject-- >
//<!--Description: A game that allows to users practise with memorising English finalProject in different categories in a fun manner -- >
//<!--Author Name: Liliya Artyukh -- >
//<!--Creation Date: 06 - Nov - 2015 -- >
//<!--Last Modified Date: 12 - Nov - 2015 -- >
//<!--Last Modified by: Liliya Artyukh -- >

module finalProject {
    // menu class
    export class Level2 extends finalProject.Scene {
        // private instance variables
        _textLabel: finalProject.Label;
        _shooter: finalProject.Shooter;
        _word1: finalProject.Word;
        _word2: finalProject.Word;
        _word3: finalProject.Word;
        _word4: finalProject.Word;
        _word5: finalProject.Word;
        _antiWords: finalProject.Word[] = [];
        _currentWord: string;
        _wordOrder: number[] = [0];
        _category: string;
        _numExists: boolean;
        _currentCategory: string[];
        _antagonistWords: string[];
        _background: finalProject.Background;
        _itemsInArray: number = 8;
        _totalPositions: number = 14;
        _currentCatString: string;
        _bullets: Array<finalProject.Bullet>;
        _bulletNum: number = 0;
        _numEnemy: Array<number>;

        //constructor
        constructor() {
            super();
        }

        //public methods
        public start(): void {
            this._determineCategories();
            finalProject.positionsAllX = new Array<number>(141.5, 424, 706.5, 283, 565, 141.5, 424, 706.5, 283, 565, 141.5, 424, 706.5, 283, 565);
            finalProject.positionsAllY = new Array<number>(-50, -50, -50, -100, -100, -150, -150, -150, -200, -200, -250, -250, -250, -300, -300);
            this._numEnemy = new Array <number>(0, 2, 4, 5, 6, 7, 8, 9, 11, 13 );
            this._bullets = new Array<finalProject.Bullet>();
            this._bullets = [];

            this._background = new finalProject.Background("back_vert", false);
            this.addChild(this._background);

            //get positions for words
            finalProject.positionsTaken = new Array<number>();
            this._getPositions();

            //
           // this._numEnemy = 

            //add truck/collector to the game
            this._shooter = new finalProject.Shooter("shooter", this._currentCatString);
            this.addChild(this._shooter);
            this._shooter.on("click", this._shooterClick, this);
           

            //add selected category finalProject
            this._word1 = new finalProject.Word(true);// collectibe word
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
                this._antiWords[antiWord] = new finalProject.Word(false);// antogonist finalProject
                this._antiWords[antiWord].setPositionLevel1(this._numEnemy[antiWord]);
                this._antiWords[antiWord].reset();
                this.addChild(this._antiWords[antiWord]);
            }


            //add all objects to the stage
            stage.addChild(this);

            scoreboard = new finalProject.Scoreboard;
            collision = new finalProject.Collision;
        }


        //private method
        // creates a list of current positions taken by the  words - 5 words - 5 positions
        // this positions are then serve as a parameter for the two arrays that hold x and y positions
        private _getPositions(): void {
            finalProject.positionsTaken = []; //set array to empty
            // populate array with random numbers
            finalProject.positionsTaken = finalProject.randomNumberArray(this._totalPositions, this._itemsInArray);
        }


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
        private _determineCategories(): void {
            console.log("wordCategory " + wordCategory);
            if (wordCategory == "foodBtn") {
                this._currentCatString = "FOOD";
                finalProject.currentCategory = finalProject.foodWords;
                finalProject.antagonistWords = finalProject.furnitureWords;
                Array.prototype.push.apply(finalProject.antagonistWords, finalProject.clothesWords);
                Array.prototype.push.apply(finalProject.antagonistWords, finalProject.animalsWords);
                console.log("this._currentCategory " + finalProject.currentCategory);
                console.log("this._antagonistWords " + finalProject.antagonistWords);
            } else if (wordCategory == "furnitureBtn") {
                this._currentCatString = "FURNITURE";
                finalProject.currentCategory = finalProject.furnitureWords;
                finalProject.antagonistWords = finalProject.foodWords;
                Array.prototype.push.apply(finalProject.antagonistWords, finalProject.clothesWords);
                Array.prototype.push.apply(finalProject.antagonistWords, finalProject.animalsWords);
            } else if (wordCategory == "clothesBtn") {
                this._currentCatString = "CLOTHES";
                finalProject.currentCategory = finalProject.clothesWords;
                finalProject.antagonistWords = finalProject.furnitureWords;
                Array.prototype.push.apply(finalProject.antagonistWords, finalProject.foodWords);
                Array.prototype.push.apply(finalProject.antagonistWords, finalProject.animalsWords);
            } else if (wordCategory == "animalsBtn") {
                this._currentCatString = "ANIMAL";
                finalProject.currentCategory = finalProject.animalsWords;
                finalProject.antagonistWords = finalProject.furnitureWords;
                Array.prototype.push.apply(finalProject.antagonistWords, finalProject.clothesWords);
                Array.prototype.push.apply(finalProject.antagonistWords, finalProject.foodWords);
            }
        }


        //callback function that change the apha transparency of the button
        //mousover event
        private _shooterClick(event: createjs.MouseEvent): void {
            this._bullets[this._bulletNum] = new finalProject.Bullet();
            this._bullets[this._bulletNum].bulletMoving = true;
            this._bullets[this._bulletNum].x = this._shooter.x + this._shooter.getBounds().width * 0.5;
            console.log(" this._bullets[this._bulletNum].x " + this._bullets[this._bulletNum].x);
            this._bullets[this._bulletNum].y = 450;
            stage.addChild(this._bullets[this._bulletNum]);
            this._bulletNum++;
        }

        public update(): void {
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
                    //collision.checkLevel2(this._word2, this._bullets[x]);
                    //collision.checkLevel2(this._word3, this._bullets[x]);
                    //collision.checkLevel2(this._word4, this._bullets[x]);
                    //collision.checkLevel2(this._word5, this._bullets[x]);
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
        }
    }
}