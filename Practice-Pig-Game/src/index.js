"use strict";

// Selecting Elements
const player1 = document.querySelector(".player--0");
const scoreOfPlayer1 = document.querySelector("#score--0");
const currentScoreOfPlayer1 = document.querySelector("#current--0");
const player2 = document.querySelector(".player--1");
const scoreOfPlayer2 = document.querySelector("#score--1");
const currentScoreOfPlayer2 = document.querySelector("#current--1");
const number = document.querySelector(".number");
const newGameButton = document.querySelector(".btn--new");
const generateNumberButton = document.querySelector(".btn--generate");
const holdButton = document.querySelector(".btn--hold");

let scores, currentScore, activePlayer, isPlaying;

// Initial function to undo the game to the starting stage
const initialStep = function () {
  scores = [0, 0];
  currentScore = 0;
  activePlayer = 0;
  isPlaying = true;

  scoreOfPlayer1.textContent = 0;
  scoreOfPlayer2.textContent = 0;
  currentScoreOfPlayer1.textContent = 0;
  currentScoreOfPlayer2.textContent = 0;
  number.classList.add("hidden");
  player1.classList.remove("player--winner");
  player2.classList.remove("player--winner");
  player1.classList.add("player--active");
  player2.classList.remove("player--active");
};
initialStep();

// Function to switch between the players
const switchThePlayer = function () {
  document.getElementById(`current--${activePlayer}`).textContent = 0;
  currentScore = 0;

  if (activePlayer === 0) {
    activePlayer = 1;
  } else {
    activePlayer = 0;
  }

  player1.classList.toggle("player--active");
  player2.classList.toggle("player--active");
};

// Function to start a new game
newGameButton.addEventListener("click", initialStep);

// Function to roll the dice
generateNumberButton.addEventListener("click", function () {
  if (isPlaying) {
    // generate random number from 1 to 9
    const randomNumber = Math.floor(Math.random() * 9) + 1;

    // display number
    number.classList.remove("hidden");
    number.src = "../assets/number-" + randomNumber + ".svg";

    // check for number 1
    if (randomNumber !== 1) {
      currentScore += randomNumber;
      document.querySelector(`#current--${activePlayer}`).textContent =
        currentScore;
    } else {
      switchThePlayer();
    }
  }
});

// Function to hold the score
holdButton.addEventListener("click", function () {
  if (isPlaying) {
    if (currentScore !== 0) {
      scores[activePlayer] = scores[activePlayer] + currentScore;
      scoreOfPlayer1.textContent = scores[activePlayer];
      switchThePlayer();

      if (scores[activePlayer] >= 50) {
        isPlaying = false;
        document
          .querySelector(`.player--${activePlayer}`)
          .classList.remove("player--active");
        document
          .querySelector(`.player--${activePlayer}`)
          .classList.add("player--winner");
        number.classList.add("hidden");
      } else {
        switchThePlayer();
      }
    } else {
      alert(
        "The Player must have atleast 1 current score before adding to the total score!!"
      );
    }
  }
});
