const btn = document.querySelector('.talk');
const content = document.querySelector('.content');

const greetings = ['I am good you little piece of love', 'Doing good homeboi', 'leave me alone', 'this is what you do when you could be doing serious work and get your life togethor and create somethign actually useful but know you lost direction of how you are and what you mean for the world, I hate you'];
const weather = ['weather is fine ', 'You need a tan', 'Why do you care? you never leave the house anyway']

const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
const recognition = new SpeechRecognition();

// when voice get activated
recognition.onstart = function() {
    console.log('voice is activated, you can speak to microphone')
}


// when we stop talking and the result is here 
recognition.onresult = function(event) {
    const current = event.resultIndex;
    const transcript = event.results[current][0].transcript;
    content.textContent = transcript;
    readOutLoud(transcript);
}



// add the linstener to the btn 
btn.addEventListener('click', () => {
    recognition.start();
})


// to make js talk back to us .. using SpeechSynthesisUtterance 
function readOutLoud(message) {
    const speech = new SpeechSynthesisUtterance();
    speech.text = 'I dont know what you said';
    if (message.includes('how are you')) {
        const finalText = greetings[Math.floor(Math.random() * greetings.length)];
        speech.text = finalText;
    }

    if (message.includes('how is the weather like')) {
        const finalText = weather[Math.floor(Math.random() * weather.length)];
        speech.text = finalText;
    }


    speech.volume = 1; // i is loudest 
    speech.rate = 1;
    speech.pitch = 1;


    // to attach it to the window to activate speak 
    window.speechSynthesis.speak(speech);


}