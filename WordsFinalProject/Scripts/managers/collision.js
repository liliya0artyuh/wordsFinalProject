//<!--Repository Name for source code on github: finalProject-- >
//<!--Description: A game that allows to users practise with memorising English finalProject in different categories in a fun manner -- >
//<!--Author Name: Liliya Artyukh -- >
//<!--Creation Date: 06 - Nov - 2015 -- >
//<!--Last Modified Date: 12 - Nov - 2015 -- >
//<!--Last Modified by: Liliya Artyukh -- >
var finalProject;
(function (finalProject) {
    var Collision = (function () {
        //CONSTRUCTOR+++++++++++++++++++++++++++++++++++++++++++++++++++
        function Collision() {
            //PROPERTIES
            this._collectorX = finalProject.collectorWidth;
        }
        Collision.prototype.check = function (gameObject, gameMainObject) {
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
                }
                else {
                    gameObject.isColliding = false;
                }
            }
            else {
                gameObject.isColliding = false;
            }
        };
        Collision.prototype.checkLevel1 = function (gameObject, gameMainObject) {
            this._collectorY1 = finalProject.boxYPosition;
            this._collectorX1 = finalProject.boxXPosition;
            this._collectorX2 = this._collectorX1 + finalProject.boxWidth;
            this._wordY1 = gameObject.y;
            this._wordX1 = gameObject.x + (gameObject.getMeasuredWidth() * 0.5);
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
                }
                else {
                    gameObject.isColliding = false;
                }
            }
            else {
                gameObject.isColliding = false;
            }
        };
        return Collision;
    })();
    finalProject.Collision = Collision;
})(finalProject || (finalProject = {}));
//# sourceMappingURL=collision.js.map