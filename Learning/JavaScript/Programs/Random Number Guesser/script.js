const numberInput = document.getElementById("userInput");
const guessButton = document.getElementById("guessButton");
const resetButton = document.getElementById("resetButton");
const resultDisplay = document.getElementById("result");

function generateRandomNumber(){
    return Math.floor(Math.random() * 100) + 1;
}

function checkGuess(randomNumber, guess){
    if(guess === randomNumber){
        return "correct";
    }
    else if (guess < randomNumber){
        return "low";
    }
    else{
        return "high";
    }
}

let randomNumber = generateRandomNumber();

guessButton.onclick = function() {
    let userGuess = Number(numberInput.value);
    
    let result = checkGuess(randomNumber, userGuess);

    switch(result){
        case "correct":
            resultDisplay.textContent = "Congratulations! You guessed the correct number!";
            break;
        case "low":
            resultDisplay.textContent = "Your guess is too low. Try again!";
            break;    
        case "high":
            resultDisplay.textContent = "Your guess is too high. Try again!";
            break; 
    }
}

resetButton.onclick = function(){
    randomNumber = generateRandomNumber();

    resultDisplay.textContent = "";
    numberInput.value = ""; 
}