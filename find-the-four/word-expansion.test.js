'use strict';
const test = require('node:test');
const assert = require('node:assert/strict');
const crypto = require('node:crypto');
const fs = require('node:fs');
const path = require('node:path');
const E = require('./engine');
const puzzles = require('./puzzles');
const added = puzzles.slice(20);
const signature = group => [...group.words].sort().join('|');
const digest = text => crypto.createHash('sha256').update(text).digest('hex');

test('word expansion adds exactly 25 boards / 100 groups / 400 tiles', () => {
  assert.equal(puzzles.length, 45);
  assert.equal(added.length, 25);
  assert.equal(added.flatMap(p=>p.groups).length, 100);
  assert.equal(added.flatMap(p=>p.groups.flatMap(g=>g.words)).length, 400);
  assert.equal(new Set(puzzles.map(p=>p.id)).size,45);
  assert.equal(new Set(added.map(p=>p.title)).size,25);
});

test('the original 20 word boards and maths bank are unchanged', () => {
  assert.equal(digest(JSON.stringify(puzzles.slice(0,20))), '19e10174af4e27a33b91c8aead1a6c97b1540c35f2371b2519ab8a49d207b533');
  assert.equal(digest(fs.readFileSync(path.join(__dirname,'maths-puzzles.js'))), '85562c056071a2b4753f1e086918b842a0d278e6c374434bde81b3bee3c54f51');
});

test('no new complete group duplicates an existing group or another addition', () => {
  const seen = new Set(puzzles.slice(0,20).flatMap(p=>p.groups.map(signature)));
  for(const puzzle of added)for(const group of puzzle.groups){
    assert.ok(!seen.has(signature(group)), `${puzzle.id}: repeated group ${group.label}`);
    seen.add(signature(group));
  }
});

const months=new Set(['JANUARY','FEBRUARY','MARCH','APRIL','MAY','JUNE','JULY','AUGUST','SEPTEMBER','OCTOBER','NOVEMBER','DECEMBER']);
for(const puzzle of added){
  test(`${puzzle.id}: concise words, precise clues and consistent tile presentation`, () => {
    assert.equal(E.validatePuzzle(puzzle),true);
    assert.ok(['Stretch','Challenge'].includes(puzzle.difficulty));
    assert.ok(puzzle.title.length>3 && puzzle.title.length<=45);
    for(const group of puzzle.groups){
      for(const key of ['label','hint','easierHint','explanation'])assert.ok(typeof group[key]==='string' && group[key].trim().length>=(key==='label'?3:8),`${puzzle.id}: ${key}`);
      assert.ok(group.label.length<=65);
      assert.ok(group.hint.length<=240);
      assert.ok(group.easierHint.length<=350);
      assert.ok(group.explanation.length<=650);
      for(const tile of group.words){
        assert.equal(tile,tile.trim().toUpperCase());
        assert.ok(tile.length<=16,`${puzzle.id}: ${tile} too long`);
        assert.match(tile,/^[A-Z][A-Z '’\-]*$/,`${puzzle.id}: ${tile} has numerical/symbolic formatting`);
        assert.ok(!months.has(tile) || tile==='MARCH',`${puzzle.id}: an isolated month name`);
      }
    }
  });
}
