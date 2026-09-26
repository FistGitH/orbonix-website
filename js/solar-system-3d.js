(()=>{"use strict";
const host=document.getElementById("space3d"),canvas2d=document.getElementById("space"),b2=document.getElementById("view2d"),b3=document.getElementById("view3d");
if(!host||!b2||!b3)return;
let ready=false,active=false,scene,camera,renderer,planetGroup,orbitGroup,stars,raf,drag=false,lastX=0,lastY=0,yaw=.2,pitch=.55,distance=105;
const bodies=[
["mercury",.387,.2056,7.005,.38,0x96928a],["venus",.723,.0068,3.395,.65,0xd6ae76],["earth",1,.0167,0,.68,0x4f8cff],["mars",1.524,.0934,1.85,.52,0xc45b3d],["jupiter",5.203,.0489,1.303,1.65,0xcaa27c],["saturn",9.555,.0565,2.485,1.45,0xd2b982],["uranus",19.218,.0463,.773,1.05,0x83d8dc],["neptune",30.11,.0095,1.77,1.02,0x4169df],["pluto",39.482,.2488,17.16,.32,0xb69a85]
];
const meshes=new Map();
function init(){
 if(ready)return true;if(!window.THREE){host.innerHTML='<div class="webglFallback">3D engine unavailable. 2D mode remains available.</div>';return false;}
 try{
 scene=new THREE.Scene();scene.background=new THREE.Color(0x000207);camera=new THREE.PerspectiveCamera(52,innerWidth/innerHeight,.1,1000);renderer=new THREE.WebGLRenderer({antialias:true,alpha:false,powerPreference:"high-performance"});renderer.setPixelRatio(Math.min(devicePixelRatio,2));renderer.setSize(innerWidth,innerHeight);host.appendChild(renderer.domElement);
 scene.add(new THREE.AmbientLight(0x334466,1.1));const sunLight=new THREE.PointLight(0xfff0c0,5,400);scene.add(sunLight);
 const sun=new THREE.Mesh(new THREE.SphereGeometry(2.7,32,24),new THREE.MeshBasicMaterial({color:0xffd66b}));scene.add(sun);
 planetGroup=new THREE.Group();orbitGroup=new THREE.Group();scene.add(planetGroup,orbitGroup);
 bodies.forEach(([id,a,e,inc,r,color],index)=>{const mesh=new THREE.Mesh(new THREE.SphereGeometry(r,24,16),new THREE.MeshStandardMaterial({color,roughness:.82,metalness:0}));mesh.userData={id,a,e,inc,index};planetGroup.add(mesh);meshes.set(id,mesh);const points=[];for(let i=0;i<=160;i++){const t=i/160*Math.PI*2,b=a*Math.sqrt(1-e*e),x=(a*(Math.cos(t)-e))*1.65,z=b*Math.sin(t)*1.65,y=z*Math.sin(inc*Math.PI/180);points.push(new THREE.Vector3(x,y,z*Math.cos(inc*Math.PI/180)));}const geo=new THREE.BufferGeometry().setFromPoints(points);orbitGroup.add(new THREE.Line(geo,new THREE.LineBasicMaterial({color:0x315075,transparent:true,opacity:.42})));});
 const starGeo=new THREE.BufferGeometry(),pos=[];for(let i=0;i<1800;i++){const rr=160+Math.random()*250,th=Math.random()*Math.PI*2,ph=Math.acos(2*Math.random()-1);pos.push(rr*Math.sin(ph)*Math.cos(th),rr*Math.cos(ph),rr*Math.sin(ph)*Math.sin(th));}starGeo.setAttribute("position",new THREE.Float32BufferAttribute(pos,3));stars=new THREE.Points(starGeo,new THREE.PointsMaterial({color:0xbfd5ff,size:.28,sizeAttenuation:true}));scene.add(stars);
 const el=renderer.domElement;el.addEventListener("pointerdown",e=>{drag=true;lastX=e.clientX;lastY=e.clientY;el.setPointerCapture(e.pointerId)});el.addEventListener("pointermove",e=>{if(!drag)return;yaw-=(e.clientX-lastX)*.006;pitch=Math.max(-1.2,Math.min(1.2,pitch+(e.clientY-lastY)*.006));lastX=e.clientX;lastY=e.clientY});el.addEventListener("pointerup",()=>drag=false);el.addEventListener("wheel",e=>{e.preventDefault();distance=Math.max(12,Math.min(180,distance*(e.deltaY>0?1.1:.9)))},{passive:false});
 addEventListener("resize",resize);ready=true;return true;
 }catch(e){host.innerHTML='<div class="webglFallback">WebGL could not start. Use 2D mode.</div>';return false;}
}
function resize(){if(!ready)return;camera.aspect=innerWidth/innerHeight;camera.updateProjectionMatrix();renderer.setSize(innerWidth,innerHeight)}
function positions(){const date=window.orbonixSimulationDate?window.orbonixSimulationDate():new Date(),days=date.getTime()/86400000;const periods={mercury:87.969,venus:224.701,earth:365.256,mars:686.98,jupiter:4332.59,saturn:10759.22,uranus:30688.5,neptune:60182,pluto:90560};bodies.forEach(([id,a,e,inc],i)=>{const mesh=meshes.get(id),M=days/periods[id]*Math.PI*2+i*.7;let E=M;for(let k=0;k<6;k++)E=M+e*Math.sin(E);const b=a*Math.sqrt(1-e*e),x=a*(Math.cos(E)-e)*1.65,z=b*Math.sin(E)*1.65,I=inc*Math.PI/180;mesh.position.set(x,z*Math.sin(I),z*Math.cos(I));mesh.rotation.y+=.003;});}
function frame(){if(!active)return;positions();camera.position.set(Math.sin(yaw)*Math.cos(pitch)*distance,Math.sin(pitch)*distance,Math.cos(yaw)*Math.cos(pitch)*distance);camera.lookAt(0,0,0);renderer.render(scene,camera);raf=requestAnimationFrame(frame)}
function setMode(mode){if(mode==="3d"){if(!init())return;active=true;host.hidden=false;canvas2d.style.visibility="hidden";b3.classList.add("active");b2.classList.remove("active");frame()}else{active=false;cancelAnimationFrame(raf);host.hidden=true;canvas2d.style.visibility="visible";b2.classList.add("active");b3.classList.remove("active")}}
b3.addEventListener("click",()=>setMode("3d"));b2.addEventListener("click",()=>setMode("2d"));
})();
