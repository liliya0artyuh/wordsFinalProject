//<!--Repository Name for source code on github: finalProject-- >
//<!--Description: A game that allows to users practise with memorising English finalProject in different categories in a fun manner -- >
//<!--Author Name: Liliya Artyukh -- >
//<!--Creation Date: 06 - Nov - 2015 -- >
//<!--Last Modified Date: 12 - Nov - 2015 -- >
//<!--Last Modified by: Liliya Artyukh -- >

module finalProject {
    //Truck class ---------------------------------------------
    export class Shooter extends createjs.Container {

        //private

        _shooterLabel: finalProject.Label;
        _shooterImage: createjs.Bitmap;
        _width: number;
        _height: number;

        //CONSTRUCTOR --------------------------------------------------
        constructor(imageString: string, curCat: string) {
            super();
            this.setBounds(424, 450, 160, 58);// (x, y, w, h)
   
            this._shooterImage = new createjs.Bitmap(assets.loader.getResult(imageString));
            this._shooterLabel = new finalProject.Label(curCat, "15px Consolas", "#000000", this.x + this._shooterImage.getBounds().width * 0.5, this.y + this._shooterImage.getBounds().height * 0.5, true);
          //  this._shooterLabel.regX = this._shooterLabel.getBounds().width * 0.5;
            this.y = 450;
            this.x = 424;
            this._width = 160;
            this._height = 58;

            this.addChild(this._shooterImage);
            this.addChild(this._shooterLabel);
        }

        public getWidth(): number {
            return this._width;
        }
        public getHeight(): number {
            return this._height;
        }

        //PUBLIC METHODS -----------------------------------------------------
        public update(): void {
                    this.x = stage.mouseX - (this.getBounds().width * 0.5);
        }
    }
}