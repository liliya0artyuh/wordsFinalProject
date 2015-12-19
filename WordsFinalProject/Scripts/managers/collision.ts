    //<!--Repository Name for source code on github: finalProject-- >
    //<!--Description: A game that allows to users practise with memorising English finalProject in different categories in a fun manner -- >
    //<!--Author Name: Liliya Artyukh -- >
    //<!--Creation Date: 06 - Nov - 2015 -- >
    //<!--Last Modified Date: 12 - Nov - 2015 -- >
//<!--Last Modified by: Liliya Artyukh -- >

module finalProject {
    export class Collision {
        //PROPERTIES
        private _collectorX: number = finalProject.collectorWidth;
        private _wordX: number;

        private _collectorY1: number;
        private _collectorY2: number;
        private _wordY1: number;
        private _wordY2: number;
        private _collectorX1: number;
        private _collectorX2: number;
        private _wordX1: number;
        private _wordX2: number;


        private _p1: createjs.Point;
        private _p2: createjs.Point;



        //CONSTRUCTOR+++++++++++++++++++++++++++++++++++++++++++++++++++
        constructor() {
        }



        public check(gameObject: any, gameMainObject: any) {
            this._collectorY1 = gameMainObject.y;
            this._collectorY2 = this._collectorY1 + finalProject.collectorHeight;
            this._wordY2 = gameObject.y;
            this._wordY1 = this._wordY2 + finalProject.wordHeight;
            this._wordX = gameObject.x;

            if (this._wordX <= this._collectorX) {
                // console.log("word reached collector zone");
                if (this._wordY1 >= this._collectorY1 && this._wordY2 <= this._collectorY2) {
                    if (gameObject.isColliding == false) {

                        console.log("collision!");
                        //encrease points
                        //add sound
                        createjs.Sound.play(gameObject.sound);
                        if (gameObject.name == "friend") {
                            scoreboard.score += 100;
                            console.log("gameObject.name == " + "friend");
                        }
                        if (gameObject.name == "enemy" || gameObject.name == "enemy2" || gameObject.name == "enemy3" || gameObject.name == "enemy4") {
                            console.log("gameObject.name == " + "enemy");
                            scoreboard.lives--;
                        }
                    }
                    gameObject.isColliding = true;
                } else {
                    gameObject.isColliding = false;
                }

            } else {
                gameObject.isColliding = false;
            }
        }

        public checkLevel2(y: number, gameObject: finalProject.Word, gameMainObject: finalProject.Bullet) {
            this._collectorY1 = gameMainObject.y;
            this._collectorX1 = gameMainObject.x + gameMainObject.width * 0.5;
            this._wordY1 = y;
            this._wordX1 = gameObject.x;
            this._wordX2 = this._wordX1 + gameObject.getBounds().width;

            if (this._wordY1 >= (this._collectorY1 + 5)) {
                // console.log("word reached collector zone");
                if (this._collectorX1 >= this._wordX1 && this._collectorX1 <= this._wordX2) {
                    if (gameObject.isColliding == false) {
                        gameMainObject.visible = false;
                        gameMainObject._dy = 0;
                        gameObject.visible = false;
                        console.log("collision!");
                        console.log("------------------");
                        console.log("  this._collectorY1 " + this._collectorY1);
                        console.log("  this._collectorX1 " + this._collectorX1);
                        console.log("  this._wordY1 " + this._wordY1);
                        console.log("  this._wordX1 " + this._wordX1);
                        console.log("  this._wordX2 " + this._wordX2);
                        console.log("------------------");

                        //encrease points
                        //add sound
                        createjs.Sound.play(gameObject.sound);
                        if (gameObject.name == "friend") {
                            scoreboard.score += 100;
                        //    console.log("gameObject.name == " + "friend");
                        }
                        if (gameObject.name == "enemy" || gameObject.name == "enemy2" || gameObject.name == "enemy3" || gameObject.name == "enemy4") {
                           // console.log("gameObject.name == " + "enemy");
                            scoreboard.lives--;
                        }
                    }
                    gameObject.isColliding = true;
                } else {
                    gameObject.isColliding = false;
                }

            } else {
                gameObject.isColliding = false;
            }
        }

        public checkLevel1(gameObject: any, gameMainObject: any) {
            this._collectorY1 = finalProject.boxYPosition;
            this._collectorX1 = finalProject.boxXPosition;
            this._collectorX2 = this._collectorX1 + finalProject.boxWidth;
            this._wordY1 = gameObject.y;
            this._wordX1 = gameObject.x + (gameObject.getMeasuredWidth() *0.5);
            this._wordX2 = gameObject.x + gameObject.getMeasuredWidth();
            if (this._wordY1 >= this._collectorY1) {
                // console.log("word reached collector zone");
                if (this._wordX1 >= this._collectorX1 && this._wordX1 <= this._collectorX2) {
                    if (gameObject.isColliding == false) {
                        console.log(" 333  collision!");
                        //console.log("_collectorY1 " + this._collectorY1);
                        //console.log(" _collectorX1 " + this._collectorX1);
                        //console.log("_collectorX2 " + this._collectorX2);
                        //console.log("_wordY1 " + this._wordY1);
                        //console.log("_wordX1" + this._wordX1);
                        //console.log("_wordX2 " + this._wordX2);
                        //encrease points
                        //add sound
                        createjs.Sound.play(gameObject.sound);
                        if (gameObject.name == "friend") {
                            scoreboard.score += 100;
                            console.log("gameObject.name == " + gameObject.name);
                        }
                        if (gameObject.name.search("enemy") >= 0) {
                            console.log("gameObject.name == " + gameObject.name);
                            scoreboard.lives--;
                        }
                    }
                            gameObject.isColliding = true;
                        } else {
                            gameObject.isColliding = false;
                        }

                    } else {
                        gameObject.isColliding = false;
                    }
                }
            
        /*
        //PUBLIC METHODS
        //check distance bettween truck and any other objects
        public check(gameObject: any, gameMainObject: any ) {
             this._p1= new createjs.Point;
             this._p2 = new createjs.Point;

            p1.x = gameObject.x;
            p1.y = gameObject.y;

            p2.x = gameMainObject.x;
            p2.y = gameMainObject.y;

            if (utility.distance(p1, p2) < ((gameMainObject.width * 0.5) + (gameObject.width * 0.5))) {
                if (gameObject.isColliding == false) {
                    console.log("collision!");
                    //encrease points
                    //add sound
                    createjs.Sound.play(gameObject.sound);
                    if (gameObject.name == "hero") {
                        scoreboard.score +=100;
                    } 
                    if (gameObject.name == "enemy") {
                        scoreboard.lives--;
                    } 
                }
                gameObject.isColliding = true;
            } else {
                gameObject.isColliding = false;
            }
        }
        */
    }
}