'use strict';
const el=id=>document.getElementById(id);
const rounds=window.RUNE_ROUNDS || [];
const symbols=['ᚠ','ᛟ','ᚷ','ᛇ','ᛞ','ᛉ'];
const pinDigest='3ea87a56da3844b420ec2925ae922bc731ec16a4fc44dcbeafdad49b0e61d39c';
let round=0, active=0, solved=new Set(), accusation=null, done=false;
const scratch=new Map();
function make(label,cls,click){const b=document.createElement('button');b.type='button';b.className=cls;b.textContent=label;b.addEventListener('click',click);return b;}
function enter(){
  el('gate').hidden=true;el('game').hidden=false;
  if(!rounds.length){el('prompt').textContent='The rune routes did not load. Please refresh the page.';el('flag').hidden=true;el('reset').hidden=true;return;}
  draw();el('play').focus();
}
el('pin-form').addEventListener('submit',async e=>{
  e.preventDefault();const p=el('pin'),status=el('pin-status');
  try{
    const b=await crypto.subtle.digest('SHA-256',new TextEncoder().encode(p.value.trim()));
    if(Array.from(new Uint8Array(b),x=>x.toString(16).padStart(2,'0')).join('')!==pinDigest){status.textContent='That PIN didn’t match. Try again.';p.select();return;}
    try{sessionStorage.setItem('runeRoutesOpen','1');}catch{}
    enter();
  }catch{status.textContent='Could not verify the PIN. Open the classroom game over HTTPS.';}
});
function move(next,focus){active=next;draw();if(focus)el('puzzle-title').focus();}
function selectRound(i,force=false){
  if(i===round&&!force)return;
  if(!force)scratch.set(round,{active,solved,accusation,done});
  round=i;
  ({active,solved,accusation,done}=force?{active:0,solved:new Set(),accusation:null,done:false}:scratch.get(i)||{active:0,solved:new Set(),accusation:null,done:false});
  draw();el('puzzle-title').focus();
}
function draw(){
  const r=rounds[round];if(!r)return;
  el('rounds').replaceChildren(...rounds.map((o,i)=>{
    const b=make(o.title,'round',()=>selectRound(i));b.setAttribute('aria-pressed',i===round);if(o.level!=='Core')b.dataset.level=o.level;return b;
  }));
  el('round-title').textContent=r.title;el('target').textContent=r.target;
  el('progress').textContent=done?'Route restored':`${solved.size} / ${r.links.length} checked`;
  el('runes').replaceChildren(...r.links.map((l,i)=>{
    const b=make('','rune',()=>move(i,true));b.setAttribute('aria-pressed',active===i);
    b.setAttribute('aria-label',`Rune ${i+1}: ${l.label}${solved.has(i)?', checked':''}`);
    const sigil=document.createElement('span');sigil.className='sigil';sigil.setAttribute('aria-hidden','true');sigil.textContent=solved.has(i)?'✓':symbols[i];b.append(sigil);
    const name=document.createElement('span');name.className='rune-name';name.textContent=l.label;b.append(name);return b;
  }));
  const flagMode=active==='flag';const item=flagMode?r.falseConnection:r.links[active];
  el('puzzle-title').tabIndex=-1;el('puzzle-title').textContent=flagMode?'Find the false connection':item.label;
  el('puzzle-label').textContent=flagMode?'FINAL CHECK':`RUNE ${active+1} OF ${r.links.length}`;
  el('prompt').textContent=item.prompt;el('feedback').textContent=flagMode?(done?item.explanation:accusation!==null?'Not quite. Compare what each route does with the hub number.':'Say why your choice doesn’t fit before you tap it.'):solved.has(active)?'Connection checked. Pick another rune or flag the fake.':'';
  const options=item.options.map((value,i)=>{
    const b=make(String(value),'option',()=>{
      if(flagMode){accusation=i;done=i===item.answer;draw();el('options').children[i]?.focus();return;}
      if(value!==item.answer){el('feedback').textContent='Not quite. Talk through how this number connects to the hub, then try again.';return;}
      solved.add(active);draw();el('options').children[i]?.focus();
    });
    if(flagMode&&accusation===i)b.dataset.state=done?'correct':'retry';
    if(!flagMode&&solved.has(active)&&value===item.answer)b.dataset.state='correct';
    if(flagMode&&done)b.setAttribute('aria-disabled','true');
    return b;
  });
  if(flagMode&&done)options.forEach(b=>b.addEventListener('click',e=>e.stopImmediatePropagation(),true));
  el('options').replaceChildren(...options);el('flag').textContent=flagMode?'← Return to runes':'Flag the fake →';
}
el('flag').addEventListener('click',()=>move(active==='flag'?0:'flag',true));
el('reset').addEventListener('click',()=>selectRound(round,true));
try{if(sessionStorage.getItem('runeRoutesOpen')==='1')enter();}catch{}
