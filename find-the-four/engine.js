/* Pure, dependency-free game rules. Browser and Node compatible. */
(function(root, factory) {
  const api = factory();
  if (typeof module === 'object' && module.exports) module.exports = api;
  else root.FourEngine = api;
})(typeof globalThis !== 'undefined' ? globalThis : this, function() {
  'use strict';
  function validatePuzzle(puzzle) {
    if (!puzzle || !Array.isArray(puzzle.groups) || puzzle.groups.length !== 4) throw new Error('Each puzzle needs four groups.');
    const words = puzzle.groups.flatMap(g => {
      if (!g.label || !g.hint || !Array.isArray(g.words) || g.words.length !== 4) throw new Error('Each group needs a label, hint and four words.');
      return g.words;
    });
    if (words.some(w => typeof w !== 'string' || !w.trim())) throw new Error('Words must be non-empty strings.');
    if (new Set(words.map(w => w.toLowerCase())).size !== 16) throw new Error('The 16 words must be unique.');
    return true;
  }
  function shuffle(items, random = Math.random) {
    const copy = items.slice();
    for (let i = copy.length - 1; i > 0; i--) {
      const j = Math.floor(random() * (i + 1));
      [copy[i], copy[j]] = [copy[j], copy[i]];
    }
    return copy;
  }
  function create(puzzle, random = Math.random) {
    validatePuzzle(puzzle);
    return {puzzle, order: shuffle(puzzle.groups.flatMap(g => g.words), random), selected: [], solved: [], guesses: [], attempts: 0};
  }
  function toggle(state, word) {
    if (!state.order.includes(word)) return 'unavailable';
    if (state.selected.includes(word)) {state.selected = state.selected.filter(w => w !== word); return 'deselected';}
    if (state.selected.length === 4) return 'full';
    state.selected.push(word); return 'selected';
  }
  function submit(state) {
    if (state.selected.length !== 4) return {type: 'incomplete'};
    const signature = [...state.selected].sort().join('\u0000');
    if (state.guesses.includes(signature)) return {type: 'repeat'};
    state.guesses.push(signature); state.attempts++;
    const groupIndex = state.puzzle.groups.findIndex((g, i) => !state.solved.some(s => s.index === i) && state.selected.every(w => g.words.includes(w)));
    if (groupIndex !== -1) {
      solve(state, groupIndex, false);
      return {type: state.solved.length === 4 ? 'complete' : 'correct', groupIndex};
    }
    const closest = Math.max(...state.puzzle.groups.filter((g, i) => !state.solved.some(s => s.index === i)).map(g => state.selected.filter(w => g.words.includes(w)).length));
    return {type: closest === 3 ? 'near' : 'different'};
  }
  function solve(state, index, revealed) {
    if (!Number.isInteger(index) || !state.puzzle.groups[index] || state.solved.some(s => s.index === index)) return false;
    state.solved.push({index, revealed});
    state.order = state.order.filter(w => !state.puzzle.groups[index].words.includes(w));
    state.selected = [];
    return true;
  }
  function reveal(state, all = false) {
    const remaining = state.puzzle.groups.map((g, i) => i).filter(i => !state.solved.some(s => s.index === i));
    (all ? remaining : remaining.slice(0, 1)).forEach(i => solve(state, i, true));
    return state.solved.length === 4;
  }
  return {validatePuzzle, shuffle, create, toggle, submit, reveal};
});
