    //<!--Repository Name for source code on github: finalProject-- >
    //<!--Description: A game that allows to users practise with memorising English finalProject in different categories in a fun manner -- >
    //<!--Author Name: Liliya Artyukh -- >
    //<!--Creation Date: 06 - Nov - 2015 -- >
    //<!--Last Modified Date: 12 - Nov - 2015 -- >
    //<!--Last Modified by: Liliya Artyukh -- >

module finalProject {
    // LABEL CLASS ++++++++++++++++++++++++++++++++++++++++
    export class Label extends createjs.Text {
        // CONSTRUCTOR METHOD ++++++++++++++++++++++++++++++++
        constructor(labelString: string, labelFont: string, labelColor: string, x: number, y: number, centered: boolean) {
            super(labelString, labelFont, labelColor);

            this.x = x;
            this.y = y;

            if (centered) {
               this.regX = this.getBounds().width * 0.5;
               this.regY = this.getBounds().height * 0.5;
            }
        }
    }
}