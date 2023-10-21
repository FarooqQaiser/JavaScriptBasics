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
const numberImages = documnet.querySelector(".number");
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

// Function to start a new game

// Function to roll the dice

// Function to hold the score
