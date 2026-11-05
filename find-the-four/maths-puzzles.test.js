'use strict';
const assert = require('node:assert/strict');
const fs = require('node:fs');
const path = require('node:path');
const vm = require('node:vm');
const puzzles = require('./maths-puzzles.js');
const engine = require('./engine.js');

// Independent of the data generator and game engine. Never uses eval/Function.
// A single binary operation is the only permitted grammar, so precedence cannot
// change an answer. Exact, positive integer results are required.
function evaluate(expression) {
  assert.equal(typeof expression, 'string');
  const match = /^([1-9]\d{0,2}) ([+−×÷]) ([1-9]\d{0,2})$/.exec(expression);
  assert.ok(match, `Invalid or ambiguous expression: ${expression}`);
  const a = Number(match[1]), b = Number(match[3]), operator = match[2];
  assert.ok(a >= 2 && a <= 120 && b >= 2 && b <= 120, expression);
  let result;
  switch (operator) {
    case '+': result = a + b; break;
    case '−': result = a - b; break;
    case '×':
      assert.ok(a <= 10 && b <= 10, `Outside times-table range: ${expression}`);
      result = a * b; break;
    case '÷':
      assert.ok([2, 4, 5, 10].includes(b), `Divisor outside classroom range: ${expression}`);
      assert.ok(a <= 100, `Division dividend exceeds 100: ${expression}`);
      assert.equal(a % b, 0, `Division is not exact: ${expression}`);
      result = a / b; break;
    default: assert.fail('Unknown operation');
  }
  assert.ok(Number.isInteger(result) && result > 1, expression);
  return result;
}
for (const bad of ['2+3', '1 + 9', '0 + 9', '5 / 2', '5 ÷ 2', '120 ÷ 10', '66 ÷ 3', '96 ÷ 8', '3 − 8', '2 + 3 × 4', '10 × 11', '(2 + 3)', '121 − 100', '2 + 3; process.exit()']) {
  assert.throws(() => evaluate(bad), undefined, `Evaluator accepted ${bad}`);
}
assert.equal(evaluate('8 × 7'), 56);
assert.equal(evaluate('100 ÷ 10'), 10);
assert.equal(evaluate('96 ÷ 4'), 24);
assert.equal(evaluate('45 − 12'), 33);
assert.equal(evaluate('13 + 22'), 35);

assert.equal(puzzles.length, 50);
assert.equal(new Set(puzzles.map(p => p.id)).size, 50);
const globalTiles = new Set();
const operationTotals = {'+': 0, '−': 0, '×': 0, '÷': 0};
let groupCount = 0, tileCount = 0;
const signature = tiles => [...tiles].sort().join('|');
for (const [i, puzzle] of puzzles.entries()) {
  assert.equal(puzzle.id, `maths-${String(i + 1).padStart(2, '0')}`);
  assert.equal(typeof puzzle.title, 'string');
  assert.ok(puzzle.title.length <= 40);
  assert.equal(puzzle.difficulty, 'Year 3');
  assert.equal(engine.validatePuzzle(puzzle), true);
  assert.equal(puzzle.groups.length, 4);
  assert.equal(new Set(puzzle.groups.map(g => g.answer)).size, 4);
  const tiles = puzzle.groups.flatMap(g => g.words);
  assert.equal(tiles.length, 16);
  assert.equal(new Set(tiles).size, 16);
  const boardOperations = {'+': 0, '−': 0, '×': 0, '÷': 0};
  for (const group of puzzle.groups) {
    groupCount++;
    assert.equal(typeof group.answer, 'number');
    assert.ok(Number.isInteger(group.answer) && group.answer >= 10 && group.answer <= 60);
    assert.equal(group.label, `Equals ${group.answer}`);
    assert.equal(group.words.length, 4);
    for (const key of ['hint', 'easierHint', 'explanation']) {
      assert.equal(typeof group[key], 'string');
      assert.ok(group[key].length > 15 && group[key].length <= 240);
    }
    assert.ok(!/\d/.test(group.hint), 'Broad hint must not reveal the number');
    assert.ok(group.hint.includes(group.answer % 2 ? 'odd' : 'even'));
    assert.ok(group.words.some(word => group.easierHint.includes(word)));
    const operations = new Set();
    for (const tile of group.words) {
      assert.ok(tile.length <= 9, `Tile too long: ${tile}`);
      assert.equal(evaluate(tile), group.answer, `${puzzle.id}: ${tile}`);
      tileCount++;
      assert.ok(!globalTiles.has(tile) || tile.includes('÷'), `Only division may repeat across boards: ${tile}`);
      globalTiles.add(tile);
      const operator = tile.split(' ')[1];
      operations.add(operator); boardOperations[operator]++; operationTotals[operator]++;
      assert.ok(group.explanation.includes(`${tile} = ${group.answer}`));
    }
    assert.ok(operations.has('+') && operations.has('−'), 'Every group must mix operations');
  }
  assert.equal(boardOperations['×'], 1);
  assert.equal(boardOperations['÷'], 2);
  // Exhaust every 4-tile subset (1,820 per board). Only the four authored
  // groups can have one common arithmetic value, so no alternative arithmetic
  // partition exists. This is stronger than merely checking the authored groups.
  const validSubsets = [];
  for (let a = 0; a < 13; a++) for (let b = a + 1; b < 14; b++)
    for (let c = b + 1; c < 15; c++) for (let d = c + 1; d < 16; d++) {
      const subset = [tiles[a], tiles[b], tiles[c], tiles[d]];
      if (new Set(subset.map(evaluate)).size === 1) validSubsets.push(signature(subset));
    }
  assert.deepEqual(validSubsets.sort(), puzzle.groups.map(g => signature(g.words)).sort());
  const state = engine.create(puzzle, () => 0.4);
  for (const [groupIndex, group] of puzzle.groups.entries()) {
    group.words.forEach(tile => engine.toggle(state, tile));
    assert.equal(engine.submit(state).type, groupIndex === 3 ? 'complete' : 'correct');
  }
  assert.equal(state.solved.length, 4);
  assert.equal(state.order.length, 0);
}
assert.equal(groupCount, 200);
assert.equal(tileCount, 800);
const browser = {};
vm.runInNewContext(fs.readFileSync(path.join(__dirname, 'maths-puzzles.js'), 'utf8'), browser);
assert.equal(JSON.stringify(browser.FOUR_MATHS_PUZZLES), JSON.stringify(puzzles));
console.log(`PASS: 50 boards, ${groupCount} groups, ${tileCount} calculation tiles (${globalTiles.size} distinct expressions).`);
console.log('PASS: 91,000 four-tile subsets checked; no alternative arithmetic partitions.');
console.log('PASS: browser/CommonJS exports, engine completion, hint/label and content constraints.');
console.log('Operation counts:', operationTotals);
