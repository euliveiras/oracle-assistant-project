const textarea = document.querySelector(".text-transcription");
const SpeechRecognition = window.SpeechRecognition || webkitSpeechRecognition;
const SpeechRecognitionEvent = window.SpeechRecognitionEvent || webkitSpeechRecognitionEvent;
const recognition = new SpeechRecognition();

recognition.lang = "pt-BR";
recognition.continuous = true;

recognition.start();
recognition.onresult = (e) => {
    const keyword = e.results[e.results.length - 1][0].transcript;
    const pattern = /oráculo$/i;
    if (keyword.match(pattern)) {
        // do something
        textarea.textContent = `keyword: ${keyword} recognized`;
    } else {
        textarea.textContent = keyword;
    }
};
recognition.onnomatch = (event) => {
    textarea.textContent = "I didn't recognize that word.";
    console.log(event);
};
recognition.onerror = (event) => {
    console.log(event);
    textarea.textContent = `Error occurred in recognition: ${event.error}`;
};
