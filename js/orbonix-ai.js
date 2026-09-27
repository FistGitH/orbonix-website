(()=>{"use strict";
const form=document.getElementById("ai-form"),input=document.getElementById("ai-input"),messages=document.getElementById("ai-messages"),status=document.getElementById("ai-status"),remaining=document.getElementById("ai-remaining");
const STOP=new Set(["the","and","for","with","what","about","tell","give","more","this","that","from","into","you","your","are","can","how","why","who","when","where","мне","про","что","это","как","для","или","расскажи","дай","какие","какой","какая","кто","где","почему"]);
function words(text){return String(text||"").toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g,"").replace(/[^\p{L}\p{N}\s]/gu," ").split(/\s+/).filter(w=>w.length>2&&!STOP.has(w))}
function automaticLinks(question,answer,serverLinks=[]){
 const map=new Map();
 for(const l of serverLinks||[])if(l&&typeof l.url==="string"&&l.url.startsWith("/"))map.set(l.url,{label:l.label||"Explore",url:l.url});
 if(typeof window.searchOrbonix!=="function")return [...map.values()].slice(0,4);
 const query=[...new Set([...words(question),...words(answer).slice(0,18)])].join(" ");
 for(const page of window.searchOrbonix(query)){
  if(map.size>=4)break;
  if(!page||!page.url||page.title==="Orbonix AI"||page.title==="Account"||page.title==="Home")continue;
  let url;try{const u=new URL(page.url,location.origin);if(u.origin!==location.origin)continue;url=u.pathname+u.search+u.hash}catch{continue}
  if(!map.has(url))map.set(url,{label:page.title,url});
 }
 return [...map.values()].slice(0,4);
}
function add(role,text,links=[]){const a=document.createElement("article");a.className="ai-message "+role;const s=document.createElement("span");s.textContent=role==="user"?"YOU":"ORBONIX AI";const p=document.createElement("p");p.textContent=text;a.append(s,p);if(role==="assistant"&&Array.isArray(links)&&links.length){const box=document.createElement("div");box.className="ai-related";const title=document.createElement("strong");title.textContent="Learn more on Orbonix";box.append(title);for(const link of links){if(!link||typeof link.url!=="string"||!link.url.startsWith("/"))continue;const b=document.createElement("a");b.className="ai-related-link";b.href=link.url;b.textContent=link.label||"Explore";box.append(b)}a.append(box)}messages.append(a);messages.scrollTop=messages.scrollHeight}
async function ask(question){const r=await fetch("/api/orbonix-ai",{method:"POST",headers:{"content-type":"application/json"},body:JSON.stringify({question})});let data={};try{data=await r.json()}catch{}if(Number.isFinite(data.remaining))remaining.textContent=data.remaining;if(!r.ok)throw Error(data.error||"Orbonix AI is temporarily unavailable.");return data}
form.addEventListener("submit",async e=>{e.preventDefault();const q=input.value.trim();if(!q)return;add("user",q);input.value="";input.disabled=true;form.querySelector("button").disabled=true;status.textContent="Thinking…";try{const data=await ask(q);add("assistant",data.answer,automaticLinks(q,data.answer,data.links));status.textContent=""}catch(err){status.textContent=err.message}finally{input.disabled=false;form.querySelector("button").disabled=false;input.focus()}});
})();