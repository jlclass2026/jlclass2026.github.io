(() => {
'use strict';
const config=window.FARM_CONFIG;
const $=id=>document.getElementById(id);
const systemKeys=['water','soil','food','habitat','energy','care'];
const labels={water:'Water',soil:'Soil & waste',food:'Food & fibre',habitat:'Wildlife',energy:'Energy',care:'Farm care'};
const seasons=['Autumn','Winter','Spring','Summer'];
const captions=['Gather the harvest. Prepare the soil.','Collect the rain. Protect living things.','Plant new crops. Welcome pollinators.','Save water. Give shade. Share the harvest.'];
const tips={
water:['Catch autumn rain and refill storage before the next growing cycle.','Collect wetter-season rain. Let excess water soak into planted areas.','Send water to growing roots with drip irrigation.','Draw on stored water. Mulch and drip lines help reduce demand.'],
soil:['Compost suitable harvest scraps and cover the soil.','Cover crops keep resting beds protected from heavy rain.','Use finished compost and rotate what grows in each bed.','Keep mulch over the soil to slow evaporation.'],
food:['Gather mature crops and put suitable harvests into storage.','Stored harvests and protected growing space help bridge quieter months.','Sow and plant at suitable times; blossoms attract pollinators.','Harvest summer crops while caring for the next crop cycle.'],
habitat:['Leave protected habitat and keep some flowering plants available.','Sheltered vegetation and suitable nest boxes provide refuge.','Flowers feed pollinators when new crops begin growing.','Shade and clean, safely managed wildlife water can help in heat.'],
energy:['Capture sunlight for farm jobs and charge a small reserve.','Use stored energy carefully when days have less sunshine.','Solar power helps run the watering system as plants grow.','Use the sunnier days while still keeping electricity use efficient.'],
care:['Prepare shelter and store feed before winter.','Keep animals sheltered, watered and supplied with suitable feed.','Check fences, clean water points and rotate grazing areas.','Provide shade, reliable drinking water and regular checks.']
};
const questions={water:'Where does the water go after it leaves the tank?',soil:'Which scraps belong in compost, and which do not?',food:'Which parts provide food, fibre or flowers?',habitat:'Which local animal could use this habitat safely?',energy:'Which farm jobs need electricity?',care:'What care is still needed when the weather changes?'};
let season=0,progress=0,elapsed=0,selected='water',weather='normal',playing=!matchMedia('(prefers-reduced-motion: reduce)').matches;
let motionAllowed=!matchMedia('(prefers-reduced-motion: reduce)').matches;
let speed=24000,lastTime=0,animationTime=0,zoom=1,expanded=false;
const renderer = new window.FarmScene($('farm-canvas'),{id:config.id});
const baseUse={a:[24,18,30,38],'k-w':[28,19,34,42],m:[30,23,37,47],a2:[32,24,39,49]}[config.id];
const weatherPlans={normal:{rain:[28,44,30,14],reserve:[0,0,0,16],use:1},dry:{rain:[16,25,18,6],reserve:[14,10,20,28],use:1.08},wet:{rain:[42,60,44,25],reserve:[0,0,0,10],use:.93}};
function waterYear(kind){let balance=56;const plan=weatherPlans[kind];return baseUse.map((use,i)=>{const opening=balance,demand=Math.round(use*plan.use),rain=plan.rain[i],reserve=plan.reserve[i];const uncapped=opening+rain+reserve-demand;balance=Math.min(100,uncapped);return {opening,rain,reserve,demand,closing:balance,overflow:Math.max(0,uncapped-100)};});}
// This model deliberately includes support plans. It is not a simulation of an unsupported original drawing.
const markerPositions=renderer.getHotspots();
for(const [i,key] of systemKeys.entries()){
 const button=document.createElement('button');button.type='button';button.dataset.system=key;button.setAttribute('aria-pressed',String(key===selected));button.innerHTML=`<span class="mini-number">${i+1}</span>${labels[key]}`;button.addEventListener('click',()=>selectSystem(key));$('system-buttons').append(button);
 const p=markerPositions.find(x=>x.key===key);if(p){const marker=document.createElement('button');marker.type='button';marker.className='map-marker';marker.dataset.system=key;marker.setAttribute('aria-label',`${i+1}. Explore ${labels[key]}`);marker.setAttribute('aria-pressed',String(key===selected));marker.textContent=i+1;marker.style.left=(p.x/1600*100)+'%';marker.style.top=(p.y/1000*100)+'%';marker.addEventListener('click',()=>selectSystem(key));$('map-markers').append(marker);}
}
function selectSystem(key){selected=key;document.querySelectorAll('[data-system]').forEach(b=>b.setAttribute('aria-pressed',String(b.dataset.system===key)));updateDetail();draw();}
function updateDetail(){const f=config.facts[selected];$('detail-title').textContent=labels[selected];$('detail-number').textContent=systemKeys.indexOf(selected)+1;$('detail-season').textContent=tips[selected][season];$('original-title').textContent=f[0];$('original-text').textContent=f[1];$('addition-text').textContent=f[2];$('thinking-question').textContent=questions[selected];}
function updateWater(){const row=waterYear(weather)[season];$('water-value').textContent=row.closing;$('tank-fill').style.width=row.closing+'%';document.querySelector('.tank-meter').setAttribute('aria-valuenow',row.closing);$('water-equation').textContent=`${row.opening} stored + ${row.rain} collected + ${row.reserve} planned reserve − ${row.demand} used${row.overflow?' − '+row.overflow+' to soak area':''} = ${row.closing} left`;$('water-season-label').textContent=seasons[season].toUpperCase()+' WATER PLAN';$('water-headline').textContent=['Save some for later.','Let the rain refill the tank.','Water the roots, not the paths.','Keep a summer buffer.'][season];let text=weather==='dry'?'The drier-year plan adds stored reserve water and careful irrigation.':weather==='wet'?'The wetter-year plan collects more rain and routes excess to a planted soak area.':'The plan combines rain collection, storage and careful watering.';text+=` This season uses ${row.demand} model units and keeps ${row.closing} in reserve.`;$('water-explanation').textContent=text;$('outcome-detail').textContent='All four seasons keep a water reserve in this supported plan. Soil care, harvest storage, habitat, energy and care plans are included too.';}
function updateSeason(announce=false){$('season-name').textContent=seasons[season];$('season-kicker').textContent=`SEASON 0${season+1} / 04`;$('season-caption').textContent=captions[season];document.querySelectorAll('[data-season]').forEach(b=>b.setAttribute('aria-pressed',String(+b.dataset.season===season)));document.querySelector('.world-shell').dataset.season=seasons[season].toLowerCase();updateDetail();updateWater();if(announce)$('announcement').textContent=seasons[season]+'. '+captions[season];}
function updatePlay(){$('play').textContent=playing?'Pause year':'Play year';$('play').setAttribute('aria-pressed',String(playing));}
function setSeason(next){season=next;elapsed=0;progress=0;playing=false;updatePlay();updateSeason(true);draw();updateProgress();}
function updateProgress(){const pct=Math.round((season+progress)/4*100);$('year-fill').style.width=pct+'%';document.querySelector('.year-progress').setAttribute('aria-valuenow',pct);document.querySelector('.year-progress').setAttribute('aria-valuetext',seasons[season]+', '+Math.round(progress*100)+' percent through the season');}
function draw(){renderer.render({season,progress,motion:playing&&motionAllowed,time:animationTime,weather,focus:selected,improvements:true});}
$('play').addEventListener('click',()=>{playing=!playing;if(playing)motionAllowed=true;lastTime=performance.now();updatePlay();});
$('restart').addEventListener('click',()=>{season=0;progress=0;elapsed=0;animationTime=0;updateSeason(true);updateProgress();draw();});
$('speed').addEventListener('change',e=>{speed=+e.target.value;elapsed=progress*speed;});
$('weather').addEventListener('change',e=>{weather=e.target.value;updateWater();draw();$('announcement').textContent=e.target.options[e.target.selectedIndex].text+'. The support plan has been updated.';});
document.querySelectorAll('[data-season]').forEach(b=>b.addEventListener('click',()=>setSeason(+b.dataset.season)));
function setZoom(next){zoom=Math.min(2,Math.max(1,next));const isMobile=innerWidth<=620;const base=isMobile?(expanded?160:128):100;$('world-board').style.width=base*zoom+'%';$('world-board').style.minWidth=base*zoom+'%';$('zoom-label').textContent=Math.round(zoom*100)+'%';$('zoom-out').disabled=zoom<=1;$('zoom-in').disabled=zoom>=2;}
$('zoom-in').addEventListener('click',()=>setZoom(zoom+.25));$('zoom-out').addEventListener('click',()=>setZoom(zoom-.25));$('zoom-reset').addEventListener('click',()=>{setZoom(1);$('viewport').scrollTo(0,0);});
function toggleExpand(next){expanded=next;document.querySelector('.world-shell').classList.toggle('expanded',expanded);document.body.classList.toggle('expanded',expanded);$('expand').innerHTML=expanded?'✕ <span>Close</span>':'⛶ <span>Expand</span>';$('expand').setAttribute('aria-label',expanded?'Close expanded farm view':'Expand farm view');$('expand').setAttribute('aria-expanded',String(expanded));if(!expanded||innerWidth<=620)setZoom(1);else{$('world-board').style.width='';$('world-board').style.minWidth='';zoom=1;$('zoom-label').textContent='100%';}if(expanded)$('announcement').textContent='Expanded farm view. Press Escape or Close to return.';}
$('expand').addEventListener('click',()=>toggleExpand(!expanded));document.addEventListener('keydown',e=>{if(e.key==='Escape'&&expanded){toggleExpand(false);$('expand').focus();}});window.addEventListener('resize',()=>{if(!expanded)setZoom(zoom);});
document.addEventListener('visibilitychange',()=>{if(document.hidden){playing=false;updatePlay();}});
matchMedia('(prefers-reduced-motion: reduce)').addEventListener('change',e=>{motionAllowed=!e.matches;if(e.matches){playing=false;updatePlay();draw();}});
function frame(t){if(!lastTime)lastTime=t;const delta=Math.min(150,t-lastTime);lastTime=t;if(playing){elapsed+=delta;animationTime+=delta;if(elapsed>=speed){elapsed-=speed;season=(season+1)%4;updateSeason(true);}progress=elapsed/speed;updateProgress();draw();}requestAnimationFrame(frame);}
updateSeason();updatePlay();setZoom(1);updateProgress();draw();requestAnimationFrame(frame);
window.farmExperience={getState:()=>({season,progress,playing,selected,weather,zoom,expanded}),waterYear,setSeason};
})();
