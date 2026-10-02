# script.js: Behavior

| Lines | Item |
|---|---|
| 1 | `MAX_GUESSES = 5` |
| 3-11 | DOM lookups, one constant per element (`form`, `input`, `button`, `feedback`, `guessesLeftEl`, `dialog`, `resultTitle`, `resultMessage`, `closeButton`). |
| 13 | `REPEAT_DELAY_MS = 400`, used by both guards. |
| 15-19 | State: `secretNumber`, `guessesLeft`, `previousGuesses` (a Set), `lastGuessAt`, `dialogOpenedAt`. |
| 21-35 | `startGame()`: resets everything for a new round. |
| 37-49 | `endGame(won)`: disables the inputs, fills in and opens the pop-up. |
| 51-96 | Form `submit` handler: validation and guess logic. |
| 98-104 | `closeButton` click handler (with the 400ms guard). |
| 105-110 | Backdrop click handler on the dialog. |
| 112 | `dialog` `close` event calls `startGame`. |
| 114 | `startGame()` runs once on page load. |

Details of the logic: [game-rules.md](game-rules.md) and [popup-behavior.md](popup-behavior.md).
