if(!self.define){let s,e={};const i=(i,l)=>(i=new URL(i+".js",l).href,e[i]||new Promise((e=>{if("document"in self){const s=document.createElement("script");s.src=i,s.onload=e,document.head.appendChild(s)}else s=i,importScripts(i),e()})).then((()=>{let s=e[i];if(!s)throw new Error(`Module ${i} didn’t register its module`);return s})));self.define=(l,r)=>{const n=s||("document"in self?document.currentScript.src:"")||location.href;if(e[n])return;let a={};const t=s=>i(s,n),o={module:{uri:n},exports:a,require:t};e[n]=Promise.all(l.map((s=>o[s]||t(s)))).then((s=>(r(...s),a)))}}define(["./workbox-f51ab5e4"],(function(s){"use strict";self.skipWaiting(),s.clientsClaim(),s.precacheAndRoute([{url:"about.html",revision:"3d3e8165122e75f3618d797fa13da322"},{url:"assets/_...all_.50d1304b.js",revision:null},{url:"assets/404.9d602bb4.js",revision:null},{url:"assets/about.4f21a9d6.js",revision:null},{url:"assets/about.baf0a22f.js",revision:null},{url:"assets/AnimateComponent.c7747add.js",revision:null},{url:"assets/app.93205403.css",revision:null},{url:"assets/app.cf713dc6.js",revision:null},{url:"assets/bylaws.ced3bea2.js",revision:null},{url:"assets/Card.1b778a14.js",revision:null},{url:"assets/docs.83139703.js",revision:null},{url:"assets/home.248323c8.js",revision:null},{url:"assets/links.90475046.js",revision:null},{url:"assets/member.e704ae0a.js",revision:null},{url:"assets/members.ff59a0b9.js",revision:null},{url:"assets/membership.019c66a7.js",revision:null},{url:"assets/organization.cf6f3959.js",revision:null},{url:"assets/virtual_pwa-register.80a10119.js",revision:null},{url:"bylaws.html",revision:"e661fa57b88203f141020f10e752687c"},{url:"docs.html",revision:"4c2359498faa292831a56205b1bd3c1c"},{url:"en/about.html",revision:"f3272b438bca4ef3b7482ae79378c745"},{url:"index.html",revision:"93ceed1c3a130de4a7e3a43bedbf8861"},{url:"links.html",revision:"4f41eb34b9b04904d019938727fdc85c"},{url:"member.html",revision:"c7dc6391a823cbb2559422eb40c82f62"},{url:"membership.html",revision:"81557d9a5b03b641685cb20d7024d1c1"},{url:"organization.html",revision:"cd6abcc46f3452f32f37da927c9aa072"},{url:"static/bylaws.html",revision:"695cc46041471fd129cca10d47a952fb"},{url:"safari-pinned-tab.svg",revision:"8b04e8a9e7de6ec22fbaf61c3d17aad9"},{url:"pwa-192x192.png",revision:"1f6e6adda579628ebba53d9f39917836"},{url:"pwa-512x512.png",revision:"73949f6bfa96232a520df75058a40557"},{url:"manifest.webmanifest",revision:"795ea6e9c80211bc2db68bb5a6b7954b"}],{}),s.cleanupOutdatedCaches(),s.registerRoute(new s.NavigationRoute(s.createHandlerBoundToURL("index.html")))}));