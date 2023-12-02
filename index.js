var diceImages1 = ["./images/dice1.png","./images/dice2.png","./images/dice3.png","./images/dice4.png","./images/dice5.png","./images/dice6.png"]
var randomNumber1 = Math.floor(Math.random() * diceImages1.length);
document.querySelector(".img1").src = diceImages1[randomNumber1];
var diceImages2 = ["./images/dice1.png","./images/dice2.png","./images/dice3.png","./images/dice4.png","./images/dice5.png","./images/dice6.png"]
var randomNumber2 = Math.floor(Math.random() * diceImages2.length);
document.querySelector(".img2").src = diceImages2[randomNumber2];
if(randomNumber1 === randomNumber2){
   document.querySelector("h1").innerHTML = "Draw";
}else if(randomNumber1 > randomNumber2){
    document.querySelector("h1").innerHTML = "Player 1 Wins";
}else{
    document.querySelector("h1").innerHTML = "Player 2 Wins";
}