# Bluey-Themed Number Guessing Game

## Context
Build the single-player number guessing game described in `CLAUDE.md` (guess 1–100, 5 attempts, too high/low/correct feedback, always-visible guesses remaining, win/lose pop-up that reveals the number on a loss, auto-restart when the pop-up closes), themed after the cartoon "Bluey". Nothing may be added beyond what was requested. The user chose plain HTML/CSS/JS and a theme made of colors, fonts and wording, with no official artwork.

## Files (new, in /Users/franciscoavila/Desktop/tic-tac-toe/trial-1)
- `index.html`: page structure
- `style.css`: Bluey theme
- `script.js`: game logic

## Design
**index.html**
- Title, short first-time instructions ("I'm thinking of a number from 1 to 100. You have 5 guesses!").
- Number input (min 1, max 100) and a "Guess!" button. Enter submits.
- Feedback message area, and a "Guesses left: N" display.
- Modal dialog (`<dialog>` or overlay) with a result message and a single close button.

**script.js**
- `startGame()`: secret = random int 1–100, guessesLeft = 5, clear input and feedback.
- `handleGuess()`: validate that the input is a whole number from 1 to 100, otherwise show a friendly error that doesn't use up a guess. Decrement guessesLeft. Show "Too high", "Too low" or "Correct".
- Win if the guess equals the secret. Lose if guessesLeft hits 0 without a win. Either one opens the pop-up. On a loss it also reveals the number.
- Closing the pop-up calls `startGame()`. This includes Esc or clicking outside, so a new game always starts.
- The input is disabled while the pop-up is open.

**style.css**
- Palette: Bluey blue (#4A90D9 / light sky blue), Bingo orange (#F2994A), cream/yellow background.
- Rounded playful font via Google Fonts (e.g. "Fredoka"), with a system font fallback.
- Big rounded card, paw-print and dog emoji (🐕🐾), Bluey-style phrases in messages ("Wackadoo! You got it!", "Too high, mate!", "Too low, mate!"), kept clear for first-timers.
- Responsive for phone width.

## Verification
1. Open `index.html` in a browser (via Playwright MCP / the `qa-agent` if desired).
2. Check that:
   - a wrong low guess gives "too low" and a high guess gives "too high";
   - the guesses-left counter decrements from 5 to 0;
   - invalid input (0, 101, blank, decimals) is rejected without using a guess;
   - a correct guess opens the win pop-up;
   - five misses open the lose pop-up showing the correct number;
   - closing the pop-up resets guesses to 5 and picks a new number.
3. Check the layout at desktop and mobile widths.
