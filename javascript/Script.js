window.onload=function(){

var c = document.getElementById("Canvas");
var ctx = c.getContext("2d");
ctx.fillStyle = "grey";
ctx.fillRect(0, 0, 800 , 500);

document.body.style.backgroundColor = "black";

function startGame() {
    Player = new component(30, 30, "red", 10, 120);
    }


var playerx= 250;
var playery= 350;

var p1 = document.getElementById("Canvas");
var ctx = p1.getContext("2d");
ctx.fillStyle = "red";
ctx.fillRect(playerx, playery, 20 , 20);

}