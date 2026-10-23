(() => {
  'use strict';
  const E = window.FourEngine, D = window.FourDaily, puzzles = window.FOUR_PUZZLES;
  const $ = id => document.getElementById(id);
  let day, state, hintIndex = null, hintLevel = 0, midnightTimer, storage, storageOK = true;
  const dialog = $('help-dialog');
  try {storage = window.localStorage;} catch {storageOK = false;}
  puzzles.forEach(p => E.validatePuzzle(p));
  const esc = value => String(value).replace(/[&<>"']/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
  function say(message, kind = '') { $('status').textContent = message; $('status').dataset.kind = kind; }
  function finish() {
    say(state.solved.some(s => s.revealed) ? 'All four groups shown. Come back tomorrow for a new Find the Four!' : 'Four groups found! Come back tomorrow for a new Find the Four!', 'success');
    $('discussion').textContent = 'Next puzzle at midnight · Perth';
  }
  function save() {
    // A second tab must not overwrite an already completed day with an older board.
    const stored = D.read(storage, day, state.puzzle);
    if (stored.state?.solved.length === 4 && state.solved.length < 4) {
      state = stored.state; render(); finish(); return false;
    }
    storageOK = D.write(storage, day, state);
    if (!storageOK && state.solved.length < 4) $('discussion').textContent = 'Progress cannot be saved in this browser';
    return true;
  }
  function schedule() {
    clearTimeout(midnightTimer);
    const now = Date.now(), next = D.describe(now, puzzles.length).nextMidnight;
    // Exact midnight timer, with a short clock-change/suspended-tab safety check.
    midnightTimer = setTimeout(() => refreshDay(), Math.max(1, Math.min(next - now, 60000)));
  }
  function loadToday(today, newDay = false) {
    day = today;
    const stored = D.read(storage, day, puzzles[day.index]);
    storageOK = stored.available;
    state = stored.state || E.create(puzzles[day.index]);
    hintIndex = null; hintLevel = 0;
    if (dialog.open) dialog.close();
    $('daily-date').dateTime = day.date;
    $('daily-date').textContent = new Intl.DateTimeFormat('en-AU', {weekday:'short', day:'numeric', month:'short', timeZone:'UTC'}).format(new Date(day.date + 'T00:00:00Z'));
    $('difficulty').textContent = state.puzzle.difficulty;
    $('difficulty').dataset.level = state.puzzle.difficulty;
    $('puzzle-number').textContent = 'TODAY';
    $('discussion').textContent = 'Think • Talk • Connect';
    render(); save();
    if (state.solved.length === 4) finish();
    else say(newDay ? 'A new Perth day, a new Find the Four. Let’s connect!' : stored.state ? 'Welcome back. Today’s puzzle is just as you left it.' : 'Today’s challenge. Talk it through and choose four words.');
    schedule();
  }
  function refreshDay(syncCompletion = false) {
    const today = D.describe(Date.now(), puzzles.length);
    if (!day || today.date !== day.date) {loadToday(today, !!day); return true;}
    if (syncCompletion) {
      const stored = D.read(storage, day, state.puzzle).state;
      if (stored?.solved.length === 4 && state.solved.length < 4) {
        state = stored; if (dialog.open) dialog.close(); render(); finish(); schedule(); return true;
      }
    }
    schedule(); return false;
  }
  function render(focusWord) {
    $('board').innerHTML = state.solved.map(s => {
      const group = state.puzzle.groups[s.index];
      return `<button class="solved" data-group="${s.index}" data-colour="${s.index}" title="Explain this connection" aria-label="Explain ${s.revealed ? 'Revealed' : 'Found'} group: ${esc(group.label)}"><span class="group-label">${esc(group.label)}${s.revealed ? ' <span class="revealed">(revealed)</span>' : ''}</span><span class="group-words">${group.words.map(esc).join(' · ')}</span></button>`;
    }).join('') + state.order.map(word => `<button class="tile" data-word="${esc(word)}" data-long="${word.length > 8}" aria-pressed="${state.selected.includes(word)}">${esc(word)}</button>`).join('');
    $('progress').innerHTML = [0,1,2,3].map(i => `<i class="${i < state.solved.length ? 'filled' : ''}"></i>`).join('');
    $('progress').setAttribute('aria-label', `${state.solved.length} of 4 groups ${state.solved.some(s => s.revealed) ? 'shown' : 'found'}`);
    $('selection-dots').innerHTML = [0,1,2,3].map(i => `<i class="${i < state.selected.length ? 'filled' : ''}"></i>`).join('');
    $('selection-count').textContent = state.solved.length === 4 ? 'Today’s puzzle complete' : `${state.selected.length} / 4 selected`;
    $('check').disabled = state.selected.length !== 4;
    $('deselect').disabled = !state.selected.length;
    for (const id of ['hint','shuffle','teacher','reset']) $(id).disabled = state.solved.length === 4;
    $('reset').hidden = state.solved.length === 4;
    if (focusWord) Array.from(document.querySelectorAll('.tile')).find(t => t.dataset.word === focusWord)?.focus({preventScroll:true});
  }
  function check() {
    if (refreshDay(true) || state.solved.length === 4) return;
    const result = E.submit(state);
    if (result.type === 'incomplete') return;
    if (!save()) return;
    if (result.type === 'repeat') {say('You tried that set. Swap a word and explore another connection.'); return;}
    if (result.type === 'near') {say('So close! Three of these belong together. Try swapping one.', 'hint'); return;}
    if (result.type === 'different') {say('Not that group yet. Keep talking and try another idea.'); return;}
    hintIndex = null; hintLevel = 0; render();
    if (result.type === 'complete') {finish(); document.querySelector('.solved')?.focus({preventScroll:true});}
    else {say(`${state.puzzle.groups[result.groupIndex].label}! ${4 - state.solved.length} more ${state.solved.length === 3 ? 'group' : 'groups'} to find.`, 'success'); document.querySelector('.tile')?.focus({preventScroll:true});}
  }
  $('board').addEventListener('click', event => {
    if (refreshDay(true)) return;
    const solved = event.target.closest('.solved');
    if (solved) {const group=state.puzzle.groups[Number(solved.dataset.group)];openDialog('THE CONNECTION',group.label,group.explanation || group.easierHint || group.hint,[{label:'Back to the board',primary:true,run:()=>dialog.close()}]);return;}
    const tile = event.target.closest('.tile'); if (!tile) return;
    const word = tile.dataset.word, result = E.toggle(state, word);
    if (result === 'full') {say('Four are selected. Tap a selected word to swap it, or check your group.'); return;}
    render(word); if (!save()) return;
    say(state.selected.length === 4 ? 'What connects your four words? Share your idea, then check.' : `${state.selected.length} of 4 selected. Keep looking for a connection.`);
  });
  $('board').addEventListener('keydown', event => {
    if (refreshDay(true) || !event.target.matches('.tile')) return;
    const tiles = [...document.querySelectorAll('.tile')], current = tiles.indexOf(event.target);
    const shifts = {ArrowLeft:-1,ArrowRight:1,ArrowUp:-4,ArrowDown:4}; let next;
    if (event.key in shifts) next = Math.min(tiles.length - 1, Math.max(0, current + shifts[event.key]));
    if (event.key === 'Home') next = 0;
    if (event.key === 'End') next = tiles.length - 1;
    if (next !== undefined) {event.preventDefault(); tiles[next].focus();}
  });
  $('check').addEventListener('click', check);
  $('shuffle').addEventListener('click', () => {if(refreshDay(true)||state.solved.length===4)return;state.order=E.shuffle(state.order);render();if(save())say('A fresh view. Your selected words stay selected.');});
  function clearSelection() {if(refreshDay(true)||state.solved.length===4)return;state.selected=[];render();if(save())say('Selection cleared. Try a fresh idea.');document.querySelector('.tile')?.focus({preventScroll:true});}
  $('deselect').addEventListener('click', clearSelection);
  $('reset').addEventListener('click', () => {
    if(refreshDay(true)||state.solved.length===4)return;
    openDialog('TODAY ONLY','Restart today’s puzzle?','This clears your progress on this puzzle. It will not open another day’s puzzle.',[
      {label:'Keep playing',primary:true,run:()=>dialog.close()},
      {label:'Restart today',run:()=>{if(refreshDay(true)||state.solved.length===4)return;state=E.create(puzzles[day.index]);hintIndex=null;hintLevel=0;dialog.close();render();if(save())say('Same daily puzzle, fresh start.');}}
    ]);
  });
  function openDialog(kicker, title, body, actions) {
    $('dialog-kicker').textContent=kicker;$('dialog-title').textContent=title;$('dialog-body').textContent=body;$('dialog-actions').replaceChildren();
    actions.forEach(action=>{const button=document.createElement('button');button.className=`button ${action.primary?'primary':'quiet'}`;button.textContent=action.label;button.addEventListener('click',action.run);$('dialog-actions').append(button);});
    if(!dialog.open)dialog.showModal();$('dialog-close').focus();
  }
  function hint() {
    if(refreshDay(true)||state.solved.length===4)return;
    if(hintIndex===null||state.solved.some(s=>s.index===hintIndex)){hintIndex=state.puzzle.groups.findIndex((g,i)=>!state.solved.some(s=>s.index===i));hintLevel=0;}
    const group=state.puzzle.groups[hintIndex];
    openDialog('A LITTLE NUDGE',hintLevel?'One more clue…':'Look a little closer',hintLevel?(group.easierHint||`One word in this group is ${group.words[0]}. ${group.hint}`):group.hint,[{label:'Back to the board',primary:true,run:()=>dialog.close()},...(hintLevel?[]:[{label:'More help',run:()=>{hintLevel=1;hint();}}])]);
  }
  $('hint').addEventListener('click',hint);
  $('teacher').addEventListener('click',()=>{
    if(refreshDay(true)||state.solved.length===4)return;
    openDialog('TEACHER TOOLS','Show a connection?','This reveals answers for today only. Revealing all finishes today’s puzzle; the next one arrives at midnight in Perth.',[
      {label:'Keep playing',run:()=>dialog.close()},{label:'Reveal one group',run:()=>reveal(false)},{label:'Reveal all',primary:true,run:()=>reveal(true)}
    ]);
  });
  function reveal(all) {if(refreshDay(true)||state.solved.length===4)return;E.reveal(state,all);hintIndex=null;hintLevel=0;dialog.close();render();if(!save())return;if(state.solved.length===4)finish();else say('One connection revealed. Can you find the others?','hint');}
  $('about-daily').addEventListener('click',()=>{if(refreshDay(true))return;openDialog('DAILY PLAY','One shared challenge each day',`Everyone gets the same puzzle for the Perth date. A different board arrives at midnight, even if this page stays open. This bank has ${puzzles.length} puzzles and repeats after ${puzzles.length} days. Progress is saved only in this browser, with no names or accounts.${storageOK?'':' This browser is currently blocking progress saving.'}`,[{label:'Back to the board',primary:true,run:()=>dialog.close()}]);});
  $('dialog-close').addEventListener('click',()=>dialog.close());
  dialog.addEventListener('click',event=>{const r=dialog.getBoundingClientRect();if(event.target===dialog&&(event.clientX<r.left||event.clientX>r.right||event.clientY<r.top||event.clientY>r.bottom))dialog.close();});
  document.addEventListener('keydown',event=>{if(refreshDay(true)||dialog.open)return;if(event.key==='Escape'&&state.selected.length)clearSelection();if(event.key==='Enter'&&(event.ctrlKey||event.metaKey)){event.preventDefault();check();}});
  window.addEventListener('focus',()=>refreshDay(true));
  window.addEventListener('pageshow',()=>refreshDay(true));
  document.addEventListener('visibilitychange',()=>{if(!document.hidden)refreshDay(true);});
  window.addEventListener('storage',event=>{if(refreshDay())return;const key=D.key(day,state.puzzle);if(event.key===key||event.key===key+':complete'){const stored=D.read(storage,day,state.puzzle).state;if(stored){state=stored;hintIndex=null;hintLevel=0;if(dialog.open)dialog.close();render();if(state.solved.length===4)finish();else say('Today’s progress updated from another tab.');}}});
  if(!document.fullscreenEnabled)$('fullscreen').hidden=true;
  $('fullscreen').addEventListener('click',async()=>{try{if(document.fullscreenElement)await document.exitFullscreen();else await document.documentElement.requestFullscreen();}catch{say('Full screen is unavailable in this browser. The game still works here.');}});
  document.addEventListener('fullscreenchange',()=>{const label=document.fullscreenElement?'Exit full screen':'Enter full screen';$('fullscreen').title=label;$('fullscreen').setAttribute('aria-label',label);});
  loadToday(D.describe(Date.now(),puzzles.length));
})();
