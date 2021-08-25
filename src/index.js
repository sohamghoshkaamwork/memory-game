const cards = [
  {
    name: "fries",
    img:
      "https://raw.githubusercontent.com/kubowania/memory-game/master/images/fries.png"
  },
  {
    name: "cheeseburger",
    img:
      "https://raw.githubusercontent.com/kubowania/memory-game/master/images/cheeseburger.png"
  },
  {
    name: "ice-cream",
    img:
      "https://raw.githubusercontent.com/kubowania/memory-game/master/images/ice-cream.png"
  },
  {
    name: "pizza",
    img:
      "https://raw.githubusercontent.com/kubowania/memory-game/master/images/pizza.png"
  },
  {
    name: "milkshake",
    img:
      "https://raw.githubusercontent.com/kubowania/memory-game/master/images/milkshake.png"
  },
  {
    name: "hotdog",
    img:
      "https://raw.githubusercontent.com/kubowania/memory-game/master/images/hotdog.png"
  },
  {
    name: "fries",
    img:
      "https://raw.githubusercontent.com/kubowania/memory-game/master/images/fries.png"
  },
  {
    name: "cheeseburger",
    img:
      "https://raw.githubusercontent.com/kubowania/memory-game/master/images/cheeseburger.png"
  },
  {
    name: "ice-cream",
    img:
      "https://raw.githubusercontent.com/kubowania/memory-game/master/images/ice-cream.png"
  },
  {
    name: "pizza",
    img:
      "https://raw.githubusercontent.com/kubowania/memory-game/master/images/pizza.png"
  },
  {
    name: "milkshake",
    img:
      "https://raw.githubusercontent.com/kubowania/memory-game/master/images/milkshake.png"
  },
  {
    name: "hotdog",
    img:
      "https://raw.githubusercontent.com/kubowania/memory-game/master/images/hotdog.png"
  }
];

cards.sort(() => 0.5 - Math.random());

const grid = document.querySelector(".grid");
const resultDisplay = document.querySelector("#result");
let cardsChosen = [];
let cardsChosenIds = [];
let cardsWon = [];

function createBoard() {
  for (let i = 0; i < cards.length; i++) {
    const card = document.createElement("img");
    card.setAttribute(
      "src",
      "https://raw.githubusercontent.com/kubowania/memory-game/master/images/blank.png"
    );
    card.setAttribute("data-id", i);
    card.addEventListener("click", flipCard);
    grid.appendChild(card);
  }
}
console.log(cards);
createBoard();

function flipCard() {
  let cardID = this.getAttribute("data-id");
  console.log(cards[cardID]);
  cardsChosen.push(cards[cardID].name);
  cardsChosenIds.push(cardID);
  this.setAttribute("src", cards[cardID].img);
  if (cardsChosen.length === 2) {
    setTimeout(checkForMatch, 500);
  }
}

function checkForMatch() {
  const cardsNew = document.querySelectorAll("img");
  const optionOneId = cardsChosenIds[0];
  const optionTwoId = cardsChosenIds[1];
  console.log(optionOneId, optionTwoId);
  if (optionOneId === optionTwoId) {
    alert("chosen the same card");
    cardsNew[optionOneId].setAttribute(
      "src",
      "https://raw.githubusercontent.com/kubowania/memory-game/master/images/blank.png"
    );
    cardsNew[optionTwoId].setAttribute(
      "src",
      "https://raw.githubusercontent.com/kubowania/memory-game/master/images/blank.png"
    );
  } else if (cardsChosen[0] === cardsChosen[1]) {
    alert("you have found a match!");
    cardsNew[optionOneId].setAttribute(
      "src",
      "https://raw.githubusercontent.com/kubowania/memory-game/master/images/white.png"
    );
    cardsNew[optionTwoId].setAttribute(
      "src",
      "https://raw.githubusercontent.com/kubowania/memory-game/master/images/white.png"
    );
    cardsNew[optionOneId].removeEventListener("click", flipCard);
    cardsNew[optionTwoId].removeEventListener("click", flipCard);
    cardsWon.push(cardsChosen);
  } else {
    cardsNew[optionOneId].setAttribute(
      "src",
      "https://raw.githubusercontent.com/kubowania/memory-game/master/images/blank.png"
    );
    cardsNew[optionTwoId].setAttribute(
      "src",
      "https://raw.githubusercontent.com/kubowania/memory-game/master/images/blank.png"
    );
    alert("Try Again");
  }
  cardsChosen = [];
  cardsChosenIds = [];
  resultDisplay.textContent = cardsWon.length;
  if (cardsWon.length === cards.length / 2) {
    resultDisplay.textContent = "Congratulations! Win!";
  }
}
