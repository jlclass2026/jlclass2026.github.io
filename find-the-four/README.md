# Find the Four

An original whole-class word and maths grouping game for Year 3. Use the **Words / Maths** toggle to choose the daily challenge. Open `index.html`, or serve this folder with any static web server. No build step, account, analytics, student names or backend. Only puzzle progress is stored in this browser.

## Play

Choose four tiles, explain their connection, then select **Check group**. In Words, group related words. In Maths, group four calculations with the same answer. There are exactly four different answers on each maths board; answer labels appear only after solving or using Teacher reveal. Wrong guesses never end the game. A near miss says that three words belong together. Shuffle preserves your selection. Hints give a broad clue, then a stronger clue. Teacher reveal asks before showing one or all remaining groups, and revealed groups are labelled honestly. Everyone receives the same puzzle in each mode for the calendar date in Perth (UTC+8). Words and Maths have separate progress and completion. Toggling never changes the day or unlocks another board. Your preferred mode is remembered in this browser. The 45-board word rotation begins with The Mischief Mix on 23 October 2026, changes at midnight Perth time, and repeats after 45 days. The original 20 word boards remain in their original order, followed by 25 new boards (100 additional groups of four). The separate maths bank has 50 boards and repeats after 50 days, using the same calendar anchor. Both roll over at midnight in Perth. There is no puzzle picker, Next button, or URL-based puzzle selector. Reloading keeps the same date and board. Progress, selections, solved/revealed groups and completion are saved locally; no names are stored or transmitted. Finishing, including revealing all answers, shows “Come back tomorrow”. Restart today is available only while unfinished and cannot skip a date.

Keyboard: Tab to controls; Space/Enter selects a focused tile; arrow keys move among tiles; Home/End go to the first/last tile; Escape clears a selection or closes a dialog; Ctrl/Command+Enter checks a group. Full-screen is offered when supported. Reduced-motion preferences are respected.

If browser storage is blocked, progress survives mode switches while the page remains open, but cannot survive reload. The page checks midnight while open and rechecks when focused, shown or restored from browser history. Storage errors or corrupt records are handled without breaking play. If storage is blocked, the interface explains that progress cannot be saved. This is a simple static classroom activity, not an anti-tampering system: changing the device clock, clearing browser storage or inspecting the public source is outside its normal play controls. Other browsers/devices show the same daily board but do not share progress.

## Content and assets

The hand-authored puzzle bank mixes concrete warm-ups with compound words, familiar fictional worlds and meaning-linked word parts. Read unfamiliar vocabulary aloud. Welcome reasonable alternative explanations for the same four words. Challenge clues are for discussion, not timed assessment.

The fixed maths bank contains 800 single-operation expression tiles in 200 groups. Each board mixes addition, subtraction, multiplication and exact division. Answers range from 10 to 60, operands from 2 to 120. Divisions use only 2, 4, 5 or 10, with dividends no larger than 100. Every group includes addition and subtraction so operation signs do not give away the groups. Times tables use factors 2–10; some division and higher times-table facts are extension discussion for Year 3. No fractions, negative answers, ambiguous operation order, timer or lost lives.

The new word boards pair comparable kinds of tiles across all four groups: compound partners, different senses of familiar words, synonyms and meaning-linked word parts. None uses isolated months, numerical symbols or specialist vocabulary as an easy visual giveaway. Word connections are reviewed for precise meanings and competing matches; reasonable creative alternatives can still be discussed because language is not an exact arithmetic system.

Character art is reused unchanged from the existing public classroom site's ScoreX assets: Beast of Polka Dots (`villains-37.webp`) and Midnight Rider (`villains-35.webp`) and randomly selected guest Lady Scorn (`villains-08.webp`). No existing classroom projects are modified.

## Tests

Run `node --test *.test.js`. The maths checks independently evaluate every expression, verify 16 distinct tiles per board, and exhaust all 91,000 four-tile subsets to rule out alternative same-answer groups. Mode tests exercise all 50 maths days, separate progress, reloads, completion, blocked storage, repeated switches, hints, restart, cross-tab completion and midnight rollover. The pure engine covers puzzle validation, all solutions, selection limits, near misses, repeat guesses, unlimited retries, reset, shuffle and reveals. Independent tests also cover Perth date boundaries, month/year transitions, time-zone independence, local storage recovery, completion/reload, timer/focus rollover and removal of navigation controls. The UI is responsive to board and tablet dimensions; allow normal browser zoom for accessibility. The interface uses semantic buttons and a native modal dialog with live status messages.



## Immersive setting and celebrations

The whole board sits in an original night-forest SVG setting. The three existing transparent boss cutouts live in the scene rather than separate side panels. On each newly correct group only, a shuffled rotation of Octoboom, Dark Energy, Dr Shivers and Yeti Spaghetti rises from the bottom for one second. Wrong guesses, hints and teacher reveals do not trigger it. The effect never captures clicks or focus; mode changes, restarts, midnight and hiding the page clear it. Reduced-motion mode shows a brief static cameo instead of the moving entrance. All four guests use existing public ScoreX images without altering them.
