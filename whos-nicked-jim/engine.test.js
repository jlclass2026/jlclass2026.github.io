import test from 'node:test';
import assert from 'node:assert/strict';
import {
  CHARACTERS, DECOYS, TRACK, coordinates, answerFor, strategyFor, die,
  shuffledHideouts, newGame, beginSetup, openSetup, hide, resetHiding,
  finishHiding, start, roll, step, land, answer, search, expire, endTurn,
  tick, publicHideout
} from './engine.js';

const HIDING = [[0, 2, 5, 8], [1, 3, 6, 9]];
const PHASES = ['lobby', 'handoff', 'setup', 'ready', 'roll', 'moving',
  'question', 'feedback', 'search', 'reveal', 'results'];

function readyGame(minutes = 7) {
  const s = newGame(minutes);
  assert.equal(beginSetup(s), true);
  for (let player = 0; player < 2; player++) {
    assert.equal(s.setupPlayer, player);
    assert.equal(openSetup(s), true);
    for (const slot of HIDING[player]) assert.equal(hide(s, slot), true);
    assert.equal(finishHiding(s), true);
  }
  assert.equal(s.phase, 'ready');
  return s;
}

function liveGame(minutes = 7) {
  const s = readyGame(minutes);
  assert.equal(start(s), true);
  return s;
}

function askQuestion(s, value = 1) {
  assert.equal(roll(s, value), true);
  for (let i = 0; i < value; i++) assert.equal(step(s), true);
  assert.equal(land(s), true);
  return answerFor(s.question);
}

function missTurn(s) {
  const right = askQuestion(s);
  assert.equal(answer(s, right + 1), false);
  assert.equal(endTurn(s), true);
}

function findTurn(s, slot) {
  const right = askQuestion(s);
  assert.equal(answer(s, right), true);
  assert.equal(search(s, slot), true);
  assert.equal(endTurn(s), true);
}

function enterPhase(s, phase) {
  if (phase === 'roll') return;
  assert.equal(roll(s, 1), true);
  if (phase === 'moving') return;
  assert.equal(step(s), true);
  assert.equal(land(s), true);
  if (phase === 'question') return;
  assert.equal(answer(s, answerFor(s.question) + (phase === 'feedback' ? 1 : 0)), phase !== 'feedback');
  if (phase === 'reveal') assert.equal(search(s, 4), true);
  assert.equal(s.phase, phase);
}

function finishCurrentTurn(s) {
  if (s.phase === 'roll') assert.equal(roll(s, 1), true);
  if (s.phase === 'moving') {
    assert.equal(step(s), true);
    assert.equal(land(s), true);
  }
  if (s.phase === 'question') assert.equal(answer(s, answerFor(s.question) + 1), false);
  if (s.phase === 'search') assert.equal(search(s, 4), true);
  assert.equal(endTurn(s), true);
}

test('track has exactly 32 distinct, adjoining clockwise perimeter coordinates, including wrap', () => {
  const coords = TRACK.map(({index}) => coordinates(index));
  assert.equal(TRACK.length, 32);
  assert.equal(new Set(coords.map(String)).size, 32);
  const expected = [];
  for (let x = 1; x <= 10; x++) expected.push([x, 1]);
  for (let y = 2; y <= 8; y++) expected.push([10, y]);
  for (let x = 9; x >= 1; x--) expected.push([x, 8]);
  for (let y = 7; y >= 2; y--) expected.push([1, y]);
  assert.deepEqual(coords, expected);
  for (const [i, [x, y]] of coords.entries()) {
    assert.ok(x >= 1 && x <= 10 && y >= 1 && y <= 8);
    assert.ok(x === 1 || x === 10 || y === 1 || y === 8);
    const next = coords[(i + 1) % coords.length];
    assert.equal(Math.abs(x - next[0]) + Math.abs(y - next[1]), 1, `adjacency at ${i}`);
  }
});

test('every tile produces the intended integer question and a complete strategy', () => {
  assert.equal(TRACK.filter(q => q.kind === 'twenty').length, 16);
  assert.equal(TRACK.filter(q => q.kind === 'double').length, 16);
  for (const [i, q] of TRACK.entries()) {
    assert.equal(q.index, i);
    assert.equal(q.kind, i % 2 ? 'double' : 'twenty');
    const result = answerFor(q);
    assert.ok(Number.isInteger(result));
    if (q.kind === 'twenty') {
      assert.ok(q.n >= 2 && q.n <= 17);
      assert.ok(result >= 3 && result <= 18);
      assert.equal(q.n + result, 20);
      assert.ok(strategyFor(q).includes(`${q.n} + ${result} = 20`));
    } else {
      assert.ok(q.n >= 2 && q.n <= 9);
      assert.ok(result >= 8 && result <= 36);
      assert.equal(result, q.n * 4);
      assert.ok(strategyFor(q).includes(`Double ${q.n} is ${q.n * 2}`));
      assert.ok(strategyFor(q).includes(`Double ${q.n * 2} is ${result}`));
    }
  }
});

test('die covers all six buckets and clamps finite RNG boundary values', () => {
  for (let face = 1; face <= 6; face++) {
    assert.equal(die(() => (face - 1) / 6), face);
    assert.equal(die(() => (face - 0.000001) / 6), face);
  }
  for (const [r, expected] of [[-100, 1], [0, 1], [1 - Number.EPSILON, 6], [1, 6], [100, 6]]) {
    assert.equal(die(() => r), expected);
  }
  for (let i = 0; i <= 1000; i++) {
    const value = die(() => i / 1000);
    assert.ok(Number.isInteger(value) && value >= 1 && value <= 6);
  }
});

test('random hiding always yields four distinct legal slots, including RNG boundaries', () => {
  for (const value of [-100, 0, Number.EPSILON, 0.1, 0.5, 0.999999, 1, 100]) {
    const slots = shuffledHideouts(() => value);
    assert.equal(slots.length, 4);
    assert.equal(new Set(slots).size, 4);
    assert.ok(slots.every(slot => Number.isInteger(slot) && slot >= 0 && slot <= 9));
  }
  let seed = 103;
  const rng = () => ((seed = (Math.imul(seed, 1664525) + 1013904223) >>> 0) / 2 ** 32);
  const seen = new Set();
  for (let i = 0; i < 200; i++) {
    const slots = shuffledHideouts(rng);
    assert.equal(new Set(slots).size, 4);
    assert.ok(slots.every(slot => slot >= 0 && slot < 10));
    slots.forEach(slot => seen.add(slot));
  }
  assert.equal(seen.size, 10);
});

test('setup requires two private placements of exactly four distinct characters', () => {
  const s = newGame();
  assert.equal(s.phase, 'lobby');
  assert.equal(s.remaining, 420);
  assert.equal(start(s), false);
  assert.equal(hide(s, 0), false);
  assert.equal(beginSetup(s), true);
  assert.equal(s.phase, 'handoff');
  assert.equal(hide(s, 0), false);
  for (let player = 0; player < 2; player++) {
    assert.equal(s.setupPlayer, player);
    assert.equal(openSetup(s), true);
    assert.equal(finishHiding(s), false);
    for (const invalid of [-1, 10, 0.5, '0', null, undefined, NaN, Infinity]) {
      const before = structuredClone(s);
      assert.equal(hide(s, invalid), false);
      assert.deepEqual(s, before);
    }
    for (const [index, slot] of HIDING[player].entries()) {
      assert.equal(hide(s, slot), true);
      assert.equal(s.players[player].hidden[slot], CHARACTERS[index].id);
      assert.equal(s.setupStep, index + 1);
      const before = structuredClone(s);
      assert.equal(hide(s, slot), false);
      assert.deepEqual(s, before);
      if (index < 3) assert.equal(finishHiding(s), false);
    }
    assert.equal(hide(s, 4), false);
    assert.equal(s.players[player].hidden.length, 10);
    assert.deepEqual(s.players[player].hidden.filter(Boolean), CHARACTERS.map(c => c.id));
    assert.equal(finishHiding(s), true);
    assert.equal(s.phase, player ? 'ready' : 'handoff');
  }
  assert.equal(start(s), true);
  assert.equal(s.phase, 'roll');
  assert.equal(s.turn, 0);
  assert.equal(s.viewed, 0);
});

test('resetting hiding clears only the current player and restarts the character sequence', () => {
  const s = newGame();
  beginSetup(s); openSetup(s);
  for (const slot of HIDING[0]) hide(s, slot);
  finishHiding(s); openSetup(s);
  const firstPlayer = structuredClone(s.players[0]);
  hide(s, 1); hide(s, 7);
  assert.equal(resetHiding(s), true);
  assert.equal(s.setupStep, 0);
  assert.deepEqual(s.players[1].hidden, Array(10).fill(null));
  assert.deepEqual(s.players[0], firstPlayer);
  assert.equal(hide(s, 9), true);
  assert.equal(s.players[1].hidden[9], 'cat');
});

test('mutating game actions are rejected without state changes outside their phases', () => {
  const actions = [
    ['beginSetup', beginSetup, ['lobby'], false],
    ['openSetup', openSetup, ['handoff'], false],
    ['hide', s => hide(s, 4), ['setup'], false],
    ['resetHiding', resetHiding, ['setup'], false],
    ['finishHiding', finishHiding, ['setup'], false],
    ['start', start, ['ready'], false],
    ['roll', s => roll(s, 3), ['roll'], false],
    ['step', step, ['moving'], false],
    ['land', land, ['moving'], false],
    ['answer', s => answer(s, 13), ['question'], null],
    ['search', s => search(s, 4), ['search'], false],
    ['endTurn', endTurn, ['feedback', 'reveal'], false],
    ['expire', expire, ['roll', 'moving', 'question', 'feedback', 'search', 'reveal'], false]
  ];
  for (const [name, action, allowed, rejected] of actions) {
    for (const phase of PHASES.filter(p => !allowed.includes(p))) {
      const s = liveGame();
      s.phase = phase;
      s.question = {...TRACK[0]};
      const before = structuredClone(s);
      assert.equal(action(s), rejected, `${name} rejects ${phase}`);
      assert.deepEqual(s, before, `${name} preserves state in ${phase}`);
    }
  }
});

test('every die value moves clockwise and wraps correctly from every board position', () => {
  for (let position = 0; position < 32; position++) {
    for (let value = 1; value <= 6; value++) {
      const s = liveGame();
      s.players[0].position = position;
      const opponent = structuredClone(s.players[1]);
      assert.equal(roll(s, value), true);
      assert.equal(s.lastRoll, value);
      assert.equal(s.phase, 'moving');
      assert.equal(roll(s, value), false);
      for (let i = 1; i <= value; i++) {
        assert.equal(step(s), true);
        assert.equal(s.players[0].position, (position + i) % 32);
      }
      assert.equal(land(s), true);
      assert.equal(s.phase, 'question');
      assert.deepEqual(s.question, TRACK[(position + value) % 32]);
      assert.notEqual(s.question, TRACK[(position + value) % 32]);
      assert.deepEqual(s.players[1], opponent);
    }
  }
});

test('invalid die input cannot start a turn', () => {
  for (const value of [0, -1, 7, 1.5, '2', null, undefined, NaN, Infinity]) {
    const s = liveGame();
    const before = structuredClone(s);
    assert.equal(roll(s, value), false);
    assert.deepEqual(s, before);
  }
});

test('landing is blocked until every rolled step has been taken', () => {
  for (let value = 1; value <= 6; value++) {
    const s = liveGame();
    assert.equal(s.movesLeft, 0);
    assert.equal(roll(s, value), true);
    assert.equal(s.movesLeft, value);
    for (let taken = 0; taken < value; taken++) {
      const before = structuredClone(s);
      assert.equal(land(s), false, `roll ${value}, only ${taken} steps taken`);
      assert.deepEqual(s, before);
      assert.equal(step(s), true);
      assert.equal(s.movesLeft, value - taken - 1);
      assert.equal(s.players[0].position, taken + 1);
    }
    assert.equal(land(s), true);
    assert.equal(s.phase, 'question');
    assert.equal(s.question.index, value);
  }
});

test('extra steps cannot move the token beyond the die roll, including across wrap', () => {
  for (let value = 1; value <= 6; value++) {
    const s = liveGame();
    s.players[0].position = 31;
    assert.equal(roll(s, value), true);
    for (let i = 0; i < value; i++) assert.equal(step(s), true);
    assert.equal(s.movesLeft, 0);
    assert.equal(s.players[0].position, (31 + value) % 32);
    const fullyMoved = structuredClone(s);
    for (let i = 0; i < 3; i++) {
      assert.equal(step(s), false);
      assert.deepEqual(s, fullyMoved);
    }
    assert.equal(land(s), true);
    const landed = structuredClone(s);
    assert.equal(step(s), false);
    assert.equal(land(s), false);
    assert.deepEqual(s, landed);
  }
});

test('invalid answers preserve the question; valid numeric and trimmed input is accepted', () => {
  for (const value of ['', ' ', '-1', '1.5', '1e1', 'abc', '0000', null, undefined, NaN, Infinity, true]) {
    const s = liveGame(); askQuestion(s);
    const before = structuredClone(s);
    assert.equal(answer(s, value), null, `reject ${String(value)}`);
    assert.deepEqual(s, before);
  }
  for (const transform of [x => x, x => String(x), x => `  ${x}  `, x => String(x).padStart(3, '0')]) {
    const s = liveGame();
    const right = askQuestion(s);
    assert.equal(answer(s, transform(right)), true);
    assert.equal(s.phase, 'search');
    assert.equal(s.feedback, 'correct');
  }
});

test('a wrong answer exposes the learning strategy and ends the turn without a search', () => {
  const s = liveGame();
  const right = askQuestion(s);
  const question = structuredClone(s.question);
  assert.equal(answer(s, right + 1), false);
  assert.equal(s.phase, 'feedback');
  assert.equal(s.feedback, 'practice');
  assert.deepEqual(s.question, question);
  assert.ok(strategyFor(s.question).includes(String(right)));
  assert.equal(search(s, 1), false);
  assert.equal(answer(s, right), null);
  assert.equal(s.players[0].turns, 0);
  assert.equal(endTurn(s), true);
  assert.equal(s.players[0].turns, 1);
  assert.equal(s.players[1].turns, 0);
  assert.equal(s.turn, 1);
  assert.equal(s.viewed, 1);
  assert.equal(s.phase, 'roll');
  assert.equal(s.question, null);
  assert.equal(s.feedback, null);
  assert.equal(s.reveal, null);
});

test('a correct answer unlocks exactly one search and one capture at most', () => {
  const s = liveGame();
  const right = askQuestion(s);
  assert.equal(search(s, 1), false);
  assert.equal(answer(s, right), true);
  assert.equal(endTurn(s), false);
  assert.equal(answer(s, right), null);
  for (const value of [-1, 10, 1.5, '1', null, NaN]) {
    const before = structuredClone(s);
    assert.equal(search(s, value), false);
    assert.deepEqual(s, before);
  }
  assert.equal(search(s, 1), true);
  assert.equal(s.phase, 'reveal');
  assert.deepEqual(s.players[0].searched, [1]);
  assert.deepEqual(s.players[0].captures, ['cat']);
  assert.equal(s.reveal.id, 'cat');
  assert.equal(s.reveal.slot, 1);
  const before = structuredClone(s);
  assert.equal(search(s, 3), false);
  assert.equal(search(s, 1), false);
  assert.deepEqual(s, before);
  assert.equal(endTurn(s), true);
  assert.equal(endTurn(s), false);
  missTurn(s);
  assert.equal(answer(s, askQuestion(s)), true);
  const beforeDuplicate = structuredClone(s);
  assert.equal(search(s, 1), false);
  assert.deepEqual(s, beforeDuplicate);
  assert.equal(s.phase, 'search');
  assert.equal(search(s, 3), true);
  assert.deepEqual(s.players[0].captures, ['cat', 'moose']);
});

test('empty hideouts reveal a harmless decoy without awarding a capture', () => {
  const s = liveGame();
  assert.equal(answer(s, askQuestion(s)), true);
  assert.equal(search(s, 4), true);
  assert.deepEqual(s.players[0].searched, [4]);
  assert.deepEqual(s.players[0].captures, []);
  assert.deepEqual(s.reveal, {slot: 4, id: null, decoy: DECOYS[4]});
});

test('public hideout views mask every unsearched slot and keep each player’s searches separate', () => {
  const s = liveGame();
  for (let viewer = 0; viewer < 2; viewer++) {
    for (let slot = 0; slot < 10; slot++) assert.deepEqual(publicHideout(s, viewer, slot), {searched: false, id: null});
  }
  findTurn(s, 1);
  assert.deepEqual(publicHideout(s, 0, 1), {searched: true, id: 'cat'});
  assert.deepEqual(publicHideout(s, 1, 1), {searched: false, id: null});
  assert.deepEqual(publicHideout(s, 0, 3), {searched: false, id: null});
  findTurn(s, 4);
  assert.deepEqual(publicHideout(s, 1, 4), {searched: true, id: null});
  assert.deepEqual(publicHideout(s, 0, 4), {searched: false, id: null});
  const view = publicHideout(s, 0, 1);
  view.id = 'tampered';
  assert.equal(s.players[1].hidden[1], 'cat');
});

for (const winner of [0, 1]) {
  test(`player ${winner + 1} wins by capturing all four characters`, () => {
    const s = liveGame();
    for (let round = 0; round < 4; round++) {
      if (s.turn !== winner) missTurn(s);
      findTurn(s, HIDING[1 - winner][round]);
      if (round < 3) {
        assert.equal(s.phase, 'roll');
        assert.equal(s.outcome, null);
      }
    }
    assert.equal(s.phase, 'results');
    assert.deepEqual(s.outcome, {type: 'all', winner});
    assert.deepEqual(s.players[winner].captures, CHARACTERS.map(c => c.id));
    const terminal = structuredClone(s);
    assert.equal(roll(s, 1), false);
    assert.equal(search(s, 4), false);
    assert.equal(endTurn(s), false);
    tick(s, 1000);
    assert.deepEqual(s, terminal);
  });
}

for (const player of [0, 1]) {
  for (const phase of ['roll', 'moving', 'question', 'search', 'feedback', 'reveal']) {
    test(`timer expiring during player ${player + 1} ${phase} completes the pair with equal turns`, () => {
      const s = liveGame();
      for (let i = 0; i < 4; i++) missTurn(s);
      if (player === 1) missTurn(s);
      assert.equal(s.turn, player);
      enterPhase(s, phase);
      assert.equal(expire(s), true);
      assert.equal(s.remaining, 0);
      assert.equal(s.expired, true);
      assert.equal(s.finalTarget, 3);
      assert.equal(s.phase, phase);
      assert.equal(s.outcome, null);
      const afterExpiry = structuredClone(s);
      assert.equal(expire(s), false);
      tick(s, 100);
      assert.deepEqual(s, afterExpiry);
      finishCurrentTurn(s);
      if (player === 0) {
        assert.equal(s.phase, 'roll');
        assert.equal(s.turn, 1);
        assert.equal(s.outcome, null);
        assert.deepEqual(s.players.map(p => p.turns), [3, 2]);
        finishCurrentTurn(s);
      }
      assert.equal(s.phase, 'results');
      assert.deepEqual(s.players.map(p => p.turns), [3, 3]);
      assert.deepEqual(s.outcome, {type: 'tie', winner: null});
    });
  }
}

test('timed results select the player with most captures or explicitly declare a tie', () => {
  for (const [scores, expected] of [
    [[2, 1], {type: 'time', winner: 0}],
    [[1, 2], {type: 'time', winner: 1}],
    [[2, 2], {type: 'tie', winner: null}],
    [[0, 0], {type: 'tie', winner: null}]
  ]) {
    const s = liveGame();
    for (let round = 0; round < Math.max(...scores); round++) {
      for (let player = 0; player < 2; player++) {
        if (round < scores[player]) findTurn(s, HIDING[1 - player][round]);
        else missTurn(s);
      }
    }
    assert.deepEqual(s.players.map(p => p.captures.length), scores);
    assert.equal(expire(s), true);
    missTurn(s);
    assert.equal(s.phase, 'roll');
    missTurn(s);
    assert.equal(s.phase, 'results');
    assert.deepEqual(s.outcome, expected);
    assert.equal(s.players[0].turns, s.players[1].turns);
  }
});

test('finding the fourth character after expiry still wins immediately', () => {
  const s = liveGame();
  for (let i = 0; i < 3; i++) { findTurn(s, HIDING[1][i]); missTurn(s); }
  assert.equal(expire(s), true);
  findTurn(s, HIDING[1][3]);
  assert.deepEqual(s.outcome, {type: 'all', winner: 0});
  assert.equal(s.phase, 'results');
});

test('timer ignores setup/results, supports untimed play, and expires once at zero', () => {
  for (const phase of ['lobby', 'handoff', 'setup', 'ready', 'results']) {
    const s = newGame(3);
    s.phase = phase;
    const before = structuredClone(s);
    tick(s, 1000);
    assert.equal(expire(s), false);
    assert.deepEqual(s, before);
  }
  const untimed = liveGame(0);
  tick(untimed, 100000);
  assert.equal(untimed.expired, false);
  assert.equal(untimed.remaining, 0);
  assert.equal(untimed.finalTarget, null);
  const s = liveGame(3);
  tick(s);
  assert.equal(s.remaining, 179);
  tick(s, 178);
  assert.equal(s.remaining, 1);
  assert.equal(s.expired, false);
  tick(s, 5);
  assert.equal(s.remaining, 0);
  assert.equal(s.expired, true);
  assert.equal(s.finalTarget, 1);
  assert.equal(s.phase, 'roll');
});

test('the live countdown expires in every active phase for either player without dropping the turn', () => {
  for (const player of [0, 1]) {
    for (const phase of ['roll', 'moving', 'question', 'search', 'feedback', 'reveal']) {
      const s = liveGame();
      if (player) missTurn(s);
      enterPhase(s, phase);
      const playerBefore = structuredClone(s.players);
      s.remaining = 1;
      tick(s);
      assert.equal(s.phase, phase);
      assert.equal(s.turn, player);
      assert.deepEqual(s.players, playerBefore);
      assert.equal(s.expired, true);
      assert.equal(s.finalTarget, 1);
      finishCurrentTurn(s);
      if (!player) finishCurrentTurn(s);
      assert.equal(s.phase, 'results');
      assert.deepEqual(s.players.map(p => p.turns), [1, 1]);
    }
  }
});

test('128 deterministic full games preserve scoring, privacy, alternating turns, and terminal conditions', () => {
  let seed = 61016;
  const rng = () => ((seed = (Math.imul(seed, 1664525) + 1013904223) >>> 0) / 2 ** 32);
  for (let game = 0; game < 128; game++) {
    const s = liveGame();
    const expiryTurn = Math.floor(rng() * 18);
    let completed = 0;
    while (s.phase !== 'results') {
      assert.ok(completed <= expiryTurn + 2, `game ${game} must finish its expiry pair`);
      const player = s.turn;
      const beforePosition = s.players[player].position;
      const value = die(rng);
      const right = askQuestion(s, value);
      assert.equal(s.players[player].position, (beforePosition + value) % 32);
      if (completed === expiryTurn) assert.equal(expire(s), true);
      const correct = rng() < 0.8;
      assert.equal(answer(s, right + (correct ? 0 : 1)), correct);
      if (correct) {
        const available = Array.from({length: 10}, (_, i) => i).filter(i => !s.players[player].searched.includes(i));
        assert.ok(available.length > 0);
        const slot = available[Math.floor(rng() * available.length)];
        assert.equal(search(s, slot), true);
      }
      assert.equal(endTurn(s), true);
      completed++;
      assert.equal(s.players[0].turns + s.players[1].turns, completed);
      assert.ok(s.players[0].turns === s.players[1].turns || s.players[0].turns === s.players[1].turns + 1);
      for (const viewer of [0, 1]) {
        const p = s.players[viewer];
        assert.equal(new Set(p.searched).size, p.searched.length);
        assert.equal(new Set(p.captures).size, p.captures.length);
        assert.ok(p.captures.length <= 4);
        assert.deepEqual(p.captures, p.searched.map(slot => s.players[1 - viewer].hidden[slot]).filter(Boolean));
        for (let slot = 0; slot < 10; slot++) {
          assert.deepEqual(publicHideout(s, viewer, slot), p.searched.includes(slot)
            ? {searched: true, id: s.players[1 - viewer].hidden[slot]}
            : {searched: false, id: null});
        }
      }
      if (s.phase !== 'results') {
        assert.equal(s.phase, 'roll');
        assert.equal(s.turn, 1 - player);
      }
    }
    if (s.outcome.type === 'all') {
      assert.equal(s.players[s.outcome.winner].captures.length, 4);
    } else {
      assert.equal(s.expired, true);
      assert.equal(s.players[0].turns, s.finalTarget);
      assert.equal(s.players[1].turns, s.finalTarget);
      const [a, b] = s.players.map(p => p.captures.length);
      assert.deepEqual(s.outcome, a === b
        ? {type: 'tie', winner: null}
        : {type: 'time', winner: a > b ? 0 : 1});
    }
  }
});

test('restart creates fresh state, with no arrays shared across games or players', () => {
  const old = liveGame(3);
  findTurn(old, 1);
  expire(old);
  const fresh = newGame(7);
  assert.equal(fresh.phase, 'lobby');
  assert.equal(fresh.remaining, 420);
  assert.equal(fresh.expired, false);
  assert.equal(fresh.finalTarget, null);
  assert.equal(fresh.outcome, null);
  assert.equal(fresh.question, null);
  assert.equal(fresh.reveal, null);
  const arrays = [];
  for (const s of [old, fresh]) {
    arrays.push(s.players);
    for (const p of s.players) arrays.push(p.hidden, p.searched, p.captures);
  }
  assert.equal(new Set(arrays).size, arrays.length);
  for (const p of fresh.players) {
    assert.deepEqual(p, {position: 0, hidden: Array(10).fill(null), searched: [], captures: [], turns: 0});
  }
  fresh.players[0].hidden[0] = 'jim';
  fresh.players[0].searched.push(7);
  fresh.players[0].captures.push('bear');
  assert.equal(fresh.players[1].hidden[0], null);
  assert.deepEqual(fresh.players[1].searched, []);
  assert.deepEqual(fresh.players[1].captures, []);
  assert.equal(old.players[0].hidden[0], 'cat');
  assert.deepEqual(old.players[0].searched, [1]);
  assert.deepEqual(old.players[0].captures, ['cat']);
});
