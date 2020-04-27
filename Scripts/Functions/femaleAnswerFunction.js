function femaleAnswerFunction() {
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
}