generateBtn = document.getElementById('generateBtn');
result = document.getElementById('result');

let max = 100;
let min = 1;

generateBtn.onclick = function(){
    randomNum = Math.floor(Math.random() * max) + min;
    result.textContent = `Random Number: ${randomNum}`;
}