    //<!--Repository Name for source code on github: finalProject-- >
    //<!--Description: A game that allows to users practise with memorising English finalProject in different categories in a fun manner -- >
    //<!--Author Name: Liliya Artyukh -- >
    //<!--Creation Date: 06 - Nov - 2015 -- >
    //<!--Last Modified Date: 12 - Nov - 2015 -- >
//<!--Last Modified by: Liliya Artyukh -- >


module finalProject {

    export class Word extends createjs.Text {

        //PUBLIC PROPERTIES ----------------------------------------
        public  width: number;
        public  height: number;
        public  isColliding: boolean = false;
        public sound: string = "";


        //PRIVATE PROPERTIES
        public _name: string = "";
        //determines the next set of finalProject
        _currentWordItem: number = 0;
        _antiWordItem: number = 0;
        _currentWord: boolean;
        _positionLevel1: number;
        _update: boolean = false;
        _dy: number;
        _dx: number;
        _isMoving: boolean = false;

        //CONSTRUCTOR --------------------------------------------------
        constructor(curWord: boolean) {
            super("placeholder", "40px Consolas", "green");
            this._dy = 0.5;
                      switch (currentLevel) {
                case finalProject.LEVEL1_STATE:
                    //check if the word is enemy or hero
                    if (curWord) {
                        this._currentWord = true;//hero
                        this.sound = "wellDone";
                        // this.name = "hero";
                    } else {
                        this._currentWord = false;//enemy
                        this.sound = "oh";
                        // this.name = "enemy";
                    }
                    break;

                case finalProject.LEVEL2_STATE:
                              this._dy = 0.5;
                    //check if the word is enemy or hero
                    if (curWord) {
                        this._currentWord = true;//hero
                        this.sound = "wellDone";
                         this.name = "friend";
                    } else {
                        this._currentWord = false;//enemy
                        this.sound = "oh";
                         this.name = "enemy";
                    }
                    break;

                case finalProject.LEVEL3_STATE:
                    break;
            }
        }

        public setPositionLevel1(position: number) {
            this._positionLevel1 = position;
        }

        public getPositionLevel1(): number {
            return this._positionLevel1;
        }

        public setDX(dx: number) {
            this._dx = dx;
        }

        public getDX(): number {
            return this._dx;
        }

        public setDY() {
            if ((this.x - finalProject.centerX) == 0) {
                this._dy = 1;
                this._dx = 0;
            } else {
                this._dy = (this.y - finalProject.boxYPosition) / (this.x - finalProject.centerX); // + this.getBounds().width * 0.5
            }

            // console.log(" h = " + this.height);
            if (this.x == 141.5 || this.x == 283 ) {
                this._dx = 1;
            } else if (this.x == 424) {
                this._dx = 0;
            }else {
                this._dx = -1;
            }
            this._dx = this._dx * 2;
            this._dy = this._dy * 2;
        }

        public getDY(): number {
            return this._dy;
        }
        
        public setUpdate(update: boolean) {
            this._update = update;
        }

        public getUpdate(): boolean {
            return this._update;
        }

        public setIsMoving(moving: boolean) {
            this._isMoving = moving;
        }

        public getIsMoving(): boolean {
            return this._isMoving;
        }

        public setName(name: string) {
            this._name = name;
        }

        public getName(): string {
            return this._name;
        }
        //PRIVATE METHODS --------------------------------------------------------
        //determines the next word
        private _determineNextWord(): void {
            //determine next collectible word (out of 10)
            if (this._currentWord) {
                this._currentWordItem = Math.floor(Math.random() * (10 - 0 + 0) + 0);
            } else{
            //determine next antagonist word (out of 30)
                this._antiWordItem = Math.floor(Math.random() * (30 - 0 + 0) + 0);
           }
        }

        //checks if word left the screen and if so calls functions to reset word to new word
        private _checkBounds(): void {
            switch (currentLevel) {
                case finalProject.LEVEL1_STATE:
                    //check if word has left the screen
                    if (this.x < 0) {
                        this.reset();
                    }
                    break;

                case finalProject.LEVEL2_STATE:
                    //check if word has left the screen
                    if (this.y > 450) {
                        this.reset();
                    }
                    break;
                case finalProject.LEVEL3_STATE:
                    //check if word has left the screen
                    if (this.x < 0) {
                        this.reset();
                    }
                    break;
            }
     
        }

        //PUBLIC METHODS ---------------------------------------------------------
        //resets the text of of the word and its positions
        public reset(): void {
            switch (currentLevel) {
                case finalProject.LEVEL1_STATE:
                    break;

                case finalProject.LEVEL2_STATE:
            this._determineNextWord();
            if (this._currentWord) {
                this.text = finalProject.currentCategory[this._currentWordItem];
            } else {
                // for (var antiWord = 0; antiWord < config.numOfAntiWords; antiWord++) {
                this.text = finalProject.antagonistWords[this._antiWordItem];// antogonist words
                //   }
            }

            //this._dy = 0.5;//(Math.random() * (1 - 0.1 + 0.1) + 0.1);//sets random speed between 1 and 2
            ////this.y = Math.floor(Math.random() * (-450 + 50 - 50) + (-50));// start word at random location
            //this.y = finalProject.positionsAllY[(Math.floor(Math.random() * (14 - 0 + 0) + 0))];
            //this.x = finalProject.positionsAllX[(Math.floor(Math.random() * (14 - 0 + 0) + 0))];
            //this.width = this.getBounds().width;
            //this.height = this.getBounds().height;

                    break;
                case finalProject.LEVEL3_STATE:
                    break;
            }
            this._positionWord();

        }

        private _positionWord() {
            switch (currentLevel) {
                case finalProject.LEVEL1_STATE:
                    this.y = finalProject.positionsAllY[this._positionLevel1] + 10; //finalProject.positionsTaken[this._positionLevel1]]+10;
                    // console.log("1. y position = " + finalProject.positionsTaken[this._positionLevel1]);
                    // console.log("2. y position = " + finalProject.positionsAllY[finalProject.positionsTaken[this._positionLevel1]]);
                    ////  console.log("y = " + finalProject.positionsAllY[finalProject.positionsTaken[this._positionLevel1]]);
                    this.x = finalProject.positionsAllX[this._positionLevel1];//finalProject.positionsTaken[this._positionLevel1]];
                 //   console.log(" x = " + finalProject.positionsAllX[finalProject.positionsTaken[this._positionLevel1]]);
                    this.width = this.getBounds().width;
                    this.height = 40;
                    this.regX = this.width * 0.5;
                   // console.log(" w = " + this.width);
                    break;

                case finalProject.LEVEL2_STATE:
                    this.y = finalProject.positionsAllY[this._positionLevel1] + 10; 
                    //console.log("this.y = "+ this.y);
                    this.x = finalProject.positionsAllX[this._positionLevel1]; 
                  //  console.log("this.x = " +this.x);
                    this._dy = 0.5; //(Math.random() * (1 - 0.1 + 0.1) + 0.1);//sets random speed between 1 and 2
                  //  this.y = -50; //Math.floor(Math.random() * (400 - 50 + 50) + 50);// start word at random location
                  //  this.x = finalProject.positionsAllX[(Math.floor(Math.random() * (14 - 0 + 0) + 0))];
                    this.width = this.getBounds().width;
                    this.height = this.getBounds().height;
                    //console.log(" w = " + this.width);
                    //console.log(" h = " + this.height);
                    break;

                case finalProject.LEVEL3_STATE:
                    this._dx = (Math.random() * (1 - 0.1 + 0.1) + 0.1);//sets random speed between 1 and 2
                    this.y = Math.floor(Math.random() * (400 - 50 + 50) + 50);// start word at random location
                    this.x = 848;
                    this.width = this.getBounds().width;
                    this.height = this.getBounds().height;
                    //console.log(" w = " + this.width);
                    //console.log(" h = " + this.height);
                    break;
            }
        }


        public update(): void {
            switch (currentLevel) {
                case finalProject.LEVEL1_STATE:
                    if (this._update == true) {
                        this.x += this._dx;
                        this.y += Math.abs(this._dy);
                    }
                    break;
                case finalProject.LEVEL2_STATE:
                    this.y += this._dy;
                    console.log("hlevel 2 update ");
                    this._checkBounds();
                    break;
                case finalProject.LEVEL3_STATE:
                    this.x -= this._dx;
                    this._checkBounds();
                    break;
            }
        }
    }
}