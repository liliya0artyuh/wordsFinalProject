    //<!--Repository Name for source code on github: finalProject-- >
    //<!--Description: A game that allows to users practise with memorising English finalProject in different categories in a fun manner -- >
    //<!--Author Name: Liliya Artyukh -- >
    //<!--Creation Date: 06 - Nov - 2015 -- >
    //<!--Last Modified Date: 12 - Nov - 2015 -- >
    //<!--Last Modified by: Liliya Artyukh -- >


module finalProject {
    // menu class
    export class Start extends finalProject.Scene {
        // private instance variables
        _introLabel: finalProject.Label;
        _continueButton: finalProject.Button;
        _logo: createjs.Bitmap;
        _instructionsContainer: createjs.Container;
        _instructionsLable: finalProject.Label;
        _rulesButton: finalProject.Button;
        _aboutButton: finalProject.Button;
        _rect: createjs.Shape;
        _instructionsVisible: boolean = false;
        _aboutText: string = "This game is designed to help people learn English words in a fun way. \n\nThe goal of each level is to collect words from the selected category. \n\nThere are three levels altogether. \n\nThe instructions for each level will be available just before the \n\nlevel starts.";

        //constructor
        constructor() {
            super();
        }

        //private method
        //callback function that allows to respond to start button click events
        private _continueClicked(event: createjs.MouseEvent): void {
            console.log("event.target " + event.target);
            createjs.Sound.play("soundtrack");
            changeState(finalProject.INSTRUCTIONS_STATE);
        }

        //callback function that allows to respond to button click events
        private _menuClicked(event: createjs.MouseEvent): void {
            //check if lable is already displayed
            if (this._instructionsContainer.visible == true) {
                this._instructionsContainer.visible = false;
            } else {
                this._instructionsContainer.visible = true;
            }
            //check which button was clicked
            console.log("event.target.name " + event.target.name);
                this._instructionsLable.text = this._aboutText;
        }

        private _categoryClicked(event: createjs.MouseEvent): void {
            wordCategory = event.target.name;
            //get the name of user
            name = (<HTMLInputElement>document.getElementById("txtName")).value;
            if (name == null || name == "") {
                name = "YOU";
            }
            console.log("check name after button is clicked " + name);
            document.getElementById("txtName").style.display = "none";
        }


        //public methods
        public start(): void {
            this.addChild(background);

            //add button for about 
            this._aboutButton = new finalProject.Button("aboutButton", finalProject.centerX, 150);
            this._aboutButton.setWidth(183);
            this._aboutButton.centerAlongX(); 
            this._aboutButton.name = "aboutBtn";
            this._aboutButton.on("click", this._menuClicked, this);
            this.addChild(this._aboutButton);

            //add instruction container
            this._instructionsContainer = new createjs.Container;
            this._instructionsContainer.x = 24;
            this._instructionsContainer.y = 200;
            this._rect = new createjs.Shape;
            this._rect.graphics.beginFill("red").drawRect(0, 0, 800, 180);
            this._instructionsContainer.addChild(this._rect);
            this._instructionsLable = new finalProject.Label("placeholder text", "20px Consolas", "#000000", 20, 20, false);
            this._instructionsContainer.addChild(this._instructionsLable);
            this.addChild(this._instructionsContainer);
            this._instructionsContainer.visible = false;

            //instantiate and add a logo
            this._logo = new createjs.Bitmap(assets.loader.getResult("logo"));
            
           // this._logo.regX = this._logo.getBounds().width * 0.5;
            this._logo.x = finalProject.centerX - (146 * 0.5);//place in the middle along x axis
            this._logo.y = 30;
            //set regX so image is centered along x axis

            //add logo to game container
            this.addChild(this._logo);

            //instantiate and add a start button
            this._continueButton = new finalProject.Button("continueButton", finalProject.centerX, 390);
            this._continueButton.setWidth(206);
            this._continueButton.centerAlongX();
            this.addChild(this._continueButton);
            this._continueButton.on("click", this._continueClicked, this);



            //add this menu container to the stage
            stage.addChild(this);
        }

        public update(): void {
        }
    }
}