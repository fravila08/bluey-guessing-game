# index.html: Page Structure

What is on the page, and where.

| Lines | What |
|---|---|
| 6 | Page title. |
| 7 | Paw-print emoji favicon, embedded as an SVG data URL. |
| 8-10 | Google Fonts (Fredoka). |
| 11 | Links `style.css`. |
| 14-29 | `<main class="card">`: the visible game card. |
| 15 | `<h1>` title. |
| 16-19 | `.instructions` text. "1 to 100" and "5 tries" are hard-coded here. |
| 21-25 | `<form id="guess-form" novalidate>` containing `#guess-input` (number input, min 1, max 100, step 1) and `#guess-button` (submit button, "Guess!"). |
| 27 | `<p id="feedback" aria-live="polite">`: the message area. |
| 28 | `Guesses left: <span id="guesses-left">5</span>`. |
| 31-35 | `<dialog id="result-dialog">`, the win/lose pop-up. It holds `#result-title` (h2), `#result-message` (p) and `#close-dialog` (button, "Play again"). |
| 37 | Loads `script.js`. It sits at the end of `<body>` so all elements exist when the script runs. |

`novalidate` on the form turns off the browser's built-in validation bubbles, so the script's own messages are shown instead.

Related: [how-it-connects.md](how-it-connects.md) lists the ids the script depends on.
