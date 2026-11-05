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
