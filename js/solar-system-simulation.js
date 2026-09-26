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
    "radius": 615,
    "period": 202000,
    "color": "#ad7865",
    "moons": 1
  }
];


/* =========================================================
   MAJOR MOONS
========================================================= */

const moons = []; // Moons belong to the individual planetary-system pages.


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

let realScale =
    true;


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
        "MOONS":[]

    };


    planets.forEach(p=>{

        if(p.type==="STAR")
            categories.STAR.push(p);

        else if(
            p.type==="DWARF PLANET"
        )
            categories["DWARF PLANETS"].push(p);

        else
            categories.PLANETS.push(p);

    });


    moons.forEach(m=>{
        categories.MOONS.push(m);
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


/* =========================================================
   PANEL
========================================================= */

function updatePanel(){

    const o =
        selected;

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

    const angle =
        (
            days /
            planet.period
        )
        *
        Math.PI*2
        +
        planet.id.length;


    return {

        x:
            planet.distance
            *
            Math.cos(angle),

        y:
            planet.distance
            *
            Math.sin(angle)

    };

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

    const moonAU =
        moon.distance /
        AU;


    return {

        x:
            parentPosition.x
            +
            moonAU *
            Math.cos(angle),

        y:
            parentPosition.y
            +
            moonAU *
            Math.sin(angle)

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


                const x =
                    planet.distance
                    *
                    Math.cos(angle);


                const y =
                    planet.distance
                    *
                    Math.sin(angle);


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


/* =========================================================
   DRAW PLANETS
========================================================= */

function drawPlanets(){

    planets.forEach(
        planet=>{

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
                radius>2
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
 const target=projectPosition(...Object.values(orbitalPosition(object))),start={...cameraPosition},zoom=cameraZoom,began=performance.now();
 const flight=document.getElementById('flight');flight.classList.add('active');flight.textContent='APPROACHING '+object.name.toUpperCase();
 function animate(t){const progress=Math.min(1,(t-began)/1200),e=progress*progress*(3-2*progress);cameraPosition.x=start.x+(target.x-start.x)*e;cameraPosition.y=start.y+(target.y-start.y)*e;cameraZoom=zoom+((object.id==='sun'?.85:3)-zoom)*e;
 if(progress<1)flightAnimation=requestAnimationFrame(animate);else{flight.classList.remove('active');if(object.id!=='sun'){const route=window.findOrbonixPage(object.name+' Simulation');if(route)location.href=route.url;}}}
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


        const factor =
            e.deltaY>0
            ? .88
            : 1.14;


        cameraZoom *=
            factor;


        cameraZoom =
            Math.max(
                .15,
                Math.min(
                    15,
                    cameraZoom
                )
            );

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
        flyTo(selected);
    }
);


document
.getElementById("system")
.addEventListener(
    "click",
    ()=>{
        systemView();
    }
);


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

updateDate();

updateSpeed();


/* =========================================================
   MAIN LOOP
========================================================= */

let previousTime =
    performance.now();


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

    drawSun();

    drawPlanets();
    // Satellites are displayed only inside their planetary systems.

}


/* =========================================================
   START
========================================================= */

loop();
