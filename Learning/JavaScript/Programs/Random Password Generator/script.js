const passwordLength = document.getElementById("passwordLength");
const includeLowercase = document.getElementById("includeLowercase");
const includeUppercase = document.getElementById("includeUppercase");
const includeNumbers = document.getElementById("includeNumbers");
const includeSymbols = document.getElementById("includeSymbols");
const generateButton = document.getElementById("generate");

function generatePassword(length, lowercase, uppercase, numbers, symbols){
    const lowercaseChars = "abcdefghijklmnopqrstuvwxyz";
    const uppercaseChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const numberChars = "1234567890";
    const symbolChars = "!@#$%^&*()_+-=";

    let allowedChars = "";
    let password = "";

    allowedChars += lowercase ? lowercaseChars : "";
    allowedChars += uppercase ? uppercaseChars : "";
    allowedChars += numbers ? numberChars : "";
    allowedChars += symbols ? symbolChars : "";

    if (length <= 0){
        return "password length must be atleast 1";
    }

    if(allowedChars.length === 0){
        return "At least 1 set of character needs to be selected";
    }

    for(let i = 0; i < length; i++){
        let randomIndex = Math.floor(Math.random() * allowedChars.length);
        password += allowedChars[randomIndex];
    }

    return password;
}

generateButton.onclick = function(){
    let length = Number(passwordLength.value);
    let lowercase = includeLowercase.checked ? true : false;
    let uppercase = includeUppercase.checked ? true : false;
    let numbers = includeNumbers.checked ? true : false;
    let symbols = includeSymbols.checked ? true : false;

    password = generatePassword(length, lowercase, uppercase, numbers, symbols);

    result.textContent = password;

}