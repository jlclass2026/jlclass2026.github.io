'use strict';
// A casual public test gate, not server-side authentication. No code or key is stored.
const form=document.getElementById('unlock-form');
const code=document.getElementById('access-code');
const status=document.getElementById('status');
const unlock=document.getElementById('unlock');
const reveal=document.getElementById('reveal');
const gate=document.getElementById('gate');
const session=document.getElementById('session');
const host=document.getElementById('game-host');
let busy=false,gameUrl=null,lockedAt=0,attempts=0;
const bytes=s=>Uint8Array.from(atob(s),c=>c.charCodeAt(0));
reveal.addEventListener('click',()=>{const show=code.type==='password';code.type=show?'text':'password';reveal.textContent=show?'Hide':'Show';reveal.setAttribute('aria-pressed',String(show));reveal.setAttribute('aria-label',show?'Hide access code':'Show access code');});
function lockGame(){
  host.replaceChildren();
  if(gameUrl)URL.revokeObjectURL(gameUrl);
  gameUrl=null;session.hidden=true;gate.hidden=false;document.body.classList.remove('playing');
  code.value='';code.type='password';reveal.textContent='Show';reveal.setAttribute('aria-pressed','false');reveal.setAttribute('aria-label','Show access code');status.textContent='Game locked. Your saved progress stays in this browser.';code.focus();
}
document.getElementById('lock').addEventListener('click',lockGame);
window.addEventListener('pagehide',()=>{if(gameUrl)URL.revokeObjectURL(gameUrl);});
window.addEventListener('pageshow',e=>{if(e.persisted)lockGame();});
form.addEventListener('submit',async e=>{
  e.preventDefault();if(busy)return;
  if(Date.now()<lockedAt){status.textContent='Please wait a few seconds before trying again.';return;}
  if(!window.isSecureContext||!crypto.subtle||!window.DecompressionStream){status.textContent='Please use a current version of Chrome, Edge, Firefox or Safari over HTTPS.';return;}
  const password=code.value;if(!password)return;
  busy=true;unlock.disabled=true;reveal.disabled=true;code.disabled=true;status.textContent='Checking code…';
  try{
    const response=await fetch('gate-config.json',{cache:'no-store'});
    if(!response.ok)throw new Error('load');
    const config=await response.json();
    const material=await crypto.subtle.importKey('raw',new TextEncoder().encode(password),'PBKDF2',false,['deriveKey']);
    const key=await crypto.subtle.deriveKey({name:'PBKDF2',salt:bytes(config.salt),iterations:config.iterations,hash:'SHA-256'},material,{name:'AES-GCM',length:256},false,['decrypt']);
    const payload=await fetch(config.payload);
    if(!payload.ok)throw new Error('load');
    let compressed;
    try{compressed=await crypto.subtle.decrypt({name:'AES-GCM',iv:bytes(config.iv)},key,await payload.arrayBuffer());}
    catch{attempts++;lockedAt=Date.now()+(attempts>=5?5000:800);status.textContent='That code did not match. Check every character and try again.';return;}
    status.textContent='Opening the test game…';
    const html=await new Response(new Blob([compressed]).stream().pipeThrough(new DecompressionStream('gzip'))).text();
    // Replace the root-relative asset URLs with this HTTPS origin before making a Blob document.
    let ready=html;
    // SVG crop sprites must contain their source image bytes, not external URLs.
    // Load these public art assets only after successful decryption. No code is persisted.
    const sourceMatch=html.match(/const VANDA_SPRITE_SOURCES=(\{[^;]+\});/);
    if(sourceMatch){
      const sources=JSON.parse(sourceMatch[1]), entries=Object.entries(sources);let loaded=0,index=0;
      await Promise.all(Array.from({length:4},async()=>{while(index<entries.length){const [name,url]=entries[index++];
        if(!/^\/tidal-transformations-test\/assets\/[a-f0-9]{24}\.(?:webp|png)$/.test(url))throw new Error('Unexpected artwork URL');
        const art=await fetch(url);if(!art.ok)throw new Error('Artwork unavailable');
        const data=await new Promise((resolve,reject)=>{const reader=new FileReader();reader.onload=()=>resolve(reader.result);reader.onerror=reject;art.blob().then(blob=>reader.readAsDataURL(blob),reject);});
        sources[name]=data;loaded++;status.textContent='Loading creatures '+loaded+' / '+entries.length+'…';
      }}));
      ready=ready.replace(sourceMatch[0],'const VANDA_SPRITE_SOURCES='+JSON.stringify(sources)+';');
    }
    ready=ready.replaceAll('/tidal-transformations-test/assets/',location.origin+'/tidal-transformations-test/assets/');
    gameUrl=URL.createObjectURL(new Blob([ready],{type:'text/html'}));
    const frame=document.createElement('iframe');frame.title='Vandawoods development test';frame.allow='autoplay; fullscreen';frame.src=gameUrl;
    frame.addEventListener('load',()=>{status.textContent='';}, {once:true});
    host.replaceChildren(frame);code.value='';attempts=0;gate.hidden=true;session.hidden=false;document.body.classList.add('playing');
    document.getElementById('lock').focus();
  }catch(error){console.error('Test gate load failed:',error.name);status.textContent='The test game could not load. Please check your connection and try again.';}
  finally{busy=false;unlock.disabled=false;reveal.disabled=false;code.disabled=false;}
});

