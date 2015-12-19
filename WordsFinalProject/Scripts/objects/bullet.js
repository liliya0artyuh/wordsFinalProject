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
    //Truck class ---------------------------------------------
    var Bullet = (function (_super) {
        __extends(Bullet, _super);
        function Bullet() {
            _super.call(this);
            this._dy = 2;
            this.bulletMoving = false;
            this.graphics.beginFill("red").drawCircle(0, 0, 10);
            this.name = "bullet";
            this.width = 10;
            this.y = 450;
        }
        Bullet.prototype._checkBounds = function () {
            //check if word has left the screen
            if (this.y < 20) {
                this.bulletMoving = false;
                console.log(" bullet is less tha 10 Y");
            }
        };
        Bullet.prototype.update = function () {
            if (this.bulletMoving) {
                this.y -= this._dy;
                this._checkBounds();
            }
        };
        return Bullet;
    })(createjs.Shape);
    finalProject.Bullet = Bullet;
})(finalProject || (finalProject = {}));
//# sourceMappingURL=bullet.js.map