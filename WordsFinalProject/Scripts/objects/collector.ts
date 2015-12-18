    //<!--Repository Name for source code on github: finalProject-- >
    //<!--Description: A game that allows to users practise with memorising English finalProject in different categories in a fun manner -- >
    //<!--Author Name: Liliya Artyukh -- >
    //<!--Creation Date: 06 - Nov - 2015 -- >
    //<!--Last Modified Date: 12 - Nov - 2015 -- >
//<!--Last Modified by: Liliya Artyukh -- >

module finalProject {
    //Truck class ---------------------------------------------
    export class Collector extends createjs.Bitmap {

        //CONSTRUCTOR --------------------------------------------------
        constructor(imageString: string) {
            super(assets.loader.getResult(imageString));
            switch (currentLevel) {
                case finalProject.LEVEL1_STATE:
                    break;
                case finalProject.LEVEL2_STATE:
                    this.y = 450;
                    break;
                case finalProject.LEVEL3_STATE:
                    this.x = 0;
                    break;
            }           
        }


        //PUBLIC METHODS -----------------------------------------------------
        public update(): void {
            switch (currentLevel) {
                case finalProject.LEVEL1_STATE:
                    break;
                case finalProject.LEVEL2_STATE:
                    this.x = stage.mouseX - (this.getBounds().width * 0.5);
                    break;
                case finalProject.LEVEL3_STATE:
                    this.y = stage.mouseY;
                    break;
            }
        }

        //callback function that change the apha transparency of the button
        //mousover event
        collectorClick(event: createjs.MouseEvent): void {
            switch (currentLevel) {
                case finalProject.LEVEL1_STATE:
                    break;
                case finalProject.LEVEL2_STATE:
                    break;
                case finalProject.LEVEL3_STATE:
                    break;
            }
        }
    }
}