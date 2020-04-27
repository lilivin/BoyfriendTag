function maleCorrectAnswerFunction() {
    malePoints += 1;
    aboutPartnerFemale = '';
    refreshInputs();
    if(myArray.length < 1) {
        alert('Brak pytań! Gra zostanie podsumowana.')
        checkAnswerSection.style.display = "none";
        finalSection.style.display = "grid";
        if(malePoints > femalePoints) {
            winnerName.innerHTML = `Wygrywa ${maleName}!`
        } else if (femalePoints > malePoints) {
            winnerName.innerHTML = `Wygrywa ${femaleName}!`
        } else if (femalePoints == malePoints){
            winnerName.innerHTML = `Znacie się jak łyse konie! Uzyskaliście tą samą ilość punktów!`
        }
    } else {
        if(malePoints >= howGames){
            checkAnswerSection.style.display = "none";
            finalSection.style.display = "grid";
            winnerName.innerHTML = `Wygrywa ${maleName}!`
        } else {
            validation();
        }
    }
}

function bothCorrectAnswerFunction() {
    malePoints += 1;
    femalePoints += 1;
    refreshInputs();
    if(myArray.length < 1) {
        alert('Brak pytań! Gra zostanie podsumowana.')
        checkAnswerSection.style.display = "none";
        finalSection.style.display = "grid";
        if(malePoints > femalePoints) {
            winnerName.innerHTML = `Wygrywa ${maleName}!`
        } else if (femalePoints > malePoints) {
            winnerName.innerHTML = `Wygrywa ${femaleName}!`
        } else if (femalePoints == malePoints){
            winnerName.innerHTML = `Znacie się jak łyse konie! Uzyskaliście tą samą ilość punktów!`
        }
    } else {
        if((malePoints >= howGames) && (femalePoints >= howGames)) {
            checkAnswerSection.style.display = "none";
            finalSection.style.display = "grid";
            winnerName.innerHTML = `Ta sama ilość punków!`
        } else if(malePoints >= howGames){
            checkAnswerSection.style.display = "none";
            finalSection.style.display = "grid";
            winnerName.innerHTML = `Wygrywa ${maleName}!`
        } else if (femalePoints >= howGames){
            checkAnswerSection.style.display = "none";
            finalSection.style.display = "grid";
            winnerName.innerHTML = `Wygrywa ${femaleName}!`
        } else {
            validation();
        }
    }
}


function nobodyCorrectAnswerFunction() {
    if(myArray.length < 1) {
        alert('Brak pytań! Gra zostanie podsumowana.')
        checkAnswerSection.style.display = "none";
        finalSection.style.display = "grid";
        if(malePoints > femalePoints) {
            winnerName.innerHTML = `Wygrywa ${maleName}!`
        } else if (femalePoints > malePoints) {
            winnerName.innerHTML = `Wygrywa ${femaleName}!`
        } else if (femalePoints == malePoints){
            winnerName.innerHTML = `Znacie się jak łyse konie! Uzyskaliście tą samą ilość punktów!`
        }
    } else {
        refreshInputs();
        validation();
    }
}


function femaleCorrectAnswerFunction() {
    femalePoints += 1;
    refreshInputs();
    if(myArray.length < 1) {
        alert('Brak pytań! Gra zostanie podsumowana.')
        checkAnswerSection.style.display = "none";
        finalSection.style.display = "grid";
        if(malePoints > femalePoints) {
            winnerName.innerHTML = `Wygrywa ${maleName}!`
        } else if (femalePoints > malePoints) {
            winnerName.innerHTML = `Wygrywa ${femaleName}!`
        } else if (femalePoints == malePoints){
            winnerName.innerHTML = `Znacie się jak łyse konie! Uzyskaliście tą samą ilość punktów!`
        }
    } else {
        if(femalePoints >= howGames){
            checkAnswerSection.style.display = "none";
            finalSection.style.display = "grid";
            winnerName.innerHTML = `Wygrywa ${femaleName}!`
        } else {
            validation();
        }
    }
}