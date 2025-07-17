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

//counter stuff yet again
let flashcardcounter = document.getElementById("flashcardcounter");
flashcardcounter.textContent = usedFlashcards.length;
let dog = document.getElementById("flashcardsleft");
dog.textContent = flashcards.length;

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

  // this is for the counters
  flashcardcounter.textContent = usedFlashcards.length;
  dog.textContent = flashcards.length;


  // check if all flashcards have been used
  if(usedFlashcards.length === flashcards.length){
    usedFlashcards = [];
    emptysound = document.getElementById("emptysound");
    emptysound.play();
    flashcardcounter.classList.add('completed-set');
  } else {
    flashcardcounter.classList.remove('completed-set');
  }

  // entering decision loop
  while (numberFound == false){
    currentIndex = Math.floor(Math.random() * flashcards.length);
    if (currentIndex == previousIndex){ // checks if card is same as previous one
      console.log('ruhroh');
    } else {
      if (usedFlashcards.includes(currentIndex)){ // checks if card has already been used
        ('double ruhroh');
      } else {
        //appending Used Flashcard if both tests pass :)
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



function shuffleFlashcards(){

  const shuffleSounds = [
    new Audio('../sounds/shufflesound1.wav'),
    new Audio('../sounds/shufflesound2.wav')
  ];

  // Function to play a random shuffle sound
  const randomIndex = Math.floor(Math.random() * shuffleSounds.length);
  shuffleSounds[randomIndex].play();

  usedFlashcards = [];
  nextCard();
}


// make a unit select button


showFront(); // Load first card on page load