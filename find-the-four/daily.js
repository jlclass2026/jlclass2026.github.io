/* Perth calendar-day assignment and local-only progress. No personal data. */
(function(root, factory) {
  if (typeof module === 'object' && module.exports) module.exports = factory(require('./engine'));
  else root.FourDaily = factory(root.FourEngine);
})(typeof globalThis !== 'undefined' ? globalThis : this, function(E) {
  'use strict';
  const DAY = 86400000, OFFSET = 8 * 3600000;
  const ANCHOR = Date.UTC(2026, 9, 23) / DAY;
  const VERSION = 1, PREFIX = 'find-the-four.daily.v1:';
  function describe(now, count) {
    const ms = Number(now);
    if (!Number.isFinite(ms) || !Number.isInteger(count) || count < 1) throw new Error('Invalid daily puzzle date or bank.');
    // Perth is UTC+8 year-round. UTC arithmetic avoids the device's local zone/DST.
    const day = Math.floor((ms + OFFSET) / DAY);
    return {date:new Date(day * DAY).toISOString().slice(0,10), index:((day - ANCHOR) % count + count) % count, nextMidnight:(day + 1) * DAY - OFFSET};
  }
  function fingerprint(puzzle) {
    const text = JSON.stringify(puzzle.groups.map(g => [g.label, g.words]));
    let hash = 2166136261;
    for (let i = 0; i < text.length; i++) hash = Math.imul(hash ^ text.charCodeAt(i), 16777619);
    return (hash >>> 0).toString(36);
  }
  function key(day, puzzle) {return `${PREFIX}${day.date}:${puzzle.id}:${fingerprint(puzzle)}`;}
  function encode(day, state) {
    return JSON.stringify({version:VERSION,date:day.date,puzzleId:state.puzzle.id,fingerprint:fingerprint(state.puzzle),order:state.order,selected:state.selected,solved:state.solved,guesses:state.guesses,attempts:state.attempts});
  }
  function decode(raw, day, puzzle) {
    try {
      if (typeof raw !== 'string' || raw.length > 200000) return null;
      const data = JSON.parse(raw), words = puzzle.groups.flatMap(g => g.words);
      if (!data || data.version !== VERSION || data.date !== day.date || data.puzzleId !== puzzle.id || data.fingerprint !== fingerprint(puzzle)) return null;
      if (!Array.isArray(data.solved) || data.solved.length > 4 || data.solved.some(s => !s || !Number.isInteger(s.index) || s.index < 0 || s.index > 3 || typeof s.revealed !== 'boolean') || new Set(data.solved.map(s => s.index)).size !== data.solved.length) return null;
      const remaining = words.filter(w => !data.solved.some(s => puzzle.groups[s.index].words.includes(w)));
      if (!Array.isArray(data.order) || data.order.length !== remaining.length || new Set(data.order).size !== data.order.length || data.order.some(w => !remaining.includes(w))) return null;
      if (!Array.isArray(data.selected) || data.selected.length > 4 || new Set(data.selected).size !== data.selected.length || data.selected.some(w => !data.order.includes(w))) return null;
      if (!Array.isArray(data.guesses) || data.guesses.length > 1820 || new Set(data.guesses).size !== data.guesses.length || data.guesses.some(g => {if(typeof g !== 'string')return true;const set=g.split('\u0000');return set.length!==4||new Set(set).size!==4||set.some(w=>!words.includes(w))||set.slice().sort().join('\u0000')!==g;})) return null;
      if (!Number.isInteger(data.attempts) || data.attempts !== data.guesses.length) return null;
      const correct = puzzle.groups.map(g => g.words.slice().sort().join('\u0000'));
      if (data.solved.some(s => !s.revealed && !data.guesses.includes(correct[s.index]))) return null;
      if (correct.some((signature,index) => data.guesses.includes(signature) && !data.solved.some(s => s.index === index))) return null;
      return {puzzle,order:data.order.slice(),selected:data.selected.slice(),solved:data.solved.map(s=>({index:s.index,revealed:s.revealed})),guesses:data.guesses.slice(),attempts:data.attempts};
    } catch {return null;}
  }
  function read(storage, day, puzzle) {
    try {
      const savedKey = key(day,puzzle);
      const complete = decode(storage.getItem(savedKey + ':complete'),day,puzzle);
      return {state:complete?.solved.length === 4 ? complete : decode(storage.getItem(savedKey),day,puzzle),available:true};
    }
    catch {return {state:null,available:false};}
  }
  function write(storage, day, state) {
    try {
      const savedKey = key(day,state.puzzle), data = encode(day,state);
      // A separate completion record cannot be erased by an older open tab.
      if (state.solved.length === 4) storage.setItem(savedKey + ':complete',data);
      storage.setItem(savedKey,data); return true;
    }
    catch {return false;}
  }
  return {describe,key,encode,decode,read,write,PREFIX};
});
