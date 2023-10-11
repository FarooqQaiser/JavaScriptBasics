"use strict";

// Selecting Elements
const player1 = document.querySelector(".player--0");
const scoreOfPlayer1 = document.querySelector("#score--0");
const currentScoreOfPlayer1 = document.querySelector("#current--0");
const player2 = document.querySelector(".player--1");
const scoreOfPlayer2 = document.querySelector("#score--1");
const currentScoreOfPlayer2 = document.querySelector("#current--1");
const number = document.querySelector(".dice");
const newGameButton = document.querySelector(".btn--new");
const generateNumberButton = document.querySelector(".btn--roll");
const holdButton = document.querySelector(".btn--hold");

let scores, currentScore, activePlayer;

// Initial function to undo the game to the starting stage
const initialStep = function () {
  scores = [0, 0];
  currentScore = 0;
  activePlayer = 0;

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
newGameButton.addEventListener("click", initialStep());

// Function to roll the dice
generateNumberButton.addEventListener("click", function () {
  // generate random number from 1 to 9

  const randomNumber = Math.floor(Math.random() * 9) + 1;

  // display number

  number.classList.remove("hidden");
  number.src = "number-" + randomNumber + ".svg";

  // check for number 1

  if (number !== 1) {
    currentScore = currentScore + number;
    document.querySelector(`#current--${activePlayer}`).textContent =
      currentScore;
  } else {
    activePlayer === 0 ? (activePlayer = 1) : (activePlayer = 0);
    currentScore = 0;
    document.querySelector("#current--0").textContent = currentScore;
    document.querySelector("#current--1").textContent = currentScore;
  }
});
// Function to hold the score
