/* Cases are additive: older cases never expire. Perth is UTC+8 year-round. */
(function(root,factory){if(typeof module==='object'&&module.exports)module.exports=factory();else root.DoroboRelease=factory();})(typeof globalThis!=='undefined'?globalThis:this,function(){
 'use strict';
 const RELEASE_AT=Date.parse('2026-11-19T08:30:00+08:00');
 function availableCount(now,total=3){return Math.min(total,Number(now)>=RELEASE_AT?3:2);}
 return {RELEASE_AT,availableCount};
});