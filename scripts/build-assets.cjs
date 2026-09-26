// Build public site files and inject consistent SEO metadata into public HTML.
const fs=require('node:fs'),path=require('node:path');
const root=path.resolve(__dirname,'..'),out=path.join(root,'public');
fs.mkdirSync(out,{recursive:true});
for(const name of ['index.html','404.html','favicon.png','robots.txt','sitemap.xml','css','js','locales','data','Account','Exploring-Space','Gallery','Latest-Space-News','More-About-Orbonix','search','Solar-System-Simulation']) {
  fs.cpSync(path.join(root,name),path.join(out,name),{recursive:true});
}

const BASE='https://orbonix.net';
const excluded=new Set(['404.html','Account/index.html','search/index.html']);
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
const seoOverrides={
  'Exploring-Space/Solar-System/Sun/index.html':['Sun: Facts, Structure & Solar Activity | ORBONIX','Explore the Sun, its structure, fusion, visible surface and role at the center of the Solar System.'],
  'Exploring-Space/Solar-System/Mercury/index.html':['Mercury: Facts, Surface & Extreme Temperatures | ORBONIX','Explore Mercury, the closest planet to the Sun, including its cratered surface, extreme temperatures, polar ice and metallic core.'],
  'Exploring-Space/Solar-System/Venus/index.html':['Venus: Facts, Atmosphere & Extreme Heat | ORBONIX','Explore Venus, its dense carbon-dioxide atmosphere, runaway greenhouse effect, clouds and volcanic landscape.'],
  'Exploring-Space/Solar-System/Earth/index.html':['Earth: Facts, Atmosphere, Oceans & Moon | ORBONIX','Explore Earth, its oceans, atmosphere, magnetic field, geology and the conditions that make it the only known world with life.'],
  'Exploring-Space/Solar-System/Earth/Moon/index.html':['The Moon: Facts, Geology & Exploration | ORBONIX','Explore the Moon, its craters and geology, its influence on Earth, Apollo samples and modern lunar exploration.'],
  'Exploring-Space/Solar-System/Mars/index.html':['Mars: Facts, Moons, Atmosphere & Exploration | ORBONIX','Explore Mars, its atmosphere, geology, evidence of ancient water, robotic exploration and the moons Phobos and Deimos.'],
  'Exploring-Space/Solar-System/Jupiter/index.html':['Jupiter: Facts, Great Red Spot & Moons | ORBONIX','Explore Jupiter, the Solar System’s largest planet, its atmosphere, Great Red Spot and major moons Io, Europa, Ganymede and Callisto.'],
  'Exploring-Space/Solar-System/Saturn/index.html':['Saturn: Facts, Rings & Moons | ORBONIX','Explore Saturn, its spectacular ring system and diverse moons including Titan and ocean world Enceladus.'],
  'Exploring-Space/Solar-System/Uranus/index.html':['Uranus: Facts, Rings, Tilt & Moons | ORBONIX','Explore Uranus, the ice giant with an extreme axial tilt, faint rings, unusual magnetic field and major moons.'],
  'Exploring-Space/Solar-System/Neptune/index.html':['Neptune: Facts, Weather, Triton & Moons | ORBONIX','Explore Neptune, its powerful weather and winds, atmosphere, ring system and remarkable captured moon Triton.'],
  'Exploring-Space/Deep-Space/Blackholes/index.html':['Black Holes: Formation, Detection & Facts | ORBONIX','Learn how black holes form, how astronomers detect them, what event horizons are and how black holes shape their surroundings.'],
  'Exploring-Space/Deep-Space/Galaxies/index.html':['Galaxies: Types, Structure & Evolution | ORBONIX','Explore galaxies, their stars, gas, dust and dark matter, and how astronomers study their structure and evolution.'],
  'Exploring-Space/Deep-Space/Dark-Matter/index.html':['Dark Matter: Evidence, Gravity & the Universe | ORBONIX','Explore the evidence for dark matter from galaxies, gravitational lensing, galaxy clusters and large-scale cosmic structure.'],
  'Exploring-Space/Deep-Space/Dark-Energy/index.html':['Dark Energy & the Expanding Universe | ORBONIX','Learn about the evidence for accelerated cosmic expansion, dark energy and the major unanswered questions in modern cosmology.'],
  'Exploring-Space/Space-Missions/James-Webb/index.html':['James Webb Space Telescope: Science & Infrared Astronomy | ORBONIX','Explore the James Webb Space Telescope, infrared astronomy, spectroscopy and its study of galaxies, stars and planetary systems.'],
  'Exploring-Space/Space-Missions/Apollo/index.html':['Apollo Program: Moon Landings, Science & History | ORBONIX','Explore the Apollo program, six crewed Moon landings, returned lunar samples and its lasting impact on lunar science.'],
  'Exploring-Space/Space-Missions/Artemis/index.html':['Artemis Program: NASA’s Return to the Moon | ORBONIX','Explore the Artemis program, its spacecraft, lunar science goals and plans for sustained human exploration of the Moon.'],
  'Exploring-Space/Solar-System/Jupiter/Io/index.html':['Io: Volcanoes, Tidal Heating & Jupiter’s Moon | ORBONIX','Explore Io, Jupiter’s intensely volcanic moon, and learn how orbital resonance and tidal heating power its active surface.'],
  'Exploring-Space/Solar-System/Jupiter/Europa/index.html':['Europa: Subsurface Ocean, Ice & Habitability | ORBONIX','Explore Europa, Jupiter’s icy moon, the evidence for a subsurface ocean and why it is a major target in the search for habitable environments.'],
  'Exploring-Space/Solar-System/Jupiter/Ganymede/index.html':['Ganymede: Largest Moon, Ocean & Magnetic Field | ORBONIX','Explore Ganymede, the Solar System’s largest moon, its intrinsic magnetic field, icy surface and evidence for a deep subsurface ocean.'],
  'Exploring-Space/Solar-System/Jupiter/Callisto/index.html':['Callisto: Craters, Ancient Surface & Hidden Ocean | ORBONIX','Explore Callisto, its ancient cratered surface and evidence consistent with a possible salty ocean beneath the ice.'],
  'Exploring-Space/Solar-System/Saturn/Titan/index.html':['Titan: Atmosphere, Methane Lakes & Hidden Ocean | ORBONIX','Explore Titan, Saturn’s largest moon, with its dense atmosphere, methane lakes, organic chemistry and possible subsurface ocean.'],
  'Exploring-Space/Solar-System/Saturn/Enceladus/index.html':['Enceladus: Ocean, Ice Plumes & Habitability | ORBONIX','Explore Enceladus, its subsurface ocean and water-rich plumes, and why this Saturnian moon is a major target in astrobiology.'],
  'Exploring-Space/Solar-System/Neptune/Triton/index.html':['Triton: Neptune’s Captured Moon, Ice & Plumes | ORBONIX','Explore Triton, its retrograde orbit, icy young terrain and nitrogen-rich plumes, plus evidence that Neptune captured this distant world.'],
  'Exploring-Space/Solar-System/Dwarf-Planets/Pluto/index.html':['Pluto: Facts, Moons, Geology & New Horizons | ORBONIX','Explore Pluto, its nitrogen-ice plains, water-ice mountains, moon Charon and discoveries made by the New Horizons mission.'],
  'Exploring-Space/Solar-System/Dwarf-Planets/Ceres/index.html':['Ceres: Facts, Water-Rich Geology & Dawn Mission | ORBONIX','Explore Ceres, the dwarf planet in the asteroid belt, its hydrated minerals, salt-rich deposits and evidence of water-related geology.'],
  'Exploring-Space/Deep-Space/Nebulae/index.html':['Nebulae: Star Formation, Gas, Dust & Stellar Death | ORBONIX','Explore nebulae as sites of star formation and stellar death, and learn how astronomers observe their gas and dust across many wavelengths.'],
  'Exploring-Space/Deep-Space/Quasars/index.html':['Quasars: Supermassive Black Holes & Active Galaxies | ORBONIX','Learn how quasars are powered by matter falling toward supermassive black holes and how they illuminate the distant universe.'],
  'Exploring-Space/Deep-Space/Stars/Supernovae/index.html':['Supernovae: Exploding Stars, Elements & Remnants | ORBONIX','Explore supernovae, how stellar explosions enrich space with heavy elements and how some leave neutron stars or black holes behind.'],
  'Exploring-Space/Deep-Space/Stars/Pulsar/index.html':['Pulsars: Rotating Neutron Stars & Cosmic Clocks | ORBONIX','Explore pulsars, rapidly rotating neutron stars whose precise signals help astronomers study gravity, extreme matter and gravitational waves.'],
  'Exploring-Space/Deep-Space/Wormholes/index.html':['Wormholes: Theory, General Relativity & Evidence | ORBONIX','Explore the physics of wormholes, their place in general relativity and why no wormhole has yet been observationally confirmed.']
};
function titleFor(rel){
  if(seoOverrides[rel]) return seoOverrides[rel][0];
  if(rel==='index.html') return 'ORBONIX | Explore Space, Astronomy & the Solar System';
  const parts=rel.split('/').slice(0,-1);
  const leaf=pretty(parts.at(-1));
  if(rel.includes('/Quizes/')) return leaf+' | ORBONIX Space Quiz';
  if(rel.startsWith('Solar-System-Simulation/')) return leaf+' | ORBONIX Solar System Simulation';
  return leaf+' | ORBONIX';
}
function descFor(rel){
  if(seoOverrides[rel]) return seoOverrides[rel][1];
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
  html=html.replace(/<title[^>]*>[\s\S]*?<\/title>/i,'').replace(/<meta[^>]+name=["']description["'][^>]*>/ig,'').replace(/<meta[^>]+name=["']viewport["'][^>]*>/ig,'').replace(/<link[^>]+rel=["']canonical["'][^>]*>/ig,'').replace(/<meta[^>]+property=["']og:[^"']+["'][^>]*>/ig,'').replace(/<meta[^>]+name=["']twitter:[^"']+["'][^>]*>/ig,'').replace(/<script[^>]+type=["']application\/ld\+json["'][^>]*>[\s\S]*?<\/script>/ig,'');
  const segments=rel.split('/').slice(0,-1);
  const breadcrumbItems=[
    {"@type":"ListItem","position":1,"name":"ORBONIX","item":BASE+"/"},
    ...segments.map((segment,index)=>({
      "@type":"ListItem",
      "position":index+2,
      "name":pretty(segment),
      "item":BASE+"/"+segments.slice(0,index+1).join("/")+"/"
    }))
  ];
  const isQuiz=rel.includes('/Quizes/') && !rel.endsWith('/Quizes/index.html');
  const isArticle=(
    rel.includes('/Solar-System/') ||
    rel.includes('/Deep-Space/') ||
    rel.includes('/Space-Missions/')
  ) && !rel.endsWith('/Solar-System/index.html') && !rel.endsWith('/Deep-Space/index.html') && !rel.endsWith('/Space-Missions/index.html');
  const pageType=isArticle?'Article':'WebPage';
  const pageSchema={"@type":pageType,"name":title,"description":desc,"url":url,"isPartOf":{"@type":"WebSite","name":"ORBONIX","url":BASE+"/"}};
  if(isArticle) {
    pageSchema.headline=title;
    pageSchema.publisher={"@type":"Organization","name":"ORBONIX","url":BASE+"/"};
  }
  if(isQuiz) pageSchema.about={"@type":"Thing","name":"Astronomy quiz"};
  const schema=rel==='index.html'
    ? {"@context":"https://schema.org","@type":"WebSite","name":"ORBONIX","url":BASE+"/"}
    : {"@context":"https://schema.org","@graph":[
        pageSchema,
        {"@type":"BreadcrumbList","itemListElement":breadcrumbItems}
      ]};
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
<script type="application/ld+json">${JSON.stringify(schema)}</script>`;
  html=html.replace(/<head(\s[^>]*)?>/i,m=>m+'\n'+seo);
  fs.writeFileSync(file,html);
}
