import{h as l,d as r,o as u,c as m,b as n,F as v,i as a,q as _,s as y}from"./app.f874c924.js";const s=d=>(_("data-v-9bf44d6a"),d=d(),y(),d),h=s(()=>n("div",{ma:"","lg:mt-4rem":"",class:"my-video bg-img animate-fadein-shift-y--2-1000"},[n("div",{id:"dplayer"})],-1)),f=s(()=>n("br",null,null,-1)),p=r({__name:"pv",setup(d){document.title="PV | SoCoding";function i(o,e){const t=document.createElement("script");t.type="text/javascript",t.src=o,document.body.appendChild(t),e&&t.addEventListener("load",e)}i("//cdn.jsdelivr.net/npm/hls.js/dist/hls.min.js",()=>{i("//cdn.jsdelivr.net/npm/dplayer/dist/DPlayer.min.js",()=>{new DPlayer({container:document.getElementById("dplayer"),video:{url:"//cdn.jsdelivr.net/gh/scnu-socoding/static/media/SoCoding-2022-PV-head-1080p-low/play/playlist.m3u8",type:"hls",pic:"//cdn.jsdelivr.net/gh/scnu-socoding/static/media/SoCoding-2022-PV-head-1080p-low/SoCoding-2022-PV-head-1080p-low.jpg"},loop:!0,preload:"auto",autoplay:!0})})});function c(){window.open("//www.bilibili.com/video/BV1cG411578F")}return(o,e)=>(u(),m(v,null,[h,f,n("button",{btn:"","text-sm":"",m:"3 t8",onClick:e[0]||(e[0]=t=>c())}," \u5173\u6CE8\u70E7\u98CE\u55B5\uFF0C\u5173\u6CE8\u70E7\u98CE\u8C22\u8C22\u55B5~ ")],64))}});typeof a=="function"&&a(p);var w=l(p,[["__scopeId","data-v-9bf44d6a"]]);export{w as default};
