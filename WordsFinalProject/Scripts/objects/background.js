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
    //Background class ---------------------------------------------
    var Background = (function (_super) {
        __extends(Background, _super);
        //CONSTRUCTOR --------------------------------------------------
        function Background(imageString) {
            _super.call(this, assets.loader.getResult(imageString));
            this.dx = 1;
            //  this.width = this.getBounds().width;
            // this.height = this.getBounds().height;
            this.x = 0; // start Background - x value
            this.y = 0; // start Background - y value
        }
        //PRIVATE METHODS --------------------------------------------------------
        Background.prototype._checkBounds = function () {
            //check if Background has left the screen
            if (this.x <= -1696) {
                this._reset();
            }
        };
        Background.prototype._reset = function () {
            this.x = 0; // start Background - x value
            this.y = 0; // start Background - y value
        };
        //PUBLIC METHODS -----------------------------------------------------
        Background.prototype.update = function () {
            this.x -= this.dx;
            this._checkBounds();
        };
        return Background;
    })(createjs.Bitmap);
    finalProject.Background = Background;
})(finalProject || (finalProject = {}));
//# sourceMappingURL=background.js.map