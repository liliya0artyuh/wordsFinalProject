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
    // LABEL CLASS ++++++++++++++++++++++++++++++++++++++++
    var Label = (function (_super) {
        __extends(Label, _super);
        // CONSTRUCTOR METHOD ++++++++++++++++++++++++++++++++
        function Label(labelString, labelFont, labelColor, x, y, centered) {
            _super.call(this, labelString, labelFont, labelColor);
            this.x = x;
            this.y = y;
            if (centered) {
                this.regX = this.getBounds().width * 0.5;
                this.regY = this.getBounds().height * 0.5;
            }
        }
        return Label;
    })(createjs.Text);
    finalProject.Label = Label;
})(finalProject || (finalProject = {}));
//# sourceMappingURL=label.js.map