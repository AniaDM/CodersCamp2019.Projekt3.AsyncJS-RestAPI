function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    selectedPicture = Math.floor(Math.random() * (max - min)) + min;
    if (selectedPicture == 17) {getRandomInt(1, 88)};
    return selectedPicture;
  }
  
  let ChoicePWS = 'people';
  let pictureQuiz = document.querySelector('.lord-vader-pic');

// na razie zmiana obrazka po najechaniu na niego myszką
pictureQuiz.addEventListener('click', function() {
  let changeRandomPictures = getRandomInt(1, 88);
    this.src = `../../assets/img/modes/${ChoicePWS}/${changeRandomPictures}.jpg`;
});
