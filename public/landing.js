function url(value){if(!value)return null;try{const u=new URL(value,location.origin);return /^https?:$/.test(u.protocol)?u.href:null}catch{return null}}
fetch('/api/config').then(r=>{if(!r.ok)throw Error();return r.json()}).then(c=>{
for(const [sel,value] of [['.system',c.systemUrl],['#line',c.lineUrl]]){const u=url(value);if(u)for(const a of document.querySelectorAll(sel)){a.href=u;a.hidden=false}}
const photo=url(c.heroImageUrl);if(photo){const i=new Image();i.onload=()=>document.querySelector('#hero-photo').src=photo;i.src=photo}
const demo=url(c.demoUrl);if(demo){const v=document.querySelector('#demo-player');if(/\.mp4$/i.test(new URL(demo).pathname)){if(v.src!==demo)v.src=demo}else{const a=document.querySelector('#demo-link');a.href=demo;a.hidden=false;v.hidden=true}}
}).catch(()=>{});
