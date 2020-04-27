const welcomeSection = document.getElementById('welcomeSection');
const questionSection = document.getElementById('questionSection');
const femaleAnswerSection = document.getElementById('femaleAnswerSection');
const maleAnswerSection = document.getElementById('maleAnswerSection');
const checkAnswerSection = document.getElementById('checkAnswerSection');
const finalSection = document.getElementById('finalSection');

let winnerName = document.getElementById('winnerName');

let femaleName = '';
let maleName = '';
let howGames = 0;

let aboutYouFemale = '';
let aboutPartnerFemale = '';

let radioFemaleValue = '';
let radioMaleValue = '';

let aboutYouMale = '';
let aboutPartnerMale = '';

let femalePoints = 0;
let malePoints = 0;

let questionNumber = null;
let questionType = '';
let question = '';

function lotto() {
    questionNumber = Math.floor(Math.random() * myArray.length);
    question = myArray[questionNumber].name;
    questionType = myArray[questionNumber].type;
}

//--------------------------------------------------------------------------------------
const submitNamesBtn = document.getElementById('submitNames');

submitNamesBtn.addEventListener('click', validation);

//--------------------------------------------------------------------------------------
const startAnswerBtn = document.getElementById('startAnswer');

startAnswerBtn.addEventListener('click', startAnswerFunction);

//--------------------------------------------------------------------------------------
const skipButton = document.getElementById('skipButton');

skipButton.addEventListener('click', skipFunction);

//--------------------------------------------------------------------------------------
const femaleAnswerBtn = document.getElementById('femaleAnswer');

femaleAnswerBtn.addEventListener('click', femaleAnswerFunction);
//--------------------------------------------------------------------------------------
const maleAnswerBtn = document.getElementById('maleAnswer');

maleAnswerBtn.addEventListener('click', checkWhoWin)

//--------------------------------------------------------------------------------------
const maleCorrectBtn = document.getElementById('maleCorrectBtn');
const bothCorrectBtn = document.getElementById('bothCorrectBtn');
const nobodyCorrectBtn = document.getElementById('nobodyCorrectBtn');
const femaleCorrectBtn = document.getElementById('femaleCorrectBtn');


maleCorrectBtn.addEventListener('click', maleCorrectAnswerFunction);

bothCorrectBtn.addEventListener('click', bothCorrectAnswerFunction);

nobodyCorrectBtn.addEventListener('click', nobodyCorrectAnswerFunction);

femaleCorrectBtn.addEventListener('click', femaleCorrectAnswerFunction);
    