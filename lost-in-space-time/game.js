(() => {
'use strict';
const one=(s,r=document)=>r.querySelector(s), many=(s,r=document)=>[...r.querySelectorAll(s)];
const planets=[
 ['aurora','Aurora',17,27,'#e3b9ff','#784cc4','Tall antenna tower with three prongs'],
 ['comet','Comet Dock',18,72,'#fff6b8','#af7321','Long rectangular docking gantry with a comet trail'],
 ['beacon','Beacon Ring',49,30,'#a0fae6','#288691','Hollow circular structure with one open centre'],
 ['sable','Sable Moon',82,27,'#d5ecff','#667cc6','Dark, rocky crescent'],
 ['ember','Ember Port',81,72,'#ffd991','#ca5c58','Six-sided orange refinery'],
 ['prism','Prism Spire',50,75,'#b9dcff','#8470e1','Tall pointed crystal with flat facets']
];
const crew=[
 ['mira','Captain Mira','Pilot','Steers the rescue ship','✦'],
 ['jax','Engineer Jax','Engineer','Fixes radios and engines','⚙'],
 ['tali','Scout Tali','Mapper','Draws star maps','✧'],
 ['bo','Medic Bo','Medic','Looks after injured crew','✚'],
 ['nix','Navigator Nix','Navigator','They chart safe routes','✥'],
 ['vela','Ranger Vela','Ranger','She scouts the outer stations','✶']
];
const cases=[
 {id:'sunshift',file:'CASE 01 / DAY SHIFT',title:'The silent beacon',brief:'A rescue transmission interrupted a routine battery test.',month:10,year:2026,
 clues:['A battery test ran on Tuesday 10 November. Tests repeat every second day. The signal was logged during the second test after that.','The power-up began at 1:25 pm and lasted 45 minutes. The signal went out at the end of the 25-minute test that followed.'],
 receivers:[['aurora',830,860],['comet',845,880],['beacon',870,895],['sable',885,905],['ember',895,920],['prism',865,900]],
 logs:[
  ['2026-11-12',850,'A long rectangular frame crossed the camera view.','comet'],
  ['2026-11-12',875,'The camera saw one big circle with empty space in the middle.','beacon'],
  ['2026-11-13',850,'Three antenna prongs stood out above a narrow tower.','aurora'],
  ['2026-11-13',875,'A long rectangular frame was visible against a bright tail.','comet'],
  ['2026-11-14',850,'The picture showed three prongs rising from a tower.','aurora'],
  ['2026-11-14',875,'Light from a star was visible right through the centre of a round structure.','beacon'],
  ['2026-11-15',850,'The signal came from a long, straight docking frame.','comet'],
  ['2026-11-15',875,'A tall point with flat, shining faces filled the view.','prism']
 ],
 schedules:[
  ['mira','comet',[5,6],825,25,15,25,'aurora'],['jax','beacon',[6],830,30,10,30,'comet'],
  ['tali','aurora',[5,6],805,35,5,15,'comet'],['bo','beacon',[4,0],840,25,5,20,'aurora'],
  ['nix','prism',[6,0],840,25,5,25,'beacon'],['vela','comet',[4,0],810,20,10,20,'aurora']
 ],
 event:{reference:'2026-11-10',days:4,start:805,parts:[45,25]},
 explain:'Two test cycles of two days take us from Tuesday 10 November to Saturday 14 November. The 45-minute power-up ended at 2:10 pm and the 25-minute test ended at 2:35 pm. The 2:35 pm entry points to the round station with an open centre. Jax’s Saturday second duty at Beacon Ring ran from 2:30 pm to 3:00 pm.'},
 {id:'midnight',file:'CASE 02 / MIDNIGHT SHIFT',title:'A message across midnight',brief:'A relay recorded a rescue transmission during the night shift.',month:10,year:2026,
 clues:['The diagnostic run began two nights after Saturday 28 November.','Diagnostics began at 11:20 pm and ran for 45 minutes. The rescue signal went out after a further 10-minute countdown.'],
 receivers:[['aurora',1395,1425],['comet',1425,8],['beacon',0,20],['sable',10,25],['ember',25,40],['prism',12,35]],
 logs:[
  ['2026-11-29',5,'Stars were visible through the open middle of a circular structure.','beacon'],
  ['2026-11-29',15,'A slim crystal rose to a point, with light glinting off its flat sides.','prism'],
  ['2026-11-30',5,'A distant light shone through the open centre of a round structure.','beacon'],
  ['2026-11-30',15,'The receiver was on a sliver of dark rock, curved on one side.','sable'],
  ['2026-12-01',5,'A large circular structure was open right through the middle.','beacon'],
  ['2026-12-01',15,'The camera recorded a dark, rocky sliver with two curved tips.','sable'],
  ['2026-12-02',5,'The image showed one circular structure, with an empty centre.','beacon'],
  ['2026-12-02',15,'A star was visible through a single open circle.','beacon']
 ],
 schedules:[
  ['mira','sable',[0],1395,35,15,25,'aurora'],['jax','prism',[6],1405,30,10,25,'comet'],
  ['tali','sable',[1],1400,35,15,25,'ember'],['bo','beacon',[1,2],1410,20,20,25,'sable'],
  ['nix','prism',[1],1405,30,15,25,'ember'],['vela','beacon',[6,0,1,2],1405,20,15,10,'comet']
 ],
 event:{reference:'2026-11-28',days:2,start:1400,parts:[45,10]},
 explain:'Two nights after Saturday 28 November is Monday 30 November. The diagnostics ended at 12:05 am and the countdown ended at 12:15 am on Tuesday 1 December. The rocky crescent in that entry is Sable Moon. Tali’s Monday shift had a second duty block from 12:10 am to 12:35 am on Tuesday.'}
];
const tabNames={map:'Where',clock:'Time',calendar:'Date',roster:'Who'};
const gate=one('#gate'),play=one('#play'),instrument=one('#instrument'),summary=one('#summary'),feedback=one('#feedback');
let mission=cases[0], tab='map', pick={}, saveClock=480, attempted=false, year=mission.year, month=mission.month;
const pad=n=>String(n).padStart(2,'0');
const timeLabel=n=>((Math.floor(n/60)%12)||12)+':'+pad(n%60)+' '+(n>=720?'pm':'am');
const dateLabel=s=>new Intl.DateTimeFormat('en-AU',{timeZone:'UTC',weekday:'short',day:'numeric',month:'short'}).format(new Date(s+'T00:00:00Z'));
const station=id=>planets.find(x=>x[0]===id);
const planetName=id=>station(id)?.[1]||id;
const windowEnd=n=>timeLabel(n%1440);
const attr=(on)=>' aria-pressed="'+Boolean(on)+'"';
const values={map:()=>planets.find(x=>x[0]===pick.map)?.[1],clock:()=>pick.clock===undefined?null:timeLabel(pick.clock),calendar:()=>pick.calendar?dateLabel(pick.calendar):null,roster:()=>crew.find(x=>x[0]===pick.roster)?.[1]};
const head=title=>'<div class="instrument-head"><h3>'+title+'</h3></div>';
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
 const lines=[[0,1],[0,2],[1,2],[1,5],[2,3],[2,4],[2,5],[3,4],[4,5]].map(([i,j])=>'<path d="M '+planets[i][2]*10+' '+planets[i][3]*5.6+' L '+planets[j][2]*10+' '+planets[j][3]*5.6+'" fill="none" stroke="#bbdcff" stroke-width="4" stroke-dasharray="9 9" opacity=".55"/>').join('');
 const windows=mission.receivers.map(([id,start,end])=>'<button type="button" class="window-record" data-planet="'+id+'"'+attr(pick.map===id)+'><strong>'+planetName(id)+'</strong><span>'+windowEnd(start)+' to '+windowEnd(end)+(end<start?' (next day)':'')+'</span><small class="station-shape">'+station(id)[6]+'</small></button>').join('');
 return head('Star map')+'<div class="map"><svg viewBox="0 0 1000 560" preserveAspectRatio="none" aria-hidden="true">'+starField+lines+'</svg>'+planets.map(([id,name,x,y,c1,c2,shape])=>'<button type="button" class="planet" data-planet="'+id+'"'+attr(pick.map===id)+' aria-label="'+name+': '+shape+'" style="left:'+x+'%;top:'+y+'%;--planet1:'+c1+';--planet2:'+c2+'"><i aria-hidden="true"></i><img class="station-art" src="assets/'+id+'.webp" alt=""><span>'+name+'</span></button>').join('')+'</div><div class="evidence"><h4>Receiver listening schedules</h4><p>Receivers come online at the first time and go offline at the second.</p><div class="window-list">'+windows+'</div></div>';
}
function renderClock(){
 const direction=(tick,rad)=>[Math.sin(tick*Math.PI/30)*rad,-Math.cos(tick*Math.PI/30)*rad];
 const marks=Array.from({length:60},(_,i)=>{const [x,y]=direction(i,i%5===0?95:101),[a,b]=direction(i,108);return '<line x1="'+x+'" y1="'+y+'" x2="'+a+'" y2="'+b+'" stroke="'+(i%5===0?'#d1c3f7':'#52557b')+'" stroke-width="'+(i%5===0?2:1)+'"/>';}).join('');
 const nums=Array.from({length:12},(_,i)=>{const [x,y]=direction((i+1)*5,80);return '<text x="'+x+'" y="'+y+'">'+(i+1)+'</text>';}).join('');
 const [hx,hy]=direction((saveClock%720)/12,50),[mx,my]=direction(saveClock%60,71);const [time,mer]=timeLabel(saveClock).split(' ');
 return head('Mission clock')+'<div class="clockwork"><svg class="dial" viewBox="-119 -119 238 238" role="img" aria-label="Analogue clock showing '+timeLabel(saveClock)+'"><circle r="114" fill="#151930" stroke="#6f6595" stroke-width="2"/>'+marks+nums+'<line class="hour" x2="'+hx+'" y2="'+hy+'"/><line class="minute" x2="'+mx+'" y2="'+my+'"/><circle r="5" fill="#fff"/></svg><div class="clockcontrols"><p class="clockread" aria-live="polite">'+time+' <small>'+mer+'</small></p><div class="buttonrow"><button data-offset="-60">−1 hour</button><button data-offset="60">+1 hour</button><button data-offset="-5">−5 min</button><button data-offset="5">+5 min</button></div><button class="meridiem" data-offset="720">Switch am / pm</button><button class="primary" data-settime>Use this time</button></div></div>';
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
 const fragment=!selected?'<p>No date selected.</p>':logs.length?
  '<ul class="signal-fragments">'+logs.map(([,t,clue])=>'<li><strong>'+timeLabel(t)+'</strong><span>'+clue+'</span></li>').join('')+'</ul>':
  '<p>No signal entry was recorded on this date.</p>';
 return head('Calendar')+
 '<div class="calnav"><button data-month="-1" aria-label="Show the previous month">Previous month</button><button data-month="1" aria-label="Show the next month">Next month</button></div>'+
 '<div class="calendar-pair">'+calendarPanel(new Date(Date.UTC(year,month,1)))+calendarPanel(new Date(Date.UTC(year,month+1,1)))+'</div>'+
 '<div class="evidence date-evidence" id="date-evidence"><h4>'+(selected?'Signal log · '+dateLabel(selected):'Signal log')+'</h4>'+fragment+'</div>';
}
const weekShort=['Sun','Mon','Tue','Wed','Thu','Fri','Sat'];
const DAY_MS=86400000;
function onDuty(caseFile,stationId,date,minute){
 const at=new Date(date+'T00:00:00Z'), answer=[];
 caseFile.schedules.forEach(([id,station,days,start,first,rest,second,firstStation])=>{
  for(const back of [0,1]){
   const day=new Date(+at-back*DAY_MS).getUTCDay();
   if(!days.includes(day))continue;
   const relative=minute+back*1440, secondStart=start+first+rest;
   if((firstStation===stationId&&relative>=start&&relative<start+first)||(station===stationId&&relative>=secondStart&&relative<secondStart+second)){answer.push(id);break;}
  }
 });
 return answer;
}
function caseAnswer(caseFile){
 const event=caseFile.event, elapsed=event.start+event.parts.reduce((sum,x)=>sum+x,0);
 const date=new Date(+new Date(event.reference+'T00:00:00Z')+(event.days+Math.floor(elapsed/1440))*DAY_MS).toISOString().slice(0,10);
 const minute=elapsed%1440;
 const records=caseFile.logs.filter(([d,t])=>d===date&&t===minute);
 if(records.length!==1)return null;
 const station=records[0][3], r=caseFile.receivers.find(row=>row[0]===station);
 if(!r)return null;
 const [,a,b]=r;
 if(!(a<b?minute>=a&&minute<b:minute>=a||minute<b))return null;
 const roster=onDuty(caseFile,station,date,minute);
 return roster.length!==1?null:{map:station,clock:minute,calendar:date,roster:roster[0]};
}
function renderRoster(){
 return head('Crew roster')+'<p class="roster-key">Days shown are when shifts begin. Break time is off duty.</p><div class="roster">'+crew.map(([id,name,role,detail,icon])=>{
  const [,station,days,start,first,rest,second,firstStation]=mission.schedules.find(row=>row[0]===id);
  const repeat=days.map(n=>weekShort[n]).join(' / ');
  return '<button type="button" class="crew" data-crew="'+id+'"'+attr(pick.roster===id)+'><span class="portrait-wrap"><span class="crew-icon" aria-hidden="true">'+icon+'</span><img class="crew-portrait" src="assets/'+id+'.webp" alt=""></span><strong>'+name+'</strong><small title="'+detail+'">'+role+'</small><span class="shift-pair"><span class="shift roster-days"><strong>'+repeat+' · '+timeLabel(start)+'</strong></span><span class="shift roster-duty"><span><strong>'+planetName(firstStation)+'</strong> '+first+' min</span><span>Break '+rest+' min</span><span><strong>'+planetName(station)+'</strong> '+second+' min</span></span></span></button>';
 }).join('')+'</div>';
}
function drawSummary(){
 const answer=attempted?caseAnswer(mission):null;
 summary.innerHTML=Object.keys(tabNames).map(k=>{const v=values[k]();return '<button data-jump="'+k+'" class="'+(answer&&v?(pick[k]===answer[k]?'pass':'check'):v?'ready':'')+'"><span>'+tabNames[k]+(answer&&v?(pick[k]===answer[k]?' · correct':' · check'):'')+'</span><strong>'+(v??'Not set')+'</strong></button>';}).join('');
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
 if(b.id==='submit'){const state=check();if(state)play.dispatchEvent(new CustomEvent('rescue:transmit',{detail:{state}}));}
});
function check(){
 const keys=Object.keys(tabNames),missing=keys.filter(k=>pick[k]===undefined);
 if(missing.length){feedback.textContent='Transmission incomplete. '+missing.length+' coordinates not entered.';return 'incomplete';}
 const answer=caseAnswer(mission);
 if(!answer){feedback.textContent='Transmission unavailable.';return 'retry';}
 attempted=true;drawSummary();const wrong=keys.filter(k=>pick[k]!==answer[k]);
 if(wrong.length){feedback.textContent=(4-wrong.length)+' of 4 coordinates correct.';feedback.className='feedback';return 'retry';}
 feedback.className='feedback success';feedback.innerHTML='✦ Rescue complete. All four coordinates match.<div class="answer-reason">'+mission.explain+'</div><button type="button" class="primary" data-next>Load '+(cases.indexOf(mission)===0?'next case':'first case')+'</button>';
 return 'success';
}
try{if(sessionStorage.getItem('lostSpaceClassOpen')==='1')unlock();}catch{}
})();
