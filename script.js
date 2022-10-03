"use strict";

const secretNumber = Math.trunc(Math.random() * 20 + 1);
document.querySelector(".number").textContent = secretNumber;

document.querySelector(".check").addEventListener("click", function () {
  const guess = Number(document.querySelector(".guess").value);
  console.log(typeof guess);

  if (!guess) {
    document.querySelector(".message").textContent = " No number !!!";
  } else if (guess === secretNumber) {
    document.querySelector(".message").textContent = "Correct Number 🎉 !";
  } else if (guess > secretNumber) {
    document.querySelector(".message").textContent = "Too high !!!";
  } else if (guess < secretNumber) {
    document.querySelector(".message").textContent = "Too low !!!";
  }
});
