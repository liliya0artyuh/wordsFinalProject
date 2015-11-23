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
    var Truck = (function (_super) {
        __extends(Truck, _super);
        //CONSTRUCTOR --------------------------------------------------
        function Truck(imageString) {
            _super.call(this, assets.loader.getResult(imageString));
            this.x = 0;
        }
        //PUBLIC METHODS -----------------------------------------------------
        Truck.prototype.update = function () {
            this.y = stage.mouseY;
        };
        return Truck;
    })(createjs.Bitmap);
    finalProject.Truck = Truck;
})(finalProject || (finalProject = {}));
//# sourceMappingURL=truck.js.map