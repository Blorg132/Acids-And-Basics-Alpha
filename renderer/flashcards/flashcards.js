//
//ALL FLASHCARDS
//

const flashcards = [

  {front: "What is the capital of Spain?", back: "Fucking Portugal", unit:"1"},
  {front: "What is the capital of monkey", back: "doggie roggie", unit: "1"},
  {front: "Monkeys are the best animal.", back: "Yes they are!", unit: "2"},
  {front: "This is blatant filler text.", back: "Of course it is.", unit: "2"}

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
let usedFlashcards = []

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
  var numberFound = false;
  var previousIndex = currentIndex;
  while (numberFound == false){
    currentIndex = Math.floor(Math.random() * flashcards.length);
    if (currentIndex == previousIndex){
      console.log('ruhroh');
    } else {
      if (usedFlashcards.includes(currentIndex)){
        if(usedFlashcards === flashcards.length){
          return('ruhroh for real this time');
        }
        console.log('double ruhroh');
      } else {
        usedFlashcards.push(currentIndex);
        numberFound = true;
      }
    }
  }
  
  // (currentIndex + random.number????) make a shuffle mechanic this way? built in?
  // then again, flashcards should be based on what units you want to test, right?
  isFlipped = false;
  showFront();
}

// make a unit select button

// make a reset seen flashcards button



showFront(); // Load first card on page load