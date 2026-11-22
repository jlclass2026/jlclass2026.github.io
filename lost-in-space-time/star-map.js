(() => {
'use strict';
const host = document.querySelector('#instrument');
if (!host || typeof MutationObserver !== 'function') return;
const motionSetting = typeof matchMedia === 'function'
  ? matchMedia('(prefers-reduced-motion: reduce)') : null;
const finePointer = typeof matchMedia === 'function'
  ? matchMedia('(hover: hover) and (pointer: fine)') : null;
let pausedByUser = false;
try { pausedByUser = sessionStorage.getItem('space-map-motion-paused') === '1'; } catch {}
const stars = (count, offset, dimmer) => Array.from({length:count}, (_,i) => {
  const n=i+offset;
  const x=((n*6299+199)%997)/9.97;
  const y=((n*n*127+n*541+317)%991)/9.91;
  const radius=(i%13===0?2:.75+i%4*.20) * (dimmer ? .8 : 1);
  const shade=i%17===0?'#e5bfffeb':i%11===0?'#79eeffd4':'#f4f8ffb8';
  return 'radial-gradient(circle at '+x.toFixed(2)+'% '+y.toFixed(2)+'%, '+shade+' 0 '+radius+'px, transparent '+(radius+.8)+'px)';
}).join(',');
const closeField=stars(32,81,false),farField=stars(45,3,true);
function starsLayer(atmosphere,cls,hue){
  const plane=document.createElement('div');plane.className='map-parallax '+cls;
  const pattern=document.createElement('div');pattern.className='map-stars';
  pattern.style.backgroundImage=hue;plane.append(pattern);atmosphere.append(plane);
}
function updateMotion(map, toggle){
  const system=Boolean(motionSetting?.matches);
  map.classList.toggle('space-motion-off',system||pausedByUser);
  toggle.hidden=system; // respect an operating-system reduction preference
  toggle.textContent=pausedByUser?'Resume motion':'Pause motion';
  if(system||pausedByUser){
    map.style.removeProperty('--map-dx');map.style.removeProperty('--map-dy');
  }
}
function enhance(){
  const map=host.querySelector('.map');
  if(!map||map.classList.contains('space-map-live'))return;
  map.classList.add('space-map-live');
  const atmosphere=document.createElement('div');atmosphere.className='map-atmosphere';atmosphere.setAttribute('aria-hidden','true');
  const nebula=document.createElement('div');nebula.className='map-nebula';atmosphere.append(nebula);
  starsLayer(atmosphere,'map-parallax--far',farField);
  starsLayer(atmosphere,'map-parallax--near',closeField);
  const tag=document.createElement('div');tag.className='map-console-tag';tag.textContent='SECTOR VIEW';tag.setAttribute('aria-hidden','true');
  const toggle=document.createElement('button');toggle.type='button';toggle.className='map-motion-toggle';
  toggle.addEventListener('click',()=>{
    pausedByUser=!pausedByUser;
    try{sessionStorage.setItem('space-map-motion-paused',pausedByUser?'1':'0');}catch{}
    updateMotion(map,toggle);
  });
  updateMotion(map,toggle);
  map.prepend(atmosphere,tag);
  map.append(toggle);
  if (finePointer?.matches) {
    let pending=0,latest=null;
    map.addEventListener('pointermove',event=>{
      if (pausedByUser||motionSetting?.matches||event.pointerType==='touch')return;
      latest=[event.clientX,event.clientY];
      if (pending)return;
      pending=requestAnimationFrame(()=>{
        pending=0;
        const box=map.getBoundingClientRect();
        if(!latest||!box.width||!box.height)return;
        map.style.setProperty('--map-dx', ((latest[0]-box.left)/box.width*2-1)*9+'px');
        map.style.setProperty('--map-dy', ((latest[1]-box.top)/box.height*2-1)*6+'px');
      });
    },{passive:true});
    map.addEventListener('pointerleave',()=>{
      if(pending){cancelAnimationFrame(pending);pending=0;}
      latest=null;map.style.removeProperty('--map-dx');map.style.removeProperty('--map-dy');
    },{passive:true});
  }
}
const observer=new MutationObserver(enhance);
observer.observe(host,{childList:true});
motionSetting?.addEventListener?.('change',()=>{
  const map=host.querySelector('.map.space-map-live');
  if(map)updateMotion(map,map.querySelector('.map-motion-toggle'));
});
enhance();
})();
