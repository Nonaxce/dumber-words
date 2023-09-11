let normalWordInput = document.querySelector('#text-input');
let stupidWordOutput = document.querySelector('#text-output');
// ENTER
let confirmButton = document.querySelector('#confirm-button');
// CLEAR TEXT BUTTON
let clearInputButton = document.querySelector('#clear-input-box-button');
let clearOutputButton = document.querySelector('#clear-output-box-button');
// COPY BUTTON
let copyOutputButton = document.querySelector('#copy-output-box-button');



// Clear All when refreshed or revisited
function clearAll() {
    stupidWordOutput.value = "";
    normalWordInput.value = "";
};


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
// Clear Button for the input text
clearInputButton.addEventListener('click', () => {
    normalWordInput.value = "";

});
// Clear Button for the output box
clearOutputButton.addEventListener('click', () => {
    stupidWordOutput.value = "";

});
// Copy Button for the output box
copyOutputButton.addEventListener('click', () => {
    
    let textToCopy = document.getElementById('text-output');
    textToCopy.select();
    textToCopy.setSelectionRange(0, 99999);
    // a
    navigator.clipboard.writeText(textToCopy.value);
    if (!textToCopy.value) {
        alert('You copied nothing!');
    } else {
        alert('Copied to clipboard!');
    }

});



// Function that randomizes the chances of ones char in string being capitalize
let outputword = "";
let control = "";
function stupifierOfWords(inputword) {

    outputword = "";
    // for loop with Math.random() 
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

// Variable naming is hard
