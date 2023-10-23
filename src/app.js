/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  // Write your code here
  function generateRandomSuit() {
    const suits = ["♥", "♦", "♣", "♠"];
    const randomSuit = suits[Math.floor(Math.random() * suits.length)];
    return randomSuit;
  }

  function generateRandomNumber() {
    const cardNumbers = [
      "A",
      "2",
      "3",
      "4",
      "5",
      "6",
      "7",
      "8",
      "9",
      "J",
      "Q",
      "K"
    ];
    const randomNumber =
      cardNumbers[Math.floor(Math.random() * cardNumbers.length)];
    return randomNumber;
  }

  const cardNumberElement = document.getElementById("cardNumber");
  const paloSuperiorElement = document.getElementById("paloSuperior");
  const paloInferiorElement = document.getElementById("paloInferior");

  const randomNumber = generateRandomNumber();
  const randomSuit = generateRandomSuit();

  cardNumberElement.innerHTML = randomNumber;
  paloSuperiorElement.innerHTML = randomSuit;
  paloInferiorElement.innerHTML = randomSuit;

  if (randomSuit == "♥" || randomSuit == "♦") {
    paloSuperiorElement.style.color = "red";
    paloInferiorElement.style.color = "red";
  }
};
