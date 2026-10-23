'use strict';

// Independent date/state/UI-contract checks. Run: node --test daily-review.test.js
// This deliberately uses a lightweight DOM harness rather than a browser. It
// checks behavior and accessible attributes, not visual layout or native focus.
const test = require('node:test');
const assert = require('node:assert/strict');
const fs = require('node:fs');
const vm = require('node:vm');
const path = require('node:path');
const {execFileSync} = require('node:child_process');
const E = require('./engine');
const puzzles = require('./puzzles');
const D = require('./daily');

const plain = value => JSON.parse(JSON.stringify(value));

function storage(initial = {}, blocked = false) {
  const values = new Map(Object.entries(initial));
  const reads = [], writes = [];
  return {
    values, reads, writes,
    getItem(key) { reads.push(key); if (blocked) throw new Error('Storage blocked'); return values.get(key) ?? null; },
    setItem(key, value) { writes.push([key, value]); if (blocked) throw new Error('Storage blocked'); values.set(key, String(value)); },
    removeItem(key) { if (blocked) throw new Error('Storage blocked'); values.delete(key); },
    key(index) { return Array.from(values.keys())[index] ?? null; },
    get length() { return values.size; }
  };
}

function makeBrowser({now = '2026-10-23T02:00:00Z', saved = storage(), search = '', storageGetterThrows = false} = {}) {
  let clock = Date.parse(now), focused = null, nextTimerId = 0;
  const timers = new Map();
  const decode = text => text.replace(/&quot;/g, '"').replace(/&#39;/g, "'").replace(/&lt;/g, '<').replace(/&gt;/g, '>').replace(/&amp;/g, '&');
  class Element {
    constructor(tag = 'div', id = '') {
      this.tagName = tag.toUpperCase(); this.id = id; this.children = []; this.parentNode = null;
      this.dataset = {}; this.attributes = {}; this.listeners = {}; this.disabled = false;
      this.hidden = false; this.open = false; this.textContent = ''; this._html = ''; this.className = '';
      this.classList = {add: (...names) => { this.className = [...new Set([...this.className.split(' '), ...names])].join(' ').trim(); }, remove: (...names) => {this.className = this.className.split(' ').filter(name => !names.includes(name)).join(' ');}, contains: name => this.className.split(' ').includes(name)};
    }
    addEventListener(type, callback) { (this.listeners[type] ??= []).push(callback); }
    dispatch(type, properties = {}) {
      const event = {type, target: this, preventDefault() {}, ...properties};
      for (const callback of this.listeners[type] ?? []) callback(event);
      return event;
    }
    click() { if (this.disabled) return; this.dispatch('click'); }
    append(...children) { for (const child of children) { child.parentNode = this; this.children.push(child); } }
    appendChild(child) { this.append(child); return child; }
    replaceChildren(...children) { this.children = []; this.append(...children); }
    setAttribute(name, value) { this.attributes[name] = String(value); if (name === 'class') this.className = String(value); }
    getAttribute(name) { return this.attributes[name] ?? null; }
    removeAttribute(name) { delete this.attributes[name]; }
    focus() { focused = this; }
    showModal() { this.open = true; }
    close() { this.open = false; }
    getBoundingClientRect() { return {left: 0, right: 600, top: 0, bottom: 600}; }
    matches(selector) { return selector.startsWith('.') ? this.className.split(' ').includes(selector.slice(1)) : selector.startsWith('#') ? this.id === selector.slice(1) : this.tagName.toLowerCase() === selector; }
    closest(selector) { return this.matches(selector) ? this : this.parentNode?.closest(selector) ?? null; }
    querySelectorAll(selector) { return this.children.flatMap(child => [...(child.matches(selector) ? [child] : []), ...child.querySelectorAll(selector)]); }
    querySelector(selector) { return this.querySelectorAll(selector)[0] ?? null; }
    set innerHTML(html) {
      this._html = html; this.children = [];
      for (const match of html.matchAll(/<button\b([^>]*)>([\s\S]*?)<\/button>/g)) {
        const button = new Element('button');
        for (const attr of match[1].matchAll(/([\w-]+)="([^"]*)"/g)) {
          const name = attr[1], value = decode(attr[2]); button.setAttribute(name, value);
          if (name.startsWith('data-')) button.dataset[name.slice(5).replace(/-([a-z])/g, (_, char) => char.toUpperCase())] = value;
        }
        button.textContent = decode(match[2].replace(/<[^>]+>/g, '')); this.append(button);
      }
    }
    get innerHTML() { return this._html; }
  }
  const elements = new Map();
  const html = fs.readFileSync(path.join(__dirname, 'index.html'), 'utf8');
  for (const match of html.matchAll(/<([\w-]+)\b[^>]*\bid="([^"]+)"[^>]*>/g)) elements.set(match[2], new Element(match[1], match[2]));
  const document = new Element('document');
  document.getElementById = id => elements.get(id) ?? null;
  document.querySelectorAll = selector => [...elements.values()].flatMap(element => [...(element.matches(selector) ? [element] : []), ...element.querySelectorAll(selector)]);
  document.querySelector = selector => document.querySelectorAll(selector)[0] ?? null;
  document.createElement = tag => new Element(tag);
  document.documentElement = new Element('html');
  document.fullscreenEnabled = false;
  document.visibilityState = 'visible';
  document.hidden = false;
  const window = new Element('window');
  class FakeDate extends Date {
    constructor(...args) { super(...(args.length ? args : [clock])); }
    static now() { return clock; }
  }
  const setTimeout = (callback, delay) => { const id = ++nextTimerId; timers.set(id, {callback, at: clock + delay, delay}); return id; };
  const clearTimeout = id => timers.delete(id);
  Object.assign(window, {document, Date: FakeDate, location: {search, hash: '', href: `https://example.test/${search}`}, setTimeout, clearTimeout});
  if (storageGetterThrows) Object.defineProperty(window, 'localStorage', {get() { throw new Error('Storage access denied'); }});
  else window.localStorage = saved;
  const context = vm.createContext({window, document, Date: FakeDate, console, setTimeout, clearTimeout, URLSearchParams, location: window.location});
  Object.defineProperty(context, 'localStorage', {get() { return window.localStorage; }});
  for (const file of ['puzzles.js', 'engine.js', 'daily.js', 'game.js']) {
    vm.runInContext(fs.readFileSync(path.join(__dirname, file), 'utf8'), context, {filename: file});
    for (const key of ['FourEngine', 'FourDaily', 'FOUR_PUZZLES']) if (context[key]) window[key] = context[key];
  }
  const element = id => { const node = elements.get(id); assert.ok(node, `Missing element: ${id}`); return node; };
  return {
    context, window, document, saved, timers, element,
    get focused() { return focused; },
    get now() { return clock; },
    setNow(value) { clock = Date.parse(value); },
    runDueTimers() { for (const [id, timer] of [...timers]) if (timer.at <= clock) { timers.delete(id); timer.callback(); } },
    tiles() { return document.querySelectorAll('.tile'); },
    solved() { return document.querySelectorAll('.solved'); },
    select(words) { for (const word of words) { const tile = this.tiles().find(tile => tile.dataset.word === word); assert.ok(tile, `Tile not available: ${word}`); element('board').dispatch('click', {target: tile}); } },
    solve(index, puzzle = puzzles[0]) { this.select(puzzle.groups[index].words); element('check').click(); },
    reveal(all = false) { element('teacher').click(); const label = all ? 'Reveal all' : 'Reveal one group'; const button = element('dialog-actions').children.find(button => button.textContent === label); assert.ok(button, `Missing dialog action: ${label}`); button.click(); }
  };
}

test('Perth anchor changes exactly at 16:00 UTC, independently of local dates', () => {
  for (const [instant, date, index] of [
    ['2026-10-22T15:59:59.999Z', '2026-10-22', 19],
    ['2026-10-22T16:00:00.000Z', '2026-10-23', 0],
    ['2026-10-23T15:59:59.999Z', '2026-10-23', 0],
    ['2026-10-23T16:00:00.000Z', '2026-10-24', 1],
    ['2026-10-31T15:59:59.999Z', '2026-10-31', 8],
    ['2026-10-31T16:00:00.000Z', '2026-11-01', 9],
    ['2026-12-31T15:59:59.999Z', '2026-12-31', 9],
    ['2026-12-31T16:00:00.000Z', '2027-01-01', 10],
  ]) {
    const result = D.describe(Date.parse(instant), 20);
    assert.equal(result.date, date, instant); assert.equal(result.index, index, instant);
    assert.equal(new Date(result.nextMidnight).toISOString().slice(11), '16:00:00.000Z');
    assert.ok(result.nextMidnight > Date.parse(instant));
    assert.ok(result.nextMidnight - Date.parse(instant) <= 86400000);
  }
});

test('daily cycle is 20 days, including negative offsets and leap-day transitions', () => {
  assert.equal(puzzles.length, 20, 'The bank must contain 20 puzzles for the requested 20-day cycle');
  const anchor = Date.parse('2026-10-22T16:00:00Z');
  for (let days = -100; days < 500; days++) assert.equal(D.describe(anchor + days * 86400000, puzzles.length).index, ((days % 20) + 20) % 20);
  for (const [instant, date] of [['2028-02-28T16:00:00Z','2028-02-29'], ['2028-02-29T16:00:00Z','2028-03-01']]) assert.equal(D.describe(Date.parse(instant), 20).date, date);
});

test('assignment is identical in UTC, Perth, Los Angeles, Kathmandu and Auckland', () => {
  const script = `const d=require('./daily');process.stdout.write(JSON.stringify(['2026-10-23T15:59:59Z','2026-10-23T16:00:00Z','2026-11-01T16:00:00Z','2027-01-01T16:00:00Z'].map(x=>d.describe(Date.parse(x),20))))`;
  const values = ['UTC','Australia/Perth','America/Los_Angeles','Asia/Kathmandu','Pacific/Auckland'].map(TZ => execFileSync(process.execPath, ['-e', script], {cwd: __dirname, env: {...process.env, TZ}, encoding: 'utf8'}));
  assert.ok(values.every(value => value === values[0]));
});

test('save identity isolates dates, IDs, puzzle content, and format versions', () => {
  const today = D.describe(Date.parse('2026-10-23T02:00:00Z'), 20), tomorrow = D.describe(Date.parse('2026-10-24T02:00:00Z'), 20);
  const state = E.create(puzzles[0]), raw = D.encode(today, state), data = JSON.parse(raw);
  const revised = structuredClone(puzzles[0]); revised.groups[0].words[0] += ' changed';
  const renamed = {...puzzles[0], id: puzzles[0].id + '-new'};
  assert.ok(D.key(today, puzzles[0]).includes(today.date)); assert.ok(D.key(today, puzzles[0]).includes(puzzles[0].id));
  assert.notEqual(D.key(today, puzzles[0]), D.key(tomorrow, puzzles[0]));
  assert.notEqual(D.key(today, puzzles[0]), D.key(today, revised));
  assert.notEqual(D.key(today, puzzles[0]), D.key(today, renamed));
  assert.equal(D.decode(raw, tomorrow, puzzles[0]), null);
  assert.equal(D.decode(raw, today, revised), null);
  assert.equal(D.decode(raw, today, renamed), null);
  assert.equal(D.decode(JSON.stringify({...data, version: data.version + 1}), today, puzzles[0]), null);
});

test('state round trip retains selection, order, attempts, guesses, found groups and revealed groups', () => {
  const day = D.describe(Date.parse('2026-10-23T02:00:00Z'), 20), state = E.create(puzzles[0]);
  state.selected = [...puzzles[0].groups[0].words.slice(0,3), puzzles[0].groups[1].words[0]]; E.submit(state);
  state.selected = [...puzzles[0].groups[1].words]; E.submit(state); E.reveal(state);
  state.selected = state.order.slice(0, 2);
  const restored = D.decode(D.encode(day, state), day, puzzles[0]);
  assert.deepEqual(restored, state);
  assert.notEqual(restored.order, state.order); assert.notEqual(restored.solved, state.solved);
  E.reveal(state, true);
  assert.deepEqual(D.decode(D.encode(day, state), day, puzzles[0]), state);
});

test('malformed, oversized and structurally invalid saved progress fails closed', () => {
  const day = D.describe(Date.parse('2026-10-23T02:00:00Z'), 20), state = E.create(puzzles[0]), valid = JSON.parse(D.encode(day, state));
  for (const raw of [undefined, null, '{}', 'null', '[]', 'bad json', '{', ' '.repeat(200001)]) assert.equal(D.decode(raw, day, puzzles[0]), null);
  const mutations = [
    {order: valid.order.slice(1)}, {order: [...valid.order.slice(1), valid.order[1]]}, {order: [...valid.order.slice(1), 'alien word']},
    {selected: [valid.order[0], valid.order[0]]}, {selected: valid.order.slice(0,5)}, {selected: ['alien word']},
    {solved: [{index: 8, revealed: true}]}, {solved: [{index: 0, revealed: 'true'}]}, {solved: [{index:0,revealed:true},{index:0,revealed:true}]},
    {guesses: ['bad signature'], attempts: 1}, {guesses: [valid.order.slice(0,4).join('\u0000')], attempts: 0},
    {attempts: -1}, {attempts: 0.5}, {date: '2026-10-24'}, {fingerprint: 'unknown'}, {version: '1'},
  ];
  for (const mutation of mutations) assert.equal(D.decode(JSON.stringify({...valid, ...mutation}), day, puzzles[0]), null, JSON.stringify(mutation));
});

test('blocked or corrupt storage does not throw and reports unavailability accurately', () => {
  const day = D.describe(Date.parse('2026-10-23T02:00:00Z'), 20), state = E.create(puzzles[0]);
  assert.deepEqual(D.read(storage({}, true), day, puzzles[0]), {state: null, available: false});
  assert.equal(D.write(storage({}, true), day, state), false);
  assert.deepEqual(D.read(storage({[D.key(day, puzzles[0])]: 'broken'}), day, puzzles[0]), {state: null, available: true});
});

test('impossible found groups or unsolved correct guesses are rejected on restore', () => {
  const day = D.describe(Date.parse('2026-10-23T02:00:00Z'), 20), state = E.create(puzzles[0]);
  E.reveal(state); const fakeFound = JSON.parse(D.encode(day,state)); fakeFound.solved[0].revealed = false;
  assert.equal(D.decode(JSON.stringify(fakeFound),day,puzzles[0]),null,'Found groups need their recorded correct guess');
  const fakeGuess = JSON.parse(D.encode(day,E.create(puzzles[0])));
  fakeGuess.guesses = [puzzles[0].groups[0].words.slice().sort().join('\u0000')]; fakeGuess.attempts = 1;
  assert.equal(D.decode(JSON.stringify(fakeGuess),day,puzzles[0]),null,'A recorded correct guess must have solved its group');
});

test('invalid completion snapshot cannot hide valid progress; a valid completion survives a partial write failure', () => {
  const day = D.describe(Date.parse('2026-10-23T02:00:00Z'),20), state = E.create(puzzles[0]), key = D.key(day,puzzles[0]);
  E.reveal(state);
  const saved = storage({[key]: D.encode(day,state), [key+':complete']: '{broken'});
  assert.deepEqual(D.read(saved,day,puzzles[0]).state,state);
  saved.setItem(key+':complete',D.encode(day,state));
  assert.deepEqual(D.read(saved,day,puzzles[0]).state,state,'Incomplete completion-key snapshots should fall back to normal progress');
  E.reveal(state,true);
  const partial = storage(); const write = partial.setItem.bind(partial);
  partial.setItem = (savedKey,value) => {if(savedKey === key) throw new Error('Quota reached'); write(savedKey,value);};
  assert.equal(D.write(partial,day,state),false);
  assert.equal(D.read(partial,day,puzzles[0]).state.solved.length,4,'Completion snapshot should be saved first');
});

test('normal startup and arbitrary URL query both show only the current puzzle', () => {
  for (const search of ['', '?puzzle=19&date=2026-10-24&next=true', '?index=8']) {
    const browser = makeBrowser({search});
    assert.deepEqual(browser.tiles().map(tile => tile.dataset.word).sort(), puzzles[0].groups.flatMap(group => group.words).sort());
    assert.equal(browser.document.getElementById('puzzle-select'), null);
    assert.equal(browser.document.getElementById('next'), null);
    assert.equal(browser.element('daily-date').dateTime, '2026-10-23');
    assert.equal(browser.element('puzzle-number').textContent, 'TODAY');
  }
});

test('selection, wrong attempt and found group survive a UI reload', () => {
  const saved = storage(), browser = makeBrowser({saved}), p = puzzles[0];
  browser.select([...p.groups[0].words.slice(0,3), p.groups[1].words[0]]); browser.element('check').click();
  const before = [...saved.values.values()].find(value => JSON.parse(value).attempts === 1);
  assert.ok(before, 'Wrong guesses must persist');
  let restored = makeBrowser({saved});
  assert.equal(restored.tiles().filter(tile => tile.getAttribute('aria-pressed') === 'true').length, 4);
  restored.element('check').click(); assert.match(restored.element('status').textContent, /tried that set/);
  restored.element('deselect').click(); restored.solve(0);
  restored = makeBrowser({saved}); assert.equal(restored.solved().length, 1); assert.equal(restored.tiles().length, 12);
  assert.match(restored.element('progress').getAttribute('aria-label'), /1 of 4/);
});

test('a completed found puzzle reloads complete and cannot be reset or advanced', () => {
  const saved = storage(), browser = makeBrowser({saved});
  for (const index of [3,1,2,0]) browser.solve(index);
  assert.equal(browser.tiles().length, 0); assert.equal(browser.solved().length, 4);
  assert.match(browser.element('status').textContent, /Four groups found.*tomorrow/);
  assert.equal(browser.focused.className, 'solved');
  const restored = makeBrowser({saved});
  assert.equal(restored.solved().length, 4); assert.equal(restored.element('reset').disabled, true); assert.equal(restored.element('reset').hidden, true);
  for (const id of ['reset','teacher','shuffle','hint','check']) restored.element(id).dispatch('click');
  assert.equal(restored.solved().length, 4); assert.equal(restored.tiles().length, 0); assert.equal(restored.element('help-dialog').open, false);
  assert.equal(restored.element('daily-date').dateTime, '2026-10-23');
});

test('revealed and mixed found/revealed completion retain accurate labels on reload', () => {
  for (const foundFirst of [false, true]) {
    const saved = storage(), browser = makeBrowser({saved});
    if (foundFirst) browser.solve(2);
    browser.reveal(false); browser.reveal(true);
    const restored = makeBrowser({saved});
    assert.equal(restored.solved().length, 4);
    assert.equal(restored.solved().filter(group => group.getAttribute('aria-label').includes('Revealed')).length, foundFirst ? 3 : 4);
    assert.match(restored.element('status').textContent, /All four groups shown.*tomorrow/);
    assert.equal(restored.element('reset').disabled, true);
  }
});

test('blocked read/write and even localStorage property access leave the game playable', () => {
  for (const options of [{saved: storage({},true)}, {storageGetterThrows: true}]) {
    const browser = makeBrowser(options);
    assert.equal(browser.tiles().length, 16);
    assert.match(browser.element('discussion').textContent, /cannot be saved/);
    browser.solve(0); assert.equal(browser.solved().length, 1);
    browser.reveal(true); assert.equal(browser.solved().length, 4);
  }
});

test('corrupt browser save falls back to a fresh board without crashing', () => {
  const day = D.describe(Date.parse('2026-10-23T02:00:00Z'), puzzles.length);
  const browser = makeBrowser({saved: storage({[D.key(day,puzzles[0])]: '{not JSON'})});
  assert.equal(browser.tiles().length, 16); assert.equal(browser.solved().length, 0);
  assert.equal(browser.element('selection-count').textContent, '0 / 4 selected');
});

test('the next puzzle is not loaded early and timer rolls it over at exactly midnight', () => {
  const browser = makeBrowser({now: '2026-10-23T15:59:59.000Z'});
  browser.solve(0); browser.element('hint').click();
  assert.ok([...browser.timers.values()].some(timer => timer.at === Date.parse('2026-10-23T16:00:00.000Z')), 'There must be a timer for exact Perth midnight');
  browser.setNow('2026-10-23T15:59:59.999Z'); browser.runDueTimers();
  assert.equal(browser.element('daily-date').dateTime, '2026-10-23'); assert.equal(browser.solved().length, 1);
  browser.setNow('2026-10-23T16:00:00.000Z'); browser.runDueTimers();
  assert.equal(browser.element('daily-date').dateTime, '2026-10-24'); assert.equal(browser.solved().length, 0);
  assert.equal(browser.element('help-dialog').open, false);
  assert.deepEqual(browser.tiles().map(tile => tile.dataset.word).sort(), puzzles[1].groups.flatMap(group => group.words).sort());
});

test('focus, pageshow and visibility recovery catch a sleeping tab without early leakage', () => {
  for (const trigger of [browser => browser.window.dispatch('focus'), browser => browser.window.dispatch('pageshow'), browser => browser.document.dispatch('visibilitychange')]) {
    const browser = makeBrowser({now: '2026-10-23T15:59:59.000Z'});
    browser.reveal(true); trigger(browser); assert.equal(browser.solved().length, 4); assert.equal(browser.element('daily-date').dateTime,'2026-10-23');
    browser.setNow('2026-10-25T16:00:00.000Z'); trigger(browser);
    assert.equal(browser.element('daily-date').dateTime,'2026-10-26'); assert.equal(browser.solved().length, 0);
    assert.deepEqual(browser.tiles().map(tile => tile.dataset.word).sort(), puzzles[3].groups.flatMap(group => group.words).sort());
  }
});

test('a queued interaction just after midnight changes day instead of mutating either puzzle', () => {
  const browser = makeBrowser({now: '2026-10-23T15:59:59.000Z'});
  browser.select(puzzles[0].groups[0].words);
  browser.setNow('2026-10-23T16:00:00.000Z'); browser.element('check').click();
  assert.equal(browser.element('daily-date').dateTime, '2026-10-24'); assert.equal(browser.solved().length, 0);
  assert.equal(browser.tiles().filter(tile => tile.getAttribute('aria-pressed') === 'true').length, 0);
  assert.equal(browser.element('selection-count').textContent, '0 / 4 selected');
});

test('same puzzle after a full cycle never restores a previous date’s completion', () => {
  const saved = storage(), browser = makeBrowser({saved}); browser.reveal(true);
  const later = makeBrowser({saved, now: new Date(Date.parse('2026-10-23T02:00:00Z') + puzzles.length * 86400000).toISOString()});
  assert.equal(later.solved().length, 0); assert.equal(later.tiles().length,16);
  assert.deepEqual(later.tiles().map(tile => tile.dataset.word).sort(), puzzles[0].groups.flatMap(group => group.words).sort());
});

test('completion in another tab wins over a stale unfinished board and is loaded on focus', () => {
  const saved = storage(), one = makeBrowser({saved}), two = makeBrowser({saved});
  one.reveal(true); two.element('shuffle').click();
  assert.equal(two.solved().length,4); assert.equal(two.element('reset').disabled,true);
  const three = makeBrowser({saved}); assert.equal(three.solved().length,4);
  const day = D.describe(Date.parse('2026-10-23T02:00:00Z'),puzzles.length);
  saved.setItem(D.key(day,puzzles[0]), D.encode(day,E.create(puzzles[0])));
  const four = makeBrowser({saved}); assert.equal(four.solved().length,4,'An older incomplete snapshot must not override the completion record');
});

test('storage events update same-day progress and completion without loading another day', () => {
  const saved = storage(), one = makeBrowser({saved}), two = makeBrowser({saved});
  const day = D.describe(Date.parse('2026-10-23T02:00:00Z'),puzzles.length), key = D.key(day,puzzles[0]);
  one.solve(0); two.window.dispatch('storage',{key}); assert.equal(two.solved().length,1);
  one.reveal(true); two.window.dispatch('storage',{key:key+':complete'}); assert.equal(two.solved().length,4);
  two.window.dispatch('storage',{key:key.replace(day.date,'2026-10-24')}); assert.equal(two.element('daily-date').dateTime,'2026-10-23');
});

test('every bank day initializes, solves and restores exactly its assigned puzzle', () => {
  const anchor = Date.parse('2026-10-23T02:00:00Z');
  for (let index = 0; index < puzzles.length; index++) {
    const now = new Date(anchor + index * 86400000).toISOString(), saved = storage(), browser = makeBrowser({now,saved}), puzzle = puzzles[index];
    assert.deepEqual(browser.tiles().map(tile => tile.dataset.word).sort(),puzzle.groups.flatMap(group=>group.words).sort(),puzzle.id);
    for (const group of [2,0,3,1]) browser.solve(group,puzzle);
    const restored = makeBrowser({now,saved});
    assert.equal(restored.solved().length,4,puzzle.id); assert.equal(restored.tiles().length,0,puzzle.id);
    assert.ok(restored.solved().every(group=>group.getAttribute('aria-label').startsWith('Explain Found')),puzzle.id);
  }
});

test('future-day progress already in storage never opens early', () => {
  const day = D.describe(Date.parse('2026-10-24T02:00:00Z'),puzzles.length), state = E.create(puzzles[1]);
  E.reveal(state,true);
  const saved = storage(); D.write(saved,day,state);
  const browser = makeBrowser({saved,now:'2026-10-23T15:59:59.999Z'});
  assert.equal(browser.element('daily-date').dateTime,'2026-10-23'); assert.equal(browser.solved().length,0);
  assert.deepEqual(browser.tiles().map(tile=>tile.dataset.word).sort(),puzzles[0].groups.flatMap(group=>group.words).sort());
});

test('client scripts do not read navigation parameters or contact a backend', () => {
  const source = ['game.js','daily.js','engine.js'].map(file => fs.readFileSync(path.join(__dirname,file),'utf8')).join('\n');
  assert.doesNotMatch(source,/URLSearchParams|location\.(?:search|hash)|\bfetch\s*\(|XMLHttpRequest|WebSocket|sendBeacon|serviceWorker/);
  const html = fs.readFileSync(path.join(__dirname,'index.html'),'utf8');
  assert.doesNotMatch(html,/<(?:script|link|iframe)[^>]+(?:src|href)="https?:\/\//);
});

