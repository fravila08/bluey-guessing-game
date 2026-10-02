# Theme Colors

Defined as CSS variables in `style.css` lines 1-7 (`:root`).

| Variable | Value | Used for |
|---|---|---|
| `--bluey-blue` | `#2563a8` | Title, card border, input border, guesses-left text, dialog title, dialog button. |
| `--sky` | `#cfe8fb` | Page background. |
| `--bingo-orange` | `#b45309` | Card shadow, main button, dialog border. |
| `--cream` | `#fff6dc` | Card and dialog background. |
| `--ink` | `#23364d` | Body text and focus outline. |

Not set by a variable:
- input background (`#fff`)
- button text color (`#fff`)
- backdrop color (`rgba(35, 54, 77, 0.55)`)

These are set directly in the input, button and `dialog::backdrop` rules.
