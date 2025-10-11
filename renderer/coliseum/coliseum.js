const fs = require('fs');



////////////////////////Questions/////////////////////////
const questions = [

    { lesson: "lesson2", id: "10-1", question: "What does KMT stand for?", correctAnswers: ["kinetic molecular theory"] },
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

function startTimer(duration = 30) {
  clearInterval(countdown); // clear any previous timer
  timeLeft = duration;
  const timerDisplay = document.getElementById("timer");
  timerDisplay.textContent = `${timeLeft}s`;

  countdown = setInterval(() => {
    timeLeft--;
    timerDisplay.textContent = `${timeLeft}s`;
    if(timeLeft <= 20){
      timerDisplay.style.color = "rgb(161, 191, 61)";
      timerDisplay.style.scale = "1.2";
    } 
    if(timeLeft <= 10){
      timerDisplay.style.color = "rgba(223, 84, 84, 1)";
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

  const feedback = document.getElementById("feedback");

  if (correctAnswers.includes(userAnswer)) {
    feedback.textContent = "Correct!";
    feedback.style.color = "green";
    feedback.style.scale = 1.0;
    score += scoreadd;
    // TODO: add beakers or score
    cheer.currentTime = 0;
    cheer.play();
    timeLeft += timeGain;
  } else {
    feedback.textContent = `${currentQuestion.correctAnswers[0]}`;
    feedback.style.color = "red";
    feedback.style.scale = 1.5;
    luck --;
    boo.currentTime = 0;
    boo.play();
  }

  //updating tallies/counters/////////////////////////////
  beakersearnedtext.textContent = `Beakers Earned: ${score}`;
  luckleft.textContent = `Luck Remaining: ${luck}`;
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
description.addEventListener("mouseleave", () => {
    description.textContent = "Psst! Need some help?";
    Name.textContent = "";
    cost.textContent = "";
});


//////////////////POWERUP HOVERS/CLICKS////////////////////////////////
sword = document.getElementById("sword");
sword.addEventListener("mouseover", () => {
    Name.textContent = "Acid Sword";
    Name.className = "normalpowerup";
    description.textContent = "Strike fear into your opponents! Increase score multiplier by 1.";
    cost.textContent = "Give Up: 10 Beakers Earned";
});






// Start the game
loadNewQuestion();
//////////////////////////////////////