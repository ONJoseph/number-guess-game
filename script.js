// Generate a random number between 1 and 100
const randomNumber = Math.floor(Math.random() * 100) + 1;

// Get elements from the DOM
const guessInput = document.getElementById('guessInput');
const guessSubmit = document.getElementById('guessSubmit');
const message = document.querySelector('.message');

// Initialize variables
let attempts = 0;
let guess;

function checkGuess() {
    guess = parseInt(guessInput.value);

    if (isNaN(guess) || guess < 1 || guess > 100) {
        message.textContent = 'Please enter a valid number between 1 and 100.';
        return;
    }

    attempts++;

    if (guess === randomNumber) {
        message.textContent = `Congratulations! You guessed the number ${randomNumber} in ${attempts} attempts.`;
        guessInput.disabled = true;
        guessSubmit.disabled = true;
    } else {
        const hint = guess < randomNumber ? 'higher' : 'lower';
        message.textContent = `Wrong guess. Try a ${hint} number.`;
    }

    guessInput.value = '';
    guessInput.focus();
}

// Event listener for the submit button
guessSubmit.addEventListener('click', checkGuess);

// Allow submitting the guess by pressing Enter
guessInput.addEventListener('keyup', function (event) {
    if (event.key === 'Enter') {
        checkGuess();
    }
});
