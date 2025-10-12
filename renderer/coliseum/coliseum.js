const fs = require('fs');



////////////////////////Questions/////////////////////////
const questions = [
  { lesson: "lesson2", id: "2-1", question: "What are the smallest particles of elements called?", correctAnswers: ["atoms", "atom"] },
  { lesson: "lesson2", id: "2-2", question: "What is formed when two or more atoms bond together?", correctAnswers: ["molecule", "molecules", "compound", "compounds"] },
  { lesson: "lesson2", id: "2-3", question: "What do we call atoms that have gained or lost electrons?", correctAnswers: ["ions"] },
  { lesson: "lesson2", id: "2-4", question: "What charge does an atom have if it loses electrons?", correctAnswers: ["positive"] },
  { lesson: "lesson2", id: "2-5", question: "What charge does an atom have if it gains electrons?", correctAnswers: ["negative"] },
  { lesson: "lesson2", id: "2-6", question: "Which state of matter has particles that vibrate in fixed positions?", correctAnswers: ["solid", "solids"] },
  { lesson: "lesson2", id: "2-7", question: "Which state of matter flows but keeps a fixed volume?", correctAnswers: ["liquid", "liquids"] },
  { lesson: "lesson2", id: "2-8", question: "Which state of matter has particles far apart and moving freely?", correctAnswers: ["gas", "gases"] },
  { lesson: "lesson2", id: "2-9", question: "What type of motion do all particles have?", correctAnswers: ["random"] },
  { lesson: "lesson2", id: "2-10", question: "What increases when particles move faster?", correctAnswers: ["temperature"] },
  { lesson: "lesson2", id: "2-11", question: "What decreases when particles slow down?", correctAnswers: ["temperature"] },
  { lesson: "lesson2", id: "2-12", question: "E... space exists between gas particles.", correctAnswers: ["empty space", "empty"] },
  { lesson: "lesson2", id: "2-13", question: "B--- hold atoms together in molecules.", correctAnswers: ["bond", "bonds"] },
  { lesson: "lesson2", id: "2-14", question: "What type of ion has a negative charge?", correctAnswers: ["anion", "anions"] },
  { lesson: "lesson2", id: "2-15", question: "What type of ion has a positive charge?", correctAnswers: ["cation", "cations"] },
   
  { lesson: "lesson3", id: "3-1", question: "What does KMT stand for?", correctAnswers: ["kinetic molecular theory"] },
  { lesson: "lesson3", id: "3-2", question: "According to KMT, what are all substances made of?", correctAnswers: ["particles"] },
  { lesson: "lesson3", id: "3-3", question: "Solid particles ... in place", correctAnswers: ["vibrate"] },
  { lesson: "lesson3", id: "3-4", question: "What do particles in liquids do that solids cannot?", correctAnswers: ["slide", "flow"] },
  { lesson: "lesson3", id: "3-5", question: "What do particles in gases do freely?", correctAnswers: ["move", "move freely"] },
  { lesson: "lesson3", id: "3-6", question: "What happens to particle motion as temperature increases?", correctAnswers: ["increases", "faster", "gets faster", "speeds up", "speed up"] },
  { lesson: "lesson3", id: "3-7", question: "What happens to particle motion as temperature decreases?", correctAnswers: ["decreases", "slower", "gets slower", "slows down", "slow down"] },
  { lesson: "lesson3", id: "3-8", question: "In which state are particles closest together?", correctAnswers: ["solid", "solids"] },
  { lesson: "lesson3", id: "3-9", question: "In which state are particles furthest apart?", correctAnswers: ["gas", "gases"] },
  { lesson: "lesson3", id: "3-11", question: "What type of movement do gas particles have?", correctAnswers: ["random"] },
  { lesson: "lesson3", id: "3-12", question: "What is the energy that moving particles carry?", correctAnswers: ["kinetic energy", "kinetic"] },
  { lesson: "lesson3", id: "3-13", question: "Which state of matter has definite shape and volume?", correctAnswers: ["solid"] },
  { lesson: "lesson3", id: "3-14", question: "Which state of matter has definite volume but no fixed shape?", correctAnswers: ["liquid"] },
  { lesson: "lesson3", id: "3-15", question: "Which state of matter has neither fixed shape nor volume?", correctAnswers: ["gas"] },

  { lesson: "lesson4", id: "4-1", question: "What is the change from solid to liquid called?", correctAnswers: ["melting"] },
  { lesson: "lesson4", id: "4-2", question: "What is the change from liquid to solid called?", correctAnswers: ["freezing", "solidification"] },
  { lesson: "lesson4", id: "4-3", question: "What is the change from liquid to gas called?", correctAnswers: ["boiling", "evaporation"] },
  { lesson: "lesson4", id: "4-4", question: "What is the change from gas to liquid called?", correctAnswers: ["condensation"] },
  { lesson: "lesson4", id: "4-5", question: "What happens to particles when a substance melts?", correctAnswers: ["move faster", "moves faster", "spread apart", "get faster", "gets faster", "speed up", "speeds up"] },
  { lesson: "lesson4", id: "4-6", question: "What happens to particles when a substance freezes?", correctAnswers: ["slow down", "move slower"] },
  { lesson: "lesson4", id: "4-7", question: "What is a chemical change that produces heat and light called?", correctAnswers: ["combustion"] },
  { lesson: "lesson4", id: "4-8", question: "What is the slow reaction of metal with oxygen called?", correctAnswers: ["rusting", "corrosion", "rust"] },
  { lesson: "lesson4", id: "4-9", question: "What must happen for a chemical reaction to occur?", correctAnswers: ["particle collision", "particle collisions"] },
  { lesson: "lesson4", id: "4-11", question: "What do we call the starting substances in a reaction?", correctAnswers: ["reactants"] },
  { lesson: "lesson4", id: "4-12", question: "What do we call the new substances formed in a reaction?", correctAnswers: ["products"] },
  { lesson: "lesson4", id: "4-13", question: "What type of change can be reversed: physical or chemical?", correctAnswers: ["physical"] },
  { lesson: "lesson4", id: "4-14", question: "Only ----- changes form new substances.", correctAnswers: ["chemical"] },
  { lesson: "lesson4", id: "4-15", question: "When a solid forms from a liquid reaction, what is it called?", correctAnswers: ["precipitate", "precipitates"] },
];

const questionsArray = Object.values(questions).flat();
///////////////////////////////////////////////////////////////

/////////////////////////////////////////////////////////////////////////////
// LOADING IN COLISEUM.JSON//////////////////////////////////////////////////

let rawDataLessons = fs.readFileSync('./renderer/userdata/lessondata.json', 'utf8');
let lessonData = JSON.parse(rawDataLessons);
/////////////////////////////////////////////////////////////////////////////


/////////////////////////////////////////////////////////////////////////
//PICKING A RANDOM QUESTION/PUTTING THEM ALL INTO A LIST
for (let lessonNumber in questions) {
  let lessonchosen = questions[lessonNumber];
  let questionsorganized = questionsArray.concat(lessonchosen.question);
}

//////////////////////////////////////////////////////////////////////////


////////////////////////////score value and sound effects
let currentQuestion = {};
let score = 0;
let scoreadd = 1;

let streak = 0;
let luck = 5;

let multiplier = 1;
let chance = 0;

let beakersearnedtext = document.getElementById("beakersearned");
// Just making a function so its easier later in some purchase code.
function updateBeakers(){
  beakersearnedtext.textContent = `Beakers Earned: ${score}`;
}
updateBeakers()


let luckleft = document.getElementById("luckleft");
luckleft.textContent = `Luck Remaining: ${luck}`;




////////////////////////////////////////

///////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////TIMER LOGIC//////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////


let countdown; // will store the interval
let timeLeft = 30; // seconds
let timeGain = 5; // time gain per question answered
let timeMax = 30; // max amount of time in countdown

function startTimer(duration = 30) {
  clearInterval(countdown); // clear any previous timer
  timeLeft = duration;
  const timerDisplay = document.getElementById("timer");
  timerDisplay.textContent = `${timeLeft}s`;

  countdown = setInterval(() => {
    timeLeft--;
    timerDisplay.textContent = `${timeLeft}s`;
    if(timeLeft > 20){
      timerDisplay.style.color = "rgba(255, 255, 255, 1)";
      timerDisplay.style.scale = "1.0";
    } 
    if(timeLeft <= 20){
      timerDisplay.style.color = "rgba(131, 117, 220, 1)";
      timerDisplay.style.scale = "1.2";
    } 
    if(timeLeft <= 10){
      timerDisplay.style.color = "rgba(250, 44, 44, 0.78)";
      timerDisplay.style.scale = "1.5";
    }

    if (timeLeft <= 0) {
      clearInterval(countdown);
      timerDisplay.textContent = "Time's up!";
      endGame(); // call a function when timer ends
    }
  }, 1000);
}

function endGame() {
  console.log("Give Beakers Running")
  let dog = JSON.parse(fs.readFileSync("./renderer/userdata/inventory.json", "utf8"));
  dog.coliseumbeakersearned = score;
  dog.beakers += score;
  console.log("parsed");
  fs.writeFileSync('./renderer/userdata/inventory.json', JSON.stringify(dog, null, 2));
  console.log(`Updated inventory: ${dog.beakers} beakers`);
  window.location.href="gameover.html";
}

///////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////




///////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////QUESTION LOGIC////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////


///////////////////////GET RANDOM QUESTION///////////////////////////////////
function getRandomQuestion() {
  // Only questions from unlocked lessons
  const unlockedQuestions = questionsArray.filter(q => lessonData[q.lesson] === true);

  if (unlockedQuestions.length === 0) {
    console.log("No unlocked lessons available!");
    return null;
  }

  // Pick a random question from the unlocked set
  const randomIndex = Math.floor(Math.random() * unlockedQuestions.length);
  return unlockedQuestions[randomIndex];
  
}
//////////////////////////////////////////////////////////
//////////////////////////////////Load new Question///////////////////////////////
function loadNewQuestion() {
  // Get a random question from unlocked lessons
  currentQuestion = getRandomQuestion();

  // Safety check
  if (!currentQuestion) {
    // No unlocked lessons or questions available
    const text = document.getElementById("question");
    text.textContent = "<p>No questions available. Unlock more lessons!</p>";
    return;
  }

  // Display the question text
  document.getElementById("question").textContent = currentQuestion.question;

  // Clear previous input and feedback
  const answerInput = document.getElementById("answer");
  if (answerInput) answerInput.value = "";

  const feedback = document.getElementById("feedback");
  startTimer(timeLeft);
}

///////////////////////////check answer//////////////////////////////////////////////
function checkAnswer() {
  if (!currentQuestion) return; // safety check

  const userAnswer = document.getElementById("answer").value.trim().toLowerCase();

  // Make sure we use correctAnswers array
  const correctAnswers = currentQuestion.correctAnswers.map(a => a.toLowerCase());

  const streaktext = document.getElementById("streak");
  const multipliertext = document.getElementById("multiplier");

  if (correctAnswers.includes(userAnswer)) {
    feedback.textContent = '';
    streaktext.style.animation = 'none';
    streaktext.offsetHeight; //somehow resets the animation????
    streaktext.style.animation = 'pulse 0.3s ease-out 1'
    let multiplierdecider = Math.random() * 100;
    if(multiplierdecider < chance){
      score += (scoreadd * multiplier);
    } else {
      score += scoreadd;
    }
    
    // TODO: add beakers or score
    cheer.currentTime = 0;
    cheer.play();
    timeLeft += timeGain;
    streak++;
    if(adrenalinepurchased.value == true){
      timeMax = 40;
    }
    if(timeLeft>timeMax){
      timeLeft = timeMax;
    }
  } else {
    luck --;
    //Using Shield Powerups:
    if(woodenshieldpurchased.value == true){
      woodenshieldsound.currentTime = 0;
      woodenshieldsound.play();
      woodenshieldsused++;
      woodenshieldpurchased.value = false;
      if(woodenshieldsused < 2){
        itemReplenish(woodenshield, woodenshieldpurchased);
        console.log(woodenshieldsused);
      }
    } else {
      streak = 0;
    }
    if(luck <= 0){
      endGame();
    }
    boo.currentTime = 0;
    boo.play();
    feedback.textContent = `Possible Answers: ${correctAnswers}`
  }

  /////CHANGING STREAK COLOR AND MULTIPLIERS////////////
  /////CHANGING STREAK COLOR AND MULTIPLIERS////////////
  if (streak == 0) {
    streaktext.style.color = "white";
    streaktext.style.scale = 0.8;

    multiplier = 1;
    chance = 0;
  } else if (streak >= 15) {
    streaktext.style.color = "rgba(82, 255, 13, 0.81)";
    streaktext.style.scale = 1.2;
    multiplier = 3;
    chance = 75;
  } else if (streak >= 12) {
    streaktext.style.color = "rgba(231, 56, 33, 1)";
    streaktext.style.scale = 1.1;
    chance = 50;
  } else if (streak >= 8) {
    streaktext.style.color = "rgba(0, 48, 153, 1)";
    streaktext.style.scale = 1.05;

    multiplier = 2;
    chance = 35;
  } else if (streak >= 5) {
    streaktext.style.color = "rgba(147, 171, 224, 1)";
    streaktext.style.scale = 1.0;
    multiplier = 2;
    chance = 15;

  } else if (streak >= 1) {
    streaktext.style.color = "rgba(141, 158, 73, 1)";
  }

  /////CHANGING STREAK COLOR AND MULTIPLIERS////////////
  /////CHANGING STREAK COLOR AND MULTIPLIERS////////////

  //updating tallies/counters/////////////////////////////
  beakersearnedtext.textContent = `Beakers Earned: ${score}`;
  luckleft.textContent = `Luck Remaining: ${luck}`;
  streaktext.textContent = `   ${streak}x`;
  if(streak >= 5){
    multipliertext.textContent = `${chance}% of ${multiplier}x beakers`;
  } else {
    multipliertext.textContent = ``;
  }
  ////////////////////////////////////////////////////////

  // Load next question after short delay
  loadNewQuestion();
}

// Event listener for the submit button
document.getElementById("submit").addEventListener("click", checkAnswer);

document.getElementById("answer").addEventListener("keypress", function (event) {
  if (event.key === "Enter") {
    event.preventDefault(); // prevents accidental form submission / page reload
    document.getElementById("submit").click();
  }
});
///////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////




////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////
////////////////////////////PURCHASE CODE///////////////////////////
////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////

let acidswordpurchased = { value: false };
let acidswordprice = 15;

let woodenshieldpurchased = { value : false };
let woodenshieldprice = 15;
let woodenshieldsused = 0;
let woodenshieldsound = document.getElementById("woodenshieldused");
woodenshieldsound.volume = 1.0;


let adrenalinepurchased = { value: false };
let adrenalineprice = 35;



let slotspurchased = { value: false };
let slotsprice = 60;



let purchasedsound = document.getElementById("purchased");
purchasedsound.volume = 0.6;
///////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////POWERUP WINDOW/////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////


Name = document.getElementById("name");
description = document.getElementById("description");
cost = document.getElementById("cost");

// defaulting to normal text when mouse leaves
const descriptioncheck = document.querySelectorAll(".powerup");
descriptioncheck.forEach(item => {
  item.addEventListener("mouseleave", () => {
    description.textContent = "Use powerups to gain an advantage!";
    Name.textContent = "";
    cost.textContent = "";
  });
});


//////////////////POWERUP HOVERS/CLICKS////////////////////////////////

//////////////////////////////////////////////////////////////////////
/////USE THIS FUNCTION FOR PURCHASING AN ITEM!!!
function purchaseItem(itemElement, purchasedCheck, price) {
  itemElement.addEventListener("click", () => {
    if (purchasedCheck.value == false && score >= price) {
      itemElement.classList.add("sold");
      purchasedCheck.value = true;
      score -= price;
      purchasedsound.currentTime = 0;
      purchasedsound.play();
    }
    updateBeakers();
  });
}

///////////////For when you use an item, use itemReplenish(nameofthething, variablesayingitwasboughtoriginally)
function itemReplenish(itemElement, purchaseCheck) {
  itemElement.classList.remove("sold");
  purchaseCheck.value = false;
}

//////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

sword = document.getElementById("sword");
sword.addEventListener("mouseover", () => {
    Name.textContent = "Acid Sword";
    Name.className = "rarepowerup";
    description.textContent = "Strike fear into your opponents! Gain an extra beaker with every correct answer. Included in multiplier!";
    cost.textContent = `Give Up: ${acidswordprice} Beakers`;
});
purchaseItem(sword, acidswordpurchased, acidswordprice);
sword.addEventListener("click", () => {
  if(acidswordpurchased.value == true){
    scoreadd++;
  }
});

woodenshield = document.getElementById("woodenshield");
woodenshield.addEventListener("mouseover", () => {
    Name.textContent = "Wooden Shield";
    Name.className = "normalpowerup";
    description.textContent = "Keep your streak going after an incorrect answer. Can only be bought twice, and activates automatically.";
    cost.textContent = `Give Up: ${woodenshieldprice} Beakers`;
});
purchaseItem(woodenshield, woodenshieldpurchased, woodenshieldprice);




adrenaline = document.getElementById("adrenaline");
adrenaline.addEventListener("mouseover", () => {
    Name.textContent = "C9-H13-NO3";
    Name.className = "rarepowerup";
    description.textContent = "WOO! Now this feels GOOD! Timer now caps out at 40 seconds.";
    cost.textContent = `Give Up: ${adrenalineprice} Beakers`;
});
purchaseItem(adrenaline, adrenalinepurchased, adrenalineprice);


slots = document.getElementById("slots");
slots.addEventListener("mouseover", () => {
    Name.textContent = "Vegas, Baby!";
    Name.className = "exquisitepowerup";
    description.textContent = "Give up your life for a 20% chance to triple all beakers earned.";
    cost.textContent = `Give Up: ${slotsprice} Beakers, and end the run!`;
});
slots.addEventListener("click", () => {
  if(score >= price){
    score -= slotsprice;
    let slotfate = Math.random() * 100;
    if(slotfate <= 20){
      score = score*3;
    }
    endGame();
  }
});



// Start the game
loadNewQuestion();
//////////////////////////////////////