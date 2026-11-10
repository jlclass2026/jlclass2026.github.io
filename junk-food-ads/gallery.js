(() => {
  'use strict';
  const posters = [...document.querySelectorAll('.poster')];
  const viewer = document.querySelector('#viewer');
  if (!viewer || typeof viewer.showModal !== 'function') return;
  const image = document.querySelector('#viewer-image');
  const title = document.querySelector('#viewer-title');
  const position = document.querySelector('#viewer-position');
  const error = document.querySelector('#viewer-error');
  const close = document.querySelector('#viewer-close');
  const previous = document.querySelector('#viewer-previous');
  const next = document.querySelector('#viewer-next');
  let current = -1;
  let opener = null;
  let ownHistoryEntry = false;
  let closing = false;
  const hashFor = index => '#ad-' + posters[index].dataset.slug;

  function show(index) {
    if (index < 0 || index >= posters.length) return;
    current = index;
    const poster = posters[index];
    error.hidden = true;
    image.hidden = false;
    image.alt = poster.dataset.title + ' food advertisement';
    image.src = poster.href;
    title.textContent = poster.dataset.title;
    position.textContent = `${index + 1} / ${posters.length}`;
    previous.disabled = index === 0;
    next.disabled = index === posters.length - 1;
    if (!viewer.open) {
      document.body.classList.add('viewer-open');
      viewer.showModal();
      close.focus({ preventScroll: true });
    }
  }

  function dismiss() {
    if (viewer.open) viewer.close();
    document.body.classList.remove('viewer-open');
    current = -1;
    closing = false;
    if (opener) opener.focus({ preventScroll: true });
  }

  function syncLocation() {
    const index = posters.findIndex((_, i) => hashFor(i) === location.hash);
    if (index >= 0) show(index);
    else { ownHistoryEntry = false; dismiss(); }
  }

  posters.forEach((poster, index) => {
    poster.addEventListener('click', event => {
      if (event.button !== 0 || event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) return;
      event.preventDefault();
      opener = poster;
      ownHistoryEntry = true;
      history.pushState({ foodAd: true }, '', hashFor(index));
      show(index);
    });
  });

  function requestClose() {
    if (!viewer.open || closing) return;
    closing = true;
    if (ownHistoryEntry) history.back();
    else {
      history.replaceState(null, '', location.pathname + location.search);
      dismiss();
    }
  }

  function move(offset) {
    const index = current + offset;
    if (index < 0 || index >= posters.length) return;
    history.replaceState({ foodAd: true }, '', hashFor(index));
    show(index);
  }
  close.addEventListener('click', requestClose);
  previous.addEventListener('click', () => move(-1));
  next.addEventListener('click', () => move(1));
  viewer.addEventListener('cancel', event => { event.preventDefault(); requestClose(); });
  viewer.addEventListener('keydown', event => {
    if (event.key === 'ArrowLeft' || event.key === 'ArrowRight') {
      event.preventDefault(); move(event.key === 'ArrowLeft' ? -1 : 1);
    }
  });
  image.addEventListener('error', () => { image.hidden = true; error.hidden = false; });
  addEventListener('popstate', syncLocation);
  addEventListener('hashchange', syncLocation);
  syncLocation();
})();
