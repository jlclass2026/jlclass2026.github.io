(() => {
  'use strict';
  const audio = document.getElementById('portal-music');
  const music = document.getElementById('music-toggle');
  const musicStatus = document.getElementById('music-status');
  let musicChoice = null, wantsMusic = false, request = 0;
  try { musicChoice = sessionStorage.getItem('new-world-portal-music'); } catch (_) {}
  audio.volume = 0.38;
  function saveMusic(value) {
    musicChoice = value;
    try { sessionStorage.setItem('new-world-portal-music', value); } catch (_) {}
  }
  function musicLabel(playing) {
    music.setAttribute('aria-pressed', String(playing));
    music.setAttribute('aria-label', playing ? 'Pause music' : 'Play music');
    music.title = playing ? 'Pause music' : 'Play music';
  }
  async function startMusic() {
    wantsMusic = true;
    const current = ++request;
    try {
      await audio.play();
      if (current !== request || !wantsMusic) { if (!wantsMusic) audio.pause(); return; }
      saveMusic('on'); musicLabel(true);
      musicStatus.textContent = 'TwiggyNook Grove music is playing.';
    } catch (_) {
      if (current !== request) return;
      wantsMusic = false; musicLabel(false);
      musicStatus.textContent = 'Select Play music to start the soundtrack.';
    }
  }
  function pauseMusic() { ++request; wantsMusic = false; audio.pause(); musicLabel(false); }
  music.addEventListener('click', () => {
    if (!audio.paused || wantsMusic) {
      pauseMusic(); saveMusic('off'); musicStatus.textContent = 'Music paused.';
    } else startMusic();
  });
  audio.addEventListener('error', () => {
    pauseMusic(); musicStatus.textContent = 'The music could not load. You can still explore every portal.';
  });
  addEventListener('pagehide', pauseMusic);
  addEventListener('pageshow', event => { if (event.persisted && musicChoice === 'on') startMusic(); });
  if (musicChoice !== 'off') startMusic(); else musicLabel(false);
  let resumeAfterHidden = false;
  document.addEventListener('visibilitychange', () => {
    if (document.hidden) { resumeAfterHidden = !audio.paused || wantsMusic; pauseMusic(); }
    else if (resumeAfterHidden && musicChoice === 'on') { resumeAfterHidden = false; startMusic(); }
  });
  document.addEventListener('click', event => {
    if (musicChoice !== 'off' && audio.paused && !wantsMusic && event.target.closest('a[href^="#"]')) startMusic();
  });
  const views = [...document.querySelectorAll('.home-view, .menu-view')];
  const allowed = new Set(views.map(v => v.id));
  const motion = document.getElementById('motion-toggle');
  const reduced = window.matchMedia('(prefers-reduced-motion: reduce)');
  let manualMotion = null;
  function setMotion() {
    const paused = manualMotion === null ? reduced.matches : manualMotion;
    document.body.classList.toggle('effects-paused', paused);
    document.body.classList.toggle('effects-enabled', manualMotion === false);
    motion.setAttribute('aria-pressed', String(paused));
    motion.setAttribute('aria-label', paused ? 'Enable ambient effects' : 'Pause ambient effects');
    motion.title = paused ? 'Enable ambient effects' : 'Pause ambient effects';
  }
  motion.addEventListener('click', () => { manualMotion = !document.body.classList.contains('effects-paused'); setMotion(); });
  if (reduced.addEventListener) reduced.addEventListener('change', setMotion);
  else if (reduced.addListener) reduced.addListener(setMotion);
  setMotion();
  function route(focus = true) {
    let requested = location.hash.slice(1);
    if (requested === 'new-world') requested = 'squishy-market';
    const id = allowed.has(requested) ? requested : 'home';
    views.forEach(v => { v.hidden = v.id !== id; });
    document.body.dataset.view = id;
    document.querySelectorAll('.menu-tabs a').forEach(a => {
      if (a.hash === '#' + id) a.setAttribute('aria-current', 'page'); else a.removeAttribute('aria-current');
    });
    const names = {'class-games':'Class Games','student-games':'Student Games','squishy-market':'Squishy Market'};
    document.title = id === 'home' ? 'Vandawoods' : `${names[id]} · Vandawoods`;
    window.scrollTo({top:0,behavior:'instant'});
    if (focus) (id === 'home' ? document.querySelector('.scene-portal') : document.getElementById(id + '-title')).focus({preventScroll:true});
  }
  addEventListener('hashchange', () => route());
  route(false);
  const search = document.querySelector('.search-label input');
  const cards = [...document.querySelectorAll('#class-games .game-tile')];
  search.addEventListener('input', () => {
    const term = search.value.trim().toLowerCase(); let count = 0;
    cards.forEach(card => { card.hidden = !card.dataset.search.includes(term); if (!card.hidden) count++; });
    document.querySelector('#class-games .no-results').hidden = count > 0;
  });
  document.querySelectorAll('.game-tile img').forEach(img => img.addEventListener('error', () => { img.hidden = true; }, {once:true}));
  document.querySelector('.world-scene').addEventListener('error', () => document.body.classList.add('art-unavailable'), {once:true});
})();

// Teacher convenience gate only. Public static assets are not private storage.
(() => {
  'use strict';
  const panel = document.querySelector('#class-games .menu-panel');
  if (!panel) return;
  const footer = document.createElement('footer');
  footer.className = 'patch-footer';
  const trigger = document.createElement('button');
  trigger.type = 'button'; trigger.className = 'patch-trigger'; trigger.textContent = 'Shhh';
  trigger.setAttribute('aria-haspopup', 'dialog');
  footer.append(trigger); panel.append(footer);
  const dialog = document.createElement('dialog');
  dialog.className = 'patch-dialog';
  dialog.setAttribute('aria-labelledby', 'patch-title');
  dialog.innerHTML = '<h2 id="patch-title">Shhh downloads</h2><p>Choose your file, then enter the teacher PIN.</p><label for="patch-file">File</label><select id="patch-file"><option value="market">Squishy Market offers — 18 November</option><option value="cold-task">Persuasive cold task: holiday destination</option><option value="health">Year 3 Health test</option></select><label for="patch-pin">PIN</label><input id="patch-pin" type="password" autocomplete="off" spellcheck="false"><p id="patch-status" role="status" aria-live="polite"></p><div class="patch-actions"><button type="button" class="patch-cancel">Cancel</button><button type="button" class="patch-download">Download</button></div>';
  document.body.append(dialog);
  const input = dialog.querySelector('input');
  const status = dialog.querySelector('#patch-status');
  const download = dialog.querySelector('.patch-download');
  let downloading = false;
  function close() { dialog.close(); }
  function reset() { input.value = ''; status.textContent = ''; downloading = false; download.disabled = false; }
  trigger.addEventListener('click', () => { reset(); dialog.showModal(); input.focus(); });
  dialog.querySelector('.patch-cancel').addEventListener('click', close);
  dialog.addEventListener('close', () => { reset(); if (document.body.dataset.view === 'class-games') trigger.focus(); });
  addEventListener('hashchange', () => { if (dialog.open) close(); });
  dialog.addEventListener('click', event => { if (event.target === dialog) { const r = dialog.getBoundingClientRect(); if (event.clientX < r.left || event.clientX > r.right || event.clientY < r.top || event.clientY > r.bottom) close(); } });
  function startDownload() {
    if (downloading) return;
    if (input.value !== 'Hello12') { status.textContent = 'That PIN did not match. Try again.'; input.select(); input.focus(); return; }
    downloading = true; download.disabled = true; input.value = '';
    if (dialog.querySelector('#patch-file').value === 'market') {
      const link = document.createElement('a');
      link.href = '/patches/squishy-market-offers-2026-11-18.json';
      link.download = 'Squishy-Market-Offers-2026-11-18.json';
      document.body.append(link); link.click(); link.remove();
      status.textContent = 'Market import download requested. Choose this JSON in your game’s offer import.';
      downloading = false; download.disabled = false;
      return;
    }
    if (dialog.querySelector('#patch-file').value === 'cold-task') {
      const prompt = 'Cold task: The best holiday destination\n\nYour family is deciding where to go for their next holiday. Where do you think they should go?\n\nWrite a persuasive text to convince your family to choose your destination. Give reasons and examples to explain why it would be a great place to visit.\n';
      const link = document.createElement('a');
      link.href = 'data:text/plain;charset=utf-8,' + encodeURIComponent(prompt);
      link.download = 'Year 3 Persuasive Cold Task - Holiday Destination.txt';
      document.body.append(link); link.click(); link.remove();
      status.textContent = prompt;
      status.style.whiteSpace = 'pre-wrap';
      downloading = false; download.disabled = false;
      return;
    }
    const link = document.createElement('a');
    link.href = '/patches/latest-patch.zip?v=20261118-health-dinner-2';
    link.download = 'Year 3 Health Test.zip';
    document.body.append(link); link.click(); link.remove();
    status.textContent = 'Download requested. Check your Downloads folder. The ZIP contains the two-page Year 3 Health Food Choices test.';
  }
  download.addEventListener('click', startDownload);
  input.addEventListener('keydown', event => { if (event.key === 'Enter') { event.preventDefault(); startDownload(); } });
})();
