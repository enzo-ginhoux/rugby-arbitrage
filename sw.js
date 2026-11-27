// Service worker : fonctionnement hors connexion
const CACHE='avantage-ca8712ad22';
const FILES=['./','index.html','manifest.webmanifest','icon-192.png','icon-512.png','icon-maskable-512.png','apple-touch-icon.png'];
self.addEventListener('install',e=>{e.waitUntil(caches.open(CACHE).then(c=>c.addAll(FILES)).then(()=>self.skipWaiting()));});
const PDFC='avantage-pdfjs-6.2.108'; // lecteur PDF (import des convocations), mis en cache au premier usage
self.addEventListener('activate',e=>{e.waitUntil(caches.keys().then(k=>Promise.all(k.filter(n=>n!==CACHE&&n!==PDFC).map(n=>caches.delete(n)))).then(()=>self.clients.claim()));});
self.addEventListener('fetch',e=>{
  const r=e.request;if(r.method!=='GET')return;
  if(r.mode==='navigate'){ // page : réseau d'abord (mises à jour), cache si hors ligne
    e.respondWith(fetch(r).then(res=>{const c=res.clone();caches.open(CACHE).then(x=>x.put('index.html',c));return res;}).catch(()=>caches.match('index.html')));return;}
  if(/\/pdf(\.worker)?\.min\.mjs$/.test(new URL(r.url).pathname)){e.respondWith(caches.open(PDFC).then(c=>c.match(r).then(m=>m||fetch(r).then(res=>{if(res.ok)c.put(r,res.clone());return res;}))));return;}
  e.respondWith(caches.match(r).then(m=>m||fetch(r)));
});
