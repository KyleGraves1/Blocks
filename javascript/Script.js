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


var up= false;
var down= false;
var left= false;
var right= false;

window.addEventListener("keydown", function(e){
    if (e.keyCode == 38){up = true}
    if (e.keyCode == 39){right = true}
    if (e.keyCode == 40){down = true}
    if (e.keyCode == 37){left = true}
})

window.addEventListener("keyup", function(e){
    if (e.keyCode == 38){up = false}
    if (e.keyCode == 39){right = false}
    if (e.keyCode == 40){down = false}
    if (e.keyCode == 37){left = false}
})




}

