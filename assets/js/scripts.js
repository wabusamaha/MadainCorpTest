const bodyPosition = ["Face", "Belly", "Back", "Tail"];
const bodyPositionPoints = [10, 7, 5, 3];

class Contender{
    constructor(type){
        this.type = type; 
        this.lifeMetter = 100;
        this.position = getRandomInt(3);
        this.postionExchangeInterval = setInterval(this.changePosition, 1000);
    }

    setContender(myContender){
        this.myContender = myContender;
    }

    setType(type){
        // debugger;
        this.type = type;
    }

    changePosition(){
       this.position = getRandomInt(3);
    //    console.log(bodyPosition[this.position]);
       console.log(this.type + ' position is "' + bodyPosition[this.position] + '" code = ' +  this.position);

    //    this.postionExchangeInterval = setTimeout(this.changePosition, 1000);
    }

    gameOver(){
        clearInterval(this.postionExchangeInterval);
    }

    recieveAstrick(){
        let points = bodyPositionPoints[this.myContender.position] - bodyPositionPoints[this.position];
        this.updateScore(points);
        this.myContender.updateScore(points*-1);
        // check how wins
        // if ((this.lifeMetter == 0) || (this.myContender.updateScore == 0)) {
        if (this.myContender.lifeMetter == 0 || this.lifeMetter == 0) {
            this.gameOver();
            this.myContender.gameOver();
            if (this.lifeMetter = 100) {
                console.log(this.type + ' wins!');
            } else {
                console.log(this.myContender.type + ' wins!');
            }
        } 
    }

    updateScore(points){
        this.lifeMetter = (this.lifeMetter - points);
        if (this.lifeMetter > 100) {
            this.lifeMetter = 100;   
        } else if (this.lifeMetter <= 0) {
            this.lifeMetter = 0;   
        }
        console.log(this.type + ' lifeMetter = ' + this.lifeMetter);
    }

}

class aiContender extends Contender {
    aiStrickInterval;

    constructor(type){
        // debugger;
      super(type); 
      this.aiStatus = false;
    }

    set aiOn(status = true){
        // debugger;
        this.aiStatus = status;
        if (this.aiStatus === true) {
            this.aiStrickInterval = setInterval(this.giveAscrick(this), 1000);
        }
        else {
            debugger;
            clearInterval(this.aiStrickInterval);
        }
    }

    giveAscrick(mythis){
        // debugger;
        mythis.myContender.recieveAstrick();
    }

    gameOver(){
        supper.gameOver();
        this.aiOn = false;

    }

}

let myAiContender = new aiContender("Cat");
let myContender = new Contender("Doge");

function initTheGame(){
    myAiContender.myContender = myContender;
    myContender.myContender = myAiContender;
    //
    myAiContender.aiOn = true;
}

function stopTheGame(){
    myAiContender.gameOver();
    myContender.gameOver();
}

function getRandomInt(max) {
    return Math.floor(Math.random() * max);
  }

function myStrick(){
    myAiContender.recieveAstrick();
}