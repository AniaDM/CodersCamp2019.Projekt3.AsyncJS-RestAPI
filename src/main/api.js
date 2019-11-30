import {ASSETS} from './people.js';
import {randomIdPeople} from './SwApiCalls.ts';


let cat
let num
if (ASSETS === '../../assets/img/modes/people/') {
  cat = 'people';
  num = randomIdPeople;
} else if (ASSETS === '../../assets/img/modes/starships/') {
  cat = 'starships'
  num = randomIdStarships;
} else {
  cat = 'vehicles'
  num = randomIdVehicles;
};

const request = {
  "requests": [{
    "features": [{
      "type": "WEB_DETECTION",
      "maxResults": 3
    }],
    "image": {
      "source": {
        "imageUri": "gs://projekt_nr_3/"+cat+"/"+num+".jpg"
      }
    }
  }]
};

console.log(request);

let googleAnswers = [];

function GoogleApi() {
  fetch("https://vision.googleapis.com/v1/images:annotate?key=AIzaSyAu5cv9vSquTVHFDuFRvbNX4FtN0TLwVrk", {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json; charset=utf-8'
      },
      redirect: 'follow',
      cache: 'no-cache',
      body: JSON.stringify(request)
    })
    .then(resp => {
      console.log(resp);
      return resp.json()
    })
    .then(resp => {
      console.log(resp);
    
      function pushToGoogleAnswers() {
        googleAnswers.push(resp.responses[0].webDetection.webEntities[0].description)
      }
      pushToGoogleAnswers();
      
      console.log(googleAnswers[0]);
    })
};

GoogleApi();
