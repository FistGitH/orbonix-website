/* =========================================================
   ORBONIX REAL DISTANCE SOLAR SYSTEM
========================================================= */


/* =========================================================
   CANVAS
========================================================= */

const canvas =
    document.getElementById("space");

const ctx =
    canvas.getContext("2d");

let width;
let height;

function resize(){

    width =
        canvas.width =
        window.innerWidth;

    height =
        canvas.height =
        window.innerHeight;

}

resize();

window.addEventListener(
    "resize",
    resize
);


/* =========================================================
   CONSTANTS
========================================================= */

const AU =
    149597870.7;

const DAY =
    86400000;


/*
    REAL ORBITAL SEMI-MAJOR AXES

    Values are AU.
*/

const planets = [
  {
    "id": "sun",
    "name": "Sun",
    "type": "STAR",
    "radius": 696340,
    "distance": 0,
    "period": 0,
    "speed": 0,
    "color": "#fff3a8",
    "moons": 0,
    "texture": "https://www.solarsystemscope.com/textures/download/2k_sun.jpg"
  },
  {
    "id": "mercury",
    "name": "Mercury",
    "type": "PLANET",
    "radius": 2439.7,
    "distance": 0.387098,
    "eccentricity": 0.2056,
    "inclination": 7.005,
    "period": 87.969,
    "speed": 47.36,
    "color": "#96928a",
    "moons": 0,
    "texture": "https://www.solarsystemscope.com/textures/download/2k_mercury.jpg"
  },
  {
    "id": "venus",
    "name": "Venus",
    "type": "PLANET",
    "radius": 6051.8,
    "distance": 0.723336,
    "eccentricity": 0.0068,
    "inclination": 3.3947,
    "period": 224.701,
    "speed": 35.02,
    "color": "#d6ae76",
    "moons": 0,
    "texture": "https://www.solarsystemscope.com/textures/download/2k_venus_atmosphere.jpg"
  },
  {
    "id": "earth",
    "name": "Earth",
    "type": "PLANET",
    "radius": 6371,
    "distance": 1.000001,
    "eccentricity": 0.0167,
    "inclination": 0,
    "period": 365.256,
    "speed": 29.78,
    "color": "#4f8cff",
    "moons": 1,
    "texture": "https://www.solarsystemscope.com/textures/download/2k_earth_daymap.jpg"
  },
  {
    "id": "mars",
    "name": "Mars",
    "type": "PLANET",
    "radius": 3389.5,
    "distance": 1.523679,
    "eccentricity": 0.0934,
    "inclination": 1.85,
    "period": 686.98,
    "speed": 24.13,
    "color": "#c45b3d",
    "moons": 2,
    "texture": "https://www.solarsystemscope.com/textures/download/2k_mars.jpg"
  },
  {
    "id": "jupiter",
    "name": "Jupiter",
    "type": "PLANET",
    "radius": 69911,
    "distance": 5.2026,
    "eccentricity": 0.0489,
    "inclination": 1.303,
    "period": 4332.59,
    "speed": 13.07,
    "color": "#caa27c",
    "moons": 117,
    "texture": "https://www.solarsystemscope.com/textures/download/2k_jupiter.jpg"
  },
  {
    "id": "saturn",
    "name": "Saturn",
    "type": "PLANET",
    "radius": 58232,
    "distance": 9.55491,
    "eccentricity": 0.0565,
    "inclination": 2.485,
    "period": 10759.22,
    "speed": 9.68,
    "color": "#d2b982",
    "moons": 293,
    "rings": true,
    "texture": "https://www.solarsystemscope.com/textures/download/2k_saturn.jpg"
  },
  {
    "id": "uranus",
    "name": "Uranus",
    "type": "PLANET",
    "radius": 25362,
    "distance": 19.2184,
    "eccentricity": 0.0463,
    "inclination": 0.773,
    "period": 30688.5,
    "speed": 6.8,
    "color": "#83d8dc",
    "moons": 29,
    "rings": true,
    "texture": "https://www.solarsystemscope.com/textures/download/2k_uranus.jpg"
  },
  {
    "id": "neptune",
    "name": "Neptune",
    "type": "PLANET",
    "radius": 24622,
    "distance": 30.1104,
    "eccentricity": 0.0095,
    "inclination": 1.77,
    "period": 60182,
    "speed": 5.43,
    "color": "#4169df",
    "moons": 16,
    "rings": true,
    "texture": "https://www.solarsystemscope.com/textures/download/2k_neptune.jpg"
  },
  {
    "id": "ceres",
    "name": "Ceres",
    "type": "DWARF PLANET",
    "radius": 469.7,
    "distance": 2.7675,
    "eccentricity": 0.0758,
    "inclination": 10.59,
    "period": 1681.63,
    "speed": 17.9,
    "color": "#999",
    "moons": 0
  },
  {
    "id": "pluto",
    "name": "Pluto",
    "type": "DWARF PLANET",
    "radius": 1188.3,
    "distance": 39.482,
    "eccentricity": 0.2488,
    "inclination": 17.16,
    "period": 90560,
    "speed": 4.74,
    "color": "#b69a85",
    "moons": 5,
    "texture": "https://assets.science.nasa.gov/content/dam/science/psd/solar/2023/09/p/l/pluto_color_mapmosaic.jpg"
  },
  {
    "id": "haumea",
    "name": "Haumea",
    "type": "DWARF PLANET",
    "radius": 816,
    "distance": 43.218,
    "eccentricity": 0.195,
    "inclination": 28.2,
    "period": 103774,
    "speed": 4.53,
    "color": "#bfc8d2",
    "moons": 2
  },
  {
    "id": "makemake",
    "name": "Makemake",
    "type": "DWARF PLANET",
    "radius": 715,
    "distance": 45.43,
    "eccentricity": 0.159,
    "inclination": 29,
    "period": 113183,
    "speed": 4.41,
    "color": "#b8aa98",
    "moons": 1
  },
  {
    "id": "eris",
    "name": "Eris",
    "type": "DWARF PLANET",
    "radius": 1163,
    "distance": 67.781,
    "eccentricity": 0.436,
    "inclination": 44,
    "period": 203830,
    "speed": 3.43,
    "color": "#d2d2d2",
    "moons": 1
  },
  {
    "id": "orcus",
    "name": "Orcus",
    "type": "DWARF PLANET CANDIDATE",
    "distance": 39.17,
    "eccentricity": 0.227,
    "inclination": 20.6,
    "radius": 458,
    "period": 89500,
    "color": "#bcb5a8",
    "moons": 1
  },
  {
    "id": "gonggong",
    "name": "Gonggong",
    "type": "DWARF PLANET CANDIDATE",
    "distance": 67.5,
    "eccentricity": 0.5,
    "inclination": 30.7,
    "radius": 615,
    "period": 202000,
    "color": "#ad7865",
    "moons": 1
  }
];


/* =========================================================
   SATELLITES
   Detailed moons live in the dedicated planetary simulations.
========================================================= */
const moons = [];


/* =========================================================
   STATE
========================================================= */

let selected =
    planets[0];

let running =
    true;

let timeSpeed =
    1;

let showOrbits =
    true;

let showLabels =
    true;

let showBelts =
    true;

let showTrails = true;
const orbitTrails = new Map();
let lastTrailSample = 0;

let realScale =
    true;
let objectFilter="all";
let focusMode=false;


/*
    Camera.

    cameraTarget = actual solar-system coordinate.
*/

let cameraTarget = {
    x:0,
    y:0
};

let cameraPosition = {
    x:0,
    y:0
};

let cameraZoom =
    .85;

let targetZoom =
    .85;


/* =========================================================
   DATE
========================================================= */

let simulationDate =
    new Date();
window.orbonixSimulationDate=()=>simulationDate;


/* =========================================================
   OBJECT LOOKUP
========================================================= */

function findObject(id){

    return planets.find(
        p => p.id === id
    )
    ||
    moons.find(
        m => m.id === id
    );

}


/* =========================================================
   SELECT DROPDOWN
========================================================= */

const select =
    document.getElementById(
        "objectSelect"
    );

function buildSelect(){

    select.innerHTML="";

    const categories = {

        "STAR":[],
        "PLANETS":[],
        "DWARF PLANETS":[],
 
    };


    planets.forEach(p=>{

        if(p.type==="STAR")
            categories.STAR.push(p);

        else if(
            p.type && p.type.includes("DWARF PLANET")
        )
            categories["DWARF PLANETS"].push(p);

        else
            categories.PLANETS.push(p);

    });

    for(
        const category in categories
    ){

        const group =
            document.createElement(
                "optgroup"
            );

        group.label =
            category;

        categories[category]
            .forEach(o=>{

                const option =
                    document.createElement(
                        "option"
                    );

                option.value =
                    o.id;

                option.textContent =
                    o.name;

                group.appendChild(
                    option
                );

            });

        select.appendChild(group);

    }

}

buildSelect();
function objectVisible(object){
    if(object.id==="sun") return objectFilter==="all";
    if(objectFilter==="planet") return object.type==="PLANET";
    if(objectFilter==="moon") return false;
    if(objectFilter==="dwarf") return !!object.type&&object.type.includes("DWARF PLANET");
    return true;
}
function rebuildFilteredSelect(){
    buildSelect();
    [...select.querySelectorAll("option")].forEach(option=>{
        const object=findObject(option.value); option.hidden=!objectVisible(object);
    });
    [...select.querySelectorAll("optgroup")].forEach(group=>{group.hidden=![...group.children].some(o=>!o.hidden);});
    if(selected&&objectVisible(selected)) select.value=selected.id;
}
document.querySelectorAll("#objectFilters [data-filter]").forEach(button=>button.addEventListener("click",()=>{
    objectFilter=button.dataset.filter;
    document.querySelectorAll("#objectFilters [data-filter]").forEach(b=>b.classList.toggle("active",b===button));
    rebuildFilteredSelect();
}));



/* =========================================================
   PANEL
========================================================= */

function updatePanel(){

    const o =
        selected;

    const exploreButton=document.getElementById("explore");
    if(exploreButton){
        const route=o.id==="sun" ? null : window.findOrbonixPage(o.name+" Simulation");
        exploreButton.disabled=!route;
        exploreButton.title=route ? "Open the detailed "+o.name+" system" : "No detailed system page available";
    }

    document
        .getElementById(
            "objectName"
        )
        .textContent =
        o.name;


    document
        .getElementById(
            "objectType"
        )
        .textContent =
        o.type ||
        "NATURAL SATELLITE";


    document
        .getElementById(
            "diameter"
        )
        .textContent =
        Math.round(
            o.radius*2
        ).toLocaleString()
        +" km";


    if(o.parent){

        document
            .getElementById(
                "distance"
            )
            .textContent =
            o.distance
            .toLocaleString()
            +" km";


        document
            .getElementById(
                "orbit"
            )
            .textContent =
            o.period
            +" days";


        document
            .getElementById(
                "velocity"
            )
            .textContent =
            "—";


        document
            .getElementById(
                "moons"
            )
            .textContent =
            "—";


        document
            .getElementById(
                "classType"
            )
            .textContent =
            "Natural satellite";

    }

    else{

        document
            .getElementById(
                "distance"
            )
            .textContent =
            o.distance === 0
            ? "0 km"
            :
            (
                o.distance*AU
            )
            .toLocaleString(
                undefined,
                {
                    maximumFractionDigits:0
                }
            )
            +" km";


        document
            .getElementById(
                "orbit"
            )
            .textContent =
            o.period === 0
            ? "—"
            :
            o.period.toLocaleString()
            +" days";


        document
            .getElementById(
                "velocity"
            )
            .textContent =
            o.speed
            ? o.speed+" km/s"
            : "—";


        document
            .getElementById(
                "moons"
            )
            .textContent =
            o.moons;


        document
            .getElementById(
                "classType"
            )
            .textContent =
            o.type === "STAR"
            ? "G-type star"
            : o.type === "DWARF PLANET"
            ? "Dwarf planet"
            : "Planet";

    }

}

updatePanel();

window.orbonixSelectObject=(id)=>{
    const object=findObject(id);
    if(!object)return;
    selected=object;
    select.value=object.id;
    updatePanel();
};


/* =========================================================
   SELECT
========================================================= */

select.addEventListener(
    "change",
    ()=>{

        selected =
            findObject(
                select.value
            );

        updatePanel();

        flyTo(
            selected
        );

    }
);


/* =========================================================
   REAL POSITION
========================================================= */

/*
    This is the important part.

    The orbital radius is directly
    based on AU.

    Earth:
        1 AU

    Jupiter:
        ~5.2 AU

    Neptune:
        ~30.1 AU

    Pluto:
        ~39.5 AU
*/


function orbitalPosition(
    planet
){

    if(
        planet.distance === 0
    ){

        return {
            x:0,
            y:0
        };

    }


    const days =
        (
            simulationDate -
            new Date(
                "2000-01-01T12:00:00Z"
            )
        )
        /DAY;


    /*
        Approximate mean orbital phase.

        The distance is real;
        this is not yet a full
        JPL ephemeris solution.
    */

    const meanAnomaly=(days/planet.period)*Math.PI*2+planet.id.length;
    const e=planet.eccentricity||0;
    let eccentricAnomaly=meanAnomaly;
    for(let i=0;i<6;i++) eccentricAnomaly=meanAnomaly+e*Math.sin(eccentricAnomaly);
    const a=planet.distance;
    const b=a*Math.sqrt(1-e*e);
    const inclination=(planet.inclination||0)*Math.PI/180;
    const rawX=a*(Math.cos(eccentricAnomaly)-e);
    const rawY=b*Math.sin(eccentricAnomaly);
    return {x:rawX,y:rawY*Math.cos(inclination)};

}


/* =========================================================
   MOON POSITION
========================================================= */

function moonPosition(
    moon
){

    const parent =
        findObject(
            moon.parent
        );


    const parentPosition =
        orbitalPosition(
            parent
        );


    const days =
        (
            simulationDate -
            new Date(
                "2000-01-01T12:00:00Z"
            )
        )
        /DAY;


    const angle =
        days /
        moon.period
        *
        Math.PI*2
        +
        moon.id.length;


    /*
        Convert km to AU.
    */

    const moonAU=moon.distance/AU;
    // Major moons use an educational display separation in the global view.
    // The information panel still reports their real orbital distance in km.
    const visibleAU=Math.max(moonAU, .055+Math.log10(Math.max(10,moon.distance))*.012);
    return {
        x:parentPosition.x+visibleAU*Math.cos(angle),
        y:parentPosition.y+visibleAU*Math.sin(angle)*.62
    };

}


/* =========================================================
   WORLD → SCREEN
========================================================= */

function projectPosition(x,y){
 const r=Math.hypot(x,y);const extent=Math.min(width,height)*.42;
 const scale=realScale ? extent/75 : (r ? Math.log1p(r)*extent/Math.log(76)/r : extent/Math.log(76));
 return {x:x*scale,y:y*scale};
}
function worldToScreen(x,y){const p=projectPosition(x,y);return {x:width/2+(p.x-cameraPosition.x)*cameraZoom,y:height/2+(p.y-cameraPosition.y)*cameraZoom};}


/* =========================================================
   STARS
========================================================= */

const stars=[];

for(
    let i=0;
    i<900;
    i++
){

    stars.push({

        x:
            Math.random()
            *
            window.innerWidth,

        y:
            Math.random()
            *
            window.innerHeight,

        radius:
            Math.random()
            *
            1.2
            +.1,

        alpha:
            Math.random()
            *.8
            +.2

    });

}


function drawStars(){

    for(
        const star
        of stars
    ){

        ctx.globalAlpha =
            star.alpha;

        ctx.fillStyle =
            "#ffffff";

        ctx.beginPath();

        ctx.arc(
            star.x,
            star.y,
            star.radius,
            0,
            Math.PI*2
        );

        ctx.fill();

    }

    ctx.globalAlpha=1;

}


/* =========================================================
   ORBITS
========================================================= */

function drawOrbits(){

    if(!showOrbits)
        return;


    planets.forEach(
        planet=>{

            if(!objectVisible(planet)) return;

            if(
                planet.distance===0
            )
                return;


            const points=[];

            for(
                let i=0;
                i<=120;
                i++
            ){

                const angle =
                    i/120
                    *
                    Math.PI*2;


                const e=planet.eccentricity||0;
                const a=planet.distance;
                const b=a*Math.sqrt(1-e*e);
                const inclination=(planet.inclination||0)*Math.PI/180;
                const x=a*(Math.cos(angle)-e);
                const y=b*Math.sin(angle)*Math.cos(inclination);


                points.push(
                    worldToScreen(
                        x,
                        y
                    )
                );

            }


            ctx.beginPath();


            points.forEach(
                (p,i)=>{

                    if(i===0)
                        ctx.moveTo(
                            p.x,
                            p.y
                        );

                    else
                        ctx.lineTo(
                            p.x,
                            p.y
                        );

                }
            );


            ctx.strokeStyle =
                planet.type ===
                "DWARF PLANET"

                ?

                "rgba(160,120,255,.20)"

                :

                "rgba(255,255,255,.10)";


            ctx.lineWidth=1;

            ctx.stroke();

        }
    );

}


/* =========================================================
   BELTS
========================================================= */

function drawBelts(){

    if(!showBelts)
        return;


    drawBelt(
        2.2,
        3.3,
        "rgba(180,160,120,.08)"
    );


    drawBelt(
        30,
        50,
        "rgba(80,130,255,.045)"
    );

}


function drawBelt(
    inner,
    outer,
    color
){

    const r1 =
        Math.log10(
            1+inner
        )
        *250
        *
        cameraZoom;


    const r2 =
        Math.log10(
            1+outer
        )
        *250
        *
        cameraZoom;


    ctx.beginPath();

    ctx.ellipse(
        width/2,
        height/2,
        (r1+r2)/2,
        (r1+r2)/2*.72,
        0,
        0,
        Math.PI*2
    );


    ctx.strokeStyle =
        color;

    ctx.lineWidth =
        Math.max(
            3,
            r2-r1
        );

    ctx.stroke();

}


/* =========================================================
   SUN
========================================================= */

function drawSun(){

    const position =
        worldToScreen(
            0,
            0
        );


    const pulse =
        Math.sin(
            performance.now()
            *.002
        )
        *2;


    const radius =
        17
        *
        cameraZoom
        +
        pulse;


    const gradient =
        ctx.createRadialGradient(
            position.x,
            position.y,
            0,
            position.x,
            position.y,
            radius*5
        );


    gradient.addColorStop(
        0,
        "rgba(255,255,220,1)"
    );

    gradient.addColorStop(
        .15,
        "rgba(255,220,90,.95)"
    );

    gradient.addColorStop(
        .45,
        "rgba(255,130,20,.25)"
    );

    gradient.addColorStop(
        1,
        "rgba(255,80,0,0)"
    );


    ctx.fillStyle =
        gradient;


    ctx.beginPath();

    ctx.arc(
        position.x,
        position.y,
        radius*5,
        0,
        Math.PI*2
    );

    ctx.fill();


    ctx.fillStyle =
        "#fff3a8";


    ctx.beginPath();

    ctx.arc(
        position.x,
        position.y,
        radius,
        0,
        Math.PI*2
    );

    ctx.fill();

}


/* =========================================================
   PLANET SIZE
========================================================= */

function visualRadius(
    planet
){

    /*
        Real planetary radii are used
        for information.

        Rendering radius is intentionally
        enlarged so planets can be seen.
    */

    if(
        planet.type==="DWARF PLANET"
    ){

        return Math.max(
            3,
            Math.log10(
                planet.radius
            )
            *2
        );

    }


    return Math.max(
        4,
        Math.log10(
            planet.radius
        )
        *3
    );

}


function updateTrails(now){
    if(!showTrails||now-lastTrailSample<120)return;
    lastTrailSample=now;
    planets.filter(p=>p.id!=="sun").forEach(p=>{
        const trail=orbitTrails.get(p.id)||[];
        trail.push(orbitalPosition(p));
        if(trail.length>28)trail.shift();
        orbitTrails.set(p.id,trail);
    });
}
function drawTrails(){
    if(!showTrails)return;
    planets.filter(p=>p.id!=="sun").forEach(p=>{
        const trail=orbitTrails.get(p.id);if(!trail||trail.length<2)return;
        ctx.beginPath();trail.forEach((point,i)=>{const s=worldToScreen(point.x,point.y);if(i===0)ctx.moveTo(s.x,s.y);else ctx.lineTo(s.x,s.y);});
        ctx.strokeStyle=p.color+"66";ctx.lineWidth=1.4;ctx.stroke();
    });
}

/* =========================================================
   DRAW PLANETS
========================================================= */

function drawPlanets(){

    planets.forEach(
        planet=>{

            if(!objectVisible(planet)) return;

            if(
                planet.id==="sun"
            )
                return;


            const world =
                orbitalPosition(
                    planet
                );


            const screen =
                worldToScreen(
                    world.x,
                    world.y
                );


            const radius =
                visualRadius(
                    planet
                )
                *
                Math.min(
                    2,
                    cameraZoom
                );


            /*
                Glow
            */

            if(
                planet === selected
            ){

                ctx.shadowBlur =
                    25;

                ctx.shadowColor =
                    planet.color;

            }


            ctx.fillStyle =
                planet.color;


            ctx.beginPath();

            ctx.arc(
                screen.x,
                screen.y,
                radius,
                0,
                Math.PI*2
            );

            ctx.fill();


            ctx.shadowBlur=0;
            window.orbonixDrawPlanet(ctx,planet,screen.x,screen.y,radius);


            /*
                Rings
            */

            if(
                planet.rings
            ){

                ctx.strokeStyle =
                    "rgba(230,215,175,.65)";

                ctx.lineWidth =
                    Math.max(
                        1,
                        radius*.25
                    );


                ctx.beginPath();

                ctx.ellipse(
                    screen.x,
                    screen.y,
                    radius*2.2,
                    radius*.65,
                    -.18,
                    0,
                    Math.PI*2
                );

                ctx.stroke();

            }


            /*
                Selected
            */

            if(
                planet===selected
            ){

                ctx.strokeStyle =
                    "rgba(255,255,255,.85)";

                ctx.lineWidth=1;

                ctx.beginPath();

                ctx.arc(
                    screen.x,
                    screen.y,
                    radius+8,
                    0,
                    Math.PI*2
                );

                ctx.stroke();

            }


            /*
                Label
            */

            if(
                showLabels
            ){

                ctx.font =
                    "10px Arial";

                ctx.fillStyle =
                    "rgba(255,255,255,.75)";

                ctx.fillText(
                    window.orbonixTranslate ? window.orbonixTranslate(planet.name) : planet.name,
                    screen.x+
                    radius+
                    5,
                    screen.y-3
                );

            }

        }
    );

}


/* =========================================================
   DRAW MOONS
========================================================= */

function drawMoons(){

    moons.forEach(
        moon=>{

            if(!objectVisible(moon)) return;

            const world =
                moonPosition(
                    moon
                );


            const screen =
                worldToScreen(
                    world.x,
                    world.y
                );


            const radius =
                Math.max(
                    1.2,
                    Math.log10(
                        moon.radius
                    )
                    *1.1
                    *
                    Math.min(
                        2,
                        cameraZoom
                    )
                );


            ctx.fillStyle =
                moon.color;


            ctx.beginPath();

            ctx.arc(
                screen.x,
                screen.y,
                radius,
                0,
                Math.PI*2
            );

            ctx.fill();


            if(
                moon===selected
            ){

                ctx.strokeStyle =
                    "white";

                ctx.beginPath();

                ctx.arc(
                    screen.x,
                    screen.y,
                    radius+5,
                    0,
                    Math.PI*2
                );

                ctx.stroke();

            }


            if(
                showLabels &&
                (cameraZoom>1.05 || moon===selected)
            ){

                ctx.font =
                    "8px Arial";

                ctx.fillStyle =
                    "rgba(255,255,255,.6)";

                ctx.fillText(
                    window.orbonixTranslate ? window.orbonixTranslate(moon.name) : moon.name,
                    screen.x+
                    radius+
                    4,
                    screen.y
                );

            }

        }
    );

}


/* =========================================================
   FLY TO
========================================================= */

let flightAnimation =
    null;


function flyTo(object){
 if(!object)return;cancelAnimationFrame(flightAnimation);
 const wp=object.parent ? moonPosition(object) : orbitalPosition(object); const target=projectPosition(wp.x,wp.y),start={...cameraPosition},zoom=cameraZoom,began=performance.now();
 const flight=document.getElementById('flight');flight.classList.add('active');flight.textContent='APPROACHING '+object.name.toUpperCase();
 function animate(t){const progress=Math.min(1,(t-began)/1200),e=progress*progress*(3-2*progress);cameraPosition.x=start.x+(target.x-start.x)*e;cameraPosition.y=start.y+(target.y-start.y)*e;cameraZoom=zoom+((object.id==='sun'?.85:3)-zoom)*e;
 if(progress<1)flightAnimation=requestAnimationFrame(animate);else{flight.classList.remove('active');}}
 flightAnimation=requestAnimationFrame(animate);
}


/* =========================================================
   SYSTEM VIEW
========================================================= */

function systemView(){
    cancelAnimationFrame(flightAnimation); document.getElementById("flight").classList.remove("active");

    const startX =
        cameraPosition.x;

    const startY =
        cameraPosition.y;

    const startZoom =
        cameraZoom;


    const start =
        performance.now();

    const duration =
        1200;


    function animate(now){

        const p =
            Math.min(
                1,
                (now-start)
                /duration
            );


        const e =
            p*p*(3-2*p);


        cameraPosition.x =
            startX*(1-e);


        cameraPosition.y =
            startY*(1-e);


        cameraZoom =
            startZoom+
            (.85-startZoom)*e;


        if(p<1){

            requestAnimationFrame(
                animate
            );

        }

    }


    requestAnimationFrame(
        animate
    );

}


function screenObjectAt(clientX,clientY){
    let closest=null,closestDistance=Infinity;
    const objects=[...planets,...moons];
    objects.forEach(object=>{
        if(!objectVisible(object))return;
        const world=object.parent ? moonPosition(object) : orbitalPosition(object);
        const screen=worldToScreen(world.x,world.y);
        const radius=object.id==="sun" ? 35 : object.parent ? 14 : Math.max(18,visualRadius(object)+10);
        const d=Math.hypot(screen.x-clientX,screen.y-clientY);
        if(d<radius&&d<closestDistance){closest=object;closestDistance=d;}
    });
    return closest;
}

const hoverHud=document.getElementById("hoverHud");
canvas.addEventListener("pointermove",event=>{
    if(activePointers.size)return;
    const object=screenObjectAt(event.clientX,event.clientY);
    if(!object){hoverHud.hidden=true;canvas.style.cursor="grab";return;}
    document.getElementById("hoverName").textContent=object.name;
    document.getElementById("hoverMeta").textContent=(object.type||"MOON")+" · "+Math.round(object.radius*2).toLocaleString()+" km";
    hoverHud.style.left=Math.min(width-180,event.clientX+16)+"px";
    hoverHud.style.top=Math.max(86,event.clientY-12)+"px";
    hoverHud.hidden=false;canvas.style.cursor="pointer";
});
canvas.addEventListener("pointerleave",()=>{hoverHud.hidden=true;});

function setZoom(value){cameraZoom=Math.max(.15,Math.min(15,value));targetZoom=cameraZoom;}
document.getElementById("zoomIn").addEventListener("click",()=>setZoom(cameraZoom*1.35));
document.getElementById("zoomOut").addEventListener("click",()=>setZoom(cameraZoom/1.35));
document.getElementById("resetCamera").addEventListener("click",()=>systemView());

/* =========================================================
   CLICK OBJECT
========================================================= */

canvas.addEventListener(
    "click",
    e=>{

        /*
            Ignore click after dragging.
        */

        if(
            movedDuringDrag
        ){

            movedDuringDrag=false;

            return;

        }


        let closest=null;

        let closestDistance=
            Infinity;


        planets.forEach(
            planet=>{

                if(!objectVisible(planet))return;

                if(
                    planet.id==="sun"
                )
                    return;


                const world =
                    orbitalPosition(
                        planet
                    );


                const screen =
                    worldToScreen(
                        world.x,
                        world.y
                    );


                const d =
                    Math.hypot(
                        screen.x-e.clientX,
                        screen.y-e.clientY
                    );


                if(
                    d<
                    Math.max(
                        18,
                        visualRadius(
                            planet
                        )+10
                    )
                    &&
                    d<
                    closestDistance
                ){

                    closest=
                        planet;

                    closestDistance=
                        d;

                }

            }
        );


        moons.forEach(
            moon=>{

                if(!objectVisible(moon))return;

                const world =
                    moonPosition(
                        moon
                    );


                const screen =
                    worldToScreen(
                        world.x,
                        world.y
                    );


                const d =
                    Math.hypot(
                        screen.x-e.clientX,
                        screen.y-e.clientY
                    );


                if(
                    d<15 &&
                    d<closestDistance
                ){

                    closest=
                        moon;

                    closestDistance=
                        d;

                }

            }
        );


        /*
            Sun
        */

        const sunScreen =
            worldToScreen(
                0,
                0
            );


        const sunDistance =
            Math.hypot(
                sunScreen.x-e.clientX,
                sunScreen.y-e.clientY
            );


        if(
            sunDistance<35 &&
            sunDistance<
            closestDistance
        ){

            closest=
                planets[0];

        }


        if(closest){

            selected=
                closest;

            select.value=
                closest.id;

            updatePanel();

            flyTo(
                closest
            );

        }

    }
);


/* =========================================================
   MOUSE DRAG
========================================================= */

const activePointers = new Map();
let movedDuringDrag = false;
let pinchDistance = 0;
canvas.addEventListener('pointerdown', event => {
    if (event.pointerType === 'mouse' && event.button !== 0) return;
    cancelAnimationFrame(flightAnimation); document.getElementById("flight").classList.remove("active");
    if (!activePointers.size) movedDuringDrag = false;
    activePointers.set(event.pointerId, {x:event.clientX, y:event.clientY});
    canvas.setPointerCapture(event.pointerId);
    if (activePointers.size === 2) {
        const [a,b] = [...activePointers.values()];
        pinchDistance = Math.hypot(a.x-b.x, a.y-b.y);
    }
});
canvas.addEventListener('pointermove', event => {
    const previous = activePointers.get(event.pointerId);
    if (!previous) return;
    const next = {x:event.clientX, y:event.clientY};
    activePointers.set(event.pointerId, next);
    if (activePointers.size === 2) {
        const [a,b] = [...activePointers.values()];
        const distance = Math.hypot(a.x-b.x,a.y-b.y);
        if (pinchDistance > 0) cameraZoom = Math.max(.15, Math.min(15, cameraZoom * distance / pinchDistance));
        pinchDistance = distance; movedDuringDrag = true;
    } else {
        const dx = next.x-previous.x, dy = next.y-previous.y;
        if (Math.abs(dx)+Math.abs(dy)>2) movedDuringDrag = true;
        cameraPosition.x -= dx/cameraZoom; cameraPosition.y -= dy/cameraZoom;
    }
});
function releasePointer(event) { activePointers.delete(event.pointerId); pinchDistance = 0; }
canvas.addEventListener('pointerup', releasePointer);
canvas.addEventListener('pointercancel', releasePointer);
canvas.addEventListener('lostpointercapture', releasePointer);

// Collapsible controls leave room for the canvas on small and landscape screens.
document.body.classList.add('orbonix-simulation');
const objectPanel = document.querySelector('.panel');
objectPanel.id = 'orbonix-object-panel';
const panelToggle = document.createElement('button');
panelToggle.id = 'orbonix-panel-toggle'; panelToggle.type = 'button';
panelToggle.textContent = 'Object controls';
panelToggle.setAttribute('aria-controls', objectPanel.id);
objectPanel.hidden = window.matchMedia('(max-width: 800px)').matches;
panelToggle.setAttribute('aria-expanded', String(!objectPanel.hidden));
panelToggle.addEventListener('click', () => {
    objectPanel.hidden = !objectPanel.hidden;
    panelToggle.setAttribute('aria-expanded', String(!objectPanel.hidden));
});
document.body.appendChild(panelToggle);


/* =========================================================
   WHEEL ZOOM
========================================================= */

canvas.addEventListener(
    "wheel",
    e=>{

        e.preventDefault();


        const factor=e.deltaY>0 ? .88 : 1.14;
        setZoom(cameraZoom*factor);

    },
    {
        passive:false
    }
);


/* =========================================================
   SEARCH
========================================================= */

document
.getElementById("search")
.addEventListener(
    "input",
    function(){

        const query =
            this.value
            .toLowerCase()
            .trim();


        if(!query)
            return;


        const found =
            [
                ...planets,
                ...moons
            ]
            .find(
                object=>
                    object.name
                    .toLowerCase()
                    .includes(
                        query
                    )
            );


        if(found){

            selected=
                found;

            select.value=
                found.id;

            updatePanel();

            flyTo(
                found
            );

        }

    }
);


/* =========================================================
   BUTTONS
========================================================= */

document
.getElementById("fly")
.addEventListener(
    "click",
    ()=>{
        if(window.orbonix3D?.isActive()) window.orbonix3D.flyTo(selected.id);
        else flyTo(selected);
    }
);


document
.getElementById("system")
.addEventListener(
    "click",
    ()=>{
        if(window.orbonix3D?.isActive()) window.orbonix3D.systemView();
        else systemView();
    }
);


document.getElementById("explore").addEventListener("click",()=>{
    if(selected.id==="sun") return;
    const route=window.findOrbonixPage(selected.name+" Simulation");
    if(route) location.href=route.url;
});


document
.getElementById("scale")
.addEventListener(
    "click",
    ()=>{

        realScale = !realScale;
        cancelAnimationFrame(flightAnimation); cameraPosition.x=0; cameraPosition.y=0; cameraZoom=.85;


        document
            .getElementById(
                "scale"
            )
            .textContent =
            realScale
            ? "REAL DISTANCE"
            : "OBSERVATION SCALE";

    }
);


document
.getElementById("orbits")
.addEventListener(
    "click",
    ()=>{

        showOrbits=
            !showOrbits;


        document
            .getElementById(
                "orbits"
            )
            .textContent =
            showOrbits
            ? "ORBITS ON"
            : "ORBITS OFF";

    }
);


document
.getElementById("labels")
.addEventListener(
    "click",
    ()=>{

        showLabels=
            !showLabels;


        document
            .getElementById(
                "labels"
            )
            .textContent =
            showLabels
            ? "LABELS ON"
            : "LABELS OFF";

    }
);


document
.getElementById("belts")
.addEventListener(
    "click",
    ()=>{

        showBelts=
            !showBelts;


        document
            .getElementById(
                "belts"
            )
            .textContent =
            showBelts
            ? "BELTS ON"
            : "BELTS OFF";

    }
);




document.getElementById("trails").addEventListener("click",()=>{
    showTrails=!showTrails;
    document.getElementById("trails").textContent=showTrails?"TRAILS ON":"TRAILS OFF";
    if(!showTrails)orbitTrails.clear();
});

document.getElementById("focusMode").addEventListener("click",()=>{
    focusMode=!focusMode;
    document.body.classList.toggle("focus-mode",focusMode);
    document.getElementById("focusMode").textContent=focusMode?"EXIT FOCUS":"FOCUS MODE";
    if(focusMode) flyTo(selected); else systemView();
});

/* =========================================================
   SIZE COMPARISON
========================================================= */
const comparePanel=document.getElementById("comparePanel");
const compareCanvas=document.getElementById("compareCanvas");
const compareCtx=compareCanvas.getContext("2d");
function drawSizeComparison(){
    const dpr=Math.min(2,window.devicePixelRatio||1),rect=compareCanvas.getBoundingClientRect();
    compareCanvas.width=Math.max(600,Math.round(rect.width*dpr)); compareCanvas.height=Math.round(300*dpr); compareCtx.setTransform(dpr,0,0,dpr,0,0);
    const w=compareCanvas.width/dpr,h=300; compareCtx.clearRect(0,0,w,h);
    const worlds=planets.filter(p=>p.id!=="sun"&&p.type==="PLANET");
    const max=Math.max(...worlds.map(p=>p.radius)); const gap=w/(worlds.length+1);
    worlds.forEach((p,i)=>{const r=12+Math.log10(p.radius)/Math.log10(max)*42,x=gap*(i+1),y=125;compareCtx.fillStyle=p.color;compareCtx.beginPath();compareCtx.arc(x,y,r,0,Math.PI*2);compareCtx.fill();compareCtx.fillStyle="rgba(255,255,255,.9)";compareCtx.font="11px Arial";compareCtx.textAlign="center";compareCtx.fillText(p.name,x,205);compareCtx.fillStyle="rgba(255,255,255,.55)";compareCtx.font="9px Arial";compareCtx.fillText(Math.round(p.radius*2).toLocaleString()+" km",x,221);});
}
document.getElementById("compare").addEventListener("click",()=>{comparePanel.hidden=false;drawSizeComparison();});
document.getElementById("closeCompare").addEventListener("click",()=>{comparePanel.hidden=true;});
window.addEventListener("resize",()=>{if(!comparePanel.hidden)drawSizeComparison();});

/* =========================================================
   TIME
========================================================= */

function addDays(
    days
){

    simulationDate =
        new Date(
            simulationDate.getTime()
            +
            days*DAY
        );

    updateDate();
    if(typeof syncDateControls==="function") syncDateControls();

}


document
.getElementById("back100")
.addEventListener(
    "click",
    ()=>{
        addDays(-100);
    }
);


document
.getElementById("back1000")
.addEventListener(
    "click",
    ()=>{
        addDays(-1000);
    }
);


document
.getElementById("forward100")
.addEventListener(
    "click",
    ()=>{
        addDays(100);
    }
);


document
.getElementById("forward1000")
.addEventListener(
    "click",
    ()=>{
        addDays(1000);
    }
);


document
.getElementById("now")
.addEventListener(
    "click",
    ()=>{

        simulationDate=
            new Date();

        updateDate();
        syncDateControls();

    }
);


/* =========================================================
   PAUSE
========================================================= */

document
.getElementById("pause")
.addEventListener(
    "click",
    ()=>{

        running=
            !running;


        document
            .getElementById(
                "pause"
            )
            .textContent =
            running
            ? "Ⅱ"
            : "▶";

    }
);


/* =========================================================
   SPEED
========================================================= */

function updateSpeed(){

    document
        .getElementById(
            "speed"
        )
        .textContent =
        "TIME ×"+
        timeSpeed.toLocaleString();

}


function syncSpeedControls(){
    document.querySelectorAll("#speedPresets [data-speed]").forEach(button=>{
        button.classList.toggle("active", Number(button.dataset.speed)===timeSpeed);
    });
}

document.querySelectorAll("#speedPresets [data-speed]").forEach(button=>{
    button.addEventListener("click",()=>{
        timeSpeed=Number(button.dataset.speed);
        running=true;
        document.getElementById("pause").textContent="Ⅱ";
        updateSpeed();
        syncSpeedControls();
    });
});


window.addEventListener(
    "keydown",
    e=>{

        if(
            e.code==="Space"
        ){

            running=
                !running;

            document
                .getElementById(
                    "pause"
                )
                .textContent =
                running
                ? "Ⅱ"
                : "▶";

        }


        if(
            e.key==="+"
            ||
            e.key==="="
        ){

            timeSpeed=
                Math.min(
                    100000,
                    timeSpeed*10
                );

            updateSpeed();
            syncSpeedControls();

        }


        if(
            e.key==="-"
        ){

            timeSpeed=
                Math.max(
                    .1,
                    timeSpeed/10
                );

            updateSpeed();
            syncSpeedControls();

        }

    }
);


/* =========================================================
   DATE DISPLAY
========================================================= */

function updateDate(){

    document
        .getElementById(
            "simDate"
        )
        .textContent =
        simulationDate
        .toLocaleDateString(
            "en-GB",
            {
                day:"2-digit",
                month:"short",
                year:"numeric"
            }
        )
        .toUpperCase();

}

const datePicker=document.getElementById("datePicker");
const timeline=document.getElementById("timeline");
const timelineEpoch=new Date();
function dateInputValue(date){
    const y=date.getFullYear(),m=String(date.getMonth()+1).padStart(2,"0"),d=String(date.getDate()).padStart(2,"0");
    return y+"-"+m+"-"+d;
}
function syncDateControls(){
    datePicker.value=dateInputValue(simulationDate);
    const offset=Math.round((simulationDate-timelineEpoch)/DAY);
    timeline.value=String(Math.max(-3650,Math.min(3650,offset)));
}
datePicker.addEventListener("change",()=>{
    if(!datePicker.value)return;
    const parts=datePicker.value.split("-").map(Number);
    simulationDate=new Date(parts[0],parts[1]-1,parts[2],12,0,0);
    updateDate();syncDateControls();
});
timeline.addEventListener("input",()=>{
    simulationDate=new Date(timelineEpoch.getTime()+Number(timeline.value)*DAY);
    updateDate();syncDateControls();
});

updateDate();
syncDateControls();
updateSpeed();
syncSpeedControls();


/* =========================================================
   MAIN LOOP
========================================================= */

let previousTime =
    performance.now();
let lastControlSync=0;


function loop(){

    const now =
        performance.now();


    const delta =
        (now-previousTime)
        /1000;


    previousTime=
        now;


    /*
        Simulation time.

        1 real second =
        timeSpeed simulated days.
    */

    if(running){

        simulationDate =
            new Date(
                simulationDate.getTime()
                +
                delta*
                timeSpeed*
                DAY
            );

        updateDate();
        if(now-lastControlSync>250){
            syncDateControls();
            lastControlSync=now;
        }

    }


    draw();


    requestAnimationFrame(
        loop
    );

}


/* =========================================================
   DRAW
========================================================= */

function draw(){

    ctx.clearRect(
        0,
        0,
        width,
        height
    );


    /*
        Background
    */

    const gradient =
        ctx.createRadialGradient(
            width/2,
            height/2,
            0,
            width/2,
            height/2,
            Math.max(
                width,
                height
            )*.7
        );


    gradient.addColorStop(
        0,
        "#07101d"
    );

    gradient.addColorStop(
        .5,
        "#02050b"
    );

    gradient.addColorStop(
        1,
        "#000"
    );


    ctx.fillStyle=
        gradient;


    ctx.fillRect(
        0,
        0,
        width,
        height
    );


    drawStars();

    drawBelts();

    drawOrbits();
    updateTrails(performance.now());
    drawTrails();

    drawSun();

    drawPlanets();
    drawMoons();

}


/* =========================================================
   START
========================================================= */

loop();
