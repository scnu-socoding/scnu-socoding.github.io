import{d as i,C as o,o as s,c as l,z as m,n as r,D as d,E as f}from"./app.6837d47c.js";const c=i({__name:"AnimateComponent",props:{delay:{default:0},animation:{default:"animate-fadein-shift-x-4-800"}},setup(a){const e=o(!1);return(n,t)=>(s(),l("div",{class:r(a.animation),style:d({animationDelay:a.delay!==void 0?`${a.delay*50}ms`:"",opacity:a.delay===void 0||e.value?"1":"0"}),onAnimationstart:t[0]||(t[0]=f(u=>e.value=!0,["prevent","self"]))},[m(n.$slots,"default")],38))}});export{c as _};