const fs = require('fs');
const path = require('path');

// Get absolute path to JSON file
const flashcardPath = path.join(__dirname, 'flashcards.json');

// Read and parse the JSON
let flashcards = JSON.parse(fs.readFileSync(flashcardPath));
let currentIndex = 0;
let isFlipped = false;

console.log(flashcards);                 // should print an array of objects
console.log(flashcards[0]);              // should print first flashcard object
console.log(flashcards[0].front);        // should print front text of first card

// Flipping/Card functions
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