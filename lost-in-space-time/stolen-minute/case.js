'use strict';

const SESSION_KEY = 'lostSpaceClassOpen';
const PIN_HASH = '3ea87a56da3844b420ec2925ae922bc731ec16a4fc44dcbeafdad49b0e61d39c';
const alarm = Date.UTC(2026, 11, 1, 0, 20);
const removed = alarm - 25 * 60_000;

const visitors = [
  {id:'bubbles', name:'Bad Bubbles', art:'bad-bubbles.webp', colour:'pink', mark:'◌', visit:Date.UTC(2026,11,1,23,55)},
  {id:'wolf', name:'Boulder Wolf', art:'boulder-wolf.webp', colour:'blue', mark:'◆', visit:Date.UTC(2026,10,30,23,45)},
  {id:'mist', name:'MIST', art:'mist.webp', colour:'violet', mark:'✦', visit:Date.UTC(2026,10,30,23,55)},
  {id:'checkmate', name:'Check Mate!', art:'check-mate.webp', colour:'gold', mark:'♞', visit:Date.UTC(2026,11,1,23,45)}
];

function evaluate(suspect, timestamp) {
  if (!visitors.some(v => v.id === suspect) || !visitors.some(v => String(v.visit) === String(timestamp))) return 'incomplete';
  return visitors.some(v => v.id === suspect && v.visit === removed && String(v.visit) === String(timestamp)) ? 'success' : 'retry';
}

if (typeof module !== 'undefined' && module.exports) module.exports = {evaluate, visitors, removed, alarm};
if (typeof document !== 'undefined') init();

function init() {
  const $ = id => document.getElementById(id);
  const date = n => new Intl.DateTimeFormat('en-AU',{timeZone:'UTC',day:'numeric',month:'long'}).format(n);
  const time = n => new Intl.DateTimeFormat('en-AU',{timeZone:'UTC',hour:'numeric',minute:'2-digit',hour12:true}).format(n).replace(/\s+(am|pm)$/i,' $1');
  const add = (parent, tag, string, attrs={}) => {
    const el = document.createElement(tag);
    if (string !== undefined) el.textContent = string;
    for (const [k,v] of Object.entries(attrs)) el.setAttribute(k,v);
    parent.append(el);
    return el;
  };
  const clearFeedback = () => { $('feedback').textContent = ''; $('feedback').removeAttribute('data-state'); };
  const gateError = $('gate-error');
  const pin = $('pin');
  function unlock() {
    $('gate').hidden = true;
    $('play').hidden = false;
    $('case-title').focus();
  }
  $('gate-form').addEventListener('submit', async e => {
    e.preventDefault();
    gateError.textContent = '';
    if(!/^\d{6}$/.test(pin.value.trim())) { gateError.textContent = 'Enter the six-digit class PIN.'; pin.select(); return; }
    try {
      const bytes = await crypto.subtle.digest('SHA-256', new TextEncoder().encode(pin.value.trim()));
      const hash = Array.from(new Uint8Array(bytes), x => x.toString(16).padStart(2,'0')).join('');
      if(hash !== PIN_HASH) { gateError.textContent = 'That PIN didn’t match. Try again.'; pin.select(); return; }
    } catch { gateError.textContent = 'Open the game on the class site to enter the PIN.'; return; }
    try { sessionStorage.setItem(SESSION_KEY,'1'); } catch {}
    pin.value = '';
    unlock();
  });

  for(const v of visitors) {
    const tr = add($('ledger'),'tr');
    add(tr,'th',v.name,{scope:'row'}); add(tr,'td',date(v.visit)); add(tr,'td',time(v.visit));
    const label = add($('suspects'),'label',undefined,{class:'choice suspect '+v.colour});
    add(label,'input',undefined,{name:'suspect',type:'radio',value:v.id});
    const portrait = add(label,'span',undefined,{class:'portrait','aria-hidden':'true'});
    add(portrait,'span',v.mark,{class:'sigil'});
    const art = add(portrait,'img',undefined,{src:'art/'+v.art,alt:'',width:'384',height:'480'});
    art.addEventListener('error',()=>art.remove(),{once:true});
    add(label,'span',v.name,{class:'suspect-name'});
  }
  for(const i of [3,2,0,1]) {
    const {visit} = visitors[i];
    const label = add($('timestamps'),'label',undefined,{class:'choice timestamp'});
    add(label,'input',undefined,{name:'timestamp',type:'radio',value:String(visit)});
    add(label,'span',date(visit)+' · '+time(visit));
  }
  $('accusation').addEventListener('reset',clearFeedback);
  $('accusation').addEventListener('change',clearFeedback);
  $('accusation').addEventListener('submit',e=>{
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const outcome = evaluate(data.get('suspect'),data.get('timestamp'));
    if(outcome==='success'){
      e.currentTarget.hidden = true;
      $('reveal').hidden = false;
      $('reveal-title').focus();
    } else {
      $('feedback').dataset.state = outcome;
      $('feedback').textContent = outcome==='incomplete' ? 'Select a suspect and a time from the ledger before sending.' : 'That accusation doesn’t match the vault records. You can check your evidence and try again.';
    }
  });
  $('replay').addEventListener('click',()=>{
    $('reveal').hidden = true;
    $('accusation').reset();
    $('accusation').hidden = false;
    document.querySelector('.hint').open = false;
    $('case-title').focus();
  });
  try { if(sessionStorage.getItem(SESSION_KEY)==='1') unlock(); } catch {}
}
