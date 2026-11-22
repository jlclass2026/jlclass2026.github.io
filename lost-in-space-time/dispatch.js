(() => {
  'use strict';
  const play = document.querySelector('#play');
  const summary = document.querySelector('#summary');
  const dispatch = play?.querySelector('.dispatch');
  const trigger = document.querySelector('#submit');
  if (!dispatch || !summary || !trigger || typeof MutationObserver !== 'function') return;
  const motion = typeof matchMedia === 'function' ? matchMedia('(prefers-reduced-motion:reduce)') : null;
  const previous = new Map();
  const current = id => summary.querySelector('[data-jump="'+id+'"]');
  let signalTimer;
  const capture = (animate) => {
    for (const tile of summary.querySelectorAll('[data-jump]')) {
      const id = tile.dataset.jump;
      const value = tile.querySelector('strong')?.textContent || '';
      const old = previous.get(id);
      previous.set(id, value);
      if (animate && old !== undefined && old !== value && tile.classList.contains('ready')) {
        tile.classList.add('fresh-lock');
        if (!motion?.matches && typeof tile.animate === 'function') {
          tile.animate([
            { transform:'translateY(0)', boxShadow:'0 0 0 0 #45eeff00' },
            { transform:'translateY(-3px)', boxShadow:'0 0 0 4px #45eeff66' },
            { transform:'translateY(0)', boxShadow:'0 0 0 12px #45eeff00' }
          ], { duration:510,easing:'cubic-bezier(.18,.68,.22,1)' });
        }
        setTimeout(()=>current(id)?.classList.remove('fresh-lock'),590);
      }
    }
  };
  capture(false);
  new MutationObserver(()=>capture(true)).observe(summary,{childList:true});
  play.addEventListener('rescue:transmit',e=>{
    const state=e.detail?.state;
    if (!['success','retry','incomplete'].includes(state)) return;
    dispatch.dataset.signalState=state;
    clearTimeout(signalTimer);
    dispatch.classList.remove('signal-fired');
    if(!motion?.matches){
      requestAnimationFrame(()=>requestAnimationFrame(()=>dispatch.classList.add('signal-fired')));
    }
    signalTimer=setTimeout(()=>dispatch.classList.remove('signal-fired'),1150);
  });
})();
