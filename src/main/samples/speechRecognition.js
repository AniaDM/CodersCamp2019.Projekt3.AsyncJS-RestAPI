window.SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;

const recognition = new SpeechRecognition();
recognition.interimResults=true;

recognition.addEventListener('result', e=>{

    const transcript = Array.from(e.results).map(result=>result[0]).map(result=>result.transcript).join('').toLowerCase();

                if (transcript == /*CORRECT ANSWER*/ ){
                 /////////////CORRECT ANSWER+1
                }

    
});

recognition.addEventListener('end',recognition.start);

recognition.start();