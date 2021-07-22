const bodyPosition = ["Face", "Belly", "Back", "Tail"];
const bodyPositionPoints = [10, 7, 5, 3];

class Contender{
    constructor(type){
        this.type = type; 
        this.lifeMetter = 100;
        this.position = getRandomInt(3);
        this.postionTimer = setInterval(this.changePosition, 1000);
    }

    setType(type){
        debugger;
        this.type = type;
    }

    changePosition(){
       this.position = getRandomInt(3);
    //    console.log(bodyPosition[this.position]);
       console.log(this.type + ' position is "' + bodyPosition[this.position] + '"');

    //    this.postionTimer = setTimeout(this.changePosition, 1000);
    }

    gameOver(){
        clearInterval(this.postionTimer);
    }

    recieveAstrick(striker){
        let points = bodyPositionPoints[striker.position] - bodyPositionPoints[this.position];
        this.updateScore(points);
        striker.updateScore(points*-1);
    }

    updateScore(points){
        this.lifeMetter = (this.lifeMetter - points);
        console.log(this.type + ' lifeMetter = ' + this.lifeMetter);
    }

}

let aiContender = new Contender("Cat");
let myContender = new Contender("Doge");

function initTheGame(){
    // aiContender.setType = "Doge";
    // myContender.setType = "Cat";
}

function stopTheGame(){
    aiContender.gameOver();
    myContender.gameOver();
}

function getRandomInt(max) {
    return Math.floor(Math.random() * max);
  }

function myStrick(){
    aiContender.recieveAstrick(myContender);
}