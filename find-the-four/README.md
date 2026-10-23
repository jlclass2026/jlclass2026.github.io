# Find the Four

An original whole-class word-grouping game for Year 3. Open `index.html`, or serve this folder with any static web server. No build step, account, analytics, student names or backend. Only puzzle progress is stored in this browser.

## Play

Choose four tiles, explain their connection, then select **Check group**. Wrong guesses never end the game. A near miss says that three words belong together. Shuffle preserves your selection. Hints give a broad clue, then a stronger clue. Teacher reveal asks before showing one or all remaining groups, and revealed groups are labelled honestly. Everyone receives the same puzzle for the calendar date in Perth (UTC+8). The 20-board rotation begins with The Mischief Mix on 23 October 2026, changes at midnight Perth time, and repeats after 20 days. There is no puzzle picker, Next button, or URL-based puzzle selector. Reloading keeps the same date and board. Progress, selections, solved/revealed groups and completion are saved locally; no names are stored or transmitted. Finishing, including revealing all answers, shows “Come back tomorrow”. Restart today is available only while unfinished and cannot skip a date.

Keyboard: Tab to controls; Space/Enter selects a focused tile; arrow keys move among tiles; Home/End go to the first/last tile; Escape clears a selection or closes a dialog; Ctrl/Command+Enter checks a group. Full-screen is offered when supported. Reduced-motion preferences are respected.

The page checks midnight while open and rechecks when focused, shown or restored from browser history. Storage errors or corrupt records are handled without breaking play. If storage is blocked, the interface explains that progress cannot be saved. This is a simple static classroom activity, not an anti-tampering system: changing the device clock, clearing browser storage or inspecting the public source is outside its normal play controls. Other browsers/devices show the same daily board but do not share progress.

## Content and assets

The hand-authored puzzle bank mixes concrete warm-ups with compound words, familiar fictional worlds and meaning-linked word parts. Read unfamiliar vocabulary aloud. Welcome reasonable alternative explanations for the same four words. Challenge clues are for discussion, not timed assessment.

Character art is reused unchanged from the existing public classroom site's ScoreX assets: Beast of Polka Dots (`villains-37.webp`) and Midnight Rider (`villains-35.webp`) and randomly selected guest Lady Scorn (`villains-08.webp`). No existing classroom projects are modified.

## Tests

Run `node --test engine.test.js daily-review.test.js`. The pure engine covers puzzle validation, all solutions, selection limits, near misses, repeat guesses, unlimited retries, reset, shuffle and reveals. Independent tests also cover Perth date boundaries, month/year transitions, time-zone independence, local storage recovery, completion/reload, timer/focus rollover and removal of navigation controls. The UI is responsive to board and tablet dimensions; allow normal browser zoom for accessibility. The interface uses semantic buttons and a native modal dialog with live status messages.

