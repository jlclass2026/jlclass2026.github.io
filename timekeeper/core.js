(function(root){
const wrap=h=>((h-1)%12+12)%12+1;
function digital(h,m){return `${wrap(h)}:${String(m).padStart(2,'0')}`}
function points(m){return m===0?1:m%15===0?2:3}
function parseDigital(s){let a=String(s).trim().match(/^(\d{1,2})\s*:\s*(\d{2})$/);if(!a)return null;let h=+a[1],m=+a[2];return h>=1&&h<=12&&m>=0&&m<60?{h,m}:null}
function words(h,m){if(m===0)return `${h} o’clock`;if(m===15)return `quarter past ${h}`;if(m===30)return `half past ${h}`;if(m===45)return `quarter to ${wrap(h+1)}`;return m<30?`${m} minutes past ${h}`:`${60-m} minutes to ${wrap(h+1)}`}
function parseWords(n,p,h){if(!/^\d{1,2}$/.test(String(h)))return null;h=+h;if(h<1||h>12)return null;if(p==='oclock')return {h,m:0};if(p==='quarter-past')return {h,m:15};if(p==='half-past')return {h,m:30};if(p==='quarter-to')return {h:wrap(h-1),m:45};if(!/^\d{1,2}$/.test(String(n)))return null;n=+n;if(n<1||n>59)return null;if(p==='past')return {h,m:n};if(p==='to')return {h:wrap(h-1),m:60-n};return null}
function correct(a,b){return !!a&&a.h===b.h&&a.m===b.m}
function angles(h,m){return {hour:(h%12)*30+m/2,minute:m*6}}
const api={wrap,digital,points,parseDigital,parseWords,words,correct,angles};if(typeof module!=='undefined')module.exports=api;root.TimeCore=api;
})(typeof window!=='undefined'?window:globalThis);
