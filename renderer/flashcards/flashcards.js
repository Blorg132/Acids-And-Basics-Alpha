const flashcards = [
  {
    front: "What is the pH of a neutral solution?",
    back: "7"
  },
  {
    front: "What is the chemical symbol for sodium?",
    back: "Na"
  }
];

let currentIndex = 0;
let isFlipped = false;

function showFront() {
  const cardText = document.getElementById('card-text');
  cardText.textContent = flashcards[currentIndex].front;
}

function flipCard() {
  const cardText = document.getElementById('card-text');
  isFlipped = !isFlipped;
  cardText.textContent = isFlipped
    ? flashcards[currentIndex].back
    : flashcards[currentIndex].front;
}

function nextCard() {
  currentIndex = (currentIndex + 1) % flashcards.length;
  isFlipped = false;
  showFront();
}

window.onload = showFront;