//<!--Repository Name for source code on github: finalProject-- >
//<!--Description: A game that allows to users practise with memorising English finalProject in different categories in a fun manner -- >
//<!--Author Name: Liliya Artyukh -- >
//<!--Creation Date: 06 - Nov - 2015 -- >
//<!--Last Modified Date: 12 - Nov - 2015 -- >
//<!--Last Modified by: Liliya Artyukh -- >
var finalProject;
(function (finalProject) {
    var Asset = (function () {
        //CONSTRUCTOR
        function Asset() {
            //PRIVATE PROPERTIES
            //manifest of all of the assets
            this._manifest = [
                { id: "againButton", src: "../../Assets/images/againButton.png" },
                { id: "back", src: "../../Assets/images/back_long.png" },
                { id: "backPaper", src: "../../Assets/images/paper.png" },
                { id: "truck", src: "../../Assets/images/truck.png" },
                { id: "categoryButton", src: "../../Assets/images/categoryButton.png" },
                { id: "startButton", src: "../../Assets/images/startButton.png" },
                { id: "exitButton", src: "../../Assets/images/exitButton.png" },
                { id: "summaryButton", src: "../../Assets/images/summaryButton.png" },
                { id: "nextLevelButton", src: "../../Assets/images/nextLevelButton.png" },
                { id: "continueButton", src: "../../Assets/images/continueButton.png" },
                { id: "aboutButton", src: "../../Assets/images/about.png" },
                { id: "rulesButton", src: "../../Assets/images/rules.png" },
                { id: "logo", src: "../../Assets/images/logo.png" },
                { id: "wellDone", src: "../../Assets/audio/wellDone.wav" },
                { id: "oh", src: "../../Assets/audio/oh.wav" }
            ];
            this.preload();
        }
        Asset.prototype.preload = function () {
            this.loader = new createjs.LoadQueue(true);
            this.loader.installPlugin(createjs.Sound);
            //event listener triggers when assets are completely loaded
            this.loader.on("complete", init, this);
            this.loader.loadManifest(this._manifest);
        };
        return Asset;
    })();
    finalProject.Asset = Asset;
})(finalProject || (finalProject = {}));
//# sourceMappingURL=asset.js.map