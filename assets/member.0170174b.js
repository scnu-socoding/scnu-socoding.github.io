import{d as y,a as k,o as t,c as s,b as n,f as a,e as c,w as o,x as m,t as u,F as p,m as B,p as C,i as f,y as w,v as N,n as T}from"./app.92b71574.js";import{m as b,_ as $}from"./members.33fccdd6.js";const j=n("div",{"max-w-lg":"",ma:"","lg:mt-4rem":"","p-2xl":"","lg:p-0":"",class:"animate-fadein-shift-y--2-1000"},null,-1),A={class:"animate-fadein-shift-y--2-1000"},D={key:0},E=n("br",null,null,-1),F={key:1},I={"text-xl":"","sm:text-2xl":"","lg:text-3xl":"","my-2xl":"",flex:"","justify-center":"","animate-fade-in":"","animate-count-1":""},P=["href"],S=y({__name:"member",setup(V){const{t:h}=k(),r=decodeURIComponent(location==null?void 0:location.search.split("?")[1]),e=b.find(i=>i.englishName===r||i.name===r),x=(e==null?void 0:e.avatar)||"/avatar/uni.jpg";return document&&(document.title=`${(e==null?void 0:e.name)||"\u65E0\u6B64\u6210\u5458"} | SoCoding`),(i,z)=>{const g=$,_=w,d=N;return t(),s(p,null,[j,n("div",A,[a(e)?(t(),s("div",D,[c(d,{gap:1},{default:o(()=>[(t(),m(_,{key:1,description:a(e).name},{default:o(()=>[c(g,{avatar:a(x),name:a(e).name,cla:"rounded-1/2 w-8rem h-8rem"},null,8,["avatar","name"])]),_:1},8,["description"]))]),_:1}),E,n("p",null,u(a(e).englishName),1),n("p",null,u(a(e).code),1)])):(t(),s("div",F," \u6CA1\u6709\u6B64\u6210\u5458 "))]),n("div",I,[c(d,{gap:6},{default:o(()=>[(t(!0),s(p,null,B(a(C),(l,v)=>(t(),m(_,{key:v,description:a(h)(l.description)},{default:o(()=>[n("a",{href:l.url,"icon-btn":"",class:T(l.icon)},null,10,P)]),_:2},1032,["description"]))),128))]),_:1})])],64)}}});typeof f=="function"&&f(S);export{S as default};
