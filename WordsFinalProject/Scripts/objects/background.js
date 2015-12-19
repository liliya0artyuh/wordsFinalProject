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
        function Background(imageString, num) {
            _super.call(this, assets.loader.getResult(imageString));
            this._dx = 1;
            this._dy = 0.5;
            this._firstScreen = false;
            this._firstScreen = num;
            if (this._firstScreen) {
                //  this.width = this.getBounds().width;
                // this.height = this.getBounds().height;
                this.x = 0; // start Background - x value
                this.y = 0; // start Background - y value
            }
            switch (currentLevel) {
                case finalProject.LEVEL1_STATE:
                    this.x = 0; // start Background - x value
                    this.y = 0;
                    break;
                case finalProject.LEVEL2_STATE:
                    //  this.width = this.getBounds().width;
                    // this.height = this.getBounds().height;
                    this.x = 0; // start Background - x value
                    this.y = -1100; // start Background - y value
                    break;
                case finalProject.LEVEL3_STATE:
                    break;
            }
        }
        //PRIVATE METHODS --------------------------------------------------------
        Background.prototype._checkBounds = function () {
            if (this._firstScreen) {
                //check if Background has left the screen
                if (this.x <= -1696) {
                    this._reset();
                }
            }
            switch (currentLevel) {
                case finalProject.LEVEL1_STATE:
                    break;
                case finalProject.LEVEL2_STATE:
                    //check if Background has left the screen
                    if (this.y >= 0) {
                        this._reset();
                    }
                    break;
                case finalProject.LEVEL3_STATE:
                    break;
            }
        };
        Background.prototype._reset = function () {
            if (this._firstScreen) {
                this.x = 0; // start Background - x value
                this.y = 0; // start Background - y value
            }
            switch (currentLevel) {
                case finalProject.LEVEL1_STATE:
                    break;
                case finalProject.LEVEL2_STATE:
                    this.x = 0; // start Background - x value
                    this.y = -1100; // start Background - y value
                    break;
                case finalProject.LEVEL3_STATE:
                    break;
            }
        };
        //PUBLIC METHODS -----------------------------------------------------
        Background.prototype.update = function () {
            if (this._firstScreen) {
                this.x -= this._dx;
                this._checkBounds();
            }
            switch (currentLevel) {
                case finalProject.LEVEL1_STATE:
                    break;
                case finalProject.LEVEL2_STATE:
                    this.y += this._dy;
                    this._checkBounds();
                    break;
                case finalProject.LEVEL3_STATE:
                    break;
            }
        };
        return Background;
    })(createjs.Bitmap);
    finalProject.Background = Background;
})(finalProject || (finalProject = {}));
//# sourceMappingURL=background.js.map