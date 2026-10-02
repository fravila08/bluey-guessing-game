# Where Do I Change X?

| To change... | Go to |
|---|---|
| Max number of guesses | `script.js` line 1 (`MAX_GUESSES`). Also update the hard-coded "5 tries" text at `index.html` line 18 and the initial `5` in the span at line 28 (it is overwritten at startup by `startGame`, but keep it consistent). |
| Number range (1-100) | `script.js`: the random formula in `startGame` (the `100` multiplier and the `+1`) and the `guess < 1 \|\| guess > 100` check at line 62, plus the error message just below it. Also `index.html` line 17 (text "1 to 100") and the `min`/`max` on the input at line 23. |
| Theme colors | `style.css` lines 1-7 (variables). See [theme-colors.md](theme-colors.md). |
| Font | `index.html` line 10 (the font link) and the `font-family` in the `body` rule of `style.css`. |
| Page title or heading | `index.html` line 6 (tab title) and line 15 (`<h1>`). |
| Instruction text | `index.html` lines 16-19. |
| Win / lose messages | `endGame()` in `script.js` (lines 37-49). The number is inserted via `${secretNumber}`. |
| Too high / too low / correct feedback | The submit handler in `script.js` (lines 51-96). |
| Invalid or duplicate input messages | The submit handler in `script.js`: the invalid message just after line 62 and the duplicate message at line 70. |
| Initial feedback text | `startGame()` in `script.js`. The matching `index.html` line 27 text is only shown briefly before the script runs. |
| 400ms guard timing | `script.js` line 13 (`REPEAT_DELAY_MS`). It affects both the guess-submit guard and the pop-up close guard. |
| Pop-up button label | `index.html` line 34. |
| Card size or look | `style.css` lines 25-34. |
| Pop-up look | `style.css` lines 114-143. |
| Disabled-button look | `style.css` lines 94-98. |

Per `../../CLAUDE.md`, explain any major change to how the game works before making it, and don't add unrequested features.
