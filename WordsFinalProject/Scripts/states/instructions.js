var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var finalProject;
(function (finalProject) {
    //class instructions ++++++++++++++++++++++++++++++++++++++++++++
    var Instructions = (function (_super) {
        __extends(Instructions, _super);
        //constructor ++++++++++++++++++++++++++++++++++++++++++++++++++
        function Instructions() {
            _super.call(this);
            this._startButton = new finalProject.Button("startButton", finalProject.centerX, 390);
            this._selectCategoryLabel = new finalProject.Label("Select Category:", "20px Consolas", "#FFF000", 206, 175, false);
            this._foodBtn = new finalProject.Button("categoryButton", 206, 205);
            this._furnitureBtn = new finalProject.Button("categoryButton", 456, 205);
            this._clothesBtn = new finalProject.Button("categoryButton", 206, 290);
            this._animalsBtn = new finalProject.Button("categoryButton", 456, 290);
            this._foodLabel = new finalProject.Label("FOOD", "30px Consolas", "#000000", 301, 230, true);
            this._furnitureLabel = new finalProject.Label("FURNITURE", "30px Consolas", "#000000", 551, 230, true);
            this._clothesLabel = new finalProject.Label("CLOTHES", "30px Consolas", "#000000", 301, 315, true);
            this._animalsLabel = new finalProject.Label("ANIMALS", "30px Consolas", "#000000", 551, 315, true);
            this._alertContainer = new createjs.Container;
            this._instructionsContainer = new createjs.Container;
            this._alertLable = new finalProject.Label("Please select a category!", "20px Consolas", "#FF0000", finalProject.centerX, 370, true);
            this._isAlertOn = false;
            this._instructionsLable = new finalProject.Label("placeholder text", "20px Consolas", "#000000", 20, 20, false);
            this._rulesButton = new finalProject.Button("rulesButton", finalProject.centerX, 50);
            this._rect = new createjs.Shape;
            this._instructionsVisible = false;
            this._rulesText = "placeholder";
            this._isAlertDisplayed = false;
        }
        //private method
        //callback function that allows to respond to start button click events
        Instructions.prototype._playClicked = function (event) {
            createjs.Sound.play("soundtrack");
            if (currentLevel == finalProject.LEVEL1_STATE) {
                //get the name of user
                name = document.getElementById("txtName").value;
                if (name == null || name == "") {
                    name = "YOU";
                }
            }
            //  console.log("check name after button is clicked " + name);
            if (this._isCategorySelected) {
                document.getElementById("txtName").style.display = "none";
                this.removeAllChildren();
                if (currentLevel == finalProject.LEVEL1_STATE) {
                    changeState(finalProject.LEVEL1_STATE);
                }
                else if (currentLevel == finalProject.LEVEL2_STATE) {
                    changeState(finalProject.LEVEL2_STATE);
                }
                else if (currentLevel == finalProject.LEVEL3_STATE) {
                    changeState(finalProject.LEVEL3_STATE);
                }
            }
            else {
                //display message to select a category
                console.log("didn't recognize that category was selected");
                //add instruction container
                this._isAlertOn = true;
                this._isAlertDisplayed = true;
                tickCounter = 0;
                this._lowerTickBoundary = 0;
                this._higherTickBoundary = 50;
                this.addChild(this._alertLable);
                this._alertContainer.visible = true;
            }
        };
        //callback function that allows to respond to button click events
        Instructions.prototype._rulesClicked = function (event) {
            //check if lable is already displayed
            if (this._instructionsContainer.visible == true) {
                this._instructionsContainer.visible = false;
            }
            else {
                this._instructionsContainer.visible = true;
            }
            this._instructionsLable.text = this._rulesText; // set text for rules
        };
        Instructions.prototype._categoryClicked = function (event) {
            //read selected category and assing to a variable
            wordCategory = event.target.name;
            console.log(wordCategory);
            //disable alert for not selecting a category
            this._isAlertOn = false;
            this._alertLable.text = " ";
            this._isCategorySelected = true;
            //reset category values to show no category is selected
            this._resetCategoryButtons();
            //set selected button isSelected to true and alpha to 1.0
            event.currentTarget.setIsSelected(true);
            event.currentTarget.alpha = 1.0;
        };
        Instructions.prototype._resetCategoryButtons = function () {
            //reset all category buttons
            //set isSeleted for all categories to false
            this._clothesBtn.setIsSelected(false);
            this._foodBtn.setIsSelected(false);
            this._furnitureBtn.setIsSelected(false);
            this._animalsBtn.setIsSelected(false);
            //set alpha for all buttons to faded 0.5
            this._clothesBtn.alpha = 0.5;
            this._foodBtn.alpha = 0.5;
            this._furnitureBtn.alpha = 0.5;
            this._animalsBtn.alpha = 0.5;
        };
        //public methods
        Instructions.prototype.start = function () {
            //set boolean value for category selected control to false
            this._isCategorySelected = false;
            switch (currentLevel) {
                case finalProject.LEVEL1_STATE:
                    //add background to the scene
                    this.addChild(background);
                    break;
                case finalProject.LEVEL2_STATE:
                    this._background = new finalProject.Background("back_vert", false);
                    this.addChild(this._background);
                    break;
                case finalProject.LEVEL1_STATE:
                    //add background to the scene
                    this.addChild(background);
                    break;
            }
            //display categories
            this._getDetails();
            //add buttons for about and rules
            this._rulesButton.setWidth(183);
            this._rulesButton.centerAlongX();
            this._rulesButton.name = "rulesBtn";
            this._rulesButton.on("click", this._rulesClicked, this);
            this.addChild(this._rulesButton);
            //add instruction container
            this._instructionsContainer.x = 24;
            this._instructionsContainer.y = 150;
            this._rect.graphics.beginFill("red").drawRect(0, 0, 800, 300);
            this._instructionsContainer.addChild(this._rect);
            this._instructionsContainer.addChild(this._instructionsLable);
            this.addChild(this._instructionsContainer);
            this._instructionsContainer.visible = false;
            //instantiate and add a start button
            this._startButton.setWidth(206);
            this._startButton.centerAlongX();
            this.addChild(this._startButton);
            this._startButton.on("click", this._playClicked, this);
            //add this menu container to the stage
            stage.addChild(this);
        };
        Instructions.prototype._getDetails = function () {
            // add lable for Select Category to the scene
            this.addChild(this._selectCategoryLabel);
            //add category buttons and their labels
            // add category button for food
            this._foodBtn.setIsCategory(true);
            this._foodBtn.designCategoryButton();
            this._foodBtn.setHeight(61);
            this._foodBtn.setWidth(190);
            this._foodBtn.name = "foodBtn";
            this.addChild(this._foodBtn);
            this.addChild(this._foodLabel);
            // add category button for furniture
            this._furnitureBtn.setIsCategory(true);
            this._furnitureBtn.designCategoryButton();
            this._furnitureBtn.setHeight(61);
            this._furnitureBtn.setWidth(190);
            this._furnitureBtn.name = "furnitureBtn";
            this.addChild(this._furnitureBtn);
            this.addChild(this._furnitureLabel);
            // add category button for clothes
            this._clothesBtn.setIsCategory(true);
            this._clothesBtn.designCategoryButton();
            this._clothesBtn.setHeight(61);
            this._clothesBtn.setWidth(190);
            this._clothesBtn.name = "clothesBtn";
            this.addChild(this._clothesBtn);
            this.addChild(this._clothesLabel);
            // add category button for animals
            this._animalsBtn.setIsCategory(true);
            this._animalsBtn.designCategoryButton();
            this._animalsBtn.setHeight(61);
            this._animalsBtn.setWidth(190);
            this._animalsBtn.name = "animalsBtn";
            this.addChild(this._animalsBtn);
            this.addChild(this._animalsLabel);
            if (currentLevel == finalProject.LEVEL1_STATE) {
                this._rulesText = "level 1\n\n1. Select word category to practise. \n\n" +
                    "2. Move mouse up and down to control collector rectangle.\n\n" +
                    "3.Collect 10 finalProject from selected category to win.\n\n" +
                    "4.Collecting 3 wrong finalProject lead to a loss.";
                //add name label and text box to the scene
                this._nameLabel = new finalProject.Label("What's your name?", "20px Consolas", "#FFF000", 206, 140, false);
                //add name label to scene
                this.addChild(this._nameLabel);
                document.getElementById("txtName").style.display = "inline";
                // console.log("check name " + name);
                this._setUpLevel1And2();
            }
            else if (currentLevel == finalProject.LEVEL2_STATE) {
                this._rulesText = "level 2\n\n1. Select word category to practise. \n\n" +
                    "2. Move mouse up and down to control collector rectangle.\n\n" +
                    "3.Collect 10 finalProject from selected category to win.\n\n" +
                    "4.Collecting 3 wrong finalProject lead to a loss.";
                this._setUpLevel1And2();
            }
            else if (currentLevel == finalProject.LEVEL3_STATE) {
                this._rulesText = "level 3\n\n1. Select word category to practise. \n\n" +
                    "2. Move mouse up and down to control collector rectangle.\n\n" +
                    "3.Collect 10 finalProject from selected category to win.\n\n" +
                    "4.Collecting 3 wrong finalProject lead to a loss.";
                this._setUpLevel3();
            }
            //add this scene to the stage
            stage.addChild(this);
        };
        Instructions.prototype._setUpLevel1And2 = function () {
            //add event listeners to category buttons
            this._foodBtn.on("click", this._categoryClicked, this);
            this._furnitureBtn.on("click", this._categoryClicked, this);
            this._clothesBtn.on("click", this._categoryClicked, this);
            this._animalsBtn.on("click", this._categoryClicked, this);
        };
        Instructions.prototype._setUpLevel3 = function () {
            //set all category buttons to disabled and alpha 1.0 - selected
            this._clothesBtn.setIsDisabled(true);
            this._foodBtn.setIsDisabled(true);
            this._furnitureBtn.setIsDisabled(true);
            this._animalsBtn.setIsDisabled(true);
            this._clothesBtn.alpha = 1.0;
            this._foodBtn.alpha = 1.0;
            this._furnitureBtn.alpha = 1.0;
            this._animalsBtn.alpha = 1.0;
            this._selectCategoryLabel.text = "All categories are selected for this level";
        };
        Instructions.prototype.update = function () {
            switch (currentLevel) {
                case finalProject.LEVEL1_STATE:
                    break;
                case finalProject.LEVEL2_STATE:
                    this._background.update();
                    break;
                case finalProject.LEVEL3_STATE:
                    break;
            }
            //make label flicker
            //  console.log(tickCounter);
            if (this._isAlertOn) {
                if (!this._isAlertDisplayed && (tickCounter >= this._lowerTickBoundary && tickCounter <= this._higherTickBoundary)) {
                    this._alertLable.text = "Please select a category!";
                    if (tickCounter == this._higherTickBoundary) {
                        this._isAlertDisplayed = true;
                        this._lowerTickBoundary += 100;
                        this._higherTickBoundary += 100;
                    }
                }
                else {
                    this._alertLable.text = " ";
                    this._isAlertDisplayed = false;
                }
            }
        };
        return Instructions;
    })(finalProject.Scene);
    finalProject.Instructions = Instructions;
})(finalProject || (finalProject = {}));
//# sourceMappingURL=instructions.js.map