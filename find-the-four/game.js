(() => {
  'use strict';
  const E = window.FourEngine, puzzles = window.FOUR_PUZZLES;
  const $ = id => document.getElementById(id);
  let puzzleIndex = 0, state, hintIndex = null, hintLevel = 0;
  const dialog = $('help-dialog');
  puzzles.forEach((p, i) => {E.validatePuzzle(p); const option = document.createElement('option'); option.value = String(i); option.textContent = `${String(i + 1).padStart(2, '0')} · ${p.title}`; $('puzzle-select').append(option);});
  const esc = value => String(value).replace(/[&<>"']/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
  function say(message, kind = '') { $('status').textContent = message; $('status').dataset.kind = kind; }
  function load(index) {
    puzzleIndex = ((index % puzzles.length) + puzzles.length) % puzzles.length;
    state = E.create(puzzles[puzzleIndex]); hintIndex = null; hintLevel = 0;
    $('puzzle-select').value = String(puzzleIndex);
    $('difficulty').textContent = state.puzzle.difficulty;
    $('difficulty').dataset.level = state.puzzle.difficulty;
    $('puzzle-number').textContent = `${puzzleIndex + 1} / ${puzzles.length}`;
    $('discussion').textContent = 'Think • Talk • Connect';
    render(); say('Talk it through. Choose four words to begin.');
  }
  function render(focusWord) {
    $('board').innerHTML = state.solved.map(s => {
      const group = state.puzzle.groups[s.index];
      return `<button class="solved" data-group="${s.index}" data-colour="${s.index}" title="Explain this connection" aria-label="Explain ${s.revealed ? 'Revealed' : 'Found'} group: ${esc(group.label)}"><span class="group-label">${esc(group.label)}${s.revealed ? ' <span class="revealed">(revealed)</span>' : ''}</span><span class="group-words">${group.words.map(esc).join(' · ')}</span></button>`;
    }).join('') + state.order.map(word => `<button class="tile" data-word="${esc(word)}" data-long="${word.length > 8}" aria-pressed="${state.selected.includes(word)}">${esc(word)}</button>`).join('');
    $('progress').innerHTML = [0,1,2,3].map(i => `<i class="${i < state.solved.length ? 'filled' : ''}"></i>`).join('');
    $('progress').setAttribute('aria-label', `${state.solved.length} of 4 groups ${state.solved.some(s => s.revealed) ? 'shown' : 'found'}`);
    $('selection-dots').innerHTML = [0,1,2,3].map(i => `<i class="${i < state.selected.length ? 'filled' : ''}"></i>`).join('');
    $('selection-count').textContent = `${state.selected.length} / 4 selected`;
    $('check').disabled = state.selected.length !== 4;
    $('deselect').disabled = !state.selected.length;
    $('hint').disabled = state.solved.length === 4;
    $('shuffle').disabled = state.solved.length === 4;
    $('teacher').disabled = state.solved.length === 4;
    if (focusWord) Array.from(document.querySelectorAll('.tile')).find(t => t.dataset.word === focusWord)?.focus({preventScroll:true});
  }
  function check() {
    const result = E.submit(state);
    if (result.type === 'incomplete') return;
    if (result.type === 'repeat') {say('You tried that set. Swap a word and explore another connection.'); return;}
    if (result.type === 'near') {say('So close! Three of these belong together. Try swapping one.', 'hint'); return;}
    if (result.type === 'different') {say('Not that group yet. Keep talking and try another idea.'); return;}
    hintIndex = null; hintLevel = 0; render();
    if (result.type === 'complete') {
      say(state.solved.some(s => s.revealed) ? 'All four groups are shown. Which connection surprised you?' : 'Four groups found! Brilliant connections, everyone.', 'success');
      $('discussion').textContent = 'Can you add one more word to a group?';
      $('next').focus({preventScroll:true});
    } else {
      say(`${state.puzzle.groups[result.groupIndex].label}! ${4 - state.solved.length} more ${state.solved.length === 3 ? 'group' : 'groups'} to find.`, 'success');
      document.querySelector('.tile')?.focus({preventScroll:true});
    }
  }
  $('board').addEventListener('click', event => {
    const solved = event.target.closest('.solved'); if (solved) { const group=state.puzzle.groups[Number(solved.dataset.group)]; openDialog('THE CONNECTION',group.label,group.explanation || group.easierHint || group.hint,[{label:'Back to the board',primary:true,run:()=>dialog.close()}]); return; }
    const tile = event.target.closest('.tile'); if (!tile) return;
    const word = tile.dataset.word, result = E.toggle(state, word);
    if (result === 'full') {say('Four are selected. Tap a selected word to swap it, or check your group.'); return;}
    render(word);
    say(state.selected.length === 4 ? 'What connects your four words? Share your idea, then check.' : `${state.selected.length} of 4 selected. Keep looking for a connection.`);
  });
  $('board').addEventListener('keydown', event => {
    if (!event.target.matches('.tile')) return;
    const tiles = [...document.querySelectorAll('.tile')], current = tiles.indexOf(event.target);
    const shifts = {ArrowLeft:-1,ArrowRight:1,ArrowUp:-4,ArrowDown:4};
    let next;
    if (event.key in shifts) next = Math.min(tiles.length - 1, Math.max(0, current + shifts[event.key]));
    if (event.key === 'Home') next = 0;
    if (event.key === 'End') next = tiles.length - 1;
    if (next !== undefined) {event.preventDefault(); tiles[next].focus();}
  });
  $('check').addEventListener('click', check);
  $('shuffle').addEventListener('click', () => {state.order = E.shuffle(state.order); render(); say('A fresh view. Your selected words stay selected.');});
  $('deselect').addEventListener('click', () => {state.selected = []; render(); say('Selection cleared. Try a fresh idea.'); document.querySelector('.tile')?.focus({preventScroll:true});});
  $('reset').addEventListener('click', () => {load(puzzleIndex); say('Same puzzle, fresh start.');});
  $('next').addEventListener('click', () => {load(puzzleIndex + 1); say(`Puzzle ${puzzleIndex + 1}: ${state.puzzle.title}. Find a new connection.`);});
  $('puzzle-select').addEventListener('change', event => load(Number(event.target.value)));
  function openDialog(kicker, title, body, actions) {
    $('dialog-kicker').textContent = kicker; $('dialog-title').textContent = title; $('dialog-body').textContent = body;
    $('dialog-actions').replaceChildren();
    actions.forEach(action => {const button = document.createElement('button');button.className = `button ${action.primary ? 'primary' : 'quiet'}`;button.textContent = action.label;button.addEventListener('click', action.run);$('dialog-actions').append(button);});
    if (!dialog.open) dialog.showModal();
    $('dialog-close').focus();
  }
  function hint() {
    if (state.solved.length === 4) return;
    if (hintIndex === null || state.solved.some(s => s.index === hintIndex)) {hintIndex = state.puzzle.groups.findIndex((g, i) => !state.solved.some(s => s.index === i));hintLevel = 0;}
    const group = state.puzzle.groups[hintIndex];
    openDialog('A LITTLE NUDGE', hintLevel ? 'One more clue…' : 'Look a little closer', hintLevel ? (group.easierHint || `One word in this group is ${group.words[0]}. ${group.hint}`) : group.hint, [{label:'Back to the board',primary:true,run:() => dialog.close()},...(hintLevel ? [] : [{label:'More help',run:() => {hintLevel = 1; hint();}}])]);
  }
  $('hint').addEventListener('click', hint);
  $('teacher').addEventListener('click', () => openDialog('TEACHER TOOLS', 'Show a connection?', 'This will reveal the answer on the class screen. You can show one group or all remaining groups.', [
    {label:'Keep playing',run:() => dialog.close()},
    {label:'Reveal one group',run:() => reveal(false)},
    {label:'Reveal all',primary:true,run:() => reveal(true)}
  ]));
  function reveal(all) {E.reveal(state, all);hintIndex=null;hintLevel=0;dialog.close();render();say(state.solved.length === 4 ? 'All four groups are shown. Can you explain each connection?' : 'One connection revealed. Can you find the others?', 'hint');if(state.solved.length===4)$('discussion').textContent='Can you add one more word to a group?';}
  $('dialog-close').addEventListener('click', () => dialog.close());
  dialog.addEventListener('click', event => {const r=dialog.getBoundingClientRect();if(event.target===dialog&&(event.clientX<r.left||event.clientX>r.right||event.clientY<r.top||event.clientY>r.bottom))dialog.close();});
  document.addEventListener('keydown', event => {if(dialog.open)return;if(event.key==='Escape'&&state.selected.length){state.selected=[];render();say('Selection cleared.');}if(event.key==='Enter'&&(event.ctrlKey||event.metaKey)){event.preventDefault();check();}});
  if (!document.fullscreenEnabled) $('fullscreen').hidden=true;
  $('fullscreen').addEventListener('click', async () => {try {if(document.fullscreenElement)await document.exitFullscreen();else await document.documentElement.requestFullscreen();} catch {say('Full screen is unavailable in this browser. The game still works here.');}});
  document.addEventListener('fullscreenchange', () => {const label=document.fullscreenElement?'Exit full screen':'Enter full screen';$('fullscreen').title=label;$('fullscreen').setAttribute('aria-label',label);});
  load(0);
})();
