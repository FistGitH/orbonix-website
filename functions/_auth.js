const enc=new TextEncoder();
export function json(data,status=200,headers={}){return new Response(JSON.stringify(data),{status,headers:{"content-type":"application/json; charset=utf-8","cache-control":"no-store",...headers}})}
export function db(env){if(!env.DB)throw new Error("ORBONIX database binding DB is not configured.")}
export async function body(request){try{return await request.json()}catch{throw new Error("Invalid JSON request.")}}
const hex=a=>[...new Uint8Array(a)].map(b=>b.toString(16).padStart(2,"0")).join("");
export async function hashPassword(password,saltHex){const salt=saltHex?Uint8Array.from(saltHex.match(/../g),x=>parseInt(x,16)):crypto.getRandomValues(new Uint8Array(16));const key=await crypto.subtle.importKey("raw",enc.encode(password),"PBKDF2",false,["deriveBits"]);const bits=await crypto.subtle.deriveBits({name:"PBKDF2",hash:"SHA-256",salt,iterations:210000},key,256);return{hash:hex(bits),salt:hex(salt)}}
export function token(){return hex(crypto.getRandomValues(new Uint8Array(32)))}
export function cookie(request,name){const raw=request.headers.get("cookie")||"";for(const p of raw.split(";")){const [k,...v]=p.trim().split("=");if(k===name)return decodeURIComponent(v.join("="))}return null}
export const sessionCookie=t=>"orbonix_session="+encodeURIComponent(t)+"; Path=/; HttpOnly; Secure; SameSite=Lax; Max-Age=2592000";
export const clearSession="orbonix_session=; Path=/; HttpOnly; Secure; SameSite=Lax; Max-Age=0";
export async function userFromSession(request,env){db(env);const t=cookie(request,"orbonix_session");if(!t)return null;return await env.DB.prepare("SELECT u.id,u.first_name AS firstName,u.last_name AS lastName,u.email,u.language,u.avatar FROM sessions s JOIN users u ON u.id=s.user_id WHERE s.token=? AND s.expires_at>datetime('now')").bind(t).first()}
export async function createSession(env,userId){const t=token();await env.DB.prepare("INSERT INTO sessions(token,user_id,expires_at) VALUES(?,?,datetime('now','+30 days'))").bind(t,userId).run();return t}
export function safeUser(u){return{id:u.id,firstName:u.firstName,lastName:u.lastName,email:u.email,language:u.language||"en",avatar:!!u.avatar}}
