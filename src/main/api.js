const categories = ['people', 'starships', 'vehicles'];

function randomCategory() {
  const category = categories[Math.floor(Math.random()*categories.length)];
  return category
};

function randomPhotoVehicles() {
    const availablePhotos = [4,6,7,8,14,16,18,19,20,24,25,26,30,33,34,35,36,37,38,42];
    const number = availablePhotos[Math.floor(Math.random()*availablePhotos.length)];
    return number
};

function randomPhotoStarships() {
  const availablePhotos = [5,9,10,11,12,13,15,21,22,23,27,28,29,31,39,40,41,43,47,48];
  const number = availablePhotos[Math.floor(Math.random()*availablePhotos.length)];
  return number
};

function randomPhotoPeople() {
  const availablePhotos = [];
  for (let i = 1; i <=88; i++) {
    availablePhotos.push(i);
  };
  const number = availablePhotos[Math.floor(Math.random()*availablePhotos.length)];
  return number
};

let cat = randomCategory();
let num;

if (cat = 'people') {
  num = randomPhotoPeople()
} else if (at = 'starships') {
  num = randomPhotoStarships()
} else {
  num = randomPhotoVehicles()
};

console.log(cat);
console.log(num);

const request = {
  "requests": [{
    "features": [{
      "type": "WEB_DETECTION",
      "maxResults": 3
    }],
    "image": {
      "source": {
        "imageUri": "gs://projekt-3/"+cat+"/"+num+".jpg"
      }
    }
  }]
};

console.log(request);

fetch("https://vision.googleapis.com/v1/images:annotate", {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json; charset=utf-8',
      'Authorization': 'Bearer ya29.c.KmOzB4EMiBrz9RHTvwwvZ4zH7lb5BvTWMwq8VD54trB35bAkNr_gO1dJEbEHq4xefhElTO93ov66MIaxGwAtR1raCHasi2qImfSd1nI3s6-RVmQIqN9O7m7QKuEmlv7poZ5Y8T8',
    },
    redirect: 'follow',
    cache: 'no-cache',
    body: JSON.stringify(request)
  }).then(resp => {
    console.log(resp);
    return resp.json()
  })
  .then(resp => {
    console.log(resp)
  });