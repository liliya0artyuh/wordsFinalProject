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
    var Shooter = (function (_super) {
        __extends(Shooter, _super);
        //CONSTRUCTOR --------------------------------------------------
        function Shooter(imageString, curCat) {
            _super.call(this);
            this.setBounds(424, 450, 160, 58); // (x, y, w, h)
            this._shooterImage = new createjs.Bitmap(assets.loader.getResult(imageString));
            this._shooterLabel = new finalProject.Label(curCat, "15px Consolas", "#000000", this.x + this._shooterImage.getBounds().width * 0.5, this.y + this._shooterImage.getBounds().height * 0.5, true);
            //  this._shooterLabel.regX = this._shooterLabel.getBounds().width * 0.5;
            this.y = 450;
            this.x = 424;
            this._width = 160;
            this._height = 58;
            this.addChild(this._shooterImage);
            this.addChild(this._shooterLabel);
        }
        Shooter.prototype.getWidth = function () {
            return this._width;
        };
        Shooter.prototype.getHeight = function () {
            return this._height;
        };
        //PUBLIC METHODS -----------------------------------------------------
        Shooter.prototype.update = function () {
            this.x = stage.mouseX - (this.getBounds().width * 0.5);
        };
        return Shooter;
    })(createjs.Container);
    finalProject.Shooter = Shooter;
})(finalProject || (finalProject = {}));
//# sourceMappingURL=shooter.js.map