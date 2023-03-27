let cv = document.getElementById("myCanvas")
console.log(cv.style.width);
let ctx = cv.getContext("2d");
var img1 = document.getElementById("yellowCar");
var yellowCar;
var myGameBoard;
function startGame(){
    myGameBoard = new gameBoard();
    yellowCar = new carMold(img1,340,330,20,40);
    console.log(myGameBoard.start());
}

let gameBoard = function(){
    this.start = function(){
        setInterval(updateBoard,20);
    }
    this.clear = function(){
        ctx.clearRect(0,0,700,700);
    }
}
let carMold = function(imagE,x,y,width,height){
    this.img = imagE;
    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;
    this.update = function(){
        ctx.drawImage(this.img,this.x,this.y,this.width,this.height);
    }
}
let updateBoard = function(){
    myGameBoard.clear();
    // yellowCar.y -= 1;
    yellowCar.update();
}