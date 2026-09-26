const json=(body,status=200)=>new Response(JSON.stringify(body),{status,headers:{"content-type":"application/json; charset=utf-8","cache-control":"no-store"}});
async function hash(value){const bytes=new TextEncoder().encode(value);const digest=await crypto.subtle.digest("SHA-256",bytes);return [...new Uint8Array(digest)].map(b=>b.toString(16).padStart(2,"0")).join("");}
export async function onRequestPost(context){
 try{
  if(!context.env.OrbonixAI)return json({error:"Orbonix AI is not configured."},503);
  if(!context.env.ORBONIX_AI_LIMITS)return json({error:"Daily-limit storage is not configured."},503);
  let body;try{body=await context.request.json()}catch{return json({error:"Invalid request."},400)}
  const question=String(body?.question||"").trim();if(!question||question.length>1200)return json({error:"Question must be between 1 and 1200 characters."},400);
  const ip=context.request.headers.get("CF-Connecting-IP")||"unknown",ua=context.request.headers.get("User-Agent")||"",visitor=await hash(ip+"|"+ua);
  const day=new Date().toISOString().slice(0,10),key="ai:"+day+":"+visitor,current=Number(await context.env.ORBONIX_AI_LIMITS.get(key)||0);
  if(current>=10)return json({error:"You have used your 10 Orbonix AI questions for today.",remaining:0},429);
  const response=await fetch("https://api.openai.com/v1/responses",{method:"POST",headers:{"Authorization":"Bearer "+context.env.OrbonixAI,"Content-Type":"application/json"},body:JSON.stringify({model:"gpt-5.2",store:false,max_output_tokens:900,instructions:"You are Orbonix AI, the science assistant for Orbonix. Be accurate, concise and educational. Specialize in astronomy, space exploration, physics and science. Clearly distinguish established facts from hypotheses. If uncertain, say so. Do not claim to have live data unless it is provided in the prompt.",input:question})});
  const data=await response.json();if(!response.ok)return json({error:"AI service request failed."},502);
  const answer=(data.output||[]).flatMap(x=>x.content||[]).filter(x=>x.type==="output_text").map(x=>x.text).join("\n").trim();
  if(!answer)return json({error:"Orbonix AI returned no text."},502);
  const used=current+1;await context.env.ORBONIX_AI_LIMITS.put(key,String(used),{expirationTtl:172800});
  return json({answer,remaining:10-used});
 }catch(e){return json({error:"Orbonix AI is temporarily unavailable."},500)}
}
export async function onRequest(){return json({error:"Method not allowed."},405)}
