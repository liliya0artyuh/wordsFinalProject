
    //<!--Repository Name for source code on github: finalProject-- >
    //<!--Description: A game that allows to users practise with memorising English finalProject in different categories in a fun manner -- >
    //<!--Author Name: Liliya Artyukh -- >
    //<!--Creation Date: 06 - Nov - 2015 -- >
    //<!--Last Modified Date: 12 - Nov - 2015 -- >
//<!--Last Modified by: Liliya Artyukh -- >

module finalProject {
    //Background class ---------------------------------------------
    export class Background extends createjs.Bitmap {

        //PUBLIC PROPERTIES ----------------------------------------
        width: number;
        height: number;
        _dx: number = 1;
        _dy: number = 1;
        _firstScreen: boolean = false;


        //CONSTRUCTOR --------------------------------------------------
        constructor(imageString: string, num: boolean) {
            super(assets.loader.getResult(imageString));
            this._firstScreen = num;
            if (this._firstScreen) {
                //  this.width = this.getBounds().width;
                // this.height = this.getBounds().height;
                this.x = 0;// start Background - x value
                this.y = 0;// start Background - y value
            }
            switch (currentLevel) {
                case finalProject.LEVEL1_STATE:
                    break;
                case finalProject.LEVEL2_STATE:
                    //  this.width = this.getBounds().width;
                    // this.height = this.getBounds().height;
                    this.x = 0;// start Background - x value
                    this.y = -1100;// start Background - y value
                    break;
                case finalProject.LEVEL3_STATE:
                    break;
            }
        }


        //PRIVATE METHODS --------------------------------------------------------
        private _checkBounds(): void {
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
        }

        private _reset(): void {
            if (this._firstScreen) {
                this.x = 0;// start Background - x value
                this.y = 0;// start Background - y value
            }
            switch (currentLevel) {
                case finalProject.LEVEL1_STATE:
                    break;
                case finalProject.LEVEL2_STATE:
                    this.x = 0;// start Background - x value
                    this.y = -1100;// start Background - y value
                    break;
                case finalProject.LEVEL3_STATE:
                    break;
            }
        }
           

        //PUBLIC METHODS -----------------------------------------------------
        public update(): void {
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
        }     
    }
}