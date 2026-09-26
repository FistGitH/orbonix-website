// Deploy only public site files, never server code, database schema or dependencies.
const fs=require('node:fs'),path=require('node:path');const root=path.resolve(__dirname,'..'),out=path.join(root,'public');
fs.mkdirSync(out,{recursive:true});for(const name of ['index.html','favicon.png','css','js','locales','data','Account','Exploring-Space','Gallery','Latest-Space-News','More-About-Orbonix','search','Solar-System-Simulation'])fs.cpSync(path.join(root,name),path.join(out,name),{recursive:true});
