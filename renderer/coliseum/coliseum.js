const fs = require('fs');



////////////////////////Questions/////////////////////////
const questions = [

    { lesson: "lesson2", id: "10-1", question: "What does KMT stand for?", correctAnswers: ["e"] },
    { lesson: "lesson10", id: "10-2", question: "What causes gas pressure?", correctAnswers: ["particle collisions"] },
    { lesson: "lesson11", id: "11-1", question: "What is a synthesis reaction?", correctAnswers: ["synthesis"] }
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
  console.log(questions);
}

//////////////////////////////////////////////////////////////////////////


////////////////////////////score value and sound effects
let currentQuestion = {};
let score = 0;
let scoreadd = 1;

let streak = 0;
let luck = 3;

let multiplier = 1;
let chance = 0;

let beakersearnedtext = document.getElementById("beakersearned");
beakersearnedtext.textContent = `Beakers Earned: ${score}`;

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
  if (feedback) feedback.textContent = "";
  startTimer(timeLeft);
}

///////////////////////////check answer//////////////////////////////////////////////
function checkAnswer() {
  if (!currentQuestion) return; // safety check

  const userAnswer = document.getElementById("answer").value.trim().toLowerCase();

  // Make sure we use correctAnswers array
  const correctAnswers = currentQuestion.correctAnswers.map(a => a.toLowerCase());

  const streaktext = document.getElementById("streak");

  if (correctAnswers.includes(userAnswer)) {
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
    if(timeLeft>timeMax){
      timeLeft = timeMax;
    }
  } else {
    luck --;
    streak = 0;
    if(luck <= 0){
      endGame();
    }
    boo.currentTime = 0;
    boo.play();
  }

  /////CHANGING STREAK COLOR AND MULTIPLIERS////////////
  /////CHANGING STREAK COLOR AND MULTIPLIERS////////////
  if (streak == 0) {
    streaktext.style.color = "white";
    streaktext.style.scale = 0.8;

    multiplier = 1;
    chance = 0;
  } else if (streak >= 10) {
    streaktext.style.color = "rgba(82, 255, 13, 0.81)";
    streaktext.style.scale = 1.2;

    multiplier = 3;
    chance = 50;
  } else if (streak >= 8) {
    streaktext.style.color = "rgba(231, 56, 33, 1)";
    streaktext.style.scale = 1.1;

    chance = 35;
  } else if (streak >= 5) {
    streaktext.style.color = "rgba(0, 48, 153, 1)";
    streaktext.style.scale = 1.05;

    multiplier = 2;
    chance = 25;
  } else if (streak >= 3) {
    streaktext.style.color = "rgba(147, 171, 224, 1)";
    streaktext.style.scale = 1.0;

  } else if (streak >= 1) {
    streaktext.style.color = "rgba(141, 158, 73, 1)";
  }
  /////CHANGING STREAK COLOR AND MULTIPLIERS////////////
  /////CHANGING STREAK COLOR AND MULTIPLIERS////////////

  //updating tallies/counters/////////////////////////////
  beakersearnedtext.textContent = `Beakers Earned: ${score}`;
  luckleft.textContent = `Luck Remaining: ${luck}`;
  streaktext.textContent = `   ${streak}x`;
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
sword = document.getElementById("sword");
sword.addEventListener("mouseover", () => {
    Name.textContent = "Acid Sword";
    Name.className = "normalpowerup";
    description.textContent = "Strike fear into your opponents! Increase score multiplier by 1.";
    cost.textContent = "Give Up: 10 Beakers Earned";
});
sword.addEventListener("click", () => {
    Name.textContent = "Acid Sword";
    Name.className = "normalpowerup";
    description.textContent = "Strike fear into your opponents! Increase score multiplier by 1.";
    cost.textContent = "Give Up: 10 Beakers Earned";
});


shield = document.getElementById("shield");
shield.addEventListener("mouseover", () => {
    Name.textContent = "Iron Shield";
    Name.className = "normalpowerup";
    description.textContent = "Keep your streak going after an incorrect answer.";
    cost.textContent = "Give Up: 10 Beakers Earned";
});




// Start the game
loadNewQuestion();
//////////////////////////////////////