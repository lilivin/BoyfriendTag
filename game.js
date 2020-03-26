const submitNamesBtn = document.getElementById('submitNames');
const startAnswerBtn = document.getElementById('startAnswer');
const femaleAnswerBtn = document.getElementById('femaleAnswer');
const maleAnswerBtn = document.getElementById('maleAnswer');

const maleCorrectBtn = document.getElementById('maleCorrectBtn');
const bothCorrectBtn = document.getElementById('bothCorrectBtn');
const femaleCorrectBtn = document.getElementById('femaleCorrectBtn');

const welcomeSection = document.getElementById('welcomeSection');
const questionSection = document.getElementById('questionSection');
const femaleAnswerSection = document.getElementById('femaleAnswerSection');
const maleAnswerSection = document.getElementById('maleAnswerSection');
const checkAnswerSection = document.getElementById('checkAnswerSection');
const finalSection = document.getElementById('finalSection');


let femaleName = '';
let maleName = '';
let howGames = 0;

let aboutYouFemale = '';
let aboutPartnerFemale = '';

let aboutYouMale = '';
let aboutPartnerMale = '';

let femalePoints = 0;
let malePoints = 0;

function askQuestion() {
    let questionNumber = Math.floor(Math.random() * myArray.length);
    let question = myArray[questionNumber].name;
    document.getElementById('questionMain').innerHTML = `${question}`;
            document.getElementById('questionFemale').innerHTML = `${question}`;
            document.getElementById('questionMale').innerHTML = `${question}`;
            document.getElementById('questionEnd').innerHTML = `${question}`;
            myArray.splice(questionNumber, 1);

        femaleName = document.getElementById('female').value;
        maleName = document.getElementById('male').value;
        howGames = document.getElementById('howGames').value;

        if(femaleName == '' || maleName == '' || howGames == 0) {
            alert('Wpisz imiona i liczbę punktów po której zakończy się gra')
        } else {
            welcomeSection.style.display = 'none';
            checkAnswerSection.style.display = 'none';
            questionSection.style.display = 'block';

            document.getElementById('femalePointsContainer').innerHTML = `<b>${femaleName}:</b> ${femalePoints} punktów`;
            document.getElementById('malePointsContainer').innerHTML = `<b>${maleName}:</b> ${malePoints} punktów`;
        }
}

submitNamesBtn.addEventListener('click', askQuestion)

startAnswerBtn.addEventListener('click', function() {
    document.getElementById('answerFemaleName').innerHTML = `Odpowiada <b>${femaleName}</b>`;
    questionSection.style.display = 'none';
    femaleAnswerSection.style.display = 'block';
})

femaleAnswerBtn.addEventListener('click', function() {
    document.getElementById('answerMaleName').innerHTML = `Odpowiada <b>${maleName}</b>`;
    aboutYouFemale = document.getElementById('aboutYouFemale').value;
    aboutPartnerFemale = document.getElementById('aboutPartnerFemale').value;
    
    if(aboutYouFemale == '' || aboutPartnerFemale == '') {
        alert('Wpisz odpowiedzi!')
    } else {
        femaleAnswerSection.style.display = 'none';
        maleAnswerSection.style.display = 'block';
    }
})

maleAnswerBtn.addEventListener('click', function() {
    aboutYouMale = document.getElementById('aboutYouMale').value;
    aboutPartnerMale = document.getElementById('aboutPartnerMale').value;

    if(aboutYouMale == '' || aboutPartnerMale == '') {
        alert('Wpisz Odpowiedzi!')
    } else {
    maleCorrectBtn.innerHTML = `${maleName}`;
    bothCorrectBtn.innerHTML = `Oboje`;
    femaleCorrectBtn.innerHTML = `${femaleName}`;

    maleAnswerSection.style.display = 'none';
    checkAnswerSection.style.display = 'block';

    document.getElementById('checkAnswerSectionFemaleName').innerHTML = `${femaleName}`;
    document.getElementById('checkAnswerSectionMaleName').innerHTML = `${maleName}`;
    document.getElementById('aboutYouFemaleShow').innerHTML = `${aboutYouFemale}`;
    document.getElementById('aboutPartnerFemaleShow').innerHTML = `${aboutPartnerFemale}`;
    document.getElementById('aboutYouMaleShow').innerHTML = `${aboutYouMale}`;
    document.getElementById('aboutPartnerMaleShow').innerHTML = `${aboutPartnerMale}`;
    }
})

maleCorrectBtn.addEventListener('click', function() {
    malePoints += 1;
    aboutPartnerFemale = '';
    refreshInputs();
    if(malePoints >= howGames){
        checkAnswerSection.style.display = "none";
        finalSection.style.display = "block";
    } else {
        askQuestion();
    }
})

bothCorrectBtn.addEventListener('click', function() {
    malePoints += 1;
    femalePoints += 1;
    refreshInputs();
    if((malePoints >= howGames) || (femalePoints >= howGames)){
        checkAnswerSection.style.display = "none";
        finalSection.style.display = "block";
    } else {
        askQuestion();
    }
})

femaleCorrectBtn.addEventListener('click', function() {
    femalePoints += 1;
    refreshInputs();
    if(femalePoints >= howGames){
        checkAnswerSection.style.display = "none";
        finalSection.style.display = "block";
    } else {
        askQuestion();
    }
})


function refreshInputs() {
    document.getElementById('aboutYouFemale').value = '';
    document.getElementById('aboutPartnerFemale').value = '';
    document.getElementById('aboutYouMale').value = '';
    document.getElementById('aboutPartnerMale').value = '';
}
    