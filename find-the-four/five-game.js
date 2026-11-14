(() => {
  'use strict';
  const E = window.FiveEngine, D = window.FiveDaily;
  const levels=window.FIVE_BANKS;
  let level='normal', choosingHint=false, choosingDonkey=false;
  try {const v=localStorage.getItem('five-maths-level');if(levels[v])level=v;}catch{}
  const MODE_KEY = 'find-the-five.mode.v1', sessionProgress = new Map(), unsavedProgress = new Set();
  let mode = 'words', puzzles;
  const $ = id => document.getElementById(id);
  let day, state, hintIndex = null, hintLevel = 0, midnightTimer, storage, storageOK = true;
  const dialog = $('help-dialog'), celebration = $('boss-celebration');
  const bossQueue = E.shuffle([0,1,2,3,4]);
  let celebrationTimer;
  function stopCelebration() {clearTimeout(celebrationTimer); celebration.hidden = true; celebration.classList.remove('active');}
  function celebrate(answer) {
    stopCelebration();
    $('number-celebration').textContent=String(answer);
    document.querySelector('.boss-cheer').textContent=countWord().toUpperCase()+' MATCHING ANSWERS!';
    celebration.hidden=false;void celebration.offsetWidth;celebration.classList.add('active');
    celebrationTimer=setTimeout(stopCelebration,3000);
  }
  try {storage = window.localStorage;} catch {storageOK = false;}
  try {if (storage.getItem(MODE_KEY) === 'maths') mode = 'maths';} catch {}
  const entryMode = document.body?.dataset.entryMode;
  if (entryMode === "words" || entryMode === "maths") mode = entryMode;
  puzzles = levels[level];
  Object.values(levels).flat().forEach(p => E.validatePuzzle(p));
  const size=()=>state.puzzle.groups.length;
  const countWord=()=>size()===4?'four':'five';
  const tileName = () => mode === 'maths' ? 'calculation' : 'word';
  function updateModeUI() {
    document.title = `Find the Five · ${mode === "maths" ? "Maths" : "Words"}`;
    $("brand-mode").textContent = mode === "maths" ? "MATHS CONNECTIONS" : "WORD CONNECTIONS";
    for (const name of ['words', 'maths']) $('mode-' + name)?.setAttribute('aria-pressed', String(name === mode));
    $('board').dataset.mode = mode;
    $('board').setAttribute('aria-label', mode === 'maths' ? 'Calculation tiles' : 'Word tiles');
    $('stage').setAttribute('aria-label', mode === 'maths' ? 'Maths challenge' : 'Word challenge');
    $('instructions').innerHTML = mode === 'maths' ? (level==='easy'?'Find <strong>4 groups of 4.</strong> Match the answers.':level==='donkey'?'Find <strong>5 groups of 5</strong> + 5 donkeys.':'Find <strong>5 groups of 5.</strong> Match the answers.') : 'Find <strong>5 groups of 5.</strong> What connects each group?';
  }
  const esc = value => String(value).replace(/[&<>"']/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
  function say(message, kind = '') { $('status').textContent = message; $('status').dataset.kind = kind; }
  function finish() {
    choosingHint=false; choosingDonkey=false;
    say((state.solved.some(s => s.revealed)||state.revealedDecoys) ? `All ${countWord()} groups shown. Come back tomorrow for a new puzzle!` : `All ${countWord()} groups found! Come back tomorrow for a new puzzle!`, 'success');
    $('discussion').textContent = `${size()} connections complete!`;
  }
  function save() {
    // A second tab must not overwrite an already completed day with an older board.
    const stored = D.read(storage, day, state.puzzle);
    if (stored.state && E.complete(stored.state) && !E.complete(state)) {
      state = stored.state; render(); finish(); return false;
    }
    const savedKey = D.key(day, state.puzzle);
    sessionProgress.set(savedKey, state);
    storageOK = D.write(storage, day, state);
    if (storageOK) unsavedProgress.delete(savedKey); else unsavedProgress.add(savedKey);
    if (!storageOK && !E.complete(state)) $('discussion').textContent = 'Progress cannot be saved in this browser';
    return true;
  }
  function schedule() {
    clearTimeout(midnightTimer);
    const now = Date.now(), next = D.describe(now, puzzles.length).nextMidnight;
    // Exact midnight timer, with a short clock-change/suspended-tab safety check.
    midnightTimer = setTimeout(() => refreshDay(), Math.max(1, Math.min(next - now, 60000)));
  }
  function loadToday(today, newDay = false) {
    stopCelebration();
    day = today;
    const stored = D.read(storage, day, puzzles[day.index]);
    storageOK = stored.available;
    const savedKey = D.key(day, puzzles[day.index]), previous = sessionProgress.get(savedKey);
    // An inactive mode may have advanced in another tab. Prefer its saved state,
    // except when this tab has changes it could not save or storage is blocked.
    const localOnly = !stored.available || unsavedProgress.has(savedKey);
    state = (stored.state && E.complete(stored.state)) ? stored.state : (localOnly && previous) || stored.state || previous || E.create(puzzles[day.index]);
    updateModeUI();
    hintIndex = null; hintLevel = 0; choosingHint=false; choosingDonkey=false;
    if (dialog.open) dialog.close();
    $('daily-date').dateTime = day.date;
    $('daily-date').textContent = new Intl.DateTimeFormat('en-AU', {weekday:'short', day:'numeric', month:'short', timeZone:'UTC'}).format(new Date(day.date + 'T00:00:00Z'));
    $('difficulty').textContent = level==='normal'?'Medium':level==='easy'?'Easy':level==='donkey'?'Mad Donkey':'Hard';
    document.querySelectorAll('button[data-level]').forEach(b=>b.setAttribute('aria-pressed',String(b.dataset.level===level)));
    $('difficulty').dataset.level = state.puzzle.difficulty;
    $('puzzle-number').textContent = mode === 'maths' ? 'MATHS · TODAY' : 'TODAY';
    $('discussion').textContent = level==='donkey'?'Find 5 groups + 5 donkeys':'Think • Talk • Connect';
    render(); save();
    if (E.complete(state)) finish();
    else say(newDay ? 'A new Perth day, a new Find the Five. Let’s connect!' : stored.state ? 'Welcome back. Today’s puzzle is just as you left it.' : `Today’s challenge. Talk it through and choose ${countWord()} ${tileName()}s.`);
    schedule();
  }
  function refreshDay(syncCompletion = false) {
    const today = D.describe(Date.now(), puzzles.length);
    if (!day || today.date !== day.date) {loadToday(today, !!day); return true;}
    if (syncCompletion) {
      const stored = D.read(storage, day, state.puzzle).state;
      if (stored && E.complete(stored) && !E.complete(state)) {
        state = stored; if (dialog.open) dialog.close(); render(); finish(); schedule(); return true;
      }
    }
    schedule(); return false;
  }
  function render(focusWord) {
    $('donkey').hidden=level!=='donkey';
    $('donkey').disabled=E.complete(state)||state.foundDecoys.length===5;
    $('donkey').setAttribute('aria-pressed',String(choosingDonkey));
    $('board').classList.toggle('donkey-pick',choosingDonkey);
    $('donkey-count').hidden=level!=='donkey';
    $('donkey-count').textContent=`${state.foundDecoys.length} / 5 donkeys found`;
    $('board').classList.toggle('hint-pick',choosingHint); $('hint').setAttribute('aria-pressed',String(choosingHint));
    $('board').dataset.size=String(size());
    $('board').innerHTML = state.solved.map(s => {
      const group = state.puzzle.groups[s.index];
      return `<button class="solved" data-group="${s.index}" data-colour="${s.index}" title="Explain this connection" aria-label="Explain ${s.revealed ? 'Revealed' : 'Found'} group: ${esc(group.label)}"><span class="group-label">${esc(group.label)}${s.revealed ? ' <span class="revealed">(revealed)</span>' : ''}</span><span class="group-words">${group.words.map(w=>`<span class="solved-equation">${esc(w)}<strong>${w.includes('__')?' → '+ '__ = ':' = '}${esc(group.answer)}</strong></span>`).join('')}</span></button>`;
    }).join('') + state.order.map(word => `<button class="tile" data-word="${esc(word)}" data-long="${word.length > 8}" aria-pressed="${state.selected.includes(word)}">${esc(word)}</button>`).join('');
    $('progress').innerHTML = Array.from({length:size()},(_,i)=>i).map(i => `<i class="${i < state.solved.length ? 'filled' : ''}"></i>`).join('');
    $('progress').setAttribute('aria-label', `${state.solved.length} of ${size()} groups ${(state.solved.some(s => s.revealed)||state.revealedDecoys) ? 'shown' : 'found'}`);
    $('selection-dots').innerHTML = Array.from({length:size()},(_,i)=>i).map(i => `<i class="${i < state.selected.length ? 'filled' : ''}"></i>`).join('');
    $('selection-count').textContent = E.complete(state) ? 'Today’s puzzle complete' : `${state.selected.length} / ${size()} selected`;
    $('check').disabled = state.selected.length !== size();
    $('deselect').disabled = !state.selected.length;
    for (const id of ['hint','shuffle','teacher','reset']) $(id).disabled = E.complete(state);
    $('reset').hidden = E.complete(state);
    if (focusWord) Array.from(document.querySelectorAll('.tile')).find(t => t.dataset.word === focusWord)?.focus({preventScroll:true});
  }
  function check() {
    if (refreshDay(true) || E.complete(state)) return;
    const result = E.submit(state);
    if (result.type === 'incomplete') return;
    if (!save()) return;
    if (result.type === 'repeat') {say(`You tried that set. Swap a ${tileName()} and explore another connection.`); return;}
    if (result.type === 'near') {say(`So close! ${size()-1} of these belong together. Try swapping one.`, 'hint'); return;}
    if (result.type === 'different') {say('Not that group yet. Keep talking and try another idea.'); return;}
    hintIndex = null; hintLevel = 0; choosingHint=false; choosingDonkey=false; $('board').classList.remove('hint-pick'); $('hint').setAttribute('aria-pressed','false'); render(); celebrate(state.puzzle.groups[result.groupIndex].answer);
    if (result.type === 'complete') {finish(); document.querySelector('.solved')?.focus({preventScroll:true});}
    else {say(state.solved.length===size()?'All groups found. Now identify the remaining donkeys.':`${state.puzzle.groups[result.groupIndex].label}! ${size() - state.solved.length} more ${state.solved.length === size()-1 ? 'group' : 'groups'} to find.`, 'success'); document.querySelector('.tile')?.focus({preventScroll:true});}
  }
  $('board').addEventListener('click', event => {
    if (refreshDay(true)) return;
    const solved = event.target.closest('.solved');
    if (solved) {const group=state.puzzle.groups[Number(solved.dataset.group)];openDialog('THE CONNECTION',group.label,group.explanation || group.easierHint || group.hint,[{label:'Back to the board',primary:true,run:()=>dialog.close()}]);return;}
    const tile = event.target.closest('.tile'); if (!tile) return;
    const word=tile.dataset.word;
    if(choosingDonkey){
      choosingDonkey=false;
      const result=E.donkey(state,word);
      render();save();
      if(result.type==='not-donkey')say('That calculation belongs in a group. Keep it on the board.','hint');
      else if(result.type==='complete')finish();
      else say(`Donkey found! ${5-state.foundDecoys.length} left to spot.`,'success');
      return;
    }
    if(choosingHint){
      choosingHint=false; $('hint').setAttribute('aria-pressed','false');
      $('board').classList.remove('hint-pick');
      const g=state.puzzle.groups.find(g=>g.words.includes(word))||state.puzzle.decoys.find(d=>d.word===word);
      openDialog('ONE CALCULATION',word,word.includes('__')?`The missing number is ${g.answer}.`:`${word} = ${g.answer}`,[{label:'Back to the board',primary:true,run:()=>dialog.close()}]);
      say('One answer shown. Keep looking for connections.','hint');return;
    }
    const result = E.toggle(state, word);
    if (result === 'full') {say(`${size()} are selected. Tap a selected ${tileName()} to swap it, or check your group.`); return;}
    render(word); if (!save()) return;
    say(state.selected.length === size() ? (mode === 'maths' ? `Do all ${countWord()} calculations have the same answer? Check your group.` : 'What connects your five words? Share your idea, then check.') : `${state.selected.length} of ${size()} selected. Keep looking for a connection.`);
  });
  $('board').addEventListener('keydown', event => {
    if (refreshDay(true) || !event.target.matches('.tile')) return;
    const tiles = [...document.querySelectorAll('.tile')], current = tiles.indexOf(event.target);
    const shifts = {ArrowLeft:-1,ArrowRight:1,ArrowUp:-size(),ArrowDown:size()}; let next;
    if (event.key in shifts) next = Math.min(tiles.length - 1, Math.max(0, current + shifts[event.key]));
    if (event.key === 'Home') next = 0;
    if (event.key === 'End') next = tiles.length - 1;
    if (next !== undefined) {event.preventDefault(); tiles[next].focus();}
  });
  $('check').addEventListener('click', check);
  $('shuffle').addEventListener('click', () => {if(refreshDay(true)||E.complete(state))return;state.order=E.shuffle(state.order);render();if(save())say(`A fresh view. Your selected ${tileName()}s stay selected.`);});
  function clearSelection() {if(refreshDay(true)||E.complete(state))return;state.selected=[];render();if(save())say('Selection cleared. Try a fresh idea.');document.querySelector('.tile')?.focus({preventScroll:true});}
  $('deselect').addEventListener('click', clearSelection);
  $('reset').addEventListener('click', () => {
    if(refreshDay(true)||E.complete(state))return;
    openDialog('TODAY ONLY','Restart today’s puzzle?',`This clears today’s ${mode} progress only. The other game stays as it is. It will not open another day’s puzzle.`,[
      {label:'Keep playing',primary:true,run:()=>dialog.close()},
      {label:'Restart today',run:()=>{if(refreshDay(true)||E.complete(state))return;stopCelebration();state=E.create(puzzles[day.index]);hintIndex=null;hintLevel=0;choosingHint=false;choosingDonkey=false;dialog.close();render();if(save())say('Same daily puzzle, fresh start.');}}
    ]);
  });
  function openDialog(kicker, title, body, actions) {
    $('dialog-kicker').textContent=kicker;$('dialog-title').textContent=title;$('dialog-body').textContent=body;$('dialog-actions').replaceChildren();
    actions.forEach(action=>{const button=document.createElement('button');button.className=`button ${action.primary?'primary':'quiet'}`;button.textContent=action.label;button.addEventListener('click',action.run);$('dialog-actions').append(button);});
    if(!dialog.open)dialog.showModal();$('dialog-close').focus();
  }
  function hint() {
    if(refreshDay(true)||E.complete(state))return;
    choosingDonkey=false;choosingHint=!choosingHint;render();
    $('hint').setAttribute('aria-pressed',String(choosingHint));
    $('board').classList.toggle('hint-pick',choosingHint);
    say(choosingHint?'Choose one calculation to see its answer. Tap Hint again to cancel.':`Hint cancelled. Choose ${countWord()} calculations.`,'hint');
  }
  $('hint').addEventListener('click',hint);
  $('donkey').addEventListener('click',()=>{
    if(refreshDay(true)||E.complete(state))return;
    choosingHint=false;choosingDonkey=!choosingDonkey;render();
    say(choosingDonkey?'Now tap one calculation that does not belong in any group.':'Donkey finder cancelled. Choose five matching answers.','hint');
  });
  $('teacher').addEventListener('click',()=>{
    if(refreshDay(true)||E.complete(state))return;
    openDialog('TEACHER TOOLS','Show a connection?',`This reveals today’s ${mode} answers only. Revealing all finishes this mode for today; come back tomorrow for the next board.`,[
      {label:'Keep playing',run:()=>dialog.close()},{label:'Reveal one group',run:()=>reveal(false)},{label:'Reveal all',primary:true,run:()=>reveal(true)}
    ]);
  });
  function reveal(all) {if(refreshDay(true)||E.complete(state))return;stopCelebration();E.reveal(state,all);hintIndex=null;hintLevel=0;dialog.close();render();if(!save())return;if(E.complete(state))finish();else say('One connection revealed. Can you find the others?','hint');}
  $('about-daily').addEventListener('click',()=>{if(refreshDay(true))return;openDialog('DAILY PLAY','A daily challenge at each level',`Easy, Medium, Hard and Mad Donkey each have 50 daily boards. Each level saves its own progress. Easy has four groups of four, with numbers up to 50 and no division. Other levels have five groups of five. Hard includes missing numbers and three-digit calculations. Match answers, including the missing number on a blank tile. Mad Donkey adds five odd calculations: tap Donkey, then one odd tile. Find all five groups and all five donkeys to finish. No names or accounts.${storageOK?'':' Progress cannot be saved in this browser.'}`,[{label:'Back to the board',primary:true,run:()=>dialog.close()}]);});
  document.querySelectorAll('button[data-level]').forEach(button=>button.addEventListener('click',()=>{
    const next=button.dataset.level;if(next===level)return;
    refreshDay(true);save();level=next;puzzles=levels[level];
    try{storage.setItem('five-maths-level',level);}catch{}
    loadToday(D.describe(Date.now(),puzzles.length));
  }));
  $('dialog-close').addEventListener('click',()=>dialog.close());
  dialog.addEventListener('click',event=>{const r=dialog.getBoundingClientRect();if(event.target===dialog&&(event.clientX<r.left||event.clientX>r.right||event.clientY<r.top||event.clientY>r.bottom))dialog.close();});
  document.addEventListener('keydown',event=>{if(refreshDay(true)||dialog.open)return;if(event.key==='Escape'){choosingHint=false;choosingDonkey=false;render();if(state.selected.length)clearSelection();}if(event.key==='Enter'&&(event.ctrlKey||event.metaKey)){event.preventDefault();check();}});
  window.addEventListener('focus',()=>refreshDay(true));
  window.addEventListener('pageshow',()=>refreshDay(true));
  document.addEventListener('visibilitychange',()=>{if(document.hidden)stopCelebration();else refreshDay(true);});
  window.addEventListener('storage',event=>{if(refreshDay())return;const key=D.key(day,state.puzzle);if(event.key===key||event.key===key+':complete'){const stored=D.read(storage,day,state.puzzle).state;if(stored){state=stored;sessionProgress.set(key,state);unsavedProgress.delete(key);hintIndex=null;hintLevel=0;if(dialog.open)dialog.close();render();if(E.complete(state))finish();else say('Today’s progress updated from another tab.');}}});
  if(!document.fullscreenEnabled)$('fullscreen').hidden=true;
  $('fullscreen').addEventListener('click',async()=>{try{if(document.fullscreenElement)await document.exitFullscreen();else await document.documentElement.requestFullscreen();}catch{say('Full screen is unavailable in this browser. The game still works here.');}});
  document.addEventListener('fullscreenchange',()=>{const label=document.fullscreenElement?'Exit full screen':'Enter full screen';$('fullscreen').title=label;$('fullscreen').setAttribute('aria-label',label);});
  loadToday(D.describe(Date.now(),puzzles.length));
})();


