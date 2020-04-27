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