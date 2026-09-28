const json=(body,status=200,extra={})=>new Response(JSON.stringify(body),{status,headers:{"content-type":"application/json; charset=utf-8","cache-control":"no-store",...extra}});
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

const AUTH_ENC=new TextEncoder();
const authHex=a=>[...new Uint8Array(a)].map(b=>b.toString(16).padStart(2,"0")).join("");
const authToken=()=>authHex(crypto.getRandomValues(new Uint8Array(32)));
async function authPassword(password,saltHex){
 const salt=saltHex?Uint8Array.from(saltHex.match(/../g)||[],x=>parseInt(x,16)):crypto.getRandomValues(new Uint8Array(16));
 const key=await crypto.subtle.importKey("raw",AUTH_ENC.encode(password),"PBKDF2",false,["deriveBits"]);
 const bits=await crypto.subtle.deriveBits({name:"PBKDF2",hash:"SHA-256",salt,iterations:100000},key,256);
 return{hash:authHex(bits),salt:authHex(salt)}
}
function authCookie(request){
 const raw=request.headers.get("cookie")||"";
 for(const p of raw.split(";")){const [k,...v]=p.trim().split("=");if(k==="orbonix_session")return decodeURIComponent(v.join("="))}
 return null
}
const authSessionCookie=t=>"orbonix_session="+encodeURIComponent(t)+"; Path=/; HttpOnly; Secure; SameSite=Lax; Max-Age=2592000";
const authClearCookie="orbonix_session=; Path=/; HttpOnly; Secure; SameSite=Lax; Max-Age=0";
const authPublic=u=>({id:u.id,firstName:u.firstName,lastName:u.lastName,email:u.email,language:u.language||"en",avatar:false});
async function authBody(request){try{return await request.json()}catch{throw Object.assign(new Error("Invalid JSON request."),{status:400})}}
async function authUser(request,env){
 const t=authCookie(request);if(!t)return null;
 return env.DB.prepare("SELECT u.id,u.first_name AS firstName,u.last_name AS lastName,u.email,u.language,u.avatar FROM sessions s JOIN users u ON u.id=s.user_id WHERE s.token=? AND s.expires_at>datetime('now')").bind(t).first()
}
async function authSession(env,id){const t=authToken();await env.DB.prepare("INSERT INTO sessions(token,user_id,expires_at) VALUES(?,?,datetime('now','+30 days'))").bind(t,id).run();return t}
async function avatarTable(env){
 await env.DB.prepare("CREATE TABLE IF NOT EXISTS user_avatars (user_id TEXT PRIMARY KEY,mime TEXT NOT NULL,data BLOB NOT NULL,updated_at TEXT NOT NULL,FOREIGN KEY(user_id) REFERENCES users(id) ON DELETE CASCADE)").run();
}
async function observationTables(env){
 await env.DB.prepare("CREATE TABLE IF NOT EXISTS observations (id TEXT PRIMARY KEY,user_id TEXT NOT NULL,object_name TEXT NOT NULL,observed_at TEXT NOT NULL,location TEXT NOT NULL DEFAULT '',conditions TEXT NOT NULL DEFAULT '',notes TEXT NOT NULL DEFAULT '',favorite INTEGER NOT NULL DEFAULT 0,pinned INTEGER NOT NULL DEFAULT 0,has_photo INTEGER NOT NULL DEFAULT 0,created_at TEXT NOT NULL,FOREIGN KEY(user_id) REFERENCES users(id) ON DELETE CASCADE)").run();
 await env.DB.prepare("CREATE INDEX IF NOT EXISTS observations_user_idx ON observations(user_id,created_at)").run();
 await env.DB.prepare("CREATE TABLE IF NOT EXISTS observation_photos (observation_id TEXT PRIMARY KEY,user_id TEXT NOT NULL,mime TEXT NOT NULL,data BLOB NOT NULL,FOREIGN KEY(observation_id) REFERENCES observations(id) ON DELETE CASCADE,FOREIGN KEY(user_id) REFERENCES users(id) ON DELETE CASCADE)").run();
}
async function accountAPI(request,env,url){
 if(!env.DB)return json({error:"Account database is not configured."},503);
 const p=url.pathname,m=request.method;
 if(m!=="GET"&&request.headers.get("Origin")&&request.headers.get("Origin")!==url.origin)return json({error:"Invalid request origin."},403);
 if(p==="/api/register"&&m==="POST"){
  const b=await authBody(request),email=String(b.email||"").trim().toLowerCase(),first=String(b.firstName||"").trim(),last=String(b.lastName||"").trim(),password=String(b.password||"");
  if(!first||!last||first.length>80||last.length>80||!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)||email.length>254||password.length<12||password.length>128)return json({error:"Enter your name, a valid email and a password of 12–128 characters."},400);
  if(await env.DB.prepare("SELECT id FROM users WHERE email=?").bind(email).first())return json({error:"An account with this email already exists."},409);
  const hp=await authPassword(password),id=crypto.randomUUID(),language=String(b.language||"en").slice(0,12);
  await env.DB.prepare("INSERT INTO users(id,first_name,last_name,email,password_hash,password_salt,language,created_at) VALUES(?,?,?,?,?,?,?,datetime('now'))").bind(id,first,last,email,hp.hash,hp.salt,language).run();
  const t=await authSession(env,id);
  return json({message:"Account created.",user:{id,firstName:first,lastName:last,email,language,avatar:false}},201,{"Set-Cookie":authSessionCookie(t)})
 }
 if(p==="/api/login"&&m==="POST"){
  const b=await authBody(request),email=String(b.email||"").trim().toLowerCase(),password=String(b.password||"");
  const u=await env.DB.prepare("SELECT id,first_name AS firstName,last_name AS lastName,email,password_hash,password_salt,language FROM users WHERE email=?").bind(email).first();
  if(!u)return json({error:"Incorrect email or password."},401);
  const hp=await authPassword(password,u.password_salt);
  if(hp.hash!==u.password_hash)return json({error:"Incorrect email or password."},401);
  const t=await authSession(env,u.id);return json({user:authPublic(u)},200,{"Set-Cookie":authSessionCookie(t)})
 }
 if(p==="/api/logout"&&m==="POST"){
  const t=authCookie(request);if(t)await env.DB.prepare("DELETE FROM sessions WHERE token=?").bind(t).run();
  return json({ok:true},200,{"Set-Cookie":authClearCookie})
 }
 const u=await authUser(request,env);
 if(!u)return json({error:"Please sign in."},401);
  if(p==="/api/profile"&&(m==="PATCH"||m==="POST")){
  const b=await authBody(request),firstName=String(b.firstName||"").trim().slice(0,60),lastName=String(b.lastName||"").trim().slice(0,60);
  if(!firstName||!lastName)return json({error:"First name and last name are required."},400);
  await env.DB.prepare("UPDATE users SET first_name=?,last_name=? WHERE id=?").bind(firstName,lastName,u.id).run();
  return json({ok:true,user:{...u,firstName,lastName}})
 }
 if(p==="/api/avatar"&&m==="POST"){
   const b=await authBody(request),image=String(b.image||"");
   const allowed=["data:image/jpeg;base64,","data:image/png;base64,","data:image/webp;base64,"];
   const prefix=allowed.find(x=>image.startsWith(x));
   if(!prefix)return json({error:"Choose a JPEG, PNG or WebP photo."},400);
   const encoded=image.slice(prefix.length);
   let bytes;try{const raw=atob(encoded);if(!raw.length||raw.length>400000)throw Error();bytes=Uint8Array.from(raw,c=>c.charCodeAt(0))}catch{return json({error:"Profile photo is too large or invalid."},413)}
   await avatarTable(env);
   await env.DB.prepare("INSERT OR REPLACE INTO user_avatars(user_id,mime,data,updated_at) VALUES(?,?,?,datetime('now'))").bind(u.id,"image/jpeg",bytes).run();
   await env.DB.prepare("UPDATE users SET avatar='1' WHERE id=?").bind(u.id).run();
   return json({ok:true})
  }
 if(p==="/api/avatar"&&m==="GET"){
  await avatarTable(env);
  const row=await env.DB.prepare("SELECT mime,data FROM user_avatars WHERE user_id=?").bind(u.id).first();
  if(!row?.data)return new Response(null,{status:404});
  const avatarBytes=row.data instanceof ArrayBuffer?new Uint8Array(row.data):row.data instanceof Uint8Array?row.data:Array.isArray(row.data)?new Uint8Array(row.data):new Uint8Array(Object.values(row.data));
  return new Response(avatarBytes.buffer.slice(avatarBytes.byteOffset,avatarBytes.byteOffset+avatarBytes.byteLength),{headers:{"content-type":row.mime||"image/jpeg","content-length":String(avatarBytes.byteLength),"cache-control":"private, no-store","x-content-type-options":"nosniff"}})
 }
 if(p==="/api/me"&&m==="GET"){
  await avatarTable(env);
  const [q,av]=await Promise.all([
   env.DB.prepare("SELECT quiz,percent,created_at AS createdAt FROM quiz_results WHERE user_id=? ORDER BY created_at DESC LIMIT 100").bind(u.id).all(),
   env.DB.prepare("SELECT 1 AS present FROM user_avatars WHERE user_id=?").bind(u.id).first()
  ]);
  return json({user:{...authPublic(u),avatar:!!av},quizzes:q.results||[],earned:[]})
 }
 if(p==="/api/me"&&m==="PATCH"){
  const b=await authBody(request),language=String(b.language||"").slice(0,12);if(!language)return json({error:"Unsupported language."},400);
  await env.DB.prepare("UPDATE users SET language=? WHERE id=?").bind(language,u.id).run();return json({ok:true})
 }
 if(p==="/api/observations"&&m==="GET"){
  await observationTables(env);
  const q=await env.DB.prepare("SELECT id,object_name AS objectName,observed_at AS observedAt,location,conditions,notes,favorite,pinned,has_photo AS hasPhoto,created_at AS createdAt FROM observations WHERE user_id=? ORDER BY pinned DESC, observed_at DESC, created_at DESC LIMIT 200").bind(u.id).all();
  return json({observations:q.results||[]})
 }
 if(p==="/api/observations"&&m==="POST"){
  await observationTables(env);
  const b=await authBody(request),objectName=String(b.objectName||"").trim().slice(0,120),observedAt=String(b.observedAt||"").trim().slice(0,40),location=String(b.location||"").trim().slice(0,160),conditions=String(b.conditions||"").trim().slice(0,240),notes=String(b.notes||"").trim().slice(0,4000);
  if(!objectName||!observedAt||!notes)return json({error:"Object, observation date and notes are required."},400);
  const id=crypto.randomUUID();
  await env.DB.prepare("INSERT INTO observations(id,user_id,object_name,observed_at,location,conditions,notes,favorite,pinned,has_photo,created_at) VALUES(?,?,?,?,?,?,?,0,0,0,datetime('now'))").bind(id,u.id,objectName,observedAt,location,conditions,notes).run();
  return json({id},201)
 }
 if(p.startsWith("/api/observations/")&&m==="PATCH"){
  await observationTables(env);
  const id=decodeURIComponent(p.slice("/api/observations/".length)),b=await authBody(request);
  const row=await env.DB.prepare("SELECT favorite,pinned FROM observations WHERE id=? AND user_id=?").bind(id,u.id).first();
  if(!row)return json({error:"Observation not found."},404);
  const favorite=b.favorite===undefined?Number(row.favorite):b.favorite?1:0,pinned=b.pinned===undefined?Number(row.pinned):b.pinned?1:0;
  await env.DB.prepare("UPDATE observations SET favorite=?,pinned=? WHERE id=? AND user_id=?").bind(favorite,pinned,id,u.id).run();
  return json({ok:true,favorite:!!favorite,pinned:!!pinned})
 }
 if(p.startsWith("/api/observations/")&&m==="DELETE"){
  await observationTables(env);
  const id=decodeURIComponent(p.slice("/api/observations/".length));
  await env.DB.prepare("DELETE FROM observation_photos WHERE observation_id=? AND user_id=?").bind(id,u.id).run();
  await env.DB.prepare("DELETE FROM observations WHERE id=? AND user_id=?").bind(id,u.id).run();
  return json({ok:true})
 }
 if(p.startsWith("/api/observation-photo/")&&m==="POST"){
  await observationTables(env);
  const id=decodeURIComponent(p.slice("/api/observation-photo/".length)),owned=await env.DB.prepare("SELECT id FROM observations WHERE id=? AND user_id=?").bind(id,u.id).first();
  if(!owned)return json({error:"Observation not found."},404);
  const b=await authBody(request),image=String(b.image||""),prefix=["data:image/jpeg;base64,","data:image/png;base64,","data:image/webp;base64,"].find(x=>image.startsWith(x));
  if(!prefix)return json({error:"Choose a JPEG, PNG or WebP photo."},400);
  let bytes;try{const raw=atob(image.slice(prefix.length));if(!raw.length||raw.length>650000)throw Error();bytes=Uint8Array.from(raw,c=>c.charCodeAt(0))}catch{return json({error:"Observation photo is too large or invalid."},413)}
  const mime=prefix.slice(5,-8);
  await env.DB.prepare("INSERT OR REPLACE INTO observation_photos(observation_id,user_id,mime,data) VALUES(?,?,?,?)").bind(id,u.id,mime,bytes).run();
  await env.DB.prepare("UPDATE observations SET has_photo=1 WHERE id=? AND user_id=?").bind(id,u.id).run();
  return json({ok:true})
 }
 if(p.startsWith("/api/observation-photo/")&&m==="GET"){
  await observationTables(env);
  const id=decodeURIComponent(p.slice("/api/observation-photo/".length)),row=await env.DB.prepare("SELECT mime,data FROM observation_photos WHERE observation_id=? AND user_id=?").bind(id,u.id).first();
  if(!row?.data)return new Response(null,{status:404});
  const photoBytes=row.data instanceof ArrayBuffer?new Uint8Array(row.data):row.data instanceof Uint8Array?row.data:Array.isArray(row.data)?new Uint8Array(row.data):new Uint8Array(Object.values(row.data));
  return new Response(photoBytes.buffer.slice(photoBytes.byteOffset,photoBytes.byteOffset+photoBytes.byteLength),{headers:{"content-type":row.mime||"image/jpeg","content-length":String(photoBytes.byteLength),"cache-control":"private, no-store","x-content-type-options":"nosniff"}})
 }
 if(p==="/api/quiz"&&m==="POST"){
  const b=await authBody(request),quiz=String(b.quiz||"").slice(0,100);let percent=Number(b.percent);
  if(!Number.isFinite(percent)&&Array.isArray(b.answers)){const correct=b.answers.filter(v=>v===true||v?.correct===true).length;percent=b.answers.length?correct*100/b.answers.length:0}
  percent=Math.max(0,Math.min(100,Number.isFinite(percent)?percent:0));
  await env.DB.prepare("INSERT INTO quiz_results(id,user_id,quiz,percent,created_at) VALUES(?,?,?,?,datetime('now'))").bind(crypto.randomUUID(),u.id,quiz,percent).run();return json({percent:Math.round(percent)})
 }
 return json({error:"API endpoint not found."},404)
}

export default{async fetch(request,env){try{const url=new URL(request.url);if(url.pathname==="/api/orbonix-ai")return await orbonixAI(request,env);if(["/api/register","/api/login","/api/logout","/api/me","/api/quiz","/api/avatar","/api/profile","/api/observations"].includes(url.pathname)||url.pathname.startsWith("/api/observations/")||url.pathname.startsWith("/api/observation-photo/"))return await accountAPI(request,env,url);return env.ASSETS.fetch(request)}catch(e){return json({error:e?.message||"Orbonix service error."},e?.status||500)}}};