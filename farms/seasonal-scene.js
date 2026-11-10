/* Seasonal farm dioramas. Coordinates and hotspots use a 1600 × 1000 logical canvas.
 * FarmScene.render accepts season 0..3, progress 0..1, motion boolean, time in ms,
 * weather normal|dry|wet, focus water|soil|food|habitat|energy|care, improvements boolean.
 * No animation loop or event handlers are installed here. */
(() => {
  'use strict';
  const W=1600,H=1000,TAU=Math.PI*2;
  const palettes=[
    {grass:'#b4bf77',edge:'#839957',leaf:'#d99144',dark:'#8a6940',sky:'#eaf0e5',crop:'#d5ae61'},
    {grass:'#8faa83',edge:'#6b8566',leaf:'#77977a',dark:'#50715f',sky:'#dce9e8',crop:'#9aa878'},
    {grass:'#aaca7c',edge:'#739f5d',leaf:'#8fba58',dark:'#4f8950',sky:'#e1f1eb',crop:'#93b95f'},
    {grass:'#b5c978',edge:'#819955',leaf:'#8cac50',dark:'#487943',sky:'#edf4df',crop:'#e5bd67'}
  ];
  const names={water:'Rainwater & drip irrigation',soil:'Covered soil & compost',food:'Crops & farm food',habitat:'Wildlife habitat',energy:'Solar & backup power',care:'Farm care & shelter'};
  const layouts={
    a:{house:[1.3,1.1],water:[10.8,1.3],soil:[11.7,8.7],food:[6.4,5.1],habitat:[1.2,9.8],energy:[8.9,1.1],care:[2.5,7.1],plots:[[4,2.3,3,2,'flower'],[7.6,3,3,2,'flower'],[4.3,6.2,3,2.6,'cotton'],[8,6.3,2.8,2.6,'flower']],trees:[[.8,3.3,'apple'],[12.7,3.5,'apple'],[12.5,6.2,'apple']],animals:'chicken'},
    'k-w':{house:[1.5,1.3],water:[11.4,1.1],soil:[11.8,9],food:[6.8,5.5],habitat:[1.5,9.6],energy:[8.8,1.1],care:[2,6.7],plots:[[4.3,6.9,2.4,2,'sunflower'],[7.2,7,3.2,1.9,'flower']],trees:[[4,2.2,'mango'],[6,2.1,'apple'],[8,2.3,'mango'],[4.2,4.6,'apple'],[6.4,4.7,'mango'],[8.6,4.8,'apple'],[12.6,5.7,'apple']],animals:'bees'},
    m:{house:[1.3,1.3],water:[11.6,1.6],soil:[12,8.9],food:[7.2,6.8],habitat:[1.3,9.6],energy:[8.5,1.1],care:[2.8,6.7],plots:[[6.1,5.8,2.8,2.5,'wheat'],[9.4,5.8,2.3,2.5,'cotton'],[4.2,8.8,4,1.1,'flower']],trees:[[4.2,1.9,'apple'],[6.4,2.1,'banana'],[4.3,4.1,'banana'],[6.5,4.1,'apple'],[12.4,4.3,'apple']],animals:'cow'},
    a2:{house:[1.3,1.2],water:[11.5,1.4],soil:[11.8,9],food:[7.6,5.1],habitat:[1.2,9.5],energy:[8.8,1.1],care:[2.7,6.9],plots:[[4.6,2.7,2,3.2,'wheat'],[7.1,2.7,2,3.2,'oats'],[9.6,3,2,3,'barley'],[7.3,7.3,3.7,1.6,'flower']],trees:[[.7,3.7,'apple'],[12.8,6.3,'apple'],[3.6,9.5,'apple']],animals:'mixed'}
  };
  class FarmScene {
    constructor(canvas,config={}) {this.canvas=canvas;this.ctx=canvas.getContext('2d');this.id=layouts[config.id]?config.id:'a';this.layout=layouts[this.id];this.state={};}
    p(x,y,z=0){return {x:800+(x-y)*54,y:187+(x+y)*25-z};}
    path(points,fill,stroke,width=1){const c=this.ctx;c.beginPath();points.forEach((p,i)=>i?c.lineTo(p.x,p.y):c.moveTo(p.x,p.y));c.closePath();if(fill){c.fillStyle=fill;c.fill();}if(stroke){c.strokeStyle=stroke;c.lineWidth=width;c.stroke();}}
    poly(coords,fill,stroke,width){this.path(coords.map(q=>this.p(...q)),fill,stroke,width);}
    line(points,color,width=2,dash=[]){const c=this.ctx;c.beginPath();points.forEach((p,i)=>i?c.lineTo(p.x,p.y):c.moveTo(p.x,p.y));c.strokeStyle=color;c.lineWidth=width;c.lineCap='round';c.lineJoin='round';c.setLineDash(dash);c.stroke();c.setLineDash([]);}
    ellipse(x,y,rx,ry,color){const c=this.ctx;c.beginPath();c.ellipse(x,y,rx,ry,0,0,TAU);c.fillStyle=color;c.fill();}
    circle(x,y,r,color){this.ellipse(x,y,r,r,color);}
    plane(x,y,w,d,color,stroke){this.poly([[x,y],[x+w,y],[x+w,y+d],[x,y+d]],color,stroke);}
    box(x,y,w,d,h,top,front,side){this.poly([[x,y,h],[x+w,y,h],[x+w,y+d,h],[x,y+d,h]],top);this.poly([[x,y+d,h],[x+w,y+d,h],[x+w,y+d],[x,y+d]],front);this.poly([[x+w,y,h],[x+w,y+d,h],[x+w,y+d],[x+w,y]],side);}
    shadow(x,y,rx,ry){const p=this.p(x,y);this.ellipse(p.x,p.y+4,rx,ry,'rgba(46,71,46,.13)');}
    cylinder(x,y,r,h,color,top){const p=this.p(x,y);const c=this.ctx;this.shadow(x,y,r+4,r*.4);c.fillStyle=color;c.fillRect(p.x-r,p.y-h,r*2,h);this.ellipse(p.x,p.y,r,r*.38,color);this.ellipse(p.x,p.y-h,r,r*.38,top);}
    fence(x,y,w,d){for(const edge of [[[x,y],[x+w,y]],[[x+w,y],[x+w,y+d]],[[x,y+d],[x+w,y+d]],[[x,y],[x,y+d]]]){const [a,b]=edge;for(let z of [15,29])this.line([this.p(...a,z),this.p(...b,z)],'#e9dfbd',4);const n=Math.ceil(Math.hypot(b[0]-a[0],b[1]-a[1])/.65);for(let i=0;i<=n;i++){const xx=a[0]+(b[0]-a[0])*i/n,yy=a[1]+(b[1]-a[1])*i/n;this.line([this.p(xx,yy),this.p(xx,yy,37)],'#a98962',5);this.circle(this.p(xx,yy,37).x,this.p(xx,yy,37).y,2,'#f6ecd3');}}}
    building(x,y,w=2.1,d=1.5,kind='barn'){
      const h=kind==='shelter'?51:78;this.shadow(x+w/2,y+d/2,100,24);
      this.box(x,y,w,d,h,'#eadab5',kind==='barn'?'#e4b584':'#c6ae7b','#c19467');
      const ridge=d/2,roof=kind==='barn'?'#537f79':'#729186';
      this.poly([[x-.12,y-.15,h],[x+w+.12,y-.15,h],[x+w+.12,y+ridge,h+36],[x-.12,y+ridge,h+36]],roof);
      this.poly([[x-.12,y+ridge,h+36],[x+w+.12,y+ridge,h+36],[x+w+.12,y+d+.16,h],[x-.12,y+d+.16,h]],'#426a67');
      for(let i=.25;i<w;i+=.4)this.line([this.p(x+i,y+ridge,h+36),this.p(x+i,y+d+.16,h)],'#71958a',1.2);
      this.poly([[x+.25,y+d+.01,0],[x+.93,y+d+.01,0],[x+.93,y+d+.01,h*.68],[x+.25,y+d+.01,h*.68]],'#79614d');
      this.line([this.p(x+.25,y+d+.02,3),this.p(x+.93,y+d+.02,h*.68)],'#d2b384',2);
      this.poly([[x+1.2,y+d+.02,h*.4],[x+1.7,y+d+.02,h*.4],[x+1.7,y+d+.02,h*.75],[x+1.2,y+d+.02,h*.75]],'#a4d2ce','#f4e8ca',3);
      if(kind==='barn'){this.box(x+w-.3,y+.2,.25,.3,121,'#e7d8bf','#bc9272','#947c65');}
    }
    plant(x,y,type,i=0){const p=this.p(x,y),s=this.season,pr=this.progress;const tall=type==='sunflower'?35:17;let growth=s===2?.35+.65*pr:s===1?.36:s===0?.75:1;const h=tall*growth;const sway=this.motion?Math.sin(this.t*.0017+i*2.3)*2:0;
      this.line([{x:p.x,y:p.y},{x:p.x+sway,y:p.y-h}],'#5c8650',2);this.ellipse(p.x-4,p.y-h*.4,5,2,'#739a55');this.ellipse(p.x+4,p.y-h*.65,5,2,'#87a957');
      if(['wheat','oats','barley'].includes(type)){for(let k=0;k<4;k++){const z=h+k*3;this.line([{x:p.x,y:p.y-z+5},{x:p.x-4,y:p.y-z}],s===2?'#b5c876':'#e8c578',2);this.line([{x:p.x,y:p.y-z+3},{x:p.x+4,y:p.y-z-2}],s===2?'#bdce82':'#ecd192',2);}return;}
      if(type==='cotton'){for(let j=0;j<3;j++)this.circle(p.x+sway+(j-1)*4,p.y-h+(j%2)*-4,4,s===3||s===0?'#fff6db':'#b8c99b');return;}
      const colors=['#d67a82','#e2aa76','#c99bb9','#efe5b1','#cc645b'];const color=s===1?'#d4d9c5':type==='sunflower'?'#f5c654':colors[i%5];const r=type==='sunflower'?8:4.2;for(let k=0;k<5;k++)this.circle(p.x+sway+Math.cos(k*TAU/5)*r*.6,p.y-h+Math.sin(k*TAU/5)*r*.6,r*.55,color);this.circle(p.x+sway,p.y-h,r*.35,type==='sunflower'?'#735b3f':'#e8c65f');
    }
    plot(x,y,w,d,type,index){this.box(x,y,w,d,6,'#96765b','#775c46','#80634a');this.plane(x+.1,y+.1,w-.2,d-.2,this.season===1?'#b6ad85':'#b18e66');
      const harvest=this.season===0&&this.progress>.55&&index%2===0;
      for(let xx=.25;xx<w;xx+=.32){this.line([this.p(x+xx,y+.15,7),this.p(x+xx,y+d-.15,7)],'#d0b083',2);for(let yy=.25;yy<d;yy+=.35){if(harvest){const p=this.p(x+xx,y+yy);this.line([{x:p.x-3,y:p.y-6},{x:p.x+4,y:p.y-8}],'#d7c28f',2);}else this.plant(x+xx,y+yy,type,Math.round(xx*12+yy*13+index));}}
      // Blue-black surface drip line is visible between each second crop row.
      for(let yy=.6;yy<d;yy+=.8)this.line([this.p(x+.1,y+yy,8),this.p(x+w-.1,y+yy,8)],'#4b6d66',1.8);
      const p=this.p(x+.1,y+d+.15);this.line([p,{x:p.x,y:p.y-22}],'#93704d',3);this.ctx.save();this.ctx.translate(p.x,p.y-25);this.ctx.fillStyle='#f4e7c8';this.ctx.fillRect(-15,-7,30,13);this.ctx.fillStyle='#6a745a';this.ctx.font='8px sans-serif';this.ctx.textAlign='center';this.ctx.fillText(type==='flower'?'FLOWERS':type.toUpperCase(),0,2);this.ctx.restore();
    }
    tree(x,y,type='apple',index=0){const p=this.p(x,y);const banana=type==='banana';this.shadow(x,y,40,15);this.line([p,{x:p.x-3,y:p.y-77}],'#8d7451',9);this.line([{x:p.x,y:p.y-42},{x:p.x-23,y:p.y-76}],'#8d7451',5);this.line([{x:p.x-1,y:p.y-49},{x:p.x+24,y:p.y-89}],'#8d7451',4);
      if(banana){for(let j=0;j<7;j++){const a=-Math.PI+j*.5;this.path([{x:p.x,y:p.y-79},{x:p.x+Math.cos(a)*51,y:p.y-91+Math.sin(a)*23},{x:p.x+Math.cos(a)*34,y:p.y-61+Math.sin(a)*24}],j%2?'#6b9c53':'#91b366');}if(this.season===3||this.season===0)for(let i=0;i<5;i++)this.ellipse(p.x+10+i*3,p.y-64+i*2,3,9,'#e5c964');return;}
      const shift=this.motion?Math.sin(this.t*.0008+index)*2:0;const leaf=this.pal.leaf;for(const [dx,dy,r] of [[-23,-78,26],[21,-82,27],[0,-105,29],[0,-74,28]]){this.circle(p.x+dx+shift,p.y+dy,r,this.season===0&&index%2?'#bca25e':leaf);this.circle(p.x+dx-7+shift,p.y+dy-7,r*.6,this.season===2?'#afd47b':this.season===1?'#8da58b':'rgba(230,226,143,.22)');}
      if(this.season===2)for(let j=0;j<10;j++)this.circle(p.x+Math.sin(j*5+index)*35,p.y-85+Math.cos(j*7)*26,3.5,'#f6dcd0');
      if(this.season===3||this.season===0&&this.progress<.6)for(let j=0;j<7;j++)this.ellipse(p.x+Math.sin(j*5+index)*31,p.y-85+Math.cos(j*7)*22,type==='mango'?4.5:4,type==='mango'?7:4,type==='mango'?'#e9b957':'#c97956');
      if(this.season===0)for(let j=0;j<4;j++){const phase=this.motion?(this.t*.00012+j*.27)%1:j*.22;this.ellipse(p.x-35+j*21+Math.sin(phase*7)*8,p.y-80+phase*88,4,2,'#d19a4e');}
    }
    animal(x,y,type,i){const p=this.p(x,y),bob=this.motion?Math.sin(this.t*.0015+i)*1.3:0;p.y+=bob;this.shadow(x,y,type==='chicken'?12:23,7);
      if(type==='chicken'){this.ellipse(p.x,p.y-13,10,8,i%2?'#e8c58a':'#fff0d7');this.circle(p.x+8,p.y-22,5,'#f5e6ca');this.circle(p.x+9,p.y-28,3,'#bf6655');this.path([{x:p.x+12,y:p.y-23},{x:p.x+18,y:p.y-20},{x:p.x+12,y:p.y-19}],'#dba34f');this.circle(p.x+10,p.y-23,1.2,'#394844');for(let dx of [-3,4])this.line([{x:p.x+dx,y:p.y-6},{x:p.x+dx-1,y:p.y}],'#bb9256',2);return;}
      const sheep=type==='sheep';for(let dx of [-14,12])this.line([{x:p.x+dx,y:p.y-13},{x:p.x+dx,y:p.y+1}],'#68634f',4);this.ellipse(p.x,p.y-21,25,15,sheep?'#e8e4cb':'#f4e9cf');if(sheep){for(let j=0;j<7;j++)this.circle(p.x-18+j*6,p.y-27+(j%2)*-3,9,'#f5eedc');}else{this.ellipse(p.x-9,p.y-23,9,11,'#776b56');this.ellipse(p.x+9,p.y-19,7,8,'#6d6456');}this.ellipse(p.x+25,p.y-20,9,12,sheep?'#857a63':'#e3ccab');this.ellipse(p.x+28,p.y-12,9,5,'#c7a48c');this.circle(p.x+28,p.y-24,1.8,'#36433f');this.line([{x:p.x+18,y:p.y-29},{x:p.x+14,y:p.y-35}],'#d2c7a5',3);this.line([{x:p.x-22,y:p.y-20},{x:p.x-29,y:p.y-27}],'#817357',2);
    }
    water(x,y){for(let j=0;j<(this.improved?2:1);j++){this.cylinder(x+j*.9,y,27,66,j?'#699f9d':'#79b0a9','#b8d0b4');const p=this.p(x+j*.9,y);for(let h of [15,36,56])this.line([{x:p.x-25,y:p.y-h},{x:p.x+25,y:p.y-h}],'rgba(235,248,224,.25)',2);this.line([{x:p.x+8,y:p.y-50},{x:p.x+8,y:p.y-12}],'#dae7cd',4);this.line([{x:p.x+8,y:p.y-15},{x:p.x+8,y:p.y-(this.weather==='dry'?27:45)}],'#76c2cb',3);}this.line([this.p(x,y,70),this.p(x-1,y,70),this.p(x-1,y,4)],'#728f88',5);this.box(x+.2,y+1,.55,.5,13,'#d6d2a7','#aaa17d','#b6ab84');}
    solar(x,y){for(let n=0;n<2;n++){this.box(x+n*1.3,y,1.1,1,28,'#37677d','#64746e','#798e80');this.poly([[x+n*1.3,y,44],[x+n*1.3+1.1,y,44],[x+n*1.3+1.1,y+1,28],[x+n*1.3,y+1,28]],'#436c83','#bed2c5',2);for(let i=1;i<4;i++)this.line([this.p(x+n*1.3+i*.275,y,44),this.p(x+n*1.3+i*.275,y+1,28)],'#8fafa9',1);this.line([this.p(x+n*1.3,y+.5,36),this.p(x+n*1.3+1.1,y+.5,36)],'#8fafa9',1);}this.box(x+2.6,y+.2,.5,.6,35,'#e3ddbe','#b5bea3','#92a58f');const p=this.p(x+2.85,y+.8,25);this.circle(p.x,p.y,3,'#95cd86');}
    compost(x,y){for(let i=0;i<2;i++){this.box(x+i*.9,y,.75,.85,29,'#655b43','#a79268','#847756');for(let z of [7,16,25])this.line([this.p(x+i*.9,y+.86,z),this.p(x+i*.9+.75,y+.86,z)],'#d2bc85',3);for(let j=0;j<8;j++){const p=this.p(x+i*.9+.15+(j%3)*.19,y+.2+Math.floor(j/3)*.22,32);this.ellipse(p.x,p.y,5,3,j%2?'#9c9a58':'#c3a15f');}}this.cylinder(x+.3,y+1.3,16,25,'#698f73','#a6b18a');}
    greenhouse(x,y){this.box(x,y,2,1.2,35,'rgba(209,231,204,.8)','#accbbb','#97baa9');this.poly([[x,y,35],[x+2,y,35],[x+2,y+.6,65],[x,y+.6,65]],'rgba(228,244,226,.85)','#dce9cc',2);this.poly([[x,y+.6,65],[x+2,y+.6,65],[x+2,y+1.2,35],[x,y+1.2,35]],'rgba(189,220,201,.85)','#e3edd4',2);for(let dx of [.4,.8,1.2,1.6])this.line([this.p(x+dx,y,35),this.p(x+dx,y+.6,65),this.p(x+dx,y+1.2,35),this.p(x+dx,y+1.2)],'#edf0d7',2);for(let i=0;i<6;i++)this.plant(x+.2+i*.3,y+1.1,'flower',i);}
    habitat(x,y){this.plane(x-.7,y-.3,3.3,1.5,'#8faa65');for(let i=0;i<22;i++)this.plant(x-.55+(i%8)*.39,y-.15+Math.floor(i/8)*.4,'flower',i);for(let j=0;j<(this.id==='a2'?4:2);j++){const xx=x-.3+j*.85,yy=y+.6;this.line([this.p(xx,yy),this.p(xx,yy,70)],'#a1855d',5);this.poly([[xx-.13,yy+.17,60],[xx+.19,yy+.17,60],[xx+.19,yy+.17,80],[xx-.13,yy+.17,80]],'#d8ba84');this.poly([[xx+.19,yy-.13,60],[xx+.19,yy+.17,60],[xx+.19,yy+.17,80],[xx+.19,yy-.13,80]],'#b39164');const p=this.p(xx+.05,yy+.18,69);this.circle(p.x,p.y,5,'#5c634e');this.poly([[xx-.2,yy-.2,83],[xx+.25,yy-.2,83],[xx+.25,yy+.25,83],[xx-.2,yy+.25,83]],'#677e68');}const p=this.p(x+2.1,y+.6);this.cylinder(x+2.1,y+.6,15,13,'#a4a18a','#a1c6bc');this.ellipse(p.x,p.y-13,10,4,'#76b3b8');}
    care(x,y){if(this.id==='k-w'){for(let j=0;j<3;j++){this.box(x+j*.7,y,.5,.5,30,'#f4d782','#dbb567','#be9653');for(let z of [9,18])this.line([this.p(x+j*.7,y+.51,z),this.p(x+j*.7+.5,y+.51,z)],'#f4df9d',2);}this.building(x-.8,y-1.9,2,1,'shelter');this.box(x+.1,y+1.5,1.5,.6,27,'#d8bd8c','#ad9164','#8e7959');for(let j=0;j<5;j++)this.plant(x+.2+j*.28,y+1.8,'flower',j);return;}
      this.fence(x-1.25,y-.8,3.4,2.8);this.building(x-1,y-1.1,1.9,1.05,'shelter');for(let j=0;j<(this.id==='a'?7:3);j++)this.animal(x-.6+(j%3)*.83,y+.65+Math.floor(j/3)*.53,this.id==='a'?'chicken':this.id==='a2'&&j>0?'sheep':'cow',j);this.box(x+1.45,y-.45,.6,.6,18,'#d6bd77','#b89e5e','#a88d51');for(let j=0;j<6;j++)this.line([this.p(x+1.48+j*.08,y+.15,20),this.p(x+1.48+j*.08,y-.4,20)],'#eee0a2',1);this.cylinder(x+1.65,y+1.4,16,10,'#8b9992','#83b8be');}
    getHotspots(){return Object.keys(names).map(key=>{const p=this.p(...this.layout[key],key==='water'?72:key==='energy'?40:30);return {key,x:p.x,y:p.y,label:names[key]};});}
    render(state={}){
      const c=this.ctx;if(!c)return;this.state=state;this.season=((Math.floor(state.season||0)%4)+4)%4;this.progress=Math.max(0,Math.min(1,Number(state.progress)||0));this.motion=state.motion!==false;this.t=this.motion?(Number(state.time)||0):0;this.weather=state.weather||'normal';this.improved=state.improvements!==false;this.pal=palettes[this.season];
      c.save();c.setTransform(this.canvas.width/W,0,0,this.canvas.height/H,0,0);c.clearRect(0,0,W,H);c.lineJoin='round';
      const sky=c.createLinearGradient(0,0,0,H);sky.addColorStop(0,this.pal.sky);sky.addColorStop(.7,'#f7f3e2');c.fillStyle=sky;c.fillRect(0,0,W,H);
      this.circle(1310,132,this.season===3?56:43,this.season===1?'#f0e9cd':'#f3d58a');this.circle(1310,132,72,'rgba(247,225,159,.13)');
      this.path([{x:0,y:350},{x:170,y:265},{x:340,y:315},{x:520,y:245},{x:730,y:345},{x:990,y:252},{x:1200,y:306},{x:1410,y:230},{x:1600,y:320},{x:1600,y:620},{x:0,y:620}],'#d8e2c8');
      this.path([{x:0,y:440},{x:220,y:365},{x:430,y:410},{x:630,y:329},{x:880,y:410},{x:1130,y:345},{x:1330,y:395},{x:1600,y:335},{x:1600,y:670},{x:0,y:670}],'#cbd9b8');
      for(let i=0;i<5;i++){const xx=(120+i*340+(this.motion?this.t*.003:0))%1850-120,yy=85+(i%3)*48;for(let j=0;j<4;j++)this.ellipse(xx+j*25,yy+(j%2)*-9,35,16,'rgba(255,255,246,.6)');}
      this.ellipse(800,811,648,93,'rgba(73,96,64,.1)');
      this.poly([[0,12],[14,12],[14,12,-35],[0,12,-35]],'#b4a17d');this.poly([[14,0],[14,12],[14,12,-35],[14,0,-35]],'#9d9270');this.plane(0,0,14,12,this.pal.grass,'#d9dcad');
      // Worn cart paths make the four layouts read as working farms.
      this.plane(3.3,.2,.65,10.8,'#d8c7a0');this.plane(3.2,9.9,9.5,.6,'#d8c7a0');this.plane(3.7,1,8.8,.55,'#d8c7a0');
      for(let i=0;i<115;i++){const x=((i*47)%137)/10,y=((i*31)%117)/10;const p=this.p(x,y);this.line([{x:p.x-2,y:p.y},{x:p.x,y:p.y-4},{x:p.x+2,y:p.y}],'rgba(96,130,67,.22)',1);}
      const L=this.layout,jobs=[];L.plots.forEach((v,i)=>jobs.push({z:v[0]+v[1]+v[2]/2+v[3]/2,draw:()=>this.plot(...v,i)}));
      L.trees.forEach((v,i)=>jobs.push({z:v[0]+v[1],draw:()=>this.tree(...v,i)}));
      for(const [key,method] of [['water','water'],['energy','solar'],['soil','compost'],['care','care'],['habitat','habitat']])jobs.push({z:L[key][0]+L[key][1]+(key==='care'?1:0),draw:()=>this[method](...L[key])});
      jobs.push({z:4,draw:()=>this.building(...L.house)});if(this.improved)jobs.push({z:6,draw:()=>this.greenhouse(.55,3.65)});
      jobs.sort((a,b)=>a.z-b.z).forEach(j=>j.draw());
      // Reused logs, flower margins, food crates and a small wheelbarrow.
      for(let i=0;i<5;i++){const p=this.p(12.8,10.6+i*.15);this.line([{x:p.x-20,y:p.y-9},{x:p.x+14,y:p.y+5}],'#8d7856',9);this.circle(p.x+14,p.y+5,4,'#c3ad7a');}
      for(let i=0;i<3;i++)this.box(5+i*.65,10.8,.52,.5,17,'#d7b678','#b89661','#a08055');
      for(let i=0;i<9;i++)this.plant(4.3+i*.64,11.65,'flower',i);
      if(this.season===2||this.season===3){for(let i=0;i<9;i++){const p=this.p(3+(i*1.19)%9,3+(i*1.6)%7,36);const xx=p.x+(this.motion?Math.sin(this.t*.001+i)*18:0),yy=p.y+(this.motion?Math.cos(this.t*.0013+i)*8:0);this.ellipse(xx-3,yy-4,4,2,'rgba(255,255,244,.85)');this.ellipse(xx+3,yy-4,4,2,'rgba(255,255,244,.85)');this.ellipse(xx,yy,4,2.7,'#e4ba57');this.line([{x:xx,y:yy-2},{x:xx,y:yy+2}],'#625b43',1.5);}}
      if(this.season===1||this.weather==='wet'){c.save();c.globalAlpha=this.weather==='wet'?.36:.2;for(let i=0;i<90;i++){const xx=(i*107)%1500+40,yy=((i*79+(this.motion?this.t*.12:0))%750)+80;this.line([{x:xx,y:yy},{x:xx-4,y:yy+14}],'#709baf',1.2);}c.restore();}
      if(state.focus&&L[state.focus])this.highlight(state.focus);
      c.restore();
    }
    highlight(key){const c=this.ctx,L=this.layout,hs=this.getHotspots().find(h=>h.key===key);const colors={water:'#238d9e',soil:'#a67144',food:'#bc9441',habitat:'#768f4b',energy:'#d19f32',care:'#b17668'},color=colors[key];
      c.save();c.shadowColor='#ffffe4';c.shadowBlur=14;this.ellipse(hs.x,hs.y+24,72,32,'rgba(255,252,220,.25)');c.shadowBlur=0;
      const target=key==='water'?'food':key==='soil'?'food':key==='energy'?'water':key==='food'?'care':key==='care'?'soil':'food';const b=this.getHotspots().find(h=>h.key===target);c.beginPath();c.moveTo(hs.x,hs.y);c.quadraticCurveTo((hs.x+b.x)/2,(hs.y+b.y)/2-100,b.x,b.y);c.strokeStyle='rgba(255,255,237,.85)';c.lineWidth=8;c.stroke();c.strokeStyle=color;c.lineWidth=3;c.setLineDash([8,8]);c.lineDashOffset=this.motion?-this.t*.025:0;c.stroke();c.setLineDash([]);
      for(const h of [hs,b]){c.beginPath();c.arc(h.x,h.y,12,0,TAU);c.fillStyle='#fffce7';c.fill();c.strokeStyle=color;c.lineWidth=3;c.stroke();this.circle(h.x,h.y,4,color);}c.restore();
    }
  }
  window.FarmScene=FarmScene;
})();
