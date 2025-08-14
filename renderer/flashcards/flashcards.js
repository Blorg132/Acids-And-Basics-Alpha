const fs = require('fs');
let rawFlashcards = fs.readFileSync("./renderer/flashcards/flashcards.json", "utf8");
let flashcards = JSON.parse(rawFlashcards);


let currentIndex = 0;
let isFlipped = false;
let monkey = 0;
let cardText = document.getElementById('card-text')
let usedFlashcards = []
let unitSelected = 1;

//counter stuff yet again
let flashcardcounter = document.getElementById("flashcardcounter");
flashcardcounter.textContent = usedFlashcards.length;

let dog = document.getElementById("flashcardsleft");
dog.textContent = flashcards.length - usedFlashcards.length;

let buttonsound = document.getElementById("buttonclicked");
buttonsound.volume = 0.15;

function showFront() {
  cardText.textContent = filteredCards[currentIndex].front;
  cardText.classList.add('frontside');
}

function flipCard() {
  buttonsound.currentTime = 0;
  buttonsound.play();
  isFlipped = !isFlipped;
  cardText.textContent = isFlipped
    ? flashcards[currentIndex].back
    : flashcards[currentIndex].front;

  if (isFlipped) {
    cardText.classList.add('backside');
    cardText.classList.remove('frontside');
  } else {
    cardText.classList.remove('backside');
    cardText.classList.add('frontside');
  }
}

function nextCard(unitNumber) {
    let filteredCards = flashcards.filter(card => card.unit === String(unitNumber));

    if (filteredCards.length === 0) {
        console.warn(`No cards in unit ${unitNumber}`);
        return;
    }

    let numberFound = false;
    let previousIndex = currentIndex;

    while (!numberFound) {
        currentIndex = Math.floor(Math.random() * filteredCards.length);
        if (currentIndex !== previousIndex && !usedFlashcards.includes(currentIndex)) {
            usedFlashcards.push(currentIndex);
            numberFound = true;
        }
    }

    isFlipped = false;
    showFront();
}



function shuffleFlashcards(){
  cardText.classList.remove('settle');
  void cardText.offsetWidth; // Force reflow (resets the animation)
  const shuffleSounds = [
    new Audio('../sounds/shufflesound1.wav'),
    new Audio('../sounds/shufflesound2.wav')
  ];

  // Function to play a random shuffle sound
  const randomIndex = Math.floor(Math.random() * shuffleSounds.length);
  shuffle = shuffleSounds[randomIndex]
  shuffle.volume = 0.2;
  shuffle.play();
  cardText.classList.add('settle');

  usedFlashcards = [];
  nextCard();
}


function unitSelect(){
  let selectionwindow = document.getElementById("selectionwindow")
  selectionwindow.classList.remove("hidden");
}

showFront(); // Load first card on page load



//////////////////////////////////////////////////
////////CHOOSE UNIT BUTTONS//////////////////////
/////////////////////////////////////////////////


// Declaring and getting buttons
let unit1 = document.getElementById("flashcardunit1button");
let unit2 = document.getElementById("flashcardunit2button");
let unit3 = document.getElementById("flashcardunit3button");
let unit4 = document.getElementById("flashcardunit4button");


// Adding click events
// PLEASE NOTE: This is an incredibly shitty way of applying the "clicked" CSS style. But as far as I can tell, no latency, so who gives a rat's ass.

unit1.addEventListener("click", () => {
  // selecting unit
  unitSelected = 1;
  // getting rid of clicked css style on everything else
  unit2.classList.remove("clicked");
  unit3.classList.remove("clicked");
  unit4.classList.remove("clicked");
  console.log(unitSelected);
  unit1.classList.add("clicked");
});

unit2.addEventListener("click", () => {
  // selecting unit
  unitSelected = 2;
  // getting rid of clicked css style on everything else
  unit1.classList.remove("clicked");
  unit3.classList.remove("clicked");
  unit4.classList.remove("clicked");
  console.log(unitSelected);
  unit2.classList.add("clicked");
});


unit3.addEventListener("click", () => {
  // selecting unit
  unitSelected = 3;
  // getting rid of clicked css style on everything else
  unit1.classList.remove("clicked");
  unit2.classList.remove("clicked");
  unit4.classList.remove("clicked");
  console.log(unitSelected);
  unit3.classList.add("clicked");
});


unit4.addEventListener("click", () => {
  // selecting unit
  unitSelected = 4;
  // getting rid of clicked css style on everything else
  unit1.classList.remove("clicked");
  unit2.classList.remove("clicked");
  unit3.classList.remove("clicked");
  console.log(unitSelected);
  unit4.classList.add("clicked");
});