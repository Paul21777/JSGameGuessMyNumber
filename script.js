"use strict";

// -----------------------------------------------------------------------FUNCTIONS--------------------------------------------------------------------------------

const displayMessage = function (message) {
  document.querySelector(".message").textContent = message;
};

//---------------------------------------------------------------------STATE VARIABLE----------------------------------------------------------------------------
let secreteNumber = Math.trunc(Math.random() * 20) + 1;

let score = 20; // on appelle ce genre de variable une state variable, car c'est une données pertinente pour l'application.

let highscore = 0;

//----------------------------------------------------------------------DOM MANIPULATION-----------------------------------------------------------------------------

document.querySelector(".check").addEventListener("click", function () {
  const guess = Number(document.querySelector(".guess").value);
  //WHEN THERE IS NO INPUT
  if (!guess) {
    displayMessage("No number !");

    // WHEN PLAYER WINS
  } else if (guess === secreteNumber) {
    document.querySelector(".number").textContent = secreteNumber;
    displayMessage("Correct Number !");
    document.querySelector("body").style.backgroundColor = "#60b347";

    if (score > highscore) {
      highscore = score;
      document.querySelector(".highscore").textContent = highscore;
    }

    document.querySelector(".number").style.width = "30rem";

    //WHEN GUESS IS DIFFERENT FROM SECRET NUMBER
  } else if (guess != secreteNumber) {
    if (score > 1) {
      displayMessage(secreteNumber < guess ? "Too high !" : "Too low");
      score--;
      document.querySelector(".score").textContent = score;
    } else {
      displayMessage("You lost the game !");
      document.querySelector(".score").textContent = 0;
    }
  }
});

//---------------------------------------------------------------------RESET BUTTON---------------------------------------------------------------------------------

document.querySelector(".again").addEventListener("click", function () {
  document.querySelector(".score").textContent = 20;
  document.querySelector("body").style.backgroundColor = "#222";
  displayMessage("Start guessing...");
  document.querySelector(".number").style.width = "15rem";
  document.querySelector(".number").textContent = "?";
  document.querySelector(".guess").value = "";
  secreteNumber = Math.trunc(Math.random() * 20) + 1;
  score = 20;
});
