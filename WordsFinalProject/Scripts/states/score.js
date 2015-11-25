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
    // menu class
    var Score = (function (_super) {
        __extends(Score, _super);
        //constructor
        function Score(finalOutcome) {
            _super.call(this);
            this._outcomeText = "placeholder for outcome text";
        }
        //private method
        //callback function that allows to respond to button click events
        Score.prototype._againClicked = function (event) {
            switch (currentLevel) {
                case finalProject.LEVEL1_STATE:
                    changeState(finalProject.INSTRUCTIONS_STATE, finalProject.LEVEL1_STATE);
                    break;
                case finalProject.LEVEL2_STATE:
                    changeState(finalProject.INSTRUCTIONS_STATE, finalProject.LEVEL2_STATE);
                    break;
                case finalProject.LEVEL3_STATE:
                    changeState(finalProject.INSTRUCTIONS_STATE, finalProject.LEVEL3_STATE);
                    break;
            }
        };
        Score.prototype._nextClicked = function (event) {
            switch (currentLevel) {
                case finalProject.LEVEL1_STATE:
                    changeState(finalProject.INSTRUCTIONS_STATE, finalProject.LEVEL2_STATE);
                    break;
                case finalProject.LEVEL2_STATE:
                    changeState(finalProject.INSTRUCTIONS_STATE, finalProject.LEVEL3_STATE);
                    break;
            }
        };
        Score.prototype._exitClicked = function (event) {
            changeState(finalProject.START_STATE, 0);
        };
        Score.prototype._summaryClicked = function (event) {
            changeState(finalProject.END_STATE, 0);
        };
        //public methods
        Score.prototype.start = function () {
            this.addChild(background);
            scoreboard.reset();
            //add a logo
            this._logo = new createjs.Bitmap(assets.loader.getResult("logo"));
            this._logo.x = finalProject.centerX - (146 * 0.5); //position logo in the center of x axis
            this._logo.y = 30; //position logo at 30 below top (alog y axis)
            this.addChild(this._logo);
            //add final score label
            this._finalScore = new finalProject.Label("collected words: " + numOfCollectedWords + "\n\nlost lives: " + numOfLivesLost, "20px Consolas", "#FFF000", finalProject.centerX, 200, true);
            this.addChild(this._finalScore);
            //add end label
            switch (currentLevel) {
                case finalProject.LEVEL1_STATE:
                    this._endLabelText = "You have completed LEVEL 1 - Click The Word";
                    break;
                case finalProject.LEVEL2_STATE:
                    this._endLabelText = "You have completed LEVEL 2 - Shoot The Word";
                    break;
                case finalProject.LEVEL3_STATE:
                    this._endLabelText = "You have completed LEVEL 3 - Drag The Word";
                    break;
            }
            this._endLabel = new finalProject.Label(this._endLabelText, "30px Consolas", "#ffffff", finalProject.centerX, 260, true);
            this.addChild(this._endLabel);
            //  add a start button
            this._againButton = new finalProject.Button("againButton", 67, 360);
            //this._againButton.setWidth(206);
            //this._againButton.centerAlongX();
            this.addChild(this._againButton);
            this._againButton.on("click", this._againClicked, this);
            if (currentLevel == finalProject.LEVEL1_STATE || currentLevel == finalProject.LEVEL2_STATE) {
                //add next level button
                this._nextLevelButton = new finalProject.Button("nextLevelButton", 323, 360);
                //this._nextLevelButton.setWidth(206);
                //this._nextLevelButton.centerAlongX();
                this.addChild(this._nextLevelButton);
            }
            else {
                //add summary  button
                this._summaryButton = new finalProject.Button("summaryButton", 323, 360);
                //this._summaryButton.setWidth(206);
                //this._summaryButton.centerAlongX();
                this.addChild(this._summaryButton);
                this._summaryButton.on("click", this._summaryClicked, this);
            }
            //add exit button
            this._exitButton = new finalProject.Button("exitButton", 579, 360);
            //this._exitButton.setWidth(206);
            //this._exitButton.centerAlongX();
            this.addChild(this._exitButton);
            this._exitButton.on("click", this._exitClicked, this);
            //check the outcome
            if (outcome == 1) {
                this._outcomeText = "Well Done! You have collected " + finalProject.winningNumber / 100 + " words from the selected category";
                this._nextLevelButton.on("click", this._nextClicked, this);
            }
            if (outcome == 2) {
                this._outcomeText = "Good try! Study the words and play the game again.";
                this._nextLevelButton.alpha = 0.5;
                this._nextLevelButton.setIsDisabled(true);
            }
            // add outcome label to the scene
            this._outcomeLabel = new finalProject.Label(this._outcomeText, "18px Consolas", "#ffffff", finalProject.centerX, 140, true);
            this.addChild(this._outcomeLabel);
            //add everythng to stage
            stage.addChild(this);
        };
        Score.prototype.update = function () {
        };
        return Score;
    })(finalProject.Scene);
    finalProject.Score = Score;
})(finalProject || (finalProject = {}));
//# sourceMappingURL=score.js.map