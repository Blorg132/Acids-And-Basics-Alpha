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

////////////////////////////////////////


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
}


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
    // TODO: add beakers or score
    cheer.currentTime = 0;
    cheer.play();
  } else {
    feedback.textContent = `${currentQuestion.correctAnswers[0]}`;
    feedback.style.color = "red";
    feedback.style.scale = 1.5;
    boo.currentTime = 0;
    boo.play();
  }

  // Load next question after short delay
  setTimeout(() => {
    loadNewQuestion();
  }, 1500);
}

// Event listener for the submit button
document.getElementById("submit").addEventListener("click", checkAnswer);

document.getElementById("answer").addEventListener("keypress", function (event) {
  if (event.key === "Enter") {
    event.preventDefault(); // prevents accidental form submission / page reload
    document.getElementById("submit").click();
  }
});

// Start the game
loadNewQuestion();
//////////////////////////////////////