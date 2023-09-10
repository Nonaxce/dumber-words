let normalWordInput = document.querySelector('#text-input');
let stupidWordOutput = document.querySelector('#text-output');
let confirmButton = document.querySelector('#confirm-button');
let clearInputButton = document.querySelector('#clear-input-box-button');
let clearOutputButton = document.querySelector('#clear-output-box-button');

// Confirm Button
let normalWord = "";
confirmButton.addEventListener('click', () => {
    stupidWordOutput.innerHTML = "";
    if (normalWordInput.value) {
        normalWord = normalWordInput.value;
        stupidWord = stupifierOfWords(normalWord);
        outputword = stupidWord
        console.log(stupidWord);
        stupidWordOutput.value = stupidWord;
    } else {
        stupidWordOutput.value = "";
    }
    
});

clearInputButton.addEventListener('click', () => {
    normalWordInput.value = "";

});
clearOutputButton.addEventListener('click', () => {
    stupidWordOutput.value = "";

});


// Function that randomizes the chances of ones char in string being capitalize
let outputword = "";
let control = "";
function stupifierOfWords(inputword) {

    outputword = "";
    // Nested for loop with Math.random() 
    for(char1 = 0; char1 < inputword.length; char1++) {
        for(char2 = 0; char2 < inputword.length; char2++) {
            control = Math.random()
            if (control < 0.5) {
                outputword += inputword[char2].toLowerCase();
            } else {
                outputword += inputword[char2].toUpperCase();
            }
        }
        return outputword;
    }
    
}

// Variable naming is hard