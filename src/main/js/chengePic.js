function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min;
  }

  let pictureQuiz = document.querySelector('.lord-vader-pic');

pictureQuiz.addEventListener('mouseover', function() {
    this.src = `../../assets/img/modes/people/${getRandomInt(1, 88)}.jpg`;
});
