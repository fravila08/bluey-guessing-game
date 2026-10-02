const MAX_GUESSES = 5;

const form = document.getElementById("guess-form");
const input = document.getElementById("guess-input");
const button = document.getElementById("guess-button");
const feedback = document.getElementById("feedback");
const guessesLeftEl = document.getElementById("guesses-left");
const dialog = document.getElementById("result-dialog");
const resultTitle = document.getElementById("result-title");
const resultMessage = document.getElementById("result-message");
const closeButton = document.getElementById("close-dialog");

const REPEAT_DELAY_MS = 400;

let secretNumber;
let guessesLeft;
let previousGuesses = new Set();
let lastGuessAt = 0;
let dialogOpenedAt = 0;

function startGame() {
  // Always pick a different number from the one in the game that just ended.
  const previousSecret = secretNumber;
  do {
    secretNumber = Math.floor(Math.random() * 100) + 1;
  } while (secretNumber === previousSecret);
  previousGuesses = new Set();
  guessesLeft = MAX_GUESSES;
  guessesLeftEl.textContent = guessesLeft;
  feedback.textContent = "Type a number and press Guess!";
  input.value = "";
  input.disabled = false;
  button.disabled = false;
  input.focus();
}

function endGame(won) {
  input.disabled = true;
  button.disabled = true;
  if (won) {
    resultTitle.textContent = "🎉 You won!";
    resultMessage.textContent = "Wackadoo! You guessed my number!";
  } else {
    resultTitle.textContent = "😢 You lost";
    resultMessage.textContent = `Oh no, you're out of guesses! The number was ${secretNumber}.`;
  }
  dialogOpenedAt = Date.now();
  dialog.showModal();
}

form.addEventListener("submit", (event) => {
  event.preventDefault();
  const text = input.value.trim();
  const guess = Number(text);

  // A double-click or double-Enter would otherwise submit the emptied box and
  // overwrite the result of the guess that was just counted.
  if (Date.now() - lastGuessAt < REPEAT_DELAY_MS) {
    return;
  }

  if (!/^\d+$/.test(text) || guess < 1 || guess > 100) {
    feedback.textContent = "Please enter a whole number from 1 to 100.";
    input.focus();
    input.select();
    return;
  }

  if (previousGuesses.has(guess)) {
    feedback.textContent = `You already tried ${guess}. Pick a different number!`;
    input.focus();
    input.select();
    return;
  }

  previousGuesses.add(guess);
  lastGuessAt = Date.now();
  guessesLeft--;
  guessesLeftEl.textContent = guessesLeft;

  if (guess === secretNumber) {
    feedback.textContent = `${guess} is correct!`;
    endGame(true);
    return;
  }

  feedback.textContent = guess > secretNumber
    ? `${guess} is too high, mate!`
    : `${guess} is too low, mate!`;
  input.value = "";
  input.focus();

  if (guessesLeft === 0) {
    endGame(false);
  }
});

closeButton.addEventListener("click", () => {
  // Ignore a leftover Enter press from the final guess so the result is seen.
  if (Date.now() - dialogOpenedAt < REPEAT_DELAY_MS) {
    return;
  }
  dialog.close();
});
// Clicking the dark area outside the pop-up closes it too.
dialog.addEventListener("click", (event) => {
  if (event.target === dialog) {
    dialog.close();
  }
});
// Fires for the button, Esc, or any other way of closing the pop-up.
dialog.addEventListener("close", startGame);

startGame();
