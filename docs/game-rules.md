# Game Flow and Rules (as implemented)

Rules originate in `../../CLAUDE.md`. This describes what the code actually does.

## Start: `startGame()` (script.js lines 21-35)
1. The new secret is `Math.floor(Math.random()*100)+1`. It is re-rolled in a `do...while` loop until it differs from the previous game's secret. On the very first game `secretNumber` is undefined, so any number is accepted.
2. It clears the guess history and sets `guessesLeft` to 5.
3. It resets the displayed count and the feedback text ("Type a number and press Guess!"), clears the input, re-enables the input and button, and focuses the input.

## Each guess: submit handler (script.js lines 51-96)
The checks run in this order:
1. `preventDefault()` stops the page from reloading.
2. **400ms repeat-submit guard:** if the last *counted* guess was under 400ms ago, the submit is silently ignored. This stops a double-click or double-Enter from submitting the emptied box and overwriting the result message. `lastGuessAt` is updated only when a guess is counted.
3. **Invalid input:** the text must match `^\d+$` (digits only, so no decimals, negatives, `e` notation or empty box) and be between 1 and 100. Otherwise the feedback reads "Please enter a whole number from 1 to 100." and the input is refocused and selected. No attempt is used.
4. **Duplicate guess:** if the number is already in `previousGuesses`, the feedback reads "You already tried N. Pick a different number!". No attempt is used and the input is selected.
5. **Counted guess:** the number is added to the history, the 400ms timestamp is set and `guessesLeft` drops by 1. The display updates.
6. **Correct:** the feedback reads "N is correct!" and `endGame(true)` runs.
7. **Wrong:** the feedback reads "N is too high, mate!" or "N is too low, mate!". The input is cleared and refocused.
8. **Out of guesses:** if `guessesLeft === 0`, `endGame(false)` runs.

## End: `endGame(won)` (script.js lines 37-49)
- The input and button are disabled.
- Win: title "🎉 You won!", message "Wackadoo! You guessed my number!".
- Loss: title "😢 You lost", message "Oh no, you're out of guesses! The number was {secret}."
- `dialogOpenedAt` is recorded and the modal opens with `showModal()`.

## Notes
- Duplicate and invalid entries never cost a guess.
- The winning guess also decrements the counter, so the display shows the remaining count after that guess.
- There is no score, history list, difficulty setting or persistence. Everything resets on page reload.
