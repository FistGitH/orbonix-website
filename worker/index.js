const json=(body,status=200)=>new Response(JSON.stringify(body),{status,headers:{"content-type":"application/json; charset=utf-8","cache-control":"no-store"}});
async function hash(value){const digest=await crypto.subtle.digest("SHA-256",new TextEncoder().encode(value));return [...new Uint8Array(digest)].map(b=>b.toString(16).padStart(2,"0")).join("")}
const ORBONIX_LINKS=[
 {terms:["black hole","black holes","черная дыра","чёрная дыра","черные дыры","чёрные дыры"],links:[{label:"Black Holes",url:"/Exploring-Space/Deep-Space/Blackholes/"}]},
 {terms:["mars","марс"],links:[{label:"Mars",url:"/Exploring-Space/Solar-System/Mars/"},{label:"Phobos",url:"/Exploring-Space/Solar-System/Mars/Phobos/"},{label:"Deimos",url:"/Exploring-Space/Solar-System/Mars/Deimos/"},{label:"Mars Simulation",url:"/Solar-System-Simulation/Mars/"}]},
 {terms:["jupiter","юпитер"],links:[{label:"Jupiter",url:"/Exploring-Space/Solar-System/Jupiter/"},{label:"Jupiter Simulation",url:"/Solar-System-Simulation/Jupiter/"}]},
 {terms:["saturn","сатурн"],links:[{label:"Saturn",url:"/Exploring-Space/Solar-System/Saturn/"},{label:"Saturn Simulation",url:"/Solar-System-Simulation/Saturn/"}]},
 {terms:["solar system","солнечная система"],links:[{label:"Solar System",url:"/Exploring-Space/Solar-System/"},{label:"Solar System Simulation",url:"/Solar-System-Simulation/"}]},
 {terms:["galaxy","galaxies","галактика","галактики"],links:[{label:"Galaxies",url:"/Exploring-Space/Deep-Space/Galaxies/"}]},
 {terms:["nebula","nebulae","туманность","туманности"],links:[{label:"Nebulae",url:"/Exploring-Space/Deep-Space/Nebulae/"}]},
 {terms:["dark matter","темная материя","тёмная материя"],links:[{label:"Dark Matter",url:"/Exploring-Space/Deep-Space/Dark-Matter/"}]},
 {terms:["dark energy","темная энергия","тёмная энергия"],links:[{label:"Dark Energy",url:"/Exploring-Space/Deep-Space/Dark-Energy/"}]}
];
function relatedLinks(question){const q=question.toLowerCase();const found=[];for(const group of ORBONIX_LINKS)if(group.terms.some(t=>q.includes(t)))for(const link of group.links)if(!found.some(x=>x.url===link.url))found.push(link);return found.slice(0,4)}
async function orbonixAI(request,env){
 if(request.method!=="POST")return json({error:"Method not allowed."},405);
 let body;try{body=await request.json()}catch{return json({error:"Invalid request."},400)}
 const question=String(body?.question||"").trim();if(!question||question.length>1200)return json({error:"Question must be between 1 and 1200 characters."},400);
 const normalized=question.toLowerCase().replace(/[^a-zа-яё0-9 ]/gi,"").trim();
 const greetings=new Set(["hello","hi","hey","hello orbonix","hi orbonix","привет","привет orbonix","здравствуй","здравствуйте"]);
 const help=new Set(["help","what can you do","what can you do orbonix","что ты умеешь","помощь","что ты можешь"]);
 if(greetings.has(normalized))return json({answer:"Hello! What would you like to explore? I’m Orbonix AI, your space and science assistant. I can help you explore planets, moons, stars, galaxies, black holes, space missions, astronomy, physics, and explain scientific concepts. You can also ask me to compare objects, explain a space term, or help you learn a topic step by step.",remaining:10,local:true});
 if(help.has(normalized))return json({answer:"I can help you explore space and science. Ask me about planets and moons, stars and galaxies, black holes, astronomy, physics, spacecraft and space missions, scientific terms, comparisons, or step-by-step explanations. Full AI answers require the Orbonix AI service; basic greetings and help work locally.",remaining:10,local:true});
 if(!env.OrbonixAI)return json({error:"Full Orbonix AI answers are not available yet. Try “Hello” or “What can you do?” to explore the assistant.",remaining:10},503);
 if(!env.ORBONIX_AI_LIMITS)return json({error:"Daily-limit storage is not configured."},503);
 const visitor=await hash((request.headers.get("CF-Connecting-IP")||"unknown")+"|"+(request.headers.get("User-Agent")||""));
 const day=new Date().toISOString().slice(0,10),key="ai:"+day+":"+visitor,current=Number(await env.ORBONIX_AI_LIMITS.get(key)||0);
 if(current>=10)return json({error:"You have used your 10 Orbonix AI questions for today.",remaining:0},429);
 const response=await fetch("https://api.openai.com/v1/responses",{method:"POST",headers:{Authorization:"Bearer "+env.OrbonixAI,"Content-Type":"application/json"},body:JSON.stringify({model:"gpt-5.2",store:false,max_output_tokens:900,instructions:"You are Orbonix AI, the science assistant for Orbonix. Be accurate, concise and educational. Specialize in astronomy, space exploration, physics and science. Clearly distinguish established facts from hypotheses. If uncertain, say so. Do not claim to have live data unless it is provided in the prompt.",input:question})});
 const data=await response.json();if(!response.ok)return json({error:"AI service request failed."},502);
 const answer=(data.output||[]).flatMap(x=>x.content||[]).filter(x=>x.type==="output_text").map(x=>x.text).join("\n").trim();
 if(!answer)return json({error:"Orbonix AI returned no text."},502);
 const used=current+1;await env.ORBONIX_AI_LIMITS.put(key,String(used),{expirationTtl:172800});return json({answer,remaining:10-used,links:relatedLinks(question)});
}
export default{async fetch(request,env){try{const url=new URL(request.url);if(url.pathname==="/api/orbonix-ai")return await orbonixAI(request,env);return env.ASSETS.fetch(request)}catch{return json({error:"Orbonix service error."},500)}}};