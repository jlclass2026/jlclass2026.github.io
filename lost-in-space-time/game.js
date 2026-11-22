(() => {
'use strict';
const one=(s,r=document)=>r.querySelector(s), many=(s,r=document)=>[...r.querySelectorAll(s)];
const planets=[
 ['aurora','Aurora',15,30,'#e3b9ff','#784cc4'],['comet','Comet Dock',28,76,'#fff6b8','#af7321'],
 ['beacon','Beacon Ring',49,42,'#a0fae6','#288691'],['sable','Sable Moon',73,23,'#d5ecff','#667cc6'],
 ['ember','Ember Port',85,71,'#ffd991','#ca5c58']
];
const crew=[
 ['mira','Captain Mira','Pilot','Steers the rescue ship','✦'],
 ['jax','Engineer Jax','Engineer','Fixes radios and engines','⚙'],
 ['tali','Scout Tali','Mapper','Draws star maps','✧'],
 ['bo','Medic Bo','Medic','Looks after injured crew','✚']
];
const cases=[
 {id:'sunshift',file:'CASE 01 / DAY SHIFT',title:'The silent beacon',brief:'A rescue transmission went out during a test. Work out its time and date, then use the calendar evidence to tell two listening receivers apart.',month:10,year:2026,
 clues:['The test started at 2:00 pm. The rescue signal came 35 minutes later. Set the mission clock to the signal time.','The receiver schedules overlap. Find every station listening at your signal time. Don’t choose between them yet.','The test was two days after Thursday 12 November. Work out the date, then tap that day on the calendar. Match your signal time to the evidence it opens.','Find the crew member whose duty record matches the station, date and time.'],
 receivers:[['aurora',840,855],['comet',850,880],['beacon',870,895],['sable',880,905],['ember',895,920]],
 logs:[
  ['2026-11-12',875,'The signal passed through the cargo dock.'],
  ['2026-11-13',875,'The signal was picked up beside the docking clamps.'],
  ['2026-11-14',855,'The signal passed through the cargo dock.'],
  ['2026-11-14',875,'The signal came from the ring-shaped station.'],
  ['2026-11-15',875,'The ring-shaped station logged a short pulse.']
 ],
 shifts:[
  ['mira','comet','2026-11-14',875],['mira','beacon','2026-11-15',875],
  ['jax','beacon','2026-11-14',875],['jax','comet','2026-11-13',855],
  ['tali','comet','2026-11-13',875],['tali','aurora','2026-11-12',845],
  ['bo','comet','2026-11-12',875],['bo','beacon','2026-11-14',885]
 ],
 answer:{map:'beacon',clock:875,calendar:'2026-11-14',roster:'jax'},
 explain:'2:00 pm plus 35 minutes is 2:35 pm. Both Comet Dock and Beacon Ring were listening. Two days after Thursday 12 November is Saturday 14 November. The 2:35 pm entry on that day points to the ring-shaped station, Beacon Ring. Engineer Jax was on duty there at that time.'},
 {id:'midnight',file:'CASE 02 / MIDNIGHT SHIFT',title:'A message across midnight',brief:'The rescue signal was sent when a countdown ended. Use the clock and calendar to follow it across midnight, even though there are similar records on nearby days.',month:10,year:2026,
 clues:['The countdown began at 11:45 pm and lasted 30 minutes. Find when the rescue signal went out.','More than one receiver may be listening at that time. Check the schedules on both sides of midnight.','The countdown started on Monday 30 November. On which date did it finish? Tap the finish date and read the entry at your signal time.','Once you have the time, date and station, find who was on duty in the crew roster.'],
 receivers:[['aurora',1395,1425],['comet',1425,8],['beacon',0,20],['sable',10,25],['ember',25,40]],
 logs:[
  ['2026-11-29',15,'The pulse was picked up by the receiver in the ring-shaped station.'],
  ['2026-11-30',15,'The pulse was heard at the moon outpost.'],
  ['2026-12-01',5,'The pulse was picked up by the receiver in the ring-shaped station.'],
  ['2026-12-01',15,'A relay on the moon outpost passed on the signal.'],
  ['2026-12-02',15,'The pulse was picked up by the receiver in the ring-shaped station.']
 ],
 shifts:[
  ['mira','sable','2026-11-30',15],['mira','comet','2026-12-01',5],
  ['jax','beacon','2026-11-29',15],['jax','sable','2026-12-01',20],
  ['tali','sable','2026-12-01',15],['tali','ember','2026-12-02',35],
  ['bo','beacon','2026-12-01',15],['bo','beacon','2026-12-02',15]
 ],
 answer:{map:'sable',clock:15,calendar:'2026-12-01',roster:'tali'},
 explain:'Starting at 11:45 pm, 15 minutes takes you to midnight. Another 15 minutes takes you to 12:15 am on Tuesday 1 December. Beacon Ring and Sable Moon were both listening. The 12:15 am entry on 1 December points to the moon outpost, Sable Moon. Scout Tali was on duty there at that time.'}
];
const tabNames={map:'Where',clock:'Time',calendar:'Date',roster:'Who'};
const help={map:'use the calendar entry to tell the listening receivers apart',clock:'count the elapsed minutes and check am or pm',calendar:'work out the date, then open its signal entries',roster:'match station, date and time on the duty record'};
const gate=one('#gate'),play=one('#play'),instrument=one('#instrument'),summary=one('#summary'),feedback=one('#feedback');
let mission=cases[0], tab='map', pick={}, saveClock=480, attempted=false, year=mission.year, month=mission.month;
const pad=n=>String(n).padStart(2,'0');
const timeLabel=n=>((Math.floor(n/60)%12)||12)+':'+pad(n%60)+' '+(n>=720?'pm':'am');
const dateLabel=s=>new Intl.DateTimeFormat('en-AU',{timeZone:'UTC',weekday:'short',day:'numeric',month:'short'}).format(new Date(s+'T00:00:00Z'));
const planetName=id=>planets.find(x=>x[0]===id)?.[1]||id;
const windowEnd=n=>timeLabel(n%1440);
const attr=(on)=>' aria-pressed="'+Boolean(on)+'"';
const values={map:()=>planets.find(x=>x[0]===pick.map)?.[1],clock:()=>pick.clock===undefined?null:timeLabel(pick.clock),calendar:()=>pick.calendar?dateLabel(pick.calendar):null,roster:()=>crew.find(x=>x[0]===pick.roster)?.[1]};
const head=(title,sub)=>'<div class="instrument-head"><h3>'+title+'</h3><p>'+sub+'</p></div>';
async function digest(s){const b=await crypto.subtle.digest('SHA-256',new TextEncoder().encode(s));return Array.from(new Uint8Array(b),x=>x.toString(16).padStart(2,'0')).join('');}
one('#gate-form').addEventListener('submit',async e=>{
 e.preventDefault();const p=one('#pin'),error=one('#gate-error');
 try{if(await digest(p.value.trim())!=='3ea87a56da3844b420ec2925ae922bc731ec16a4fc44dcbeafdad49b0e61d39c'){error.textContent='That PIN didn’t match. Try again.';p.select();return;}}
 catch{error.textContent='Open the game on the class site to enter the PIN.';return;}
 try{sessionStorage.setItem('lostSpaceClassOpen','1');}catch{}
 unlock();
});
function unlock(){gate.hidden=true;play.hidden=false;choose(cases[0]);one('#case').focus();}
one('#case').innerHTML=cases.map(c=>'<option value="'+c.id+'">'+c.title+'</option>').join('');
one('#case').addEventListener('change',e=>choose(cases.find(c=>c.id===e.target.value)));
function choose(c){
 mission=c; tab='map'; pick={}; attempted=false; saveClock=c.id==='midnight'?1410:720; year=c.year; month=c.month;
 one('#case').value=c.id;one('#case-code').textContent=c.file;one('#case-title').textContent=c.title;one('#case-brief').textContent=c.brief;
 one('#clues').innerHTML=c.clues.map(x=>'<li><span>'+x+'</span></li>').join('');
 feedback.replaceChildren();feedback.className='feedback';render();
}
const starField=Array.from({length:60},(_,i)=>'<circle cx="'+((i*233+41)%989)+'" cy="'+((i*131+91)%555)+'" r="'+((i%4)*.49+.45)+'" fill="'+(i%5===0?'#b8f6ff':'#fff')+'" opacity="'+(.2+i%8*.09)+'"/>').join('');
function renderMap(){
 const lines=[[0,1],[0,2],[1,2],[2,3],[3,4]].map(([i,j])=>'<path d="M '+planets[i][2]*10+' '+planets[i][3]*5.6+' L '+planets[j][2]*10+' '+planets[j][3]*5.6+'" fill="none" stroke="#bbdcff" stroke-width="4" stroke-dasharray="9 9" opacity=".55"/>').join('');
 const windows=mission.receivers.map(([id,start,end])=>'<button type="button" class="window-record" data-planet="'+id+'"'+attr(pick.map===id)+'><strong>'+planetName(id)+'</strong><span>'+windowEnd(start)+' to '+windowEnd(end)+'</span></button>').join('');
 return head('Star map','Which receivers were listening at your signal time? Use the calendar evidence to choose one.')+'<div class="map"><svg viewBox="0 0 1000 560" preserveAspectRatio="none" aria-hidden="true">'+starField+lines+'</svg>'+planets.map(([id,name,x,y,c1,c2])=>'<button class="planet" data-planet="'+id+'"'+attr(pick.map===id)+' style="left:'+x+'%;top:'+y+'%;--planet1:'+c1+';--planet2:'+c2+'"><i></i><span>'+name+'</span></button>').join('')+'</div><div class="evidence"><h4>Receiver listening schedules</h4><p>A receiver starts listening at the first time and stops at the second. More than one receiver can be listening at the same time.</p><div class="window-list">'+windows+'</div></div>';
}
function renderClock(){
 const direction=(tick,rad)=>[Math.sin(tick*Math.PI/30)*rad,-Math.cos(tick*Math.PI/30)*rad];
 const marks=Array.from({length:60},(_,i)=>{const [x,y]=direction(i,i%5===0?95:101),[a,b]=direction(i,108);return '<line x1="'+x+'" y1="'+y+'" x2="'+a+'" y2="'+b+'" stroke="'+(i%5===0?'#d1c3f7':'#52557b')+'" stroke-width="'+(i%5===0?2:1)+'"/>';}).join('');
 const nums=Array.from({length:12},(_,i)=>{const [x,y]=direction((i+1)*5,80);return '<text x="'+x+'" y="'+y+'">'+(i+1)+'</text>';}).join('');
 const [hx,hy]=direction((saveClock%720)/12,50),[mx,my]=direction(saveClock%60,71);const [time,mer]=timeLabel(saveClock).split(' ');
 return head('Mission clock','Set the clock, then use that time.')+'<div class="clockwork"><svg class="dial" viewBox="-119 -119 238 238" role="img" aria-label="Analogue clock showing '+timeLabel(saveClock)+'"><circle r="114" fill="#151930" stroke="#6f6595" stroke-width="2"/>'+marks+nums+'<line class="hour" x2="'+hx+'" y2="'+hy+'"/><line class="minute" x2="'+mx+'" y2="'+my+'"/><circle r="5" fill="#fff"/></svg><div class="clockcontrols"><p class="clockread" aria-live="polite">'+time+' <small>'+mer+'</small></p><div class="buttonrow"><button data-offset="-60">−1 hour</button><button data-offset="60">+1 hour</button><button data-offset="-5">−5 min</button><button data-offset="5">+5 min</button></div><button class="meridiem" data-offset="720">Switch am / pm</button><button class="primary" data-settime>Use this time</button></div></div>';
}
function calendarPanel(d){
 const y=d.getUTCFullYear(),m=d.getUTCMonth();
 const name=new Intl.DateTimeFormat('en-AU',{timeZone:'UTC',year:'numeric',month:'long'}).format(d);
 const blank=(d.getUTCDay()+6)%7,n=new Date(Date.UTC(y,m+1,0)).getUTCDate();
 const days=Array.from({length:n},(_,i)=>{
  const id=y+'-'+pad(m+1)+'-'+pad(i+1), selected=pick.calendar===id;
  return '<button data-date="'+id+'"'+attr(selected)+' aria-label="'+dateLabel(id)+'"'+(selected?' aria-describedby="date-evidence"':'')+'>'+(i+1)+'</button>';
 }).join('');
 return '<section class="calendar-panel" aria-label="'+name+'"><h4>'+name+'</h4><div class="calendar">'+['Mon','Tue','Wed','Thu','Fri','Sat','Sun'].map(day=>'<span class="week">'+day+'</span>').join('')+'<span aria-hidden="true"></span>'.repeat(blank)+days+'</div></section>';
}
function renderCalendar(){
 const selected=pick.calendar;
 const logs=mission.logs.filter(([date])=>date===selected);
 const fragment=!selected?'<p>Tap the date you worked out to open its signal log.</p>':logs.length?
  '<ul class="signal-fragments">'+logs.map(([,t,clue])=>'<li><strong>'+timeLabel(t)+'</strong><span>'+clue+'</span></li>').join('')+'</ul>':
  '<p>No signal entry was recorded on this date. Recheck the date clue in the case file.</p>';
 return head('Calendar','Work out the date from the case file. Tap that date to see what the receiver recorded.')+
 '<div class="calnav"><button data-month="-1" aria-label="Show the previous month">Previous month</button><button data-month="1" aria-label="Show the next month">Next month</button></div>'+
 '<div class="calendar-pair">'+calendarPanel(new Date(Date.UTC(year,month,1)))+calendarPanel(new Date(Date.UTC(year,month+1,1)))+'</div>'+
 '<div class="evidence date-evidence" id="date-evidence"><h4>'+(selected?'Signal log · '+dateLabel(selected):'Signal log')+'</h4>'+fragment+'</div>';
}
function renderRoster(){
 return head('Crew roster','Shifts change from day to day. Each crew member has two records: match the station, date and time.')+'<div class="roster">'+crew.map(([id,name,role,detail,icon])=>{
  const rows=mission.shifts.filter(row=>row[0]===id);
  return '<button class="crew" data-crew="'+id+'"'+attr(pick.roster===id)+'><span aria-hidden="true">'+icon+'</span><strong>'+name+'</strong><small>'+role+'</small><span class="shift-pair">'+rows.map(([,station,date,t])=>'<span class="shift"><strong>'+planetName(station)+'</strong><span>'+dateLabel(date)+' · '+timeLabel(t)+'</span></span>').join('')+'</span></button>';
 }).join('')+'</div>';
}
function drawSummary(){
 summary.innerHTML=Object.keys(tabNames).map(k=>{const v=values[k]();return '<button data-jump="'+k+'" class="'+(attempted&&v?(pick[k]===mission.answer[k]?'pass':'check'):v?'ready':'')+'"><span>'+tabNames[k]+(attempted&&v?(pick[k]===mission.answer[k]?' · correct':' · check'):'')+'</span><strong>'+(v??'Not set')+'</strong></button>';}).join('');
}
function render(){
 many('[data-tab]').forEach(b=>b.setAttribute('aria-pressed',String(b.dataset.tab===tab)));
 instrument.innerHTML=({map:renderMap,clock:renderClock,calendar:renderCalendar,roster:renderRoster})[tab]();
 drawSummary();
}
function move(t){tab=t;render();instrument.querySelector('h3').setAttribute('tabindex','-1');instrument.querySelector('h3').focus({preventScroll:true});}
function record(k,v){pick[k]=v;attempted=false;feedback.replaceChildren();feedback.className='feedback';render();}
play.addEventListener('click',e=>{
 const b=e.target.closest('button');if(!b)return;
 if(b.dataset.tab||b.dataset.jump){move(b.dataset.tab||b.dataset.jump);return;}
 if(b.dataset.planet){record('map',b.dataset.planet);one((b.classList.contains('window-record')?'.window-record':'.planet')+'[data-planet="'+b.dataset.planet+'"]').focus({preventScroll:true});return;}
 if(b.dataset.crew){record('roster',b.dataset.crew);one('[data-crew="'+b.dataset.crew+'"]').focus({preventScroll:true});return;}
 if(b.dataset.date){record('calendar',b.dataset.date);one('[data-date="'+b.dataset.date+'"]').focus({preventScroll:true});return;}
 if(b.dataset.offset){saveClock=(saveClock+Number(b.dataset.offset)+1440)%1440;render();one('[data-offset="'+b.dataset.offset+'"]').focus({preventScroll:true});return;}
 if(b.hasAttribute('data-settime')){record('clock',saveClock);one('[data-settime]').focus({preventScroll:true});return;}
 if(b.dataset.month){const d=new Date(Date.UTC(year,month+Number(b.dataset.month),1));year=d.getUTCFullYear();month=d.getUTCMonth();render();one('[data-month="'+b.dataset.month+'"]').focus({preventScroll:true});return;}
 if(b.hasAttribute('data-next')){choose(cases[(cases.indexOf(mission)+1)%cases.length]);one('#case').focus();return;}
 if(b.id==='submit')check();
});
function check(){
 const keys=Object.keys(tabNames),missing=keys.filter(k=>pick[k]===undefined);
 if(missing.length){feedback.textContent='Set '+missing.map(k=>tabNames[k].toLowerCase()).join(', ')+' before sending your signal.';return;}
 attempted=true;drawSummary();const wrong=keys.filter(k=>pick[k]!==mission.answer[k]);
 if(wrong.length){feedback.textContent=(4-wrong.length)+' of 4 coordinates correct. Recheck '+wrong.map(k=>tabNames[k].toLowerCase()+': '+help[k]).join('; ')+'.';feedback.className='feedback';return;}
 feedback.className='feedback success';feedback.innerHTML='✦ Rescue complete. All four coordinates match.<div class="answer-reason">'+mission.explain+'</div><button type="button" class="primary" data-next>Load '+(cases.indexOf(mission)===0?'next case':'first case')+'</button>';
}
try{if(sessionStorage.getItem('lostSpaceClassOpen')==='1')unlock();}catch{}
})();
