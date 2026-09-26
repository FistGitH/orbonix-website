// Build public site files and inject consistent SEO metadata into public HTML.
const fs=require('node:fs'),path=require('node:path');
const root=path.resolve(__dirname,'..'),out=path.join(root,'public');
fs.mkdirSync(out,{recursive:true});
for(const name of ['index.html','favicon.png','css','js','locales','data','Account','Exploring-Space','Gallery','Latest-Space-News','More-About-Orbonix','search','Solar-System-Simulation']) {
  fs.cpSync(path.join(root,name),path.join(out,name),{recursive:true});
}

const BASE='https://orbonix.net';
const excluded=new Set(['Account/index.html','search/index.html']);
const pretty=s=>s
  .replace(/-/g,' ')
  .replace(/\bQuizes\b/gi,'Quizzes')
  .replace(/\bFotos\b/gi,'Photos')
  .replace(/\bAchivments\b/gi,'Achievements')
  .replace(/\bHorizonts\b/gi,'Horizons')
  .replace(/\bRediative\b/gi,'Radiative')
  .replace(/\bBlackholes\b/gi,'Black Holes')
  .replace(/\bPulsar\b/gi,'Pulsars')
  .replace(/\b\w/g,c=>c.toUpperCase());

function walk(dir){
  return fs.readdirSync(dir,{withFileTypes:true}).flatMap(e=>{
    const p=path.join(dir,e.name);
    return e.isDirectory()?walk(p):[p];
  });
}
function escapeAttr(s){return s.replace(/&/g,'&amp;').replace(/"/g,'&quot;').replace(/</g,'&lt;').replace(/>/g,'&gt;');}
function titleFor(rel){
  if(rel==='index.html') return 'ORBONIX | Explore Space, Astronomy & the Solar System';
  const parts=rel.split('/').slice(0,-1);
  const leaf=pretty(parts.at(-1));
  if(rel.includes('/Quizes/')) return leaf+' | ORBONIX Space Quiz';
  if(rel.startsWith('Solar-System-Simulation/')) return leaf+' | ORBONIX Solar System Simulation';
  return leaf+' | ORBONIX';
}
function descFor(rel){
  if(rel==='index.html') return 'Explore space with ORBONIX: the Solar System, deep space, space missions, astronomy quizzes, simulations, news and original telescope observations.';
  const parts=rel.split('/').slice(0,-1), leaf=pretty(parts.at(-1));
  if(rel.includes('/Quizes/')) return 'Test your astronomy knowledge with the '+leaf+' on ORBONIX.';
  if(rel.startsWith('Solar-System-Simulation/')) return 'Explore '+leaf+' in the interactive ORBONIX Solar System simulation.';
  if(rel.startsWith('Latest-Space-News/')) return 'Read the latest space and astronomy news on ORBONIX.';
  if(rel.startsWith('Gallery/')) return 'Explore the ORBONIX space and astronomy gallery.';
  if(rel.includes('/Space-Missions/')) return 'Explore '+leaf+', its history, science and role in space exploration on ORBONIX.';
  if(rel.includes('/Deep-Space/')) return 'Learn about '+leaf+', astronomy and the wider universe with ORBONIX.';
  if(rel.includes('/Solar-System/')) return 'Explore '+leaf+', key facts and its place in the Solar System with ORBONIX.';
  return 'Explore '+leaf+' and discover more about space and astronomy with ORBONIX.';
}
for(const file of walk(out).filter(f=>f.endsWith('.html'))){
  const rel=path.relative(out,file).split(path.sep).join('/');
  let html=fs.readFileSync(file,'utf8');
  if(excluded.has(rel)){
    if(!/<meta[^>]+name=["']robots["']/i.test(html)) html=html.replace(/<head(\s[^>]*)?>/i,m=>m+'\n<meta name="robots" content="noindex, nofollow">');
    fs.writeFileSync(file,html); continue;
  }
  const url=rel==='index.html'?BASE+'/':BASE+'/'+rel.replace(/index\.html$/,'');
  const title=titleFor(rel), desc=descFor(rel);
  html=html.replace(/<title[^>]*>[\s\S]*?<\/title>/i,'').replace(/<meta[^>]+name=["']description["'][^>]*>/ig,'').replace(/<meta[^>]+name=["']viewport["'][^>]*>/ig,'').replace(/<link[^>]+rel=["']canonical["'][^>]*>/ig,'').replace(/<meta[^>]+property=["']og:[^"']+["'][^>]*>/ig,'').replace(/<meta[^>]+name=["']twitter:[^"']+["'][^>]*>/ig,'');
  const seo=`
<title>${escapeAttr(title)}</title>
<meta name="description" content="${escapeAttr(desc)}">
<meta name="viewport" content="width=device-width, initial-scale=1">
<meta name="robots" content="index, follow">
<link rel="canonical" href="${escapeAttr(url)}">
<meta property="og:site_name" content="ORBONIX">
<meta property="og:type" content="website">
<meta property="og:title" content="${escapeAttr(title)}">
<meta property="og:description" content="${escapeAttr(desc)}">
<meta property="og:url" content="${escapeAttr(url)}">
<meta name="twitter:card" content="summary">
<meta name="twitter:title" content="${escapeAttr(title)}">
<meta name="twitter:description" content="${escapeAttr(desc)}">
<script type="application/ld+json">${JSON.stringify({"@context":"https://schema.org","@type":"WebSite","name":"ORBONIX","url":BASE+"/"})}</script>`;
  html=html.replace(/<head(\s[^>]*)?>/i,m=>m+'\n'+seo);
  fs.writeFileSync(file,html);
}
