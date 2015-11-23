    //<!--Repository Name for source code on github: finalProject-- >
    //<!--Description: A game that allows to users practise with memorising English finalProject in different categories in a fun manner -- >
    //<!--Author Name: Liliya Artyukh -- >
    //<!--Creation Date: 06 - Nov - 2015 -- >
    //<!--Last Modified Date: 12 - Nov - 2015 -- >
//<!--Last Modified by: Liliya Artyukh -- >


module finalProject {

    export class Word extends createjs.Text {

        //PUBLIC PROPERTIES ----------------------------------------
        public  width: number;
        public  height: number;
        public  isColliding: boolean = false;
        public sound: string = "";
        public name: string = "";

        //PRIVATE PROPERTIES
        _dx: number = 1;
        //determines the next set of finalProject
        _currentWordItem: number = 0;
        _antiWordItem: number = 0;
        _currentWord: boolean;

        //CONSTRUCTOR --------------------------------------------------
        constructor(curWord: boolean) {
            super("placeholder", "40px Consolas", "green");
            //check if the word is enemy or hero
            if (curWord) {
                this._currentWord = true;//hero
                this.sound = "wellDone";
                this.name = "hero";
            } else {
                this._currentWord = false;//enemy
                this.sound = "oh";
                this.name = "enemy";
            }
            this._reset();
        }


        //PRIVATE METHODS --------------------------------------------------------
        //determines the next word
        private _determineNextWord(): void {
            //determine next collectible word (out of 10)
            if (this._currentWord) {
                this._currentWordItem = Math.floor(Math.random() * (10 - 0 + 0) + 0);
            } else{
            //determine next antagonist word (out of 30)
                this._antiWordItem = Math.floor(Math.random() * (30 - 0 + 0) + 0);
           }
        }

        //checks if word left the screen and if so calls functions to reset word to new word
        private _checkBounds(): void {
            //check if word has left the screen
            if (this.x < 0) {
                this._reset();
            }
        }




        //PUBLIC METHODS ---------------------------------------------------------
        //resets the text of of the word and its positions
        public _reset(): void {
            this._determineNextWord();
            if (this._currentWord) {
                this.text = finalProject.currentCategory[this._currentWordItem];
            } else {
                // for (var antiWord = 0; antiWord < config.numOfAntiWords; antiWord++) {
                this.text = finalProject.antagonistWords[this._antiWordItem];// antogonist finalProject
                //   }
            }
            this._dx = (Math.random() * (1.5 - 0.5 + 0.5) + 0.5);//sets random speed between 1 and 2
            this.y = Math.floor(Math.random() * (450 - 50 + 50) + 50);// start word at random location
            this.x = 848;
            this.width = this.getBounds().width;
            this.height = this.getBounds().height;
        }


        public update(): void {
            this.x -= this._dx;
           this._checkBounds();
        }

    }
}