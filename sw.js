if(!self.define){let e,s={};const i=(i,l)=>(i=new URL(i+".js",l).href,s[i]||new Promise((s=>{if("document"in self){const e=document.createElement("script");e.src=i,e.onload=s,document.head.appendChild(e)}else e=i,importScripts(i),s()})).then((()=>{let e=s[i];if(!e)throw new Error(`Module ${i} didn’t register its module`);return e})));self.define=(l,r)=>{const a=e||("document"in self?document.currentScript.src:"")||location.href;if(s[a])return;let n={};const t=e=>i(e,a),u={module:{uri:a},exports:n,require:t};s[a]=Promise.all(l.map((e=>u[e]||t(e)))).then((e=>(r(...e),n)))}}define(["./workbox-f51ab5e4"],(function(e){"use strict";self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"about.html",revision:"160c0ff19680e0ba3a1b399c422d6482"},{url:"assets/_...all_.c3bbd0eb.js",revision:null},{url:"assets/404.5f70ba4a.js",revision:null},{url:"assets/about.7c190442.js",revision:null},{url:"assets/about.82361ded.js",revision:null},{url:"assets/AnimateComponent.45956a63.js",revision:null},{url:"assets/app.2b3f3d52.js",revision:null},{url:"assets/app.d366fc7b.css",revision:null},{url:"assets/bylaws.1808659a.js",revision:null},{url:"assets/Card.b9336959.js",revision:null},{url:"assets/docs.d848508c.js",revision:null},{url:"assets/home.6fe4a087.js",revision:null},{url:"assets/links.97b7a182.js",revision:null},{url:"assets/member.e901a53c.js",revision:null},{url:"assets/members.f893cd05.js",revision:null},{url:"assets/membership.91696982.js",revision:null},{url:"assets/virtual_pwa-register.80a10119.js",revision:null},{url:"bylaws.html",revision:"66b98bda7bcff9ec247129160c018ee3"},{url:"docs.html",revision:"e36c2796a5f46fa2d6bde53dbd29c130"},{url:"en/about.html",revision:"7cda19cebaaaa6acadddbd7c794d2f35"},{url:"index.html",revision:"9e422cd6805666fdfd9ba4fd3e405b14"},{url:"links.html",revision:"da6acee09246f705759ecec2df2e3ae3"},{url:"member.html",revision:"21d220468a242f73075e9a16dceb2ed8"},{url:"membership.html",revision:"6b81aab4bc90d751519c5c473335b7eb"},{url:"static/bylaws.html",revision:"695cc46041471fd129cca10d47a952fb"},{url:"safari-pinned-tab.svg",revision:"8b04e8a9e7de6ec22fbaf61c3d17aad9"},{url:"pwa-192x192.png",revision:"1f6e6adda579628ebba53d9f39917836"},{url:"pwa-512x512.png",revision:"73949f6bfa96232a520df75058a40557"},{url:"manifest.webmanifest",revision:"795ea6e9c80211bc2db68bb5a6b7954b"}],{}),e.cleanupOutdatedCaches(),e.registerRoute(new e.NavigationRoute(e.createHandlerBoundToURL("index.html")))}));
