import{d as u,o as n,x as m,w as s,b as t,t as a,z as d,A as y,a as x,c as r,m as b,f as c,n as k,F as p,B as z,C}from"./app.b44362ad.js";const g={flex:"","justify-between":"","p-4":"","bg-zinc-100":"","dark:bg-zinc-800":""},w=u({__name:"PureCard",props:{title:null,delay:null},setup(e){return(l,f)=>{const i=y;return n(),m(i,{"max-w-4xl":"","m-4":"","my-4":"","text-left":"",border:"~ rounded zinc-200 dark:zinc-700",shadow:"","hover:shadow-xl":"","duration-300":"",delay:e.delay},{default:s(()=>[t("div",g,[t("h2",null,a(e.title),1),d(l.$slots,"header-extra")]),d(l.$slots,"default"),d(l.$slots,"footer")]),_:3},8,["delay"])}}}),$={flex:""},v=["href","title"],B={"display-none":"","sm:block":"","mr-1":""},N={"p-4":"","bg-zinc-50":"","dark:bg-zinc-900":""},V={key:0,"p-4":""},S=u({__name:"Card",props:{title:null,description:null,action:null,fold:null,delay:null},setup(e){const{t:l}=x();return(f,i)=>{const _=w;return n(),m(_,{title:e.title,delay:e.delay,ma:""},{"header-extra":s(()=>[t("div",$,[(n(!0),r(p,null,b(e.action,(o,h)=>(n(),r("a",{key:h,flex:"",btn:"","text-sm":"","ml-2":"",href:o.url,title:c(l)(o.label)},[t("div",B,a(c(l)(o.label)),1),t("div",{class:k(o.icon)},null,2)],8,v))),128))])]),footer:s(()=>[e.fold?(n(),r("details",V,[t("summary",null,a(e.fold.label),1),z(" "+a(e.fold.content),1)])):C("",!0)]),default:s(()=>[t("p",N,a(e.description),1)]),_:1},8,["title","delay"])}}});export{S as _};