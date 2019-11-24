var request = new XMLHttpRequest()
function getRandomIntInclusive(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }
var numberRand=getRandomIntInclusive(1,10);
var num=numberRand.toString();


var randomNum= "https://swapi.co/api/people/"+num;
console.log(randomNum);

request.open('GET', randomNum, true)

request.onload = function() {
    var data = JSON.parse(this.response)

    if (request.status >= 200 && request.status < 400) {
      data.results.forEach(results => {
          
        console.log(results.name)
      })
    } else {
      console.log('error')
    }
}


request.send()