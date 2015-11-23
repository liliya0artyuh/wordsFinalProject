    //<!--Repository Name for source code on github: finalProject-- >
    //<!--Description: A game that allows to users practise with memorising English finalProject in different categories in a fun manner -- >
    //<!--Author Name: Liliya Artyukh -- >
    //<!--Creation Date: 06 - Nov - 2015 -- >
    //<!--Last Modified Date: 12 - Nov - 2015 -- >
//<!--Last Modified by: Liliya Artyukh -- >

module finalProject {
    //Truck class ---------------------------------------------
    export class Truck extends createjs.Bitmap {

        //CONSTRUCTOR --------------------------------------------------
        constructor(imageString: string) {
            super(assets.loader.getResult(imageString));
              this.x = 0;
        }


        //PUBLIC METHODS -----------------------------------------------------
        public update(): void {
            this.y = stage.mouseY;
        }

    }
}