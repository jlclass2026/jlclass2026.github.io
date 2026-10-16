export const CHARACTERS = [
  { id: 'cat', name: 'Crazy Cat', short: 'Cat', line: 'Banned from the photocopier.', reveal: 'Caught copying his own face. Again.', art: 0 },
  { id: 'moose', name: 'Mad Moose', short: 'Moose', line: 'Still trying to park that trolley.', reveal: 'That is not a parking space, Moose.', art: 1 },
  { id: 'bear', name: 'Bonkers Bear', short: 'Bear', line: 'Ready for a very shallow swim.', reveal: 'The arm floaties were a giveaway.', art: 2 },
  { id: 'jim', name: 'Jim', short: 'Jim', line: 'Just Jim. With a saucepan.', reveal: 'Oh. There’s Jim. Still holding a saucepan.', art: 3 }
];
export const DECOYS = ['A suspicious sandwich.', 'One lonely sock.', 'A very ordinary leaf.', 'An empty biscuit tin.', 'A tiny traffic cone.', 'Absolutely nobody.'];
export const TRACK = Array.from({length:32}, (_,i)=> ({index:i, kind:i%2?'double':'twenty', n:i%2 ? [2,3,4,5,6,7,8,9][Math.floor(i/2)%8] : [7,12,4,9,15,6,13,8,11,3,16,5,14,2,17,10][Math.floor(i/2)]}));
export function coordinates(i) { if (i<10) return [i+1,1]; if(i<17)return [10,i-8]; if(i<26)return [26-i,8]; return [1,33-i]; }
export function answerFor(q) { return q.kind==='twenty' ? 20-q.n : q.n*4; }
export function strategyFor(q) { return q.kind==='twenty' ? `${q.n} + ${20-q.n} = 20. Count on from ${q.n}, or use a pair you know.` : `Double ${q.n} is ${q.n*2}. Double ${q.n*2} is ${q.n*4}.`; }
export function die(rng=Math.random) { return Math.min(6,Math.max(1,Math.floor(rng()*6)+1)); }
export function shuffledHideouts(rng=Math.random) { const a=Array.from({length:10},(_,i)=>i); for(let i=9;i>0;i--){const j=Math.min(i,Math.max(0,Math.floor(rng()*(i+1))));[a[i],a[j]]=[a[j],a[i]];} return a.slice(0,4); }
export function newGame(minutes=7) { return {phase:'lobby', minutes, setupPlayer:0, setupStep:0, turn:0, viewed:0, lastRoll:1, movesLeft:0, question:null, feedback:null, reveal:null, remaining:minutes*60, expired:false, finalTarget:null, outcome:null, players:[0,1].map(()=>({position:0, hidden:Array(10).fill(null), searched:[], captures:[], turns:0}))}; }
export function beginSetup(s){if(s.phase!=='lobby')return false;s.phase='handoff';s.setupPlayer=0;return true;}
export function openSetup(s){if(s.phase!=='handoff')return false;s.phase='setup';s.setupStep=0;return true;}
export function hide(s,slot){if(s.phase!=='setup'||!Number.isInteger(slot)||slot<0||slot>9||s.setupStep>=4||s.players[s.setupPlayer].hidden[slot])return false;s.players[s.setupPlayer].hidden[slot]=CHARACTERS[s.setupStep].id;s.setupStep++;return true;}
export function resetHiding(s){if(s.phase!=='setup')return false;s.players[s.setupPlayer].hidden.fill(null);s.setupStep=0;return true;}
export function finishHiding(s){if(s.phase!=='setup'||s.setupStep!==4)return false;if(s.setupPlayer===0){s.setupPlayer=1;s.phase='handoff';}else{s.phase='ready';}return true;}
export function start(s){if(s.phase!=='ready')return false;s.phase='roll';s.turn=0;s.viewed=0;return true;}
export function roll(s,value){if(s.phase!=='roll'||!Number.isInteger(value)||value<1||value>6)return false;s.lastRoll=value;s.movesLeft=value;s.phase='moving';s.feedback=null;s.reveal=null;return true;}
export function step(s){if(s.phase!=='moving'||s.movesLeft<1)return false;s.players[s.turn].position=(s.players[s.turn].position+1)%32;s.movesLeft--;return true;}
export function land(s){if(s.phase!=='moving'||s.movesLeft!==0)return false;s.question={...TRACK[s.players[s.turn].position]};s.phase='question';return true;}
export function answer(s,value){if(s.phase!=='question'||!/^\d{1,3}$/.test(String(value).trim()))return null;const correct=Number(value)===answerFor(s.question);s.feedback=correct?'correct':'practice';s.phase=correct?'search':'feedback';return correct;}
export function search(s,slot){const p=s.players[s.turn];if(s.phase!=='search'||!Number.isInteger(slot)||slot<0||slot>9||p.searched.includes(slot))return false;p.searched.push(slot);const id=s.players[1-s.turn].hidden[slot];if(id)p.captures.push(id);s.reveal={slot,id,decoy:DECOYS[slot%DECOYS.length]};s.phase='reveal';return true;}
export function expire(s){if(s.expired||['lobby','handoff','setup','ready','results'].includes(s.phase))return false;s.remaining=0;s.expired=true;/* Finish the current pair; both players get the same total turns. */s.finalTarget=Math.max(s.players[0].turns,s.players[1].turns,s.players[s.turn].turns+1);return true;}
export function endTurn(s){if(!['feedback','reveal'].includes(s.phase))return false;const p=s.players[s.turn];p.turns++;if(p.captures.length===4){s.outcome={type:'all',winner:s.turn};s.phase='results';return true;}if(s.expired&&s.players.every(x=>x.turns>=s.finalTarget)){const [a,b]=s.players.map(x=>x.captures.length);s.outcome={type:a===b?'tie':'time',winner:a===b?null:a>b?0:1};s.phase='results';return true;}s.turn=1-s.turn;s.viewed=s.turn;s.phase='roll';s.question=null;s.feedback=null;s.reveal=null;return true;}
export function tick(s,seconds=1){if(s.minutes===0||['lobby','handoff','setup','ready','results'].includes(s.phase)||s.expired)return;s.remaining=Math.max(0,s.remaining-seconds);if(s.remaining===0)expire(s);}
export function publicHideout(s,viewer,slot){return s.players[viewer].searched.includes(slot)?{searched:true,id:s.players[1-viewer].hidden[slot]}:{searched:false,id:null};}
