var dice1 = Math.floor(Math.random() * 6) + 1;
var dice2 = Math.floor(Math.random() * 6) + 1;

var diceImage1 = "dice" + dice1 + ".png";
var diceImageSource1 = "images/" + diceImage1;

var diceImage2 = "dice" + dice2 + ".png";
var diceImageSource2 = "images/" + diceImage2;

var image1 = document.querySelectorAll("img")[0];
image1.setAttribute("src", diceImageSource1);

var image2 = document.querySelectorAll("img")[1];
image2.setAttribute("src", diceImageSource2);

function winner(){

if (dice1 > dice2){
    document.querySelector("h1").textContent = "Player 1 Wins 🚩";
}

else if (dice2 > dice1){
    document.querySelector("h1").textContent = "Player 2 Wins 🚩";
}

else{
    document.querySelector("h1").textContent = "It's a tie";
}

}

winner();