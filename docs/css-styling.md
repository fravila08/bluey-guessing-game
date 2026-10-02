# style.css: The Look

| Lines | Section |
|---|---|
| 1-7 | `:root` theme variables (see [theme-colors.md](theme-colors.md)). |
| 9-11 | `box-sizing: border-box` reset. |
| 13-23 | `body`: centers the card, Fredoka font, sky-blue background. |
| 25-34 | `.card`: cream box, blue border, orange drop shadow, max width 440px. |
| 36-46 | `h1` (responsive size via `clamp`) and `.instructions`. |
| 48-59 | `form` (flex layout) and `label`. |
| 61-70 | `input`: 120px wide, large centered text. |
| 72-98 | `button` styles, plus focus-visible outline, hover brightness, and `:disabled` look (50% opacity). |
| 100-112 | `.feedback` (reserves 2.4em of height so the layout doesn't jump) and `.guesses-left`. |
| 114-143 | `dialog`, `dialog::backdrop` (dark translucent overlay), `dialog h2`, `dialog p` and `dialog button` (blue instead of orange). |

The CSS selects elements by tag and class (`.card`, `.feedback`, `.guesses-left`, `.instructions`, `dialog`). It does not use the element ids.
