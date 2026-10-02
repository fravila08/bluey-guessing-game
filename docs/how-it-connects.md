# How the Pieces Connect

- **HTML to JS:** `script.js` finds elements by id. Renaming any of these in the HTML breaks the game:
  - `guess-form`, `guess-input`, `guess-button`
  - `feedback`, `guesses-left`
  - `result-dialog`, `result-title`, `result-message`, `close-dialog`
- **JS to page:** the script changes the page only by:
  - setting `.textContent` (feedback, guesses left, dialog title and message)
  - toggling `.disabled` on the input and button
  - clearing `input.value`
  - calling `dialog.showModal()` and `dialog.close()`
- **Dialog close restarts the game:** `script.js` line 112 registers `dialog.addEventListener("close", startGame)`. No code calls `startGame` directly except line 114, on page load. See [popup-behavior.md](popup-behavior.md).
- **CSS to HTML:** the CSS selects by tag and class, not by id. See [css-styling.md](css-styling.md).
