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
                        if (gameObject.name == "hero") {
                            scoreboard.score += 100;
                            console.log("gameObject.name == " + "hero");
                            console.log("this._collectorX" + this._collectorX);
                            console.log("this._wordX" + this._wordX);
                            console.log("this._collectorY2" + this._collectorY2);
                            console.log("this._collectorY1" + this._collectorY1);
                            console.log("this._wordY2" + this._wordY2);
                            console.log("this._wordY1" + this._wordY1);
                            console.log("------------------------------------------");
                        }
                        if (gameObject.name == "enemy") {
                            console.log("gameObject.name == " + "enemy");
                            console.log("this._collectorX" + this._collectorX);
                            console.log("this._wordX" + this._wordX);
                            console.log("this._collectorY2" + this._collectorY2);
                            console.log("this._collectorY1" + this._collectorY1);
                            console.log("this._wordY2" + this._wordY2);
                            console.log("this._wordY1" + this._wordY1);
                            console.log("------------------------------------------");
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