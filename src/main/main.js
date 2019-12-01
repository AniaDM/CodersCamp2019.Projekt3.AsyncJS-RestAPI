import {javaScriptObject} from "./samples/typeScriptSample";
import {test} from "./samples/javaScriptSample";
import {recognizePhoto} from "./api";
import {randomPersonTest} from "./samples/randomPersonTest";


console.log('Main');
console.log(javaScriptObject);
test();

recognizePhoto("people", 12)
    .then(recognized => console.log(recognized));


randomPersonTest().then();
