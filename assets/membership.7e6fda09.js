import{d as v,D as E,E as D,o as l,x as f,w as n,e as a,G as _,C as $,B as x,a as A,c as F,m as k,f as u,F as C,b as p,z as y,v as N,y as R}from"./app.fccaa1a9.js";import{p as T,_ as L}from"./partners.0aaa2d7d.js";import{m as z,_ as P}from"./members.9969bb41.js";import"./PureCard.ec7846c9.js";const S=v({__name:"Accordion",props:{name:null,defaultRow:null,delay:null},setup(h){let c=E(h.defaultRow);const s=D(),i=(o,t)=>_("label",{class:{"block p-4":!0,"bg-zinc-100 dark:bg-zinc-800 hover:color-teal-600":!0,"text-left cursor-pointer shadow":!0},border:"~ zinc-200 dark:zinc-700",style:{"font-weight":"bold"}},[_("input",{type:"radio",name:o,value:o,class:"display-none",onclick:()=>{c.value=o}},{}),t]),w=()=>_("div",{ref:"accordionBody",class:{shadow:!0},border:"~ rounded zinc-200 dark:zinc-700"},s.default&&s.default().map(o=>{var t,r,d,g;return _("div",{class:{"overflow-hidden transition-all":!0}},[i((t=o.props)==null?void 0:t.name,(r=o.props)==null?void 0:r.title),_("div",{class:{"transition-all duration-500":!0,"h-0 scale-y-0":((d=o.props)==null?void 0:d.name)!==c.value,"p-4":((g=o.props)==null?void 0:g.name)===c.value}},o)])}));return(o,t)=>{const r=$;return l(),f(r,{delay:h.delay},{default:n(()=>[a(w)]),_:1},8,["delay"])}}}),V=v({__name:"AccordionRow",props:{name:null,title:null},setup(h){return(b,c)=>x(b.$slots,"default")}}),I=p("p",{"color-zinc-300":"","dark:color-zinc-600":"","pb-2":""},[y(" \u6309\u7167\u59D3\u540D\u62FC\u97F3\u6392\u5E8F\uFF0C\u5982\u6709\u9057\u6F0F\u8BF7\u8054\u7CFB "),p("a",{href:"mailto:hr@socoding.cn"},"hr@socoding.cn")],-1),M=p("p",{"color-zinc-300":"","dark:color-zinc-600":"","pb-2":""},[y(" \u6309\u7167\u59D3\u540D\u62FC\u97F3\u6392\u5E8F\uFF0C\u5982\u6709\u9057\u6F0F\u8BF7\u8054\u7CFB "),p("a",{href:"mailto:hr@socoding.cn"},"hr@socoding.cn")],-1),G=p("p",{"color-zinc-300":"","dark:color-zinc-600":"","pb-2":""},[y(" \u6211\u4EEC\u5F88\u9AD8\u5174\u4E0E\u4F60\u4EEC\u4E00\u8D77\uFF0C\u8054\u7CFB "),p("a",{href:"mailto:board@socoding.cn"},"board@socoding.cn")],-1),K=v({__name:"membership",setup(h){const b=z.filter(i=>i.belongs.includes("\u59D4\u5458\u4F1A")),c=z.filter(i=>i.belongs.includes("\u4F1A\u5458")),{t:s}=A();return document.title="\u6210\u5458\u4EEC | SoCoding",(i,w)=>{const o=P,t=R,r=N,d=V,g=L,B=S;return l(),f(B,{name:"membership",delay:2,"default-row":"core","max-w-5xl":"",ma:""},{default:n(()=>[a(d,{name:"core",title:u(s)("membership.core-members")},{default:n(()=>[I,a(r,{gap:1},{default:n(()=>[(l(!0),F(C,null,k(u(b),(e,m)=>(l(),f(t,{key:m,description:e.name},{default:n(()=>[a(o,{avatar:`/avatar/${e.englishName.toLowerCase()}.png`,name:e.name,link:`/members/${e.englishName}`},null,8,["avatar","name","link"])]),_:2},1032,["description"]))),128))]),_:1})]),_:1},8,["title"]),a(d,{name:"members",title:u(s)("membership.members")},{default:n(()=>[M,a(r,{gap:1},{default:n(()=>[(l(!0),F(C,null,k(u(c),(e,m)=>(l(),f(t,{key:m,description:e.name},{default:n(()=>[a(o,{avatar:`/avatar/${e.englishName.toLowerCase()}.png`,name:e.name,link:`/members/${e.englishName}`},null,8,["avatar","name","link"])]),_:2},1032,["description"]))),128))]),_:1})]),_:1},8,["title"]),a(d,{name:"partners",title:u(s)("membership.partners")},{default:n(()=>[G,a(r,{gap:1},{default:n(()=>[(l(!0),F(C,null,k(u(T),(e,m)=>(l(),f(g,{key:m,title:u(s)(e.title),"image-u-r-l":e.url,action:e.action,fold:e.fold,delay:m,style:{width:"100%"}},null,8,["title","image-u-r-l","action","fold","delay"]))),128))]),_:1})]),_:1},8,["title"])]),_:1})}}});export{K as default};