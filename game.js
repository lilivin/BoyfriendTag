const submitNamesBtn = document.getElementById('submitNames');
const startAnswerBtn = document.getElementById('startAnswer');
const femaleAnswerBtn = document.getElementById('femaleAnswer');
const maleAnswerBtn = document.getElementById('maleAnswer');

const maleCorrectBtn = document.getElementById('maleCorrectBtn');
const bothCorrectBtn = document.getElementById('bothCorrectBtn');
const nobodyCorrectBtn = document.getElementById('nobodyCorrectBtn');
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

function askQuestion() {
        lotto();
        document.getElementById('questionFemaleRadio').innerHTML = question;
        document.getElementById('questionFemaleWrite').innerHTML = question;
        document.getElementById('questionMaleRadio').innerHTML = question;
        document.getElementById('questionMaleWrite').innerHTML = question;
        document.getElementById('questionEnd').innerHTML = question;
        myArray.splice(questionNumber, 1);

        if (questionType == "radio") {
            document.getElementById('femaleFormRadioForm').style.display = "grid";
            document.getElementById('maleFormRadioForm').style.display = "grid";
            console.log('radio')
        } else {
            document.getElementById('femaleFormWrite').style.display = "grid";
            document.getElementById('maleFormWrite').style.display = "grid";
            console.log('write')
        }
        
}

function validation() {
    femaleName = document.getElementById('female').value;
    maleName = document.getElementById('male').value;
    howGames = document.getElementById('howGames').value;

    if(femaleName == '' || maleName == '' || howGames == 0) {
        alert('Wpisz imiona i liczbę punktów po której zakończy się gra')
    } else {
        if(femaleName.length >= 8 || maleName >= 8 ) {
            alert('Imie może mieć maksymalnie 8 liter.')
        } else {
            welcomeSection.style.display = 'none';
            checkAnswerSection.style.display = 'none';
            questionSection.style.display = 'grid';

            document.getElementById('femalePointsContainer').innerHTML = `<b>${femaleName}:</b> ${femalePoints} punktów`;
            document.getElementById('malePointsContainer').innerHTML = `<b>${maleName}:</b> ${malePoints} punktów`;
            askQuestion();
        }
    }
}

submitNamesBtn.addEventListener('click', validation);

startAnswerBtn.addEventListener('click', function() {
    document.getElementById('answerFemaleName').innerHTML = `Odpowiada <b>${femaleName}</b>`;
    document.getElementById('maleRadioFormMale').innerHTML = `${maleName}`;
    document.getElementById('femaleRadioFormMale').innerHTML = `${femaleName}`;
    document.getElementById('femaleRadioFormFemale').innerHTML = `${femaleName}`;
    document.getElementById('maleRadioFormFemale').innerHTML = `${maleName}`;
    questionSection.style.display = 'none';
    femaleAnswerSection.style.display = 'grid';
})

femaleAnswerBtn.addEventListener('click', function() {
    document.getElementById('answerMaleName').innerHTML = `Odpowiada <b>${maleName}</b>`;

    if (questionType == "radio") {
        radioFemaleValue = document.querySelector('input[name="femaleFormRadio"]:checked').value;
        if (radioFemaleValue == '') {
            alert("Zaznacz jedną z opcji!")
        } else {
            femaleAnswerSection.style.display = 'none';
            maleAnswerSection.style.display = 'grid';
        }
    } else {
        aboutYouFemale = document.getElementById('aboutYouFemale').value;
        aboutPartnerFemale = document.getElementById('aboutPartnerFemale').value;
        if(aboutYouFemale == '' || aboutPartnerFemale == '') {
            alert('Wpisz odpowiedź!')
        } else {
            femaleAnswerSection.style.display = 'none';
            maleAnswerSection.style.display = 'grid';
        }
    }
    

    
})

function checkWhoWin() {
    document.getElementById('checkAnswerSectionFemaleName').innerHTML = `${femaleName}`;
    document.getElementById('checkAnswerSectionMaleName').innerHTML = `${maleName}`;

    maleCorrectBtn.innerHTML = `${maleName}`;
    femaleCorrectBtn.innerHTML = `${femaleName}`;

    if (questionType == "radio") {
        radioMaleValue = document.querySelector('input[name="maleFormRadio"]:checked').value;
        if (radioMaleValue == '') {
            alert('Zaznacz jedną z opcji!')
        } else {
            document.getElementById('checkAnswerFemaleWrite').style.display = "none";
            document.getElementById('checkAnswerMaleWrite').style.display = "none";
            document.getElementById('checkAnswerMaleRadio').style.display = "block";
            document.getElementById('checkAnswerFemaleRadio').style.display = "block";
            if (radioMaleValue == "male") {
                document.getElementById('checkAnswerMaleRadio').innerHTML = maleName;
            } else {
                document.getElementById('checkAnswerMaleRadio').innerHTML = femaleName;
            }

            if (radioFemaleValue == "male") {
                document.getElementById('checkAnswerFemaleRadio').innerHTML = maleName;
            } else {
                document.getElementById('checkAnswerFemaleRadio').innerHTML = femaleName;
            }

            document.querySelector('input[name="maleFormRadio"]:checked').checked = false;
            document.querySelector('input[name="femaleFormRadio"]:checked').checked = false;

            maleAnswerSection.style.display = 'none';
            checkAnswerSection.style.display = 'grid';
        }
    } else {
        aboutYouMale = document.getElementById('aboutYouMale').value;
        aboutPartnerMale = document.getElementById('aboutPartnerMale').value;
        if (aboutYouMale == '' || aboutPartnerMale == '') {
            alert('Wpisz odpowiedź!')
        } else {
            document.getElementById('checkAnswerFemaleWrite').style.display = "block";
            document.getElementById('checkAnswerMaleWrite').style.display = "block";
            document.getElementById('checkAnswerMaleRadio').style.display = "none";
            document.getElementById('checkAnswerFemaleRadio').style.display = "none";

            document.getElementById('aboutYouFemaleShow').innerHTML = `${aboutYouFemale}`;
            document.getElementById('aboutPartnerFemaleShow').innerHTML = `${aboutPartnerFemale}`;
            document.getElementById('aboutYouMaleShow').innerHTML = `${aboutYouMale}`;
            document.getElementById('aboutPartnerMaleShow').innerHTML = `${aboutPartnerMale}`;
            
            maleAnswerSection.style.display = 'none';
            checkAnswerSection.style.display = 'grid';
        }
    }
}

maleAnswerBtn.addEventListener('click', checkWhoWin)

maleCorrectBtn.addEventListener('click', function() {
    malePoints += 1;
    aboutPartnerFemale = '';
    refreshInputs();
    if(malePoints >= howGames){
        checkAnswerSection.style.display = "none";
        finalSection.style.display = "block";
    } else {
        validation();
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
        validation();
    }
})

nobodyCorrectBtn.addEventListener('click', function() {
    refreshInputs();
    if((malePoints >= howGames) || (femalePoints >= howGames)){
        checkAnswerSection.style.display = "none";
        finalSection.style.display = "block";
    } else {
        validation();
    }
})

femaleCorrectBtn.addEventListener('click', function() {
    femalePoints += 1;
    refreshInputs();
    if(femalePoints >= howGames){
        checkAnswerSection.style.display = "none";
        finalSection.style.display = "block";
    } else {
        validation();
    }
    
})


function refreshInputs() {
    document.getElementById('aboutYouFemale').value = '';
    document.getElementById('aboutPartnerFemale').value = '';
    document.getElementById('aboutYouMale').value = '';
    document.getElementById('aboutPartnerMale').value = '';

    document.getElementById('femaleFormRadioForm').style.display = "none";
    document.getElementById('maleFormRadioForm').style.display = "none";
    document.getElementById('femaleFormWrite').style.display = "none";
    document.getElementById('maleFormWrite').style.display = "none";

    questionType = '';

    radioMaleValue = '';
    radioFemaleValue = '';
}
    