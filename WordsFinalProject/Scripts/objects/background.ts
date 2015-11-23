
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
        dx: number = 1;


        //CONSTRUCTOR --------------------------------------------------
        constructor(imageString: string) {
            super(assets.loader.getResult(imageString));
          //  this.width = this.getBounds().width;
           // this.height = this.getBounds().height;
            this.x = 0;// start Background - x value
            this.y = 0;// start Background - y value
        }


        //PRIVATE METHODS --------------------------------------------------------
        private _checkBounds(): void {
            //check if Background has left the screen
            if (this.x <= -1696) {
                this._reset();
            }
        }

        private _reset(): void {
            this.x = 0;// start Background - x value
            this.y = 0;// start Background - y value
        }

        //PUBLIC METHODS -----------------------------------------------------
        public update(): void {
            this.x -= this.dx;
            this._checkBounds();
        } 
         
    }
}