//    <!--Repository Name for source code on github: finalProject-- >
//    <!--Description: A game that allows to users practise with memorising English finalProject in different categories in a fun manner -- >
//    <!--Author Name: Liliya Artyukh -- >
//    <!--Creation Date: 06 - Nov - 2015 -- >
//    <!--Last Modified Date: 12 - Nov - 2015 -- >
//    <!--Last Modified by: Liliya Artyukh -- >

/// <reference path="../typings/jquery/jquery.d.ts" />
/// <reference path="../typings/stats/stats.d.ts" />
/// <reference path="../typings/createjs-lib/createjs-lib.d.ts" />
/// <reference path="../typings/easeljs/easeljs.d.ts" />
/// <reference path="../typings/tweenjs/tweenjs.d.ts" />
/// <reference path="../typings/webaudioapi/waa.d.ts" />
/// <reference path="../typings/soundjs/soundjs.d.ts" />
/// <reference path="../typings/preloadjs/preloadjs.d.ts" />

/// <reference path="../utility/utility.ts" />
/// <reference path="../config/wordsets.ts" />
/// <reference path="../config/config.ts" />
/// <reference path="../managers/asset.ts" />

/// <reference path="../objects/background.ts" />
/// <reference path="../objects/word.ts" />
/// <reference path="../objects/truck.ts" />

/// <reference path="../objects/label.ts" />
/// <reference path="../objects/button.ts" />
/// <reference path="../objects/scene.ts" />
/// <reference path="../states/instructions.ts" />
/// <reference path="../states/start.ts" />
/// <reference path="../states/end.ts" />
/// <reference path="../states/score.ts" />
/// <reference path="../states/level1.ts" />
/// <reference path="../states/level2.ts" />
/// <reference path="../states/level3.ts" />
/// <reference path="../objects/scoreboard.ts" />
/// <reference path="../managers/collision.ts" />


// Global Game Framework Variables
var canvas: HTMLElement;
var stage: createjs.Stage;
var stats: Stats;
var state: number;
var currentState: finalProject.Scene; // alias for our current state


// Game variables
var startFinalProject: finalProject.Start;
var level1FinalProject: finalProject.Level1;
var level2FinalProject: finalProject.Level2;
var level3FinalProject: finalProject.Level3;
var endFinalProject: finalProject.End;
var scoreFinalProject: finalProject.Score;
var instructionFinalProject: finalProject.Instructions;
var name: string;
var outcome: number=0;
var wordCategory: string;
var background: finalProject.Background;
var numOfCollectedWords: number = 0;
var numOfLivesLost: number = 0;
var tickCounter: number;


//Game managers
var assets: finalProject.Asset;
var collision: finalProject.Collision;
var scoreboard: finalProject.Scoreboard;


function preload(): void {
    assets = new finalProject.Asset();
    (<HTMLInputElement>document.getElementById("txtName")).value = "";
    name = "";
}

function init(): void {
    console.log("Game started...");
    canvas = document.getElementById("canvas"); // reference to canvas element
    stage = new createjs.Stage(canvas); // passing canvas to stage 
    stage.enableMouseOver(20); //enable mouse events
    createjs.Ticker.setFPS(60); // set frame rate to 60 frames per second
    createjs.Ticker.on("tick", gameLoop, this); // update gameLoop every frame
    tickCounter = 0;

    background = new finalProject.Background("back");
    stage.addChild(background);
    setupStats();// setup statistics object

    state = finalProject.START_STATE;
    changeState(state);
}

// Main Game Loop
function gameLoop(event: createjs.Event): void {
    stats.begin(); //begin measuring
    tickCounter++;
    background.update();

    currentState.update();
    stage.update(); // redraw/refresh stage every frame

    stats.end(); // end measuring
}

// function to setup stat counting
function setupStats(): void {
    stats = new Stats();
    stats.setMode(0); //show fps

    //align bottom-right
    stats.domElement.style.position = 'absolute';
    stats.domElement.style.right = '0px';
    stats.domElement.style.top = '0px';

  //  document.getElementById("main").appendChild(stats.domElement);
    document.body.appendChild(stats.domElement);
}




// state machine
function changeState(state): void {
    //lauch various scenes

    switch (state) {
        case finalProject.START_STATE:
            stage.removeAllChildren();
            startFinalProject = new finalProject.Start();
            currentState = startFinalProject;
            break;
        case finalProject.LEVEL1_STATE:
            stage.removeAllChildren();
            level1FinalProject = new finalProject.Level1();
            currentState = level1FinalProject;
            break;

        case finalProject.END_STATE:
            stage.removeAllChildren();
            endFinalProject = new finalProject.End(outcome);
            currentState = endFinalProject;
            break;
        case finalProject.INSTRUCTIONS_STATE: 
            stage.removeAllChildren();
            instructionFinalProject = new finalProject.Instructions();
            currentState = instructionFinalProject;
            break;
    }
    currentState.start();
    console.log(currentState.numChildren);

}