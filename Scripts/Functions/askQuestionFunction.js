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
        questionSection.style.display = 'grid';
        welcomeSection.style.display = 'none';
        checkAnswerSection.style.display = 'none';
        document.getElementById('femalePointsContainer').innerHTML = `<b>${femaleName}:</b> ${femalePoints} punktów`;
        document.getElementById('malePointsContainer').innerHTML = `<b>${maleName}:</b> ${malePoints} punktów`;
        askQuestion();
    }
}
}