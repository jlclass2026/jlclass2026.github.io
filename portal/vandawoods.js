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
  const classGameIcons = {
    '/timekeeper/icon.svg': 'timekeeper',
    '/graphit/icon.svg': 'graphit',
    '/lost-in-space-time/icon.svg': 'lost-space-time',
    '/dorobo/icon.svg': 'dorobo'
  };
  document.querySelectorAll('.game-tile img').forEach(img => {
    img.addEventListener('error', () => { img.hidden = true; }, {once:true});
    const name = img.closest('#class-games') && classGameIcons[img.getAttribute('src')];
    if (name) img.src = '/portal/assets/game-icons/' + name + '-v4.webp';
  });
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
  trigger.type = 'button'; trigger.className = 'patch-trigger'; trigger.textContent = 'Update';
  trigger.setAttribute('aria-haspopup', 'dialog');
  footer.append(trigger); panel.append(footer);
  const dialog = document.createElement('dialog');
  dialog.className = 'patch-dialog';
  dialog.setAttribute('aria-labelledby', 'patch-title');
  dialog.innerHTML = '<h2 id="patch-title">Update</h2><p>Squishy Market Import</p><label for="patch-pin">Teacher PIN</label><input id="patch-pin" type="password" autocomplete="off" spellcheck="false"><p id="patch-status" role="status" aria-live="polite"></p><div class="patch-actions"><button type="button" class="patch-cancel">Cancel</button><button type="button" class="patch-download">Show file location</button></div>';
  document.body.append(dialog);
  const input = dialog.querySelector('input');
  const status = dialog.querySelector('#patch-status');
  const download = dialog.querySelector('.patch-download');
  function close() { dialog.close(); }
  function reset() { input.value = ''; status.textContent = ''; }
  trigger.addEventListener('click', () => { reset(); dialog.showModal(); input.focus(); });
  dialog.querySelector('.patch-cancel').addEventListener('click', close);
  dialog.addEventListener('close', () => { reset(); if (document.body.dataset.view === 'class-games') trigger.focus(); });
  addEventListener('hashchange', () => { if (dialog.open) close(); });
  dialog.addEventListener('click', event => { if (event.target === dialog) { const r = dialog.getBoundingClientRect(); if (event.clientX < r.left || event.clientX > r.right || event.clientY < r.top || event.clientY > r.bottom) close(); } });
  function startDownload() {
    if (input.value !== 'Hello12') { status.textContent = 'That PIN did not match. Try again.'; input.select(); input.focus(); return; }
    input.value = '';
    const link = document.createElement('a');
    link.href = 'https://chatgpt.com/';
    link.target = '_blank';
    link.rel = 'noopener noreferrer';
    link.textContent = 'Open ChatGPT';
    status.replaceChildren('Download the JSON from your private ChatGPT conversation, then import it in New World’s Squishy Market. ', link);
    const updater = document.createElement('a');
    updater.href = 'data:application/zip;base64,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';
    updater.download = 'New World v1.60.zip';
    updater.textContent = 'New World v1.60';
    status.prepend(updater, document.createElement('br'),
      'For the desktop game. Uses the original game HTML and makes a separate copy. ', document.createElement('br'));
    link.focus();
  }
  download.addEventListener('click', startDownload);
  input.addEventListener('keydown', event => { if (event.key === 'Enter') { event.preventDefault(); startDownload(); } });
})();
