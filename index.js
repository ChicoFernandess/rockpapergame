const answersArray = [
  {
    choice: "paper",
    defeats: "rock",
  },
  {
    choice: "rock",
    defeats: "scissor",
  },
  {
    choice: "scissor",
    defeats: "paper",
  },
];

let userCounter = 0;
let botCounter = 0;
let userStoragePoints = parseInt(localStorage.getItem("userPoints")) || 0;
let botStoragePoints = parseInt(localStorage.getItem("botPoints")) || 0;

const messagesEl = document.getElementById("messages");
const scoreEl = document.getElementById("score");

function displayScore() {
  scoreEl.textContent = `score: ${userStoragePoints} - ${botStoragePoints}`;
}

function select(value) {
  const botAnswer = getBotAnswer(); // { choice: ..., defeats: ...}

  if (value === botAnswer.choice) {
    messagesEl.textContent = "You draw!";
  } else {
    if (botAnswer.defeats === value) {
      // botAnswer => { choice: "rock", defeats: "scissor", } && value => "scissor"
      botStoragePoints++;
      localStorage.setItem("botPoints", botStoragePoints);
      messagesEl.textContent = `Bot wins with ${botAnswer.choice}!`;
      displayScore();
    } else {
      userStoragePoints++;
      localStorage.setItem("userPoints", userStoragePoints);
      messagesEl.textContent = `User wins with ${value}!`;
      displayScore();
    }
  }
}

function getBotAnswer() {
  const item = answersArray[Math.floor(Math.random() * answersArray.length)];

  return item;
}

displayScore();
