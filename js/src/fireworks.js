"use strict";function updateCoords(e){pointerX=(e.clientXlle.touches[O].clientX)-canvasEl.getBoundingClientRect(.left,pointerY=e.clientYlle.touches[0].clientY-canvasEl.getBoundingClientRect().top}function setParticuleDirection(e){vart=anime.random(0,360)*Math.PI/180,a=anime.random(50,180),n=[-1,1][anime.random(0,1)]*a;return{x:e.x+n*Math.cos(t),y:e.y+n*Math.sin()}function
createParticule(e,t){var a={};returna.x=e,a.y=t,a.color=colors[anime.random(0,colors.length-1)]a.radius=anime.random(1 6,32),a.endPos=setParticuleDirection(a),a.draw=function){ctx.beginPath(,ctx.arc(a.xa.y,a.radius,
0,2*Math.PI!
0),ct.llStyle=a.corc.ll),a}function createCircle(e,t){var a={;returna.x=e,a.y=t,a.color=' '#FO0",a.radius=0.1,a.alpha=0. 5,a.lineWidth=6,a.draw-function(){ctx.globalAlpha=a.alpha,ctx.beginPath(),ctx.arc(a.x,a.ya.radius,0,2*Math.PI!0),ctx.ineWidth=a.lineWidth,ctx.strokeStyle=a.color,ctx.stroke0,ctx.globalAlpha=1},a}
function renderParticule(e){for(vart=0;t<e.animatables.length;t++)
{e.animatables[t].target.draw()}}functionanimateParticules(e,t){for(var a=createCircle(e,t),n=0,i=0;i<numberOfParticules;i++)
{n.push(createParticule(e,t)}anime.timeline().add({targets:n,x:function(e){return e.endPos.x},y:function(e){returne.endPos.y},radius:0.1,duration:anime.random(1200,1 800),easing."easeOutExpo",update:renderParticul).add({targets:a,radius:anime.random(80,1 60)lineWidth:0,alpha:{value:0,easing:"linear",duration:anime.random(600,800)},duration:anime.random(1200,1800),easing."easeOutExpo' ,update:renderParticule,offset:O}}functiondebounce(e,t){var a;return functionO{varn=this,i=arguments;clearTimeout(a),a=setTimeout(function({e.applyl(n,j)},t)}}varcanvasEl=document.querySelector(".firecanvasEl.getBoundingClientRect().left,pointerY=e.clientlle.touches[0].clientY-canvasEl.getBoundingClientRect().top}
function setParticuleDirection(e){var t=anime.random(0,360)*Math.PI/180,a=anime.random(50,180),n=[-1,1][anime.random(0,1)]*a;return{x:e.x+n*Math.cos(t),y:e.y+n*Math. sin()}function
createParticule(e,t){var a={;returna.x=e,a.y=t,a.color=colors[anime.random(O,colors.length-1)],a.radius=anime.random(16,32),a.endPos=setParticul
eDirection(a),a.draw=function(){ctx.beginPath(.ctx.arc(a.x,a.y,a.radius,
0,2*Math.PI,!
0),c.llStyle=a.colorc.l),}function createCircle(e,t){var a={;returna.x=e,a.y=t,a.color="#F00",a.radius=0.1,a.alpha=0.5,a.lineWidth=6,a.draw=function()
{ctx.globalAlpha=a.alpha,ctx.beginPath(,ctx.arc(a.x,a.y,a.radius,0,2*Math.Pl,!0),ctx.lineWidth=a.lineWidth,ctx.strokeStyle=a.color,ctx.stroke,ctx.globalAlpha=1},a}function renderParticule(e){for(var
t=0;t<e.animatables. .length;t+
+){e.animatables[t].target. draw(}}function
animateParticules(e,t){for(var a=crea
teCircle(e,t),n=O,i=0;i<numberOfParticules;i+
+){n.push(createParticl(,)}anime.timeline().add({targets:n,x:function(e){return e.endPos.x},y:function(e){returne.endPos.y},radius:0.1,duration:anime.random(1200,1 800),easing:"easeOutExpo' ,update:renderParticule}) add({targets:a,radius:anime.random(80,1 60),ineWidth:
0,alpha:{value:O,easing:"linear" ,duration:anime.random(600,800)},duration:anime.random(1200,1800),easing:' easeOutExpo",update:renderParticule,offset:})}functiondebounce(e,t){var a;return function({varn=this,iarguments;clearTimeout(a),a=setTimeout(function({e.appy(nj).t)}}var canvasEl=document.querySelector("fireworks');f(canvasEl){var ctx=canvasEl.getContext("2d"),numberOfParticules=30,pointerX=0,pointerY=0,tap="mousedown",cEL.getContext("2d"),numberOfParticules=30,pointerX=O,pointerY=O,tap="mousedown",colors=["#FF1 461","#1 8FF92","#5A87FF"#FBF38C"],setCanvasSize=debounce(function()
{canvasEl.width=2*window.innerWidth,canvasEl.height=2*window.innerHeight,canvasEl.style.width=window.innerWidth+' 'px",canvasEl.style.height=window.innerHeight+ 'px",canvasEl.getContext("2d").scale(2,2)},
500),render=anime({duration:1/0,update:function0{ct{"sidebar"!==e.target.id&&"toggle-
x.clearRect(0,0,canvasEl.width,canvasEl.heigh)});document.addEventL istener(tap,function(e)
sidebar"!==e.target.id&&"A==e.target.nodeName&&"lMG"!==e.target.nodeName&&'!
(render.play(),updateCoords(e),animateParticules(pointerXpointerY)}!
1),setCanvasSize),window.addEventListener("resize' 'setCanvasSize,!
1)};
