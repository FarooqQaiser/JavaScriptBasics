var scores, roundsScore, activePlayer;

scores = [0, 0];
roundsScore = 0;
activePlayer = 0;

document.getElementById("score--0").textContent = "0";
document.getElementById("score--1").textContent = "0";
document.getElementById("current--0").textContent = "0";
document.getElementById("current--1").textContent = "0";

// document.querySelector("#score--" + activePlayer).textContent = dice;
// document.querySelector("#current--" + activePlayer).innerHTML =   "<em>" + dice + "</em>";
// var x = (document.querySelector("#current--0").textContent = dice);

document.querySelector(".dice").style.display = "none"; //The css can also be changed with the querry selector

document.querySelector(".btn--roll").addEventListener("click", function () {
  // 1. Random player generator
  var dice = Math.floor(Math.random() * 6) + 1;

  // 2. Display the result
  var diceDOM = document.querySelector(".dice");
  diceDOM.style.display = "block";
  diceDOM.src = "dice-" + dice + ".png";

  // 3. Update rund score IF the rolled number is not a 1
  if (dice != 1) {
    // Add score
    roundsScore = roundsScore + dice;
    document.querySelector("#current--" + activePlayer).textContent =
      roundsScore;
  } else {
    // Next Player
    if (activePlayer == 0) {
      activePlayer = 1;
    } else {
      activePlayer = 0;
    }
    roundsScore = 0;

    document.getElementById("current--0").textContent = "0";
    document.getElementById("current--1").textContent = "0";
    document.querySelector(".player--0").classList.toggle("active");
    document.querySelector(".player--1").classList.toggle("active");
    document.querySelector(".dice").style.display = "none";
  }
});

document.getElementById(".btn--hold").addEventListener("click", function () {
  // Add current to global score
  scores[activePlayer] = scores[activePlayer] + roundsScore;
  //Update the UI
  document.querySelector("#score--" + activePlayer).textContent =
    scores[activePlayer];
  //Check if the player won the game
});
