'use strict';
const VALID=/^\d+$/;
const integer=(s,min,max)=>VALID.test(String(s))&&+s>=min&&+s<=max?+s:null;
function divide(total, divisor, mode='share'){
 if(integer(total,1,100)===null||integer(divisor,1,100)===null||!['share','group'].includes(mode))return null;
 total=+total;divisor=+divisor;
 const quotient=Math.floor(total/divisor),remainder=total%divisor;
 return {total,divisor,quotient,remainder,nurseries:mode==='share'?divisor:quotient,each:mode==='share'?quotient:divisor};
}
function checkWedge(total,divisor,answer){
 const a=integer(answer,0,100), d=divide(total,divisor);
 if(!d)return 'invalid';
 if(d.remainder)return 'remainder';
 if(a===null)return 'blank';
 return a===d.quotient?'correct':'incorrect';
}
if(typeof module!=='undefined')module.exports={divide,checkWedge};
if(typeof document!=='undefined')init();
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
 const centre=make('div','centre');centre.append(make('span','','Divide by'));const centreValue=make('strong','');centre.append(centreValue);wheel.append(centre);
 const rows=[];
 function input(label,r,i){
  const box=make('label','wheel-slot');const [x,y]=coords(r,i*Math.PI/3);
  box.style.left=x/5+'%';box.style.top=y/5+'%';
  const field=make('input',r>151?'total':'quotient');field.type='text';field.inputMode='numeric';field.maxLength=3;field.autocomplete='off';
  const caption=make('span','sr',label+' '+(i+1));box.append(caption,field);wheel.append(box);return field;
 }
 for(let i=0;i<6;i++)rows.push([input('Total',198,i),input('Quotient',108,i)]);
 const notice=$('wheel-feedback');
 function resetFeedback(){notice.textContent='';rows.forEach(([,a])=>{a.removeAttribute('data-result');a.removeAttribute('aria-invalid');a.removeAttribute('aria-description');});}
 let seed=[2,4,6,8,10,12];
 function regenerate(fresh){
  const d=+divisor.value, max=Math.floor(100/d);
  if(fresh){const choices=Array.from({length:max},(_,i)=>i+1);for(let i=choices.length-1;i>0;i--){const j=Math.floor(Math.random()*(i+1));[choices[i],choices[j]]=[choices[j],choices[i]];}seed=choices.slice(0,6);}
  rows.forEach(([x,a],i)=>{x.value=d*Math.min(seed[i],max);a.value='';});
  centreValue.textContent='÷ '+d;resetFeedback();
 }
 regenerate(false);
 wheel.addEventListener('input',resetFeedback);
 divisor.addEventListener('change',()=>regenerate(true));
 $('new').addEventListener('click',()=>regenerate(true));
 $('clear').addEventListener('click',()=>{rows.forEach(([,a])=>a.value='');resetFeedback();rows[0][1].focus();});
 $('check').addEventListener('click',()=>{
  let good=0,invalid=0,remainder=0,blank=0;
  for(const [x,a] of rows){const v=checkWedge(x.value,divisor.value,a.value);a.dataset.result=v;
   if(v==='correct')good++;else if(v==='invalid')invalid++;else if(v==='blank')blank++;else if(v==='remainder')remainder++;
   if(v==='incorrect')a.setAttribute('aria-invalid','true');else a.removeAttribute('aria-invalid');
   a.setAttribute('aria-description',({correct:'Correct',incorrect:'Not yet correct',blank:'Enter a whole number quotient',invalid:'Total must be 1 to 100',remainder:'This total leaves a remainder; use the nursery to model it'})[v]);
  }
  notice.textContent=[good+'/6 correct.', invalid&&invalid+' total(s) need a number from 1 to 100.', remainder&&remainder+' total(s) leave a remainder. Model those in the nursery, or edit the totals for this exact-division wheel.', blank&&blank+' quotient(s) missing.'].filter(Boolean).join(' ');
 });
 let elapsed=0,started=null,interval=null;
 function clock(){const s=Math.floor((elapsed+(started===null?0:performance.now()-started))/1000);time.textContent=Math.floor(s/60)+':'+String(s%60).padStart(2,'0');}
 $('timer').addEventListener('click',()=>{if(started===null){started=performance.now();interval=setInterval(clock,250);$('timer').textContent='Pause timer';}else{elapsed+=performance.now()-started;started=null;clearInterval(interval);$('timer').textContent='Resume timer';}clock();});
 time.addEventListener('dblclick',()=>{elapsed=0;if(started!==null)started=performance.now();clock();});
 const mode=()=>document.querySelector('#model input[name="mode"]:checked').value;
 function updateLabel(){$('target-label').textContent=mode()==='share'?'Number of nurseries':'Eggs in each nursery';}
 $('model').addEventListener('change',updateLabel);
 $('sync').addEventListener('click',()=>{$('target').value=divisor.value;render(true);});
 function egg(i){const e=make('span','egg');const v=i%20;e.style.setProperty('--ax',(v%5)*25+'%');e.style.setProperty('--ay',Math.floor(v/5)*100/3+'%');e.style.setProperty('--turn',([-8,5,-3,9,1][Math.floor(i/20)])+'deg');e.style.setProperty('--hue',Math.floor(i/20)*12+'deg');e.style.setProperty('--delay',Math.min(i,39)*16+'ms');e.setAttribute('aria-hidden','true');return e;}
 function render(animate){
  const d=divide($('eggs').value,$('target').value,mode());if(!d)return;
  const out=$('nurseries');out.replaceChildren();out.classList.toggle('spreading',animate);
  let index=0;const qty=(n,s,p)=>n+' '+(n===1?s:p);
  for(let i=0;i<d.nurseries;i++){
   const bowl=make('article','bowl');bowl.append(make('h3','','Nursery '+(i+1)),make('p','count',qty(d.each,'egg','eggs')));
   const tray=make('div','egg-row');for(let j=0;j<d.each;j++)tray.append(egg(index++));bowl.append(tray);out.append(bowl);
  }
  const rest=$('remainder-eggs');rest.replaceChildren();for(let r=0;r<d.remainder;r++)rest.append(egg(index++));
  $('leftover').hidden=d.remainder===0;
  $('model-status').textContent=d.total+' ÷ '+d.divisor+' = '+d.quotient+(d.remainder?' remainder '+d.remainder:'')+' · '+qty(d.nurseries,'nursery','nurseries')+', '+qty(d.each,'egg','eggs')+' each. '+(d.remainder?qty(d.remainder,'egg','eggs')+' left over.':'No eggs left over.');
 }
 $('model').addEventListener('submit',e=>{e.preventDefault();render(true);});
 render(false);
}
