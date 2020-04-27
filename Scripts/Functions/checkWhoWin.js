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