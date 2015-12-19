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
    var Collector = (function (_super) {
        __extends(Collector, _super);
        //CONSTRUCTOR --------------------------------------------------
        function Collector(imageString) {
            _super.call(this, assets.loader.getResult(imageString));
            switch (currentLevel) {
                case finalProject.LEVEL1_STATE:
                    break;
                case finalProject.LEVEL2_STATE:
                    this.y = 450;
                    break;
                case finalProject.LEVEL3_STATE:
                    this.x = 0;
                    break;
            }
        }
        //PUBLIC METHODS -----------------------------------------------------
        Collector.prototype.update = function () {
            switch (currentLevel) {
                case finalProject.LEVEL1_STATE:
                    break;
                case finalProject.LEVEL2_STATE:
                    this.x = stage.mouseX - (this.getBounds().width * 0.5);
                    break;
                case finalProject.LEVEL3_STATE:
                    this.y = stage.mouseY;
                    break;
            }
        };
        //callback function that change the apha transparency of the button
        //mousover event
        Collector.prototype.collectorClick = function (event) {
            switch (currentLevel) {
                case finalProject.LEVEL1_STATE:
                    break;
                case finalProject.LEVEL2_STATE:
                    break;
                case finalProject.LEVEL3_STATE:
                    break;
            }
        };
        return Collector;
    })(createjs.Bitmap);
    finalProject.Collector = Collector;
})(finalProject || (finalProject = {}));
//# sourceMappingURL=collector.js.map