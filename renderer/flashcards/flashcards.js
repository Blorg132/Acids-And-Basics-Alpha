//
//ALL FLASHCARDS
//

const flashcards = [

  {front: "What is the capital of Spain?", back: "Fucking Portugal"},
  {front: "What is the capital of monkey", back: "doggie roggie"}

]

//
//
//
//
//
//
//
//
//          // Actual code starts beyond this point.
//





let currentIndex = 0;
let isFlipped = false;
let monkey = 0;
let cardText = document.getElementById('card-text')

function showFront() {
  cardText.textContent = flashcards[currentIndex].front;
}

function flipCard() {
  isFlipped = !isFlipped;
  cardText.textContent = isFlipped
    ? flashcards[currentIndex].back
    : flashcards[currentIndex].front;

  if (isFlipped) {
    cardText.classList.add('backside');
  } else {
    cardText.classList.remove('backside');
  }
}

function nextCard() {
  if(cardText.classList.contains('backside')){
    cardText.classList.remove('backside')
  }
  currentIndex = (currentIndex + 1) % flashcards.length;
  // (currentIndex + random.number????) make a shuffle mechanic this way? built in?
  // then again, flashcards should be based on what units you want to test, right?
  isFlipped = false;
  showFront();
}

showFront(); // Load first card on page load