/*
@cat - people / starships / vehicles
 */
export function recognizePhoto(cat, num) {
    const request = {
        "requests": [{
            "features": [{
                "type": "WEB_DETECTION",
                "maxResults": 3
            }],
            "image": {
                "source": {
                    "imageUri": "gs://projekt_nr_3/" + cat + "/" + num + ".jpg"
                }
            }
        }]
    };

    return fetch("https://vision.googleapis.com/v1/images:annotate?key=AIzaSyAu5cv9vSquTVHFDuFRvbNX4FtN0TLwVrk", {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json; charset=utf-8'
        },
        redirect: 'follow',
        cache: 'no-cache',
        body: JSON.stringify(request)
    })
        .then(resp => resp.json())
        .then(resp => resp.responses[0].webDetection.webEntities[0].description)
}
