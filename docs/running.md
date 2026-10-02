# Running the Game

There is no build step, no framework and no dependencies.

- **Option A:** double-click `index.html` to open it in a browser.
- **Option B:** serve the folder with a static server, then visit the printed address. For example, run `python3 -m http.server 8000` from the project folder, then open http://localhost:8000.

The only external resource is the Fredoka Google Font (`index.html` line 10). If it fails to load, the page falls back to Trebuchet MS or the browser's sans-serif font.

Project files:
- `index.html` (39 lines)
- `style.css` (143 lines)
- `script.js` (114 lines)
