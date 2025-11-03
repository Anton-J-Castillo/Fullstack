const words = {
    animals: ['elephant', 'giraffe', 'penguin', 'dolphin', 'kangaroo', 'cheetah', 'octopus'],
    fruits: ['banana', 'strawberry', 'pineapple', 'watermelon', 'blueberry', 'raspberry'],
    countries: ['australia', 'brazil', 'canada', 'france', 'japan', 'mexico', 'spain'],
    games: ['chess', 'monopoly', 'scrabble', 'poker', 'checkers', 'clue'],
    sports: ['soccer', 'basketball', 'cricket', 'tennis', 'baseball', 'hockey'],
    superheroes: ['superman', 'batman', 'spiderman', 'wonderwoman', 'ironman', 'hulk'],
    "car brands": ['toyota', 'ford', 'chevrolet', 'honda', 'bmw', 'mercedes'],
    "video games": ['minecraft', 'fortnite', 'overwatch', 'tetris', 'doom', 'zelda'],
    "roblox games": ['adoptme', 'brookhaven', 'jailbreak', 'murdermystery', 'meepcity', 'royalhigh'],
    stores: ['walmart', 'target', 'costco', 'ikea', 'sears', 'bestbuy'], 
    "long words": ['Pneumonoultramicroscopicsilicovolcanoconiosis ', 'Hippopotomonstrosesquipedaliophobia', 'Supercalifragilisticexpialidocious', 'Pseudopseudohypoparathyroidism'],
};

const hangmanStages = [
    `
+---+
|   |
|
|
|
|
=========`,
    `
+---+
|   |
O   |
|
|
|
=========`,
    `
+---+
|   |
O   |
|   |
|
|
=========`,
    `
+---+
|   |
O   |
/|   |
|
|
=========`,
    `
+---+
|   |
O   |
/|\\  |
|
|
=========`,
    `
+---+
|   |
O   |
/|\\  |
/    |
|
=========`,
    `
+---+
|   |
O   |
/|\\  |
/ \\  |
|
=========`
];

let currentWord = '';
let currentCategory = '';
let guessedLetters = [];
let wrongGuesses = 0;
let gameOver = false;

const wordDisplay = document.getElementById('word-display');
const keyboard = document.getElementById('keyboard');
const hangmanDrawing = document.getElementById('hangman-drawing');
const messageEl = document.getElementById('message');
const wrongCountEl = document.getElementById('wrong-count');
const categoryEl = document.getElementById('category');
const newGameBtn = document.getElementById('new-game-btn');

function initGame() {
    const categories = Object.keys(words);
    currentCategory = categories[Math.floor(Math.random() * categories.length)];
    const categoryWords = words[currentCategory];
    currentWord = categoryWords[Math.floor(Math.random() * categoryWords.length)].toLowerCase();
    
    guessedLetters = [];
    wrongGuesses = 0;
    gameOver = false;
    
    categoryEl.textContent = currentCategory.charAt(0).toUpperCase() + currentCategory.slice(1);
    wrongCountEl.textContent = wrongGuesses;
    messageEl.textContent = '';
    messageEl.className = '';
    
    createKeyboard();
    updateDisplay();
    updateHangman();
}

function createKeyboard() {
    keyboard.innerHTML = '';
    for (let i = 65; i <= 90; i++) {
        const letter = String.fromCharCode(i).toLowerCase();
        const key = document.createElement('button');
        key.textContent = letter.toUpperCase();
        key.className = 'key';
        key.addEventListener('click', () => guessLetter(letter, key));
        keyboard.appendChild(key);
    }
}

function guessLetter(letter, keyButton) {
    if (gameOver || guessedLetters.includes(letter)) return;
    
    guessedLetters.push(letter);
    keyButton.disabled = true;
    
    if (currentWord.includes(letter)) {
        updateDisplay();
        checkWin();
    } else {
        wrongGuesses++;
        wrongCountEl.textContent = wrongGuesses;
        updateHangman();
        checkLose();
    }
}

function updateDisplay() {
    let display = '';
    for (let letter of currentWord) {
        if (guessedLetters.includes(letter)) {
            display += letter + ' ';
        } else {
            display += '_ ';
        }
    }
    wordDisplay.textContent = display.trim();
}

function updateHangman() {
    hangmanDrawing.textContent = hangmanStages[wrongGuesses];
}

function checkWin() {
    const won = currentWord.split('').every(letter => guessedLetters.includes(letter));
    if (won) {
        gameOver = true;
        messageEl.textContent = '🎉 You Won! Congratulations!';
        messageEl.className = 'win';
        disableAllKeys();
    }
}

function checkLose() {
    if (wrongGuesses >= 6) {
        gameOver = true;
        messageEl.textContent = `💀 Game Over! The word was: ${currentWord.toUpperCase()}`;
        messageEl.className = 'lose';
        wordDisplay.textContent = currentWord.toUpperCase();
        disableAllKeys();
    }
}

function disableAllKeys() {
    const keys = document.querySelectorAll('.key');
    keys.forEach(key => key.disabled = true);
}

newGameBtn.addEventListener('click', initGame);

initGame();