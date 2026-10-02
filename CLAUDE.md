# Number Guessing Game

## Project Overview

This project is a simple, single-player **Number Guessing Game**.

The goal of the game is for the player to correctly guess a randomly selected number between **1 and 100**. The player has a maximum of **5 attempts** to find the correct number.

The application should be simple, easy to understand, and easy to use.

The game is themed after the children's cartoon **Bluey** (Bluey blue and Bingo orange palette, Fredoka font, dog and paw emoji, Bluey-style phrases such as "Wackadoo!" and "mate!"). No official Bluey artwork is used because it is copyrighted.

## Tech Stack and Project Structure

Plain HTML, CSS and JavaScript. There is no build step, framework or dependencies. The only external resource is the Fredoka Google Font.

The app lives in `project/`:

- `project/index.html`: page structure
- `project/style.css`: Bluey theme
- `project/script.js`: game logic
- `project/README.md`: documentation entry point
- `project/docs/`: small, single-topic documentation files, linked from the README (for example `game-rules.md`, `popup-behavior.md`, `where-to-change.md`)

To run it, open `project/index.html` in a browser, or serve the `project/` folder with a static server (for example `python3 -m http.server 8000`).

Plans are saved in [`.claude/plans/`](.claude/plans/). The plan for the current build is [i-would-like-to-snug-candle.md](.claude/plans/i-would-like-to-snug-candle.md).

## How the Game Works

1. When a new game begins, a random number between **1 and 100** is selected. The number is always different from the previous game's number.
    
2. The player enters a number between **1 and 100** as their guess. Input that is not a whole number from 1 to 100 is rejected with a friendly message.
    
3. After each guess, the player should be told whether their guess was:
    
    - Too high
        
    - Too low
        
    - Correct
        
4. The player should always be able to see how many guesses they have remaining.
    
5. The player may make a maximum of **5 guesses**.
    
6. The player cannot submit the same number twice within a game. Repeated or invalid entries show a message and do **not** use up a guess.
    

## Winning and Losing

The player **wins** if they correctly guess the number before running out of attempts.

The player **loses** if they use all 5 attempts without guessing the correct number.

When the game ends:

- Display a pop-up telling the player whether they won or lost.
    
- If the player lost, let them know what the correct number was.
    
- When the player closes the pop-up, automatically start a new game. This applies however the pop-up is closed: the "Play again" button, the Esc key, or clicking outside the pop-up.
    

## Project Guidelines

When working on this project:

- Keep the application simple and beginner-friendly.
    
- Do not add features that were not requested.
    
- Keep the game focused on a single player.
    
- Make instructions and messages clear to someone using the game for the first time.
    
- Before making major changes to how the game works, explain the proposed change first.
    
- Use the project resources and instructions provided in this repository as guidance.
    
- Keep the documentation in `project/README.md` and `project/docs/` up to date when behavior, files or line references change. Keep each doc file focused on a single topic.

## Project Agents

Custom agents live in [`.claude/agents/`](.claude/agents/):

- [`project-mapper`](.claude/agents/project-mapper.md): read-only; scans the code and returns documentation text (it cannot write files, so the main session saves its output).
- [`qa-agent`](.claude/agents/qa-agent.md): uses the Playwright MCP server to test a hosted copy of the app against a list of features. Host the app first (for example `python3 -m http.server <port>` from `project/`) and give the agent the feature list.

## Project Skills (Commands)

Custom skills live in [`.claude/skills/`](.claude/skills/) and are run as slash commands:

- [`/save-project`](.claude/skills/save-project/SKILL.md): commits the current state with the Git CLI and pushes it to the attached GitHub repository, creating the repository with the GitHub MCP server if none is attached. Takes a commit message (required) and a repository name (optional).
- [`/grab-project`](.claude/skills/grab-project/SKILL.md): pulls the latest commit from GitHub onto this machine with the Git CLI, confirming a given URL with the GitHub MCP server first. Takes a GitHub HTTPS URL (optional, only when downloading a new project); with no URL it pulls from the existing remote.

## Documentation Links

- [README.md](README.md): documentation entry point, with a table linking every topic file in [docs/](docs/).
- [docs/where-to-change.md](docs/where-to-change.md): where to edit a number, message or style.
- [docs/game-rules.md](docs/game-rules.md) and [docs/popup-behavior.md](docs/popup-behavior.md): the rules and pop-up behavior described above.
