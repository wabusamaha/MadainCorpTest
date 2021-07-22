const bodyPosition = ["Face", "Belly", "Back", "Tail"];

class Contender{
    constructor(type){
        this.type = type; 
        this.lifeMetter = 100;
        this.position = getRandomInt(3);
        this.postionTimer = setInterval(this.changePosition, 1000);
    }

    setType(type){
        this.type = type;
    }

    changePosition(){
       this.position = getRandomInt(3);
       console.log(bodyPosition[this.position]);
    //    this.postionTimer = setTimeout(this.changePosition, 1000);
    }

    gameOver(){
        clearInterval(this.postionTimer);
    }

}

let myContender = new Contender("");

function initTheGame(){
    myContender.setType = "Doge";
}

function stopTheGame(){
    myContender.gameOver();
}

function getRandomInt(max) {
    return Math.floor(Math.random() * max);
  }