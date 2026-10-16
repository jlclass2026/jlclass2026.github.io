# Who’s Nicked Jim?

A static, shared-screen, two-player Year 3 maths game. Open `index.html` through any static web server. No build step, account, analytics or persistence is used.

## Play

Each player privately hides Crazy Cat, Mad Moose, Bonkers Bear and Jim in four of ten hideouts. Opaque hand-off screens separate setup. Roll and move clockwise around a 32-space perimeter. Solve the landing space’s make-20 or double-double question to search one opposing hideout. Wrong answers show a worked strategy before the next turn.

The first to capture all four wins. In timed mode (5, 7 or 8 minutes), finish the current pair of turns for equal turn counts; most captures wins, and equal captures is a draw. Untimed play is also available. Help, pause, and leaving the visible tab pause the round clock. Paper, counters and teacher support are welcome.

Player tabs show only each player’s public notebook. Unsearched placements are not rendered during play. As a same-screen classroom game, secret setup relies on the other player looking away; it is not intended to protect against browser developer tools. No names or student data are requested, and reloading clears the game.

## Tests

Run `npm test` (Node.js). `engine.test.js` tests movement, maths, guarded phases, secret visibility, capture scores, timers and 128 deterministic simulated games. Browser QA should also cover private setup, keyboard answers, public tabs, restart, help/pause and narrow layouts.

The interface and mechanics were rebuilt from the verified original game brief; the original private Site was not modified. The two WebP art assets were created with OpenAI image generation for this game. All code and assets are local to this folder and require no third-party services.
