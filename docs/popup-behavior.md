# Pop-up Behavior

The win/lose pop-up is `<dialog id="result-dialog">`, opened by `endGame()` with `showModal()`.

## Ways to close it
- **Play again button** (script.js lines 98-104): ignored if less than 400ms have passed since the pop-up opened. This keeps a leftover Enter press from the final guess from dismissing the result before the player sees it. After 400ms it calls `dialog.close()`.
- **Backdrop click** (script.js lines 105-110): if the click's target is the dialog element itself (the dark area, not its contents), it closes. No 400ms guard.
- **Esc:** the browser closes the dialog natively. No guard.

## Restarting
In every case the browser fires the `close` event, and line 112 (`dialog.addEventListener("close", startGame)`) starts a new game automatically.

While the pop-up is open, the number input and Guess! button are disabled.

Related: [game-rules.md](game-rules.md).
