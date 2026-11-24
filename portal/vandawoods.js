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
    updater.href = 'data:application/zip;base64,UEsDBBQAAAAIAJ1keF2VeJE04hYAANFaAAArAAAAVXBkYXRlIE5ldyBXb3JsZCAtIFNxdWlzaHkgR2F0ZSBXb3JsZHMuaHRtbO08W3LbSJL/PkVZ3S0AEggRFCVLJEGvLcuPnbbdYbnH20Gx2UWgSKAFAhg8RLElRcw19gJ7hf3fo8xJNrOq8BJJWeqRPbEbdoRFoDIrX5WVmQUS2XvshHa6iBhx05nf7+Ff4tNgam2wYKPfm7GUEtulccJSayNLJ40DGE291Gf9d2xOPoWx75D/+W9y8rfMS9wFeUVTRrLIgY/ejsB71EvSBXyOQ2dxOQmDtGM+iS52TGNvjySLJGWzRuZ1x9Q+m8ZhFjid78y91t7uXtcO/TDufDeZTNrObndG46kXdGiWht2IOo4XTDu7regCABeNueekbme/3YwursdZmoaBTnUviLJUcPQCl8VeWsAuq+wmlO1SM2dnjlutllOwOAAO4zB2WNyIqeNlCY5IOh3HS+jYZ85lGFHbSxcd0Onap2PmXwIo8umiM/ZD+0wK30jDqNNCGQeu5zgsGBZoQRiw6++SlKZZcjkDVJd5UzfttNjsurcjDPio55r9mqGF+X+W5gZoL+o/B81gBcgizGJi+zRJiBeQ1GVkSmeMTLw4SQkNHHLGWMTH0RYwIYq9c6BjkCM3DBPGQb1xn896/fHtj72dcZ+AauFcJ0GYcrigLwgY5KPrJXLxgXXM4DMhlCQsojGKKwXwGefvhABFQoDokCTNwCApgcmUhDA9DAJmA5eQM/ICoBmw1OjtRGAIbmMyCWNrIwE9bbbRP8riGAmUblmRnOP3e9wjiOcUswj6vrWBMm0QatssAjc3cBfo+FdP2UW6g7cbaNqeWHZOIM6CDZKvf/+IKyt1d0D4aAHm4th9lLgXkTj0gZNY4Q0hg7iWCP0e5aNhlm4Q4R79F+E88EOwTk4YVert0HzK+4iJpQ1AaW5YudQJqj6Ow3nCYoO8mdS8ISEzL0nAuXXCiXMYcIJZ58BDugOQicEZ/pJ7SRh74MLUJ1mQej5OIuewpyYLDp2jxRO+rhVWURxOY5YkctUSO/aitP9IycC9kjT27FTpPoKVBo9MqecfhQ6YSJ1kgZ16YaBql6dBDfc0EMhxGKYWRK5sBituTFl67DO8fL5446hKwrfICTggCxSt603UxzhBi1maxUFBhG+qkorwV0kIiCAUZp8G/MpATziCUAJA67fT4LsqkwE6bSOYm/umdboBqgenG0NiJNMGKJyC4zZ47Ets6rOOaZiH3TSmQQLuO2sIs3b2mj8Qs9n84fpW0gkNUnqDdgWjkfhhOrz02STtnNNYbcjhC+2xN4vCOIXpXYxBVeCiCvyj4QUOu6gh/FFBeAjxRKyucpjfmYMTTqfhn+AA8+7BZZrR2PFghT7Lia+jD37TaZK6Ubs08GYU3bgjhjwHtmc7IYwmDKzcCDESBRMv8FJWIjcchumgJjuOaCDxv52xxSSGnQ1hsyB5CZ5TEwOczFbrspAG2Y0utGukMWOgmRrFbMLipBEzJ7OZ05iFXFJxq13+CdtcVvTFXHbTwsSQdoOgxy6jMPE4Lh0noZ+BBbjTmi2ebSFszsR17o+tvWazG4U8CzTYOWzChLPp8uy+32wSRK+UE2XtsKKycNiNlL4PrPKE3wY6UJ+A/L/B5i/CgwtJyqARBFxH5REBQ4PPUvK3jGXMsSbUTxgM5cFLhmwew+o4IvpAqMegZKBxobgCS/KkdXWlKDqvmwQYZsaLE+ZDKgxjVUGD81DbQHlAXOKaiva0Gp3gJvZmqoaUQB4i2M0wtAJPy1L4Lh2de75Pp0y5utr59QRHjIT8VYx9v+MBwSRVuRzaUzFD6YjpfAvyaS/wSuTapSkCS06xY/rHYoRxcWTymUc4QI5ggLyClYmIuUQAsZXOzq/qW6yDoN7J/Y6EE55xPjDfs5Orj3D5mmdLGIFsd840lZyeqsvjp6ea9nSJT+HPSkfYC9MFWku7hI3HIKnXlok7cXfl0lT8G5ckZrPwHNa/K9POdbEWic2C9cvL81AGWVPR9PF0LRqYx4GEEokcJSlThCcWZ/B0YBgGv6pPf+b7OaNKUBNbFSLKUNGGncEQaaJ3h2eWIGr4LJimbr+5uSkHYBvGC5Va/ceP6WpFytxHvNlU0TRpX+6M4Bel7TXgE54VpAUvQDm8MUN4It9TZM0Us7W5OZ4+NQK0IvU/YS7A4f0ndcBrXmAjj7a5uSkMZfse7CA+pW/ttpr1cTGjb7VaTRQL5QrPhCzS/naSWFCNHIUzqDOZc4JxQh1PNZ1EFsCMcPw7GOgnGfwMiJe2q4KPD05PHWO4rf1Aysvvd7i5ctJzazytyqe75YAQrAsGefw42tyc4yLxlRooNvhgrOjwCYbzAriCMtFXhoYX2D5U3IlayvXSS7XNzbc0dQ0Iy+q8sWQUrdeqILiNZesAhpC6ahypwsSq8eKRQYr1lBOFc48638GV0t0dWBatI4bpRX1Y9+bLpLheT+cdxNua6J67DsXtAI2tSbcqmnNhgb7eXNt6l83GLFajgTnUdqAi052FBZp6bgXUEqAahYvEGhi7pm60m/D/UDf2DnRj/4lutOBzdx/G9mCsDWO7ugGaGHvNYY2AHUJKSqyLBPSNVPVc9zSrP/DmW+fbzgWos6V6vb2nxv5hx+uZ5lPjYL9jPHmibTuLoXQU3BGCityb6uBCB6jVv+hb8y2jebi5edHDq0Pw+EXfcreM9gFc9fDqcC8nI5ZO7isoUo8peKlKuUCXtB4KT6AMsk4g4wRT1YOixxDVMsB/isOIxelCVYoyVNGFeANvOGgOt5XoQvnMlEV1inmnKX8oupSHOw9P/GqViLZtQiSSWXg2tZaCF49VEiHGksZSYageUa6uWnv72k4NIHaAgMjpDhwoXYsvXPNwX66caR52DLPZlji8WrWKDeDhSoGDwIrz2VtchM8oPVd0TkYa6FouJeYc/udahFGMl3koFRm6vkOFuHLl0Q0hukf48OclHBRTNRcBjhCFBf1wXsoOGYeT0HQXTGEVu7cYLx2V30s/FRvL8JKXvBqGIITTG0C6bx38udj8GS+W6loqFwP8ApnBcuZ80dy3+fnX8Z6UxpBNZKJa1nZLNZoHzW1nCz8+4yD8AKToxUot2XTLMHf1KkPpdzWPWuFGlRz+8BEDtv+gcajv6422fqA3zKbe1hv7+hO90RrCot0lHPDTk6I3VA+C3SGokxTaCA9ZLu8s1K3LoFYn60tAWR+NqTNdU8vV6kH+FIIja5diztoHDxHFpxYcyeCPUd7Bkc9SquQkFKR5loIlx1BsqAo+YIL8Lp4qAQUulDyxCM6VGnSWTKF6eqqcm8a+SU6zZnP8RD42O/eSDA4qWEx65wzK4hrO+/wxEJgVj7BQ3UICZw7Bx0V5AS3EqxxKHlsWcNSWxnEU5lxXzk2J7cIp1MeTE9pMHJ20S3mESuOMQUUNd0n6LD9xvsRDsSoOXKAkUMPnYW+zlEPfj3n5H6s5ZQ2qAj6koon0S9v1fOdHL0k7SF1PsnEKJ1ZxQ3P7JjfuX3o+FLedgSLKZ3ksA/vn95EL3qIMuauJpXCcYzy5IifYfOAi+PRN0XOxdGSgdedw4g3nK7DhSOD9wSr4lxE4BywRlwz4lJZDk2r8YyN/vsYr5/e+Y20Ulg7m/ODHV/0FSN1qtvbB6uK8Qi5PNzzndKMjH+vkB8bTDf10IwB7cxAncJq1muZhcXzkGGDvBHgAkgl3ENRnCVwP1hAdiTvw9ixZwQBPihKQeizmADuczZA+8qJ+htgtuJ7z2CXZ0jh9cxduPHUigb19uHNzEuIWtoM39tlzrCO4Di1Th0DU2m3rrfb+sMT4lFOBQFoMvi6I7SIx8ZxFiORmk4kPcl/r66wyi5NVNnkbJw9tkTqn+9lj94Dbw3yyxh7mk8MHskecOaEfuXVrfKgMPogtqlzuaYkWt0Rrd50lDs0HsgQEm7PEDaMR8yd1c3ySEHIsIQ9ikyV+99wyTbFl9tZumb0HMgy/A1+mYy+4JVQdFfCHCyhVrvc0T+tzEaX1QOaB1D1l8Ri/cRtBoRDXTfSqhJKTHPogBlrJ935GMkXYba810u5DhV3bjSHpzmBBxzQb+zdS3lEOJc9L6IMYaSXfe3rSnvAkc52RmvsPZKQiIqThYpTG9OZ2K+LQx3BBPhbwh41Gdd739KemvssD9Vp/WmkqntzvmbYYfonB4hG7iPDb0Bv5S0LJcQX6MIlsFd97G8ls399Iu637bzoK55dRwuPEjQ2HEHJSQh5ms93kd89UvytSfWtdqj94qKLHDdORHdohrVvldZiSo2L4QUxS53RPR2mL6LzOHq3WwQPZY+LFbBR5ad0cL2GU/CRHH8QaNT73NIZwjva6OrC127yfMZBG+TXmX9hidVD0nVGJVZObPzyvCH7YRtVnWeLZglqQ+T6M5FM7YH38aQznEzM7pcFUJiT8ohaGmwZPJWkY8Zs23sSSetM4bKPE/ItccY/g/Evf/+BDe5WRX/jI/t71dfd6Q+d6vWPz/y9HVZ9NWeDQePHttFoaBVb223m1sEZMY/bttPpw/vHtvPrtvPrPedC3E+u3E+u3E+ufOLH+E6ns23n123n123n123n1/9h51YEiYXbseGliDQYbpR/w8dEsDIPROAsCcfwrl28luDw2wTh5Xowvu8iGTr4er6FOljUDMIMdSNOVzOrQMjriMNSz6zx/lVoPyahSFa7WCou90SS8WMmrBixLdRglL+Xo3VR6MC7VhwtrFMLfFwUjfGHBXc3uJkLlDMKfr5wUkDsq9yU4yrpijY5uCHEomArT4Y+Z45j5q3mvRy2lkDj8VMHfbSxw7miBry/PZx3b9sPMGYXz1WLUoeUuwmHyfn4f5b8Mo7Wb1cmSFELbOldbwqhtKASRt/d07y/E9LMrOPYhW0LZ40PtQ2dJKivBm9zXoBUiPEc4eQ1w8roCv5vyX0mGW3e7+JvSyFvN/Ca84PoCAeRjAbibyl+S3Ur9IiiRwvkogiIm9OVR8SbTVTgF4584kPxUBd5N16/F+obeAVZiM1jzEbN9L0rY6HfwD3ozgtyKVohwLGDk30vY55T/avxvS9cldTumiSsLG3fBArpWjtWYZVRFMBGl0OsCfHdrfC1Bbgl9JYskgPMFE4/jRg6Dg8RaadagllFYwEU+fVHA726Yf4ksay0zjsMzFozCeOylIxrPqIO7cK1Et6CXAZrjkPeIQ57VcO5upX+RXGuSR2VJ8JfB9giOc0k2W79wS1jVLA4g8lMJuofrfBXma3VPXTgxsxg2bDhfy30JqWD+UUDIUQ65u+JfjPPn19ulDmSsxPPP5mF8i9FX4FWKcASSkyrwHqv+xUW4Uww9Dz1nlIbUWStAHaNg/VcYJh/z4bvr/eUYrtXR4V/aUKizz2l8tpbvCrRa5eaQZ1XY3VX+avzX73H++AuKFNdzbsnZK9DK3cZh5LgCu8dO/7L8a54+zN9wAJJniTVQeGuVSueBDXzpNf8hCTZQOQloBKfuVBXvxcLUk1ejT+8//PjixFoaGn04fvXm5OOHX6wqmWBu7u4fX6RQy/HfpHxgUy9J44Uaywvtcgn9DZClvv/J850jClfhVAWj6Lw1TaJ7TsLn3HhxGkZ2tsi7T0T8uuQdxXdy5Is6+CMYcm6SrR2cd+vDVUAI5rJ1EKSPKTPNfVMpTBczjKwstga/KQm2yEjQDtW39mu3LXzNhb8+CJ94JEDy+aoqev1B70blXWMuluE52m/6fRndhWihT8osfAPoI7tIj8FXQDdV6z6iySKwSeVFIxqo2DRHT/jbaIlGLh/J16MCxhyfJZaE8HchE6ufMoNxemqiaTrgZkFqSVzx2q5m9Zv4urd8UJwsQRsmgH1v5qW11yOraNTqU/k+uwZiY5sjFd81o6nV7NK0hzIb+C4Q3GxbbfOwvdtsayB73gWAK/+zF6QHz+KYLlQ6p1AsiWm+ZzOVpjpMlTO3uTSaQRH3OdaiYC3kyxkLkgNPj4bYeSGXkwVgGTC+puXSnVnU4M063k/UaNAcat2zx5bVMDc3z3qSU/cmjn6G7+Ki5PjW2Nl2JNXuWbkBNjej/GXmsf472I8OzrZ/H1qWNYaJfAHwRcDtbmFxuLVAubPuNZCF/9ePxDoZ5ZoUV7I3g0DoPrq+6SIRf0EfDcd9A99Hw5urq2IJeq2m/FcZ7Jt7+aiWulCukOM4xncCK521Jpnvr+pVJXprUd6LCftgUbh1oeqRbbUMBVdGLAq2ALGW1rap7+/t7e5r/DU7VdOxsdIyVsNsttoFDoH9byFi3pKgd7qD0ad/mmzBJe8NB5ff73jIHc2w06t3jsvbaqBM2tUVwEXzt8GvveFWoeZNLGBbN1BpELQF9n3KbGyGQeZU9ArjLac85lTtYEv1yg2NrS94OtDhIg9uMrbm3TX4bdlFQ5dto96sipWt9qoA2lT0/K26PGu8+zR68eH42dvRuzevXn8cPTs5Of6ISQVfgC6+JeKb/MLqX+AuGUqL2gNzf1g3hniXtN5864af8F5b+H5mk/ccE1YR1PbuT43DfKyxxTugJIrhOMrmJVnpPWZLN/c0I4HjvBpY/ceBVueFzVckCZ8ugB7v2eIlgmG+ljGzw2kA+8WpyH04vEmq6CmHncuoj5XRgngimcKxmXc8o2nZXG5J2qZ+WMoa9EzwPHvQHkJ0MvFqr7h6UlyZzeE2/DX5wAqBxhlk8bKDnYubFa2Xu2e9HyJ2RQtE5uZp/B9//8/iJ6i8bGFxsqLTWhdol53d0GriVeG682epVQSeRpmgwOnRvWQYLdAjKDksBTuxKduKF4lmeMulwUb/NFC2855s28pp0Nsp5iCscLMnK03ECLug4G2Fp4nyxRZ1T8Yw4oIB0Xbj0mqoMLhJMBXKulAC1pXFRyipZZehHPnroCq+2MqB25UULfdmxQYgMsfqQbQWs/pgv2Xhb0qb81stdlVCJr8G5mykZMUPmrFWzWM3eAx/PGxxZ7NyvztAc4J0xU6rui6CpG8X83n2FEvRLN33IL9cQ8ZcsWGlh3KqO+/yco47X0IcT6jN80Pd1Ys1LuwFzvxu3ULWi4rBmME90+kEctuQVxiVOFkWGbxEELPCyQSbkdac4HDbQ9OKpg8c3qvBD4ZXV2K84h+Cde4dy45w0xDL7pCQOSSWFXmJCyLog7G5chr3DCPKElcdCFn0z4gkrcIJikJG0EigbsbuCmNeDjWHjTEvtx7xhgR2FgPcauoEA0IZGipcMAYsBwaP2VDwDoay4JRL5Ie66+n8xyh8dbgEuc/5YU+wu7pyvWUDHhUGw1kkRi9ICDYk8mkkDSXYCrNUyhNBVvdDTfDWulIv1+tybaxSHYEg9WmorteAaV1ur9upo8A6GkOvwVKt3M5hlkZZyuvp5344VgVB/RILn45SdAdVruW2FPjc4LDw+HHDJJCkpa/YvDkBmUCMzd1GVqOCCJajMqb42Lmtv67fJZx8dNHO1GK+qohLRdPjLOAD8Al3oi2EwJAdInRgxAfgE/ij92Sx330kKBhhIDauhceWS6Bi5O1OrccShceG3JOAiiH6loouDYJNrduDomAfDGCi/fzhRyjMzsMz9p53aIJ7Pt697j5CVsAclgPOC1iQLwsg+Rf3nOFdBDhymX2GgYlXTlgz/OPv/4XZDM7ssitMJMtJUfxXNeXb7HMKwB8LgSJXl8BIEwLGbGKhmfHGkf1drUrh26jXDqL5Rn2QN6hVqvqKzoIrFUaP4zWTQXi7WE90//XD8Aw3uojlnMmq9h+iwQlxMjwHw7GkLpsHcdBQ8KRlc2Mx7XKFDMyYsSSBymJbIb/wXrN5xnBlJVhkiO71BAH+4vblFupeg6/wsgRrkp44pfwvUEsDBBQAAAAIAJ1keF2CZPFmngIAALcEAAARAAAAUkVBRCBNRSBGSVJTVC50eHRtVM1S2zAQvvsp9taL8TTA9NCeGKDANIUpATI9bqyNrEHWeiQ5TjjxEL309XiSrmSH/tBbLK++/f6c6/MlLG9u52ewmVUfZvDy/AMW3+6vFpff4eLk7hwerhb3J/NFMavgfNuxj7Dj3kNtMQRYYf3Yd2BcMIrGFxpbquALkRxH6LzZYKSqOKzgpiMHsSHoOyVnHtApCGSpnjDZG20c2hHcM7cZDS7vvs5LcBzT7QJAUGljuA+Z83uoudvJ5fGYhvQTJ4IBN8LmjAdnGVXe7mQiw6ZrVXH0B7H0am0siaD8HNLYyvMQyFdwtR5pdp61JwE3IZPamGBWlsrErA/015J3acS3omme9mMdDTsYTGz2WNmfyciqOK7gQeAiLNBFfHn+GeTZWtRUigqtGZbsrSrh1OPTDk4tOrjwLBnMkuy0+tIoRS6RuSXhnfTfyTG7g1B7EqVj0CtUmkCZEI3TvQkNhUxvQ0lQjzbA2nObcCzXmHgHGBryo8DXrCyKkAgDBvAU0ThSU/x5zKrJ58+znPeFN22Q8GWZICX7jKttr9Ktaxbf4sD+MWnZbzjIiQzeRApVUbwxBoJ5ohGuxq4jlfdoj6rPzu5AAqwm9xTrAJpiYdFrqWDkAf3YizV70mKlEyZvlzSiD1OsdgdSLKNFJ7RmC7yGaETPp9w1JaWnNpQp2DqxEirkakFNhR/I6CaOXHtXN+j0pJuFgXxUGNGy7mmEhHECVrRjwcmkpAaesM3A1wmtFTCxZfmaDG0lRnCYo/zP8O8tIxH5eOXZkpSKsG6SO5PUpO+jFGtOmpxCvyvhEG7lTglHcC+q2pZdCcdwmn/lnkn/h8Rkn16yy9rXiQe0srfcO1EKgzHwbNR2bKM0xqZ/hfSpkIve0L+WFb8AUEsBAhQDFAAAAAgAnWR4XZV4kTTiFgAA0VoAACsAAAAAAAAAAAAAAIABAAAAAFVwZGF0ZSBOZXcgV29ybGQgLSBTcXVpc2h5IEdhdGUgV29ybGRzLmh0bWxQSwECFAMUAAAACACdZHhdgmTxZp4CAAC3BAAAEQAAAAAAAAAAAAAApIErFwAAUkVBRCBNRSBGSVJTVC50eHRQSwUGAAAAAAIAAgCYAAAA+BkAAAAA';
    updater.download = 'New World v1.61.zip';
    updater.textContent = 'New World v1.61';
    updater.style.textDecoration = 'underline';
    const version = document.createElement('p');
    version.append(updater, document.createElement('br'), 'For the desktop game. Uses the original game HTML and makes a separate copy.');
    status.replaceChildren(version, marketInfo);
    gate.hidden = true;
    unlocked.hidden = false;
    updater.focus();
  });
})();
