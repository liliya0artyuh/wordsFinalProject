    //<!--Repository Name for source code on github: finalProject-- >
    //<!--Description: A game that allows to users practise with memorising English finalProject in different categories in a fun manner -- >
    //<!--Author Name: Liliya Artyukh -- >
    //<!--Creation Date: 06 - Nov - 2015 -- >
    //<!--Last Modified Date: 12 - Nov - 2015 -- >
    //<!--Last Modified by: Liliya Artyukh -- >

module finalProject {
    export class Scoreboard {

        //PUBLIC PROPERTIES
        score: number = 0;
        lives: number = 3;

        //PRIVATE PROPERTIES
        private _scoreLabel: finalProject.Label;
        private _livesLabel: finalProject.Label;

        //CONSTRUCTOR++++++++++++++++++++++++++++++++++
        constructor() {

            this._scoreLabel = new finalProject.Label("Score: ", "40px Consolas", "#FFF000", 10, 10, false);
            stage.addChild(this._scoreLabel);

            this._livesLabel = new finalProject.Label("Lives: ", "40px Consolas", "#FFF000", 300, 10, false);
            stage.addChild(this._livesLabel);
        }


        //PUBLIC METHODS +++++++++++++++++++++++++++++++++++++
        public update() {
            this._livesLabel.text = "Lives: " + this.lives;
            this._scoreLabel.text = "Score: " + this.score;
        }

        public reset() {
            this.score = 0;
            this.lives = 3;
        }
    }
}