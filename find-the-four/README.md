# Find the Four

An original whole-class word-grouping game for Year 3. Open `index.html`, or serve this folder with any static web server. No build step, account, analytics, storage, student names or backend.

## Play

Choose four tiles, explain their connection, then select **Check group**. Wrong guesses never end the game. A near miss says that three words belong together. Shuffle preserves your selection. Hints give a broad clue, then a stronger clue. Teacher reveal asks before showing one or all remaining groups, and revealed groups are labelled honestly. The puzzle selector, Next puzzle and Reset puzzle start a fresh board; progress is deliberately not saved.

Keyboard: Tab to controls; Space/Enter selects a focused tile; arrow keys move among tiles; Home/End go to the first/last tile; Escape clears a selection or closes a dialog; Ctrl/Command+Enter checks a group. Full-screen is offered when supported. Reduced-motion preferences are respected.

## Content and assets

The hand-authored puzzle bank mixes concrete warm-ups with compound words, familiar fictional worlds and meaning-linked word parts. Read unfamiliar vocabulary aloud. Welcome reasonable alternative explanations for the same four words. Challenge clues are for discussion, not timed assessment.

Character art is reused unchanged from the existing public classroom site's ScoreX assets: Beast of Polka Dots (`villains-37.webp`) and Midnight Rider (`villains-35.webp`) and randomly selected guest Lady Scorn (`villains-08.webp`). No existing classroom projects are modified.

## Tests

Run `node --test engine.test.js`. The pure engine covers puzzle validation, all solutions, selection limits, near misses, repeat guesses, unlimited retries, reset, shuffle and reveals. The UI is responsive to board and tablet dimensions; allow normal browser zoom for accessibility. The interface uses semantic buttons and a native modal dialog with live status messages.
