    //<!--Repository Name for source code on github: finalProject-- >
    //<!--Description: A game that allows to users practise with memorising English finalProject in different categories in a fun manner -- >
    //<!--Author Name: Liliya Artyukh -- >
    //<!--Creation Date: 06 - Nov - 2015 -- >
    //<!--Last Modified Date: 12 - Nov - 2015 -- >
    //<!--Last Modified by: Liliya Artyukh -- >

module finalProject {
    export class Button extends createjs.Bitmap {
        //private instance variables
        _width: number;
        _height: number;
        _isCategory: boolean;
        _isSelected: boolean;
        //constructor
        constructor(pathString: string, x: number, y: number) {
            super(assets.loader.getResult(pathString));

            this.x = x;
            this.y = y;

            this.on("mouseover", this.buttonOver, this);
            this.on("mouseout", this.buttonOut, this);

        }

        //public methods
        public getWidth(): number {
            return this._width;
        }

        public setWidth(width: number): void {
            this._width = width;
        }
        public getIsCategory(): boolean {
            return this._isCategory;
        }

        public setIsCategory(isCategory: boolean): void {
            this._isCategory = isCategory;
        }

        public getIsSelected(): boolean {
            return this._isSelected;
        }

        public setIsSelected(isSelected: boolean): void {
            this._isSelected = isSelected;
        }

        public getHeight(): number {
            return this._height;
        }

        public setHeight(height: number): void {
            this._height = height;
        }

        //private methods
        public centerAlongX(): void {
            this.regX = this._width * 0.5;
        }
        public centerAlongY(): void {
            this.regY = this._height * 0.5;
        }
        //callback function that change the apha transparency of the button
        //mousover event
        buttonOver(event: createjs.MouseEvent): void {
            if (this._isCategory && this._isSelected==false) {
                event.currentTarget.alpha = 1.0;
            } else {
                event.currentTarget.alpha = 0.8;
            }
        }

        //mouseout event
        buttonOut(event: createjs.MouseEvent): void {
            if (this._isCategory && this._isSelected == false) {
                event.currentTarget.alpha = 0.5;
            } else {
                event.currentTarget.alpha = 1.0;
            }
        }

        //public methods
        public designCategoryButton() {
            if (this._isCategory) {
                this.alpha = 0.5;
                this._isSelected = false;
            }
        }
    }
}