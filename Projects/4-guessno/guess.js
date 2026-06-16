let random_no = parseInt(Math.random() * 100 + 1);

const submit = document.getElementById('subt');
const userInput = document.getElementById('guessField');
const guessSlot = document.querySelector('.guesses');
const remaining = document.querySelector('.lastResult');
const lowOrHi = document.querySelector('.lowOrHi');
const startOver = document.querySelector('.resultParas');

const p = document.createElement('p');

let prevGuess = [];
let numGuess = 1;
let playGame = true;

// Event Listener
submit.addEventListener('click', function (e) {
    e.preventDefault();

    if (!playGame) return;

    const guess = parseInt(userInput.value);
    validateGuess(guess);
});

// Validate Guess
function validateGuess(guess) {
    if (isNaN(guess)) {
        alert('Please enter a valid number');
        return;
    }

    if (guess < 1) {
        alert('Please enter a number greater than 0');
        return;
    }

    if (guess > 100) {
        alert('Please enter a number less than or equal to 100');
        return;
    }

    prevGuess.push(guess);

    if (numGuess >= 10) {
        displayGuess(guess);
        displayMessage(`Game Over! Random number was ${random_no}`);
        endGame();
    } else {
        displayGuess(guess);
        checkGuess(guess);
    }
}

// Check Guess
function checkGuess(guess) {
    if (guess === random_no) {
        displayMessage('Congratulations! You guessed correctly.');
        endGame();
    } else if (guess < random_no) {
        displayMessage('Number is too low');
    } else {
        displayMessage('Number is too high');
    }
}

// Display Guess
function displayGuess(guess) {
    userInput.value = '';
    guessSlot.innerHTML += `${guess} `;
    numGuess++;
    remaining.innerHTML = `${11 - numGuess}`;
}

// Display Message
function displayMessage(message) {
    lowOrHi.innerHTML = `<h2>${message}</h2>`;
}

// End Game
function endGame() {
    userInput.value = '';
    userInput.setAttribute('disabled', '');

    p.classList.add('button');
    p.innerHTML = `<h2 id="newGame">Start New Game</h2>`;

    startOver.appendChild(p);

    playGame = false;

    newGame();
}

// New Game
function newGame() {
    const newGameButton = document.getElementById('newGame');

    newGameButton.addEventListener('click', function () {
        random_no = parseInt(Math.random() * 100 + 1);

        prevGuess = [];
        numGuess = 1;

        guessSlot.innerHTML = '';
        remaining.innerHTML = '10';
        lowOrHi.innerHTML = '';

        userInput.removeAttribute('disabled');
        userInput.value = '';

        startOver.removeChild(p);

        playGame = true;
    });
}