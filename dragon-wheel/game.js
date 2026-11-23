'use strict';
const VALID=/^\d+$/;
const integer=(s,min,max)=>VALID.test(String(s))&&+s>=min&&+s<=max?+s:null;
function divide(total, divisor, mode='share'){
 if(integer(total,1,100)===null||integer(divisor,1,100)===null||!['share','group'].includes(mode))return null;
 total=+total;divisor=+divisor;
 const quotient=Math.floor(total/divisor),remainder=total%divisor;
 return {total,divisor,quotient,remainder,nurseries:mode==='share'?divisor:quotient,each:mode==='share'?quotient:divisor};
}
function multiplyModel(groups,each){
 groups=integer(groups,1,100);each=integer(each,1,100);
 if(groups===null||each===null)return null;
 return {nurseries:groups,each,total:groups*each,remainder:0};
}
function checkWedge(total,divisor,answer,op='divide'){
 if(op==='multiply'){
  const given=integer(total,1,100), number=integer(divisor,1,12), val=integer(answer,0,1200);
  if(given===null||number===null)return 'invalid';
  if(val===null)return 'blank';
  return val===given*number?'correct':'incorrect';
 }
 const a=integer(answer,0,100), d=divide(total,divisor);
 if(!d)return 'invalid';
 if(d.remainder)return 'remainder';
 if(a===null)return 'blank';
 return a===d.quotient?'correct':'incorrect';
}
if(typeof module!=='undefined')module.exports={divide,multiplyModel,checkWedge};
if(typeof document!=='undefined'){init();gate();}
function gate(){
 const form=document.getElementById('gate-form');
 if(!form)return;
 const pin=document.getElementById('class-pin'), error=document.getElementById('gate-error');
 const open=()=>{document.getElementById('class-gate').hidden=true;document.getElementById('game').hidden=false;document.getElementById('game-title').focus();};
 try{if(sessionStorage.getItem('dragonWheelClassOpen')==='1'){open();return;}}catch{}
 form.addEventListener('submit',async e=>{
  e.preventDefault();error.textContent='';
  const value=pin.value.trim();
  if(!/^\d{4}$/.test(value)){error.textContent='Enter the four-digit class PIN.';pin.select();return;}
  try{
   const bytes=await crypto.subtle.digest('SHA-256',new TextEncoder().encode(value));
   const hash=Array.from(new Uint8Array(bytes),x=>x.toString(16).padStart(2,'0')).join('');
   if(hash!=='afbfb89027a4dae87c6033eaa07896e93f3f1ddc2214ca43658982e8aa74b4d4'){error.textContent='That PIN didn’t match. Try again.';pin.select();return;}
  }catch{error.textContent='Open the game from the Class Games site.';return;}
  try{sessionStorage.setItem('dragonWheelClassOpen','1');}catch{}
  pin.value='';open();
 });
}
function init(){
 const $=id=>document.getElementById(id), divisor=$('divisor'),wheel=$('wheel'),time=$('time');
 const make=(tag,cls,txt)=>Object.assign(document.createElement(tag),{className:cls,textContent:txt||''});
 for(let i=1;i<=12;i++){const o=make('option','',String(i));o.value=i;divisor.append(o);}
 divisor.value=5;
 const svgNS='http://www.w3.org/2000/svg';
 const svg=document.createElementNS(svgNS,'svg');svg.setAttribute('viewBox','0 0 500 500');svg.setAttribute('aria-hidden','true');
 const coords=(r,a)=>[250+Math.sin(a)*r,250-Math.cos(a)*r];
 const point=(r,a)=>coords(r,a).map(v=>v.toFixed(2)).join(' ');
 for(let i=0;i<6;i++){
  const a=i*Math.PI/3-Math.PI/6,b=a+Math.PI/3;
  for(const [outer,inner,tone] of [[239,151,'outer'],[151,68,'middle']]){
   const p=document.createElementNS(svgNS,'path');
   p.setAttribute('d',`M ${point(outer,a)} A ${outer} ${outer} 0 0 1 ${point(outer,b)} L ${point(inner,b)} A ${inner} ${inner} 0 0 0 ${point(inner,a)} Z`);
   p.setAttribute('class',tone); svg.append(p);
  }
 }
 wheel.append(svg);
 const centre=make('div','centre'), centreLabel=make('span','','Divide by');centre.append(centreLabel);const centreValue=make('strong','');centre.append(centreValue);wheel.append(centre);
 const rows=[];
 function input(label,r,i){
  const box=make('label','wheel-slot');const [x,y]=coords(r,i*Math.PI/3);
  box.style.left=x/5+'%';box.style.top=y/5+'%';
  const field=make('input',r>151?'total':'quotient');field.type='text';field.inputMode='numeric';field.maxLength=4;field.autocomplete='off';
  const caption=make('span','sr',label+' '+(i+1));box.append(caption,field);wheel.append(box);return field;
 }
 for(let i=0;i<6;i++)rows.push([input('Total',198,i),input('Quotient',108,i)]);
 const notice=$('wheel-feedback');
 const op=()=>$('operator').value, isMultiply=()=>op()==='multiply';
 const slots=row=>isMultiply()?[row[1],row[0]]:row;
 const caption=(field,text)=>{field.parentElement.firstElementChild.textContent=text;};
 function resetFeedback(){notice.textContent='';rows.flat().forEach(a=>{a.removeAttribute('data-result');a.removeAttribute('aria-invalid');a.removeAttribute('aria-description');});}
 let seed=[2,4,6,8,10,12];
 function regenerate(fresh){
  const times=isMultiply(),d=+divisor.value, max=times?12:Math.floor(100/d);
  if(fresh){const choices=Array.from({length:max},(_,i)=>i+1);for(let i=choices.length-1;i>0;i--){const j=Math.floor(Math.random()*(i+1));[choices[i],choices[j]]=[choices[j],choices[i]];}seed=choices.slice(0,6);}
  rows.forEach(([outer,middle],i)=>{
   const [given,answer]=slots([outer,middle]);
   given.value=(times?1:d)*Math.min(seed[i],max);answer.value='';
   caption(outer,(times?'Product ':'Total ')+(i+1));caption(middle,(times?'Given factor ':'Quotient ')+(i+1));
   given.className='total';answer.className='quotient';
  });
  $('factor-label').textContent=times?'Multiplier':'Divisor';
  $('wheel-title').textContent=times?'Find the products':'Find the quotients';
  $('new').textContent=times?'New factors':'New totals';
  $('wheel-guide').textContent=times?'Middle ring: edit the given factors. Outer ring: enter each product. Centre: multiply by this number.':'Outer ring: edit the totals. Middle ring: enter each quotient. Centre: divide by this number.';
  centreLabel.textContent=times?'Multiply by':'Divide by';
  centreValue.textContent=(times?'× ':'÷ ')+d;resetFeedback();
 }
 regenerate(false);
 wheel.addEventListener('input',resetFeedback);
 divisor.addEventListener('change',()=>regenerate(true));
 $('operator').addEventListener('change',()=>{regenerate(true);updateMode();render(false);});
 $('new').addEventListener('click',()=>regenerate(true));
 $('clear').addEventListener('click',()=>{rows.forEach(row=>slots(row)[1].value='');resetFeedback();slots(rows[0])[1].focus();});
 $('check').addEventListener('click',()=>{
  const times=isMultiply(),label=times?'product':'quotient',given=times?'given factor':'total';
  let good=0,invalid=0,remainder=0,blank=0;
  for(const row of rows){const [x,a]=slots(row);const v=checkWedge(x.value,divisor.value,a.value,op());a.dataset.result=v;
   if(v==='correct')good++;else if(v==='invalid')invalid++;else if(v==='blank')blank++;else if(v==='remainder')remainder++;
   if(v==='incorrect')a.setAttribute('aria-invalid','true');else a.removeAttribute('aria-invalid');
   a.setAttribute('aria-description',({correct:'Correct',incorrect:'Not yet correct',blank:'Enter a whole number '+label,invalid:'The '+given+' must be 1 to 100',remainder:'This total leaves a remainder; use the nursery to model it'})[v]);
  }
  notice.textContent=[good+'/6 correct.', invalid&&invalid+' '+given+' value(s) must be from 1 to 100.', remainder&&remainder+' total(s) leave a remainder. Model those in the nursery, or edit the totals.', blank&&blank+' '+label+' value(s) missing.'].filter(Boolean).join(' ');
 });
 let elapsed=0,started=null,interval=null;
 function clock(){const s=Math.floor((elapsed+(started===null?0:performance.now()-started))/1000);time.textContent=Math.floor(s/60)+':'+String(s%60).padStart(2,'0');}
 $('timer').addEventListener('click',()=>{if(started===null){started=performance.now();interval=setInterval(clock,250);$('timer').textContent='Pause timer';}else{elapsed+=performance.now()-started;started=null;clearInterval(interval);$('timer').textContent='Resume timer';}clock();});
 time.addEventListener('dblclick',()=>{elapsed=0;if(started!==null)started=performance.now();clock();});
 function updateMode(){
  const times=isMultiply();
  $('nursery-title').textContent=times?'Build a multiplication model':'Build a division model';
  $('divide-modes').hidden=$('divide-inputs').hidden=times;
  $('multiply-inputs').hidden=!times;
  for(const id of ['eggs','target'])$(id).disabled=times;
  for(const id of ['multiply-groups','multiply-each'])$(id).disabled=!times;
  $('count-controls').hidden=!times;
  updateLabel();
 }
 let count=0,eggList=[];
 function displayCount(){
  $('count-status').textContent='Counted '+count+' of '+eggList.length+' eggs';
  $('count-egg').disabled=count>=eggList.length;
  $('count-reset').disabled=count===0;
 }
 $('count-egg').addEventListener('click',()=>{
  if(count>=eggList.length)return;
  const e=eggList[count++];e.classList.add('counted');
  const board=$('nurseries').parentElement, r=e.getBoundingClientRect(), bounds=board.getBoundingClientRect();
  if(r.bottom>bounds.bottom)board.scrollTop+=r.bottom-bounds.bottom+12;
  displayCount();
 });
 $('count-reset').addEventListener('click',()=>{count=0;eggList.forEach(e=>e.classList.remove('counted'));$('nurseries').parentElement.scrollTop=0;displayCount();});
 const mode=()=>document.querySelector('#model input[name="mode"]:checked').value;
 function updateLabel(){
  const share=mode()==='share', n=integer($('target').value,1,100);
  $('target-label').textContent=share?'Number of nurseries':'Eggs in each nursery';
  $('spread').textContent=n===null?(share?'Share the eggs':'Group the eggs'):share?'Share into '+n+(n===1?' nursery':' nurseries'):'Put '+n+(n===1?' egg':' eggs')+' in each nursery';
 }
 $('model').addEventListener('change',updateLabel);$('target').addEventListener('input',updateLabel);
 $('sync').addEventListener('click',()=>{$('target').value=divisor.value;updateLabel();render(true);});
 function egg(i){const e=make('span','egg');const v=i%20;e.style.setProperty('--ax',(v%5)*25+'%');e.style.setProperty('--ay',Math.floor(v/5)*100/3+'%');e.style.setProperty('--turn',([-8,5,-3,9,1][Math.floor(i/20)])+'deg');e.style.setProperty('--hue',Math.floor(i/20)*12+'deg');e.style.setProperty('--delay',Math.min(i,39)*16+'ms');e.setAttribute('aria-hidden','true');return e;}
 function render(animate){
  const times=isMultiply(),d=times?multiplyModel($('multiply-groups').value,$('multiply-each').value):divide($('eggs').value,$('target').value,mode());if(!d)return;
  const out=$('nurseries');
  if(times&&d.total>100){
   out.replaceChildren();$('leftover').hidden=true;count=0;eggList=[];displayCount();
   $('model-status').textContent=d.nurseries+' × '+d.each+' = '+d.total+' eggs. Choose fewer nurseries or eggs in each to show up to 100.';
   return;
  }
  out.replaceChildren();out.dataset.layout=d.nurseries>=8?'many':'few';out.parentElement.scrollTop=0;out.classList.toggle('spreading',animate);
  let index=0;const qty=(n,s,p)=>n+' '+(n===1?s:p);
  for(let i=0;i<d.nurseries;i++){
   const bowl=make('article','bowl');const label=make('div','bowl-label');label.append(make('h3','','Nursery '+(i+1)),make('p','count',qty(d.each,'egg','eggs')));bowl.append(label);
   const tray=make('div','egg-row');for(let j=0;j<d.each;j++)tray.append(egg(index++));bowl.append(tray);out.append(bowl);
  }
  const rest=$('remainder-eggs');rest.replaceChildren();for(let r=0;r<d.remainder;r++)rest.append(egg(index++));
  $('leftover').hidden=d.remainder===0;$('leftover').classList.toggle('spreading',animate);
  count=0;eggList=Array.from(out.querySelectorAll('.egg'));displayCount();
  if(times){$('model-status').textContent=d.nurseries+' × '+d.each+' = '+d.total+' '+(d.total===1?'egg':'eggs')+'.';return;}
  $('model-status').textContent=d.total+' ÷ '+d.divisor+' = '+d.quotient+(d.remainder?' remainder '+d.remainder:'')+' · '+qty(d.nurseries,'nursery','nurseries')+', '+qty(d.each,'egg','eggs')+' each. '+(d.remainder?qty(d.remainder,'egg','eggs')+' left over.':'No eggs left over.');
 }
 $('model').addEventListener('submit',e=>{e.preventDefault();render(true);});
 updateMode();render(false);
}
