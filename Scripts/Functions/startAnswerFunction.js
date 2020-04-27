function startAnswerFunction() {
    document.getElementById('answerFemaleName').innerHTML = `Odpowiada <b>${femaleName}</b>`;
    document.getElementById('maleRadioFormMale').innerHTML = `${maleName}`;
    document.getElementById('femaleRadioFormMale').innerHTML = `${femaleName}`;
    document.getElementById('femaleRadioFormFemale').innerHTML = `${femaleName}`;
    document.getElementById('maleRadioFormFemale').innerHTML = `${maleName}`;
    questionSection.style.display = 'none';
    femaleAnswerSection.style.display = 'grid';
}