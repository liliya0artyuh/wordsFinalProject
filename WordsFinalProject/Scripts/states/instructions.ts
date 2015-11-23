module finalProject {
    //class instructions ++++++++++++++++++++++++++++++++++++++++++++
    export class Instructions extends finalProject.Scene {
        //private properties
        private  _introLabel: finalProject.Label;
        private _startButton: finalProject.Button = new finalProject.Button("startButton", finalProject.centerX, 390);
      private  _logo: createjs.Bitmap;
      private _nameLabel: finalProject.Label = new finalProject.Label("What's your name?", "20px Consolas", "#FFF000", 206, 140, false);
      private _selectCategoryLabel: finalProject.Label = new finalProject.Label("Select Category:", "20px Consolas", "#FFF000", 206, 175, false);
      private _foodBtn: finalProject.Button = new finalProject.Button("categoryButton", 206, 205);
      private _furnitureBtn: finalProject.Button = new finalProject.Button("categoryButton", 456, 205);
      private _clothesBtn: finalProject.Button = new finalProject.Button("categoryButton", 206, 290);
      private _animalsBtn: finalProject.Button = new finalProject.Button("categoryButton", 456, 290);
      private _foodLabel: finalProject.Label = new finalProject.Label("FOOD", "30px Consolas", "#000000", 301, 230, true);
      private _furnitureLabel: finalProject.Label = new finalProject.Label("FURNITURE", "30px Consolas", "#000000", 551, 230, true);
      private _clothesLabel: finalProject.Label = new finalProject.Label("CLOTHES", "30px Consolas", "#000000", 301, 315, true);
      private _animalsLabel: finalProject.Label = new finalProject.Label("ANIMALS", "30px Consolas", "#000000", 551, 315, true);
      private _alertContainer: createjs.Container = new createjs.Container;
      private _instructionsContainer: createjs.Container = new createjs.Container;
      private _alertLable: finalProject.Label = new finalProject.Label("Please select a category", "20px Consolas", "#000000", 20, 20, false);
      private _isAlertOn: boolean = false;
      private _instructionsLable: finalProject.Label = new finalProject.Label("placeholder text", "20px Consolas", "#000000", 20, 20, false);
      private  _rulesButton: finalProject.Button = new finalProject.Button("rulesButton", finalProject.centerX, 50);
      private  _aboutButton: finalProject.Button;
      private _rect: createjs.Shape = new createjs.Shape;
      private _instructionsVisible: boolean = false;
      private _isCategorySelected: boolean;
      private  _rulesText: string = "1. Select word category to practise. \n\n2. Move mouse up and down to control collector rectangle. \n\n3. Collect 10 finalProject from selected category to win. \n\n4. Collecting 3 wrong finalProject lead to a loss.";


        //constructor ++++++++++++++++++++++++++++++++++++++++++++++++++
        constructor() {
            super();
        }

        public setRulesText(rules: string): void {
            this._rulesText = rules;
        }

        public getRulesText(): string {
            return this._rulesText;
        }


        //private method
        //callback function that allows to respond to start button click events
        private _playClicked(event: createjs.MouseEvent): void {
            console.log("event.target " + event.target);
            createjs.Sound.play("soundtrack");
            //get the name of user
            name = (<HTMLInputElement>document.getElementById("txtName")).value;
            if (name == null || name == "") {
                name = "YOU";
            }
            console.log("check name after button is clicked " + name);
            if (this._isCategorySelected) {
                document.getElementById("txtName").style.display = "none";
                this.removeAllChildren();
                changeState(finalProject.LEVEL1_STATE);
                console.log("category was selected");
            } else {
                //display message to select a category
                console.log("didn't recognize that category was selected");
                //add instruction container
                this._isAlertOn = true;
                this._alertContainer.x = 400;
                this._alertContainer.y = 400;
                this._rect.graphics.beginFill("red").drawRect(0, 0, 50, 5);
                this._alertContainer.addChild(this._rect);
                this._alertContainer.addChild(this._alertLable);
                this.addChild(this._alertContainer);
                this._alertContainer.visible = true;
            }
        }

        //callback function that allows to respond to button click events
        private _rulesClicked(event: createjs.MouseEvent): void {
            //check if lable is already displayed
            if (this._instructionsContainer.visible == true) {
                this._instructionsContainer.visible = false;
            } else {
                this._instructionsContainer.visible = true;
            }
                this._instructionsLable.text = this._rulesText;// set text for rules
        }

        private _categoryClicked(event: createjs.MouseEvent): void {
            //read selected category and assing to a variable
            wordCategory = event.target.name;
            console.log(wordCategory);
            this._isCategorySelected = true;
            //reset category values to show no category is selected
            this._resetCategoryButtons();
            //set selected button isSelected to true and alpha to 1.0
            event.currentTarget.setIsSelected(true);
            event.currentTarget.alpha = 1.0;
        }



        private _resetCategoryButtons(): void {
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
        }

        //public methods
        public start(): void {

            //set boolean value for category selected control to false
            this._isCategorySelected = false;

            //add background to the scene
            this.addChild(background);

            //add buttons for about and rules
            this._rulesButton.setWidth(183);
            this._rulesButton.centerAlongX();
            this._rulesButton.name = "rulesBtn";
            this._rulesButton.on("click", this._rulesClicked, this);
            this.addChild(this._rulesButton);

            //display categories
            this._getDetails();

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
        }



        private _getDetails(): void {

            //add name label to scene
            this.addChild(this._nameLabel);
            //add name text box to the scene
            document.getElementById("txtName").style.display = "inline";
            console.log("check name " + name);

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
            this._foodBtn.on("click", this._categoryClicked, this);
            this.addChild(this._foodLabel);

                // add category button for furniture
            this._furnitureBtn.setIsCategory(true);
            this._furnitureBtn.designCategoryButton();
            this._furnitureBtn.setHeight(61);
            this._furnitureBtn.setWidth(190);
            this._furnitureBtn.name = "furnitureBtn";
            this.addChild(this._furnitureBtn);
            this._furnitureBtn.on("click", this._categoryClicked, this);
            this.addChild(this._furnitureLabel);

                // add category button for clothes
            this._clothesBtn.setIsCategory(true);
            this._clothesBtn.designCategoryButton();
            this._clothesBtn.setHeight(61);
            this._clothesBtn.setWidth(190);
            this._clothesBtn.name = "clothesBtn";
            this.addChild(this._clothesBtn);
            this._clothesBtn.on("click", this._categoryClicked, this);
            this.addChild(this._clothesLabel);

                // add category button for animals
            this._animalsBtn.setIsCategory(true);
            this._animalsBtn.designCategoryButton();
            this._animalsBtn.setHeight(61);
            this._animalsBtn.setWidth(190);
            this._animalsBtn.name = "animalsBtn";
            this.addChild(this._animalsBtn);
            this._animalsBtn.on("click", this._categoryClicked, this);
            this.addChild(this._animalsLabel);


            //add this scene to the stage
            stage.addChild(this);
        }

        public update(): void {
            //make label flicker
            /*
            console.log(tickCounter);
            if (!this._isDisplayed && (tickCounter >= this._lowerTickBoundary && tickCounter <= this._higherTickBoundary)) {
                this._helloLabel.text = "Do you want to play? Hit Start button!";
                if (tickCounter == this._higherTickBoundary) {
                    this._isDisplayed = true;
                    this._lowerTickBoundary += 100;
                    this._higherTickBoundary += 100;
                }
            } else {
                this._isa = false;
            }

            */


            if (this._isAlertOn) {
                this._alertContainer.visible = false;
                this._alertContainer.visible = true;
            }
        }
    }
}