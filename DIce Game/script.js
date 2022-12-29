// setting all thing of player 1
let rand1 = Math.floor(6 * Math.random()) + 1;
const player1Link = "./images/dice" + rand1 + ".png";
document.getElementsByClassName("player")[0].setAttribute("src", player1Link);

// setting all thing of player 2
let rand2 = Math.floor(6 * Math.random()) + 1;
const player2Link = "./images/dice" + rand2 + ".png";
document.getElementsByClassName("player")[1].setAttribute("src", player2Link);

//changing result
let result = document.querySelector("h1");
if (rand1 > rand2) {
    result.innerHTML = "the winner is Player 1";
} else if (rand2 > rand1) {
    result.innerHTML = "the winner is player 2";
} else {
    result.innerHTML = "the game is draw";
}
