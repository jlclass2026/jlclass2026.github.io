/* Maths-only rules. Words keeps its original engine and saved progress. */
(function(root,factory){const api=factory();if(typeof module==='object'&&module.exports)module.exports=api;else root.FiveEngine=api;})(globalThis,function(){
'use strict';
function validatePuzzle(p){
 if(!p||!Array.isArray(p.groups)||p.groups.length!==5)throw Error('Five groups required');
 const words=p.groups.flatMap(g=>{if(!g.label||!g.hint||!Number.isFinite(g.answer)||g.words.length!==5)throw Error('Five calculations required');return g.words;});
 const decoys=p.decoys||[];
 if(decoys.length!==0&&decoys.length!==5)throw Error('Five decoys required');
 if(new Set(p.groups.map(g=>g.answer)).size!==5)throw Error('Answers must differ');
 if(decoys.some(d=>!Number.isFinite(d.answer)||p.groups.some(g=>g.answer===d.answer)))throw Error('Decoy answer overlaps');
 if(decoys.length&&new Set(decoys.map(d=>d.answer)).size===1)throw Error('Decoys form a group');
 words.push(...decoys.map(d=>d.word));
 if(words.some(w=>typeof w!=='string'||!w.trim())||new Set(words).size!==words.length)throw Error('Duplicate or empty calculation');
 return true;
}
function shuffle(items,random=Math.random){const a=items.slice();for(let i=a.length-1;i>0;i--){const j=Math.floor(random()*(i+1));[a[i],a[j]]=[a[j],a[i]];}return a;}
function create(puzzle,random=Math.random){validatePuzzle(puzzle);return {puzzle,order:shuffle(puzzle.groups.flatMap(g=>g.words).concat((puzzle.decoys||[]).map(d=>d.word)),random),selected:[],solved:[],guesses:[],attempts:0,foundDecoys:[],revealedDecoys:false};}
function complete(s){return s.solved.length===5&&s.foundDecoys.length===(s.puzzle.decoys||[]).length;}
function toggle(s,w){if(!s.order.includes(w))return 'unavailable';if(s.selected.includes(w)){s.selected=s.selected.filter(x=>x!==w);return 'deselected';}if(s.selected.length===5)return 'full';s.selected.push(w);return 'selected';}
function solve(s,index,revealed){if(!s.puzzle.groups[index]||s.solved.some(g=>g.index===index))return false;s.solved.push({index,revealed});s.order=s.order.filter(w=>!s.puzzle.groups[index].words.includes(w));s.selected=[];return true;}
function submit(s){if(s.selected.length!==5)return {type:'incomplete'};const sig=s.selected.slice().sort().join('\0');if(s.guesses.includes(sig))return {type:'repeat'};s.guesses.push(sig);s.attempts++;const i=s.puzzle.groups.findIndex((g,i)=>!s.solved.some(x=>x.index===i)&&s.selected.every(w=>g.words.includes(w)));if(i>=0){solve(s,i,false);return {type:complete(s)?'complete':'correct',groupIndex:i};}const n=Math.max(0,...s.puzzle.groups.filter((g,i)=>!s.solved.some(x=>x.index===i)).map(g=>s.selected.filter(w=>g.words.includes(w)).length));return {type:n===4?'near':'different'};}
function donkey(s,w){if(!s.order.includes(w))return {type:'unavailable'};if(!(s.puzzle.decoys||[]).some(d=>d.word===w))return {type:'not-donkey'};s.foundDecoys.push(w);s.order=s.order.filter(x=>x!==w);s.selected=s.selected.filter(x=>x!==w);return {type:complete(s)?'complete':'donkey'};}
function reveal(s,all=false){const remaining=s.puzzle.groups.map((_,i)=>i).filter(i=>!s.solved.some(g=>g.index===i));(all?remaining:remaining.slice(0,1)).forEach(i=>solve(s,i,true));if(all){s.foundDecoys=(s.puzzle.decoys||[]).map(d=>d.word);s.order=[];s.revealedDecoys=true;}return complete(s);}
return {validatePuzzle,shuffle,create,toggle,submit,reveal,donkey,complete};
});
