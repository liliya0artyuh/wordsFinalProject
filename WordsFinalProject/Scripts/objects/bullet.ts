//<!--Repository Name for source code on github: finalProject-- >
//<!--Description: A game that allows to users practise with memorising English finalProject in different categories in a fun manner -- >
//<!--Author Name: Liliya Artyukh -- >
//<!--Creation Date: 06 - Nov - 2015 -- >
//<!--Last Modified Date: 12 - Nov - 2015 -- >
//<!--Last Modified by: Liliya Artyukh -- >

module finalProject {
    //Truck class ---------------------------------------------
    export class Bullet extends createjs.Shape {
        _dy: number = 2;
        public width: number;

        public bulletMoving: boolean = false;

        constructor() {
            super();
            this.graphics.beginFill("red").drawCircle(0, 0, 10);
            this.name = "bullet";
            this.width = 10;
           this.y = 450;

        }

        private _checkBounds() {
            //check if word has left the screen
            if (this.y < 20) {
                this.bulletMoving = false;
                console.log(" bullet is less tha 10 Y");
               // this.reset();
            }
        }

        public update() {
            if (this.bulletMoving) {
                this.y -= this._dy;
                this._checkBounds();
            }
        }
    }
}