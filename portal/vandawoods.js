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
  dialog.innerHTML = '<h2 id="patch-title">Update</h2><p>Choose your file, then enter the teacher PIN.</p><label for="patch-file">File</label><select id="patch-file"><optgroup label="Classroom"><option value="vandawoods-division-wheels">Vandawoods: Division Wheels (A4 worksheet)</option><option value="room6-expectations">Room 6 classroom expectations</option></optgroup><optgroup label="Dark Side of the Moon"><option value="lunar-wallpaper">The Lunar Fortress (desktop background)</option><option value="moonquake-portrait">Moonquake (portrait)</option><option value="moonquake-video">Dark Side of the Moon (video)</option></optgroup><optgroup label="Previous downloads"><option value="dream-nightmare">Dream &amp; Nightmare motion patch</option><option value="cold-task">Persuasive cold task: holiday destination</option><option value="health">Year 3 Health test</option></optgroup></select><label for="patch-pin">PIN</label><input id="patch-pin" type="password" autocomplete="off" spellcheck="false"><p id="patch-status" role="status" aria-live="polite"></p><div class="patch-actions"><button type="button" class="patch-cancel">Cancel</button><button type="button" class="patch-download">Download</button></div>';
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
    const selection = dialog.querySelector('#patch-file').value;
    const lunarAssets = {
      'vandawoods-division-wheels': ['/patches/vandawoods-division-wheels-20261123.pdf', 'Vandawoods - Division Wheels.pdf'],
      'lunar-wallpaper': ['/patches/lunar-fortress-20261119.jpg', 'Moonquake - The Lunar Fortress.jpg'],
      'moonquake-portrait': ['/patches/moonquake-20261119.jpg', 'Moonquake - Portrait.jpg'],
      'room6-expectations': ['/patches/room6-vandawoods-expectations-20261119.png', 'Room 6 - Vandawoods Classroom Expectations.png'],
      'moonquake-video': ['/patches/dark-side-of-the-moon-20261119.mp4', 'Dark Side of the Moon.mp4'],
    };
    if (Object.hasOwn(lunarAssets, selection)) {
      const [href, filename] = lunarAssets[selection];
      const link = document.createElement('a');
      link.href = href; link.download = filename;
      document.body.append(link); link.click(); link.remove();
      status.textContent = 'Download requested. Check your Downloads folder.';
      downloading = false; download.disabled = false;
      return;
    }
    if (selection === 'dream-nightmare') {
      const link = document.createElement('a');
      link.href = '/patches/dream-nightmare-motion-20261119.zip';
      link.download = 'New World - Dream and Nightmare Motion Patch.zip';
      document.body.append(link); link.click(); link.remove();
      status.textContent = 'Download requested. Unzip the patch and open the updater.';
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
