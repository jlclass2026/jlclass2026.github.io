/* Cases are additive. Perth is UTC+8 year-round. */
(function(root,factory){if(typeof module==='object'&&module.exports)module.exports=factory();else root.DoroboRelease=factory();})(typeof globalThis!=='undefined'?globalThis:this,function(){
 'use strict';
 const releases=[
  {count:4, at:Date.parse('2026-11-19T08:30:00+08:00')},
  {count:5, at:Date.parse('2026-11-20T08:30:00+08:00')},
  {count:6, at:Date.parse('2026-11-21T08:30:00+08:00')},
  {count:7, at:Date.parse('2026-11-22T08:30:00+08:00')},
  {count:8, at:Date.parse('2026-11-24T08:30:00+08:00')}
 ];
 function availableCount(now,total=8){return Math.min(total,releases.reduce((count,r)=>Number(now)>=r.at?r.count:count,2));}
 function nextReleaseAt(now,total=8){return releases.find(r=>r.count<=total&&r.at>Number(now))?.at ?? null;}
 return {availableCount,nextReleaseAt};
});
