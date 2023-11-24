"use strict";

// Selecting Elements
const player1 = document.querySelector("#player--0");
const player1Name = document.querySelector("#name--0");
const player1Score = document.querySelector("#score--0");
const player1CurrentScore = document.querySelector("#current--0");
const player2 = document.querySelector("#player--1");
const player2Name = document.querySelector("#name--1");
const player2Score = document.querySelector("#score--1");
const player2CurrentScore = document.querySelector("#current--1");
const numberImages = document.querySelector(".number");
const newGameButton = document.querySelector(".btn--new");
const generateNumberButton = document.querySelector(".btn--generate");
const holdButton = document.querySelector(".btn--hold");

// Making base variables
let scores, currentScore, activePlayer, isPlaying;

// Initial function to undo the game to the starting stage
const theInitialStep = function () {
  scores = [0, 0];
  currentScore = 0;
  activePlayer = 0;
  isPlaying = true;

  player1Score.textContent = "0";
  player2Score.textContent = "0";
  player1CurrentScore.textContent = "0";
  player2CurrentScore.textContent = "0";

  player1Name.textContent = "PLAYER 1";
  player2Name.textContent = "PLAYER 2";

  player1.classList.remove("player--winner");
  player2.classList.remove("player--winner");
  player1.classList.add("player--active");
  player2.classList.remove("player--active");
  numberImages.classList.add("hidden");
};
theInitialStep();

// Function to switch between the players
const switchThePlayer = function () {
  document.getElementById(`current--${activePlayer}`).textContent = 0;
  currentScore = 0;
  activePlayer === 0 ? (activePlayer = 1) : (activePlayer = 0);
  player1.classList.toggle("player--active");
  player2.classList.toggle("player--active");
};

// Function to start a new game
newGameButton.addEventListener("click", theInitialStep);

// Function to roll the dice
generateNumberButton.addEventListener("click", function () {
  if (isPlaying) {
    // 1. generate random numbder from 1 to 9.
    const number = Math.trunc(Math.random() * 9) + 1;

    // 2. Display dice
    numberImages.classList.remove("hidden");
    numberImages.src = `../assets/number-${number}.svg`;

    // 3. Check for generated number 1
    if (number !== 1) {
      currentScore = currentScore + number;
      if (activePlayer === 0) {
        player1CurrentScore.textContent = currentScore;
      } else {
        player2CurrentScore.textContent = currentScore;
      }
    } else {
      // Switch to next player
      switchThePlayer();
    }
  }
});

// Function to hold the score
holdButton.addEventListener("click", function () {
  if (isPlaying) {
    scores[activePlayer] = scores[activePlayer] + currentScore;
    document.querySelector(`#score--${activePlayer}`).textContent =
      scores[activePlayer];

    if (scores[activePlayer] >= 100) {
      isPlaying = false;
      numberImages.classList.add("hidden");
      document
        .querySelector(`#player--${activePlayer}`)
        .classList.remove("player--active");
      document
        .querySelector(`#player--${activePlayer}`)
        .classList.add("player--winner");
      document.querySelector(`#name--${activePlayer}`).textContent = `Player ${
        activePlayer + 1
      } congratulations`;
    } else {
      switchThePlayer();
    }
  }
});
