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
  dialog.innerHTML = '<h2 id="patch-title">Update</h2><form class="patch-gate"><label for="patch-pin">Teacher PIN</label><input id="patch-pin" type="password" autocomplete="off" autocapitalize="none" spellcheck="false" required><p id="patch-error" role="status" aria-live="polite"></p><div class="patch-actions"><button type="button" class="patch-cancel">Cancel</button><button type="submit" class="patch-download">Unlock</button></div></form><div class="patch-unlocked" hidden><div id="patch-status"></div><div class="patch-actions"><button type="button" class="patch-cancel patch-close">Close</button></div></div>';
  document.body.append(dialog);
  const gate = dialog.querySelector('.patch-gate');
  const input = gate.querySelector('input');
  const error = gate.querySelector('#patch-error');
  const unlocked = dialog.querySelector('.patch-unlocked');
  const status = unlocked.querySelector('#patch-status');
  function close() { dialog.close(); }
  function reset() {
    gate.hidden = false;
    unlocked.hidden = true;
    input.value = '';
    error.textContent = '';
    status.replaceChildren();
  }
  trigger.addEventListener('click', () => { reset(); dialog.showModal(); input.focus(); });
  gate.querySelector('.patch-cancel').addEventListener('click', close);
  unlocked.querySelector('.patch-close').addEventListener('click', close);
  dialog.addEventListener('close', () => { reset(); if (document.body.dataset.view === 'class-games') trigger.focus(); });
  addEventListener('hashchange', () => { if (dialog.open) close(); });
  dialog.addEventListener('click', event => { if (event.target === dialog) { const r = dialog.getBoundingClientRect(); if (event.clientX < r.left || event.clientX > r.right || event.clientY < r.top || event.clientY > r.bottom) close(); } });
  gate.addEventListener('submit', event => {
    event.preventDefault();
    if (!dialog.open || gate.hidden) return;
    if (input.value !== 'Hello12') { error.textContent = 'That PIN did not match. Try again.'; input.select(); input.focus(); return; }
    input.value = '';
    error.textContent = '';
    const market = document.createElement('a');
    market.href = 'https://chatgpt.com/';
    market.target = '_blank';
    market.rel = 'noopener noreferrer';
    market.textContent = 'Open ChatGPT';
    market.style.textDecoration = 'underline';
    const marketInfo = document.createElement('p');
    marketInfo.append('Download the JSON from your private ChatGPT conversation, then import it in New World’s Squishy Market. ', market);
    const updater = document.createElement('a');
    updater.href = 'data:application/zip;base64,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';
    updater.download = 'New World v1.61.zip';
    updater.textContent = 'New World v1.61';
    updater.style.textDecoration = 'underline';
    const version = document.createElement('p');
    version.append(updater, document.createElement('br'), 'For the desktop game. Uses the original game HTML and makes a separate copy.');
    const combined = document.createElement('a');
    combined.href = '/patches/new-world-v1.62.zip';
    combined.download = 'New World v1.62.zip';
    combined.textContent = 'New World v1.62';
    combined.style.textDecoration = 'underline';
    const latest = document.createElement('p');
    latest.append(combined, document.createElement('br'), 'Use the game HTML created by v1.61.');
    status.replaceChildren(latest, version, marketInfo);
    gate.hidden = true;
    unlocked.hidden = false;
    combined.focus();
  });
})();
