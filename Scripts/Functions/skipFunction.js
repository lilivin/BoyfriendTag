function skipFunction() {
    femaleAnswerSection.style.display = 'none';
    if(myArray.length < 1) {
        alert('Brak pytań! Gra zostanie podsumowana.')
        checkAnswerSection.style.display = "none";
        finalSection.style.display = "grid";
        if(malePoints > femalePoints) {
            winnerName.innerHTML = `Wygrywa ${maleName}!`
        } else if (femalePoints > malePoints) {
            winnerName.innerHTML = `Wygrywa ${femaleName}!`
        } else if (femalePoints == malePoints){
            winnerName.innerHTML = `Ta sama ilość punktów`
        }
    } else {
        refreshInputs();
        if((malePoints >= howGames) || (femalePoints >= howGames)){
            checkAnswerSection.style.display = "none";
            finalSection.style.display = "block";
        } else {
            validation();
        }
    }
}
