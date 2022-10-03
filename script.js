"use strict";

let secretNumber = Math.trunc(Math.random() * 20 + 1);

let score = 20;

document.querySelector(".check").addEventListener("click", function () {
  const guess = Number(document.querySelector(".guess").value);

  // when there is no input
  if (!guess) {
    document.querySelector(".message").textContent = " No number !!!";
  } // when player wins
  else if (guess === secretNumber) {
    document.querySelector(".message").textContent = "Correct Number 🎉 !";
    document.querySelector("body").style.backgroundColor = "#60b347";
    document.querySelector(".number").style.width = "30rem";
    document.querySelector(".number").textContent = secretNumber;
  } // when guess is high
  else if (guess > secretNumber) {
    if (score > 1) {
      document.querySelector(".message").textContent = "Too high !!!";

      score--;
      document.querySelector(".score").textContent = score;
    } else {
      document.querySelector(".message").textContent = "You lost the game !⛔️";
      document.querySelector(".score").textContent = 0;
    }
  } // when guess is low
  else if (guess < secretNumber) {
    if (score > 1) {
      document.querySelector(".message").textContent = "Too low !!!";

      score--;
      document.querySelector(".score").textContent = score;
    } else {
      document.querySelector(".message").textContent = "You lost the game !⛔️";
      document.querySelector(".score").textContent = 0;
    }
  }
});

// Again button

document.querySelector(".again").addEventListener("click", function () {
  score = 20;
  secretNumber = Math.trunc(Math.random() * 20 + 1);
  document.querySelector(".message").textContent = "Start guessing...";
  document.querySelector(".score").textContent = score;
  document.querySelector(".number").textContent = "?";
  document.querySelector(".guess").value = "";
  document.querySelector("body").style.backgroundColor = "#222";
  document.querySelector(".number").style.width = "15 rem";
});
