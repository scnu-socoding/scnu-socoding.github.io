if(!self.define){let s,e={};const i=(i,l)=>(i=new URL(i+".js",l).href,e[i]||new Promise((e=>{if("document"in self){const s=document.createElement("script");s.src=i,s.onload=e,document.head.appendChild(s)}else s=i,importScripts(i),e()})).then((()=>{let s=e[i];if(!s)throw new Error(`Module ${i} didn’t register its module`);return s})));self.define=(l,r)=>{const a=s||("document"in self?document.currentScript.src:"")||location.href;if(e[a])return;let n={};const t=s=>i(s,a),o={module:{uri:a},exports:n,require:t};e[a]=Promise.all(l.map((s=>o[s]||t(s)))).then((s=>(r(...s),n)))}}define(["./workbox-f51ab5e4"],(function(s){"use strict";self.skipWaiting(),s.clientsClaim(),s.precacheAndRoute([{url:"404.html",revision:"18e67af9f03f4b30ab5fa29dd9d11753"},{url:"about.html",revision:"32c93550c3777f7154c5c128c19459fb"},{url:"assets/404.39dadf5d.js",revision:null},{url:"assets/404.ddf49c61.js",revision:null},{url:"assets/about.2d7ddbd4.js",revision:null},{url:"assets/about.7093b634.js",revision:null},{url:"assets/AnimateComponent.b6b39086.js",revision:null},{url:"assets/app.90ad6499.js",revision:null},{url:"assets/app.94ffafb2.css",revision:null},{url:"assets/bylaws.8350852d.js",revision:null},{url:"assets/Card.946e4139.js",revision:null},{url:"assets/docs.f1c2551e.js",revision:null},{url:"assets/home.f9f42b23.js",revision:null},{url:"assets/links.538dab4f.js",revision:null},{url:"assets/member.6a319714.js",revision:null},{url:"assets/members.c5e96bb2.js",revision:null},{url:"assets/membership.b10d9bb6.js",revision:null},{url:"assets/organization.6f1fee59.js",revision:null},{url:"assets/virtual_pwa-register.80a10119.js",revision:null},{url:"bylaws.html",revision:"7cc6d4cf7ef6403469cd673874dd7173"},{url:"docs.html",revision:"a92033f4d7ccb8ac4b012f1f356a0678"},{url:"en/about.html",revision:"938a22d5ab980b7a3d37a1331af26879"},{url:"index.html",revision:"218f4aea3b7d3d7b0a083ad3198a798b"},{url:"links.html",revision:"58562a59a076bdab4eb0150a2323bbc5"},{url:"member.html",revision:"aa441192db56dff6c73581302ea0c0ef"},{url:"membership.html",revision:"cde4b597e26d28c0cb40090e41a10dca"},{url:"organization.html",revision:"a34f8c674e92d8e133466b5101276172"},{url:"static/bylaws.html",revision:"695cc46041471fd129cca10d47a952fb"},{url:"safari-pinned-tab.svg",revision:"8b04e8a9e7de6ec22fbaf61c3d17aad9"},{url:"pwa-192x192.png",revision:"1f6e6adda579628ebba53d9f39917836"},{url:"pwa-512x512.png",revision:"73949f6bfa96232a520df75058a40557"},{url:"manifest.webmanifest",revision:"795ea6e9c80211bc2db68bb5a6b7954b"}],{}),s.cleanupOutdatedCaches(),s.registerRoute(new s.NavigationRoute(s.createHandlerBoundToURL("index.html")))}));
