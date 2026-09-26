/* =========================================
   STAR PARALLAX
========================================= */

const stars =
document.querySelector(".stars");

const smallStars =
document.querySelector(".stars-small");


document.addEventListener(
"mousemove",
function(event) {

    const x =
        event.clientX /
        window.innerWidth -
        0.5;

    const y =
        event.clientY /
        window.innerHeight -
        0.5;


    stars.style.transform =
        `translate(
            ${x * 20}px,
            ${y * 20}px
        )`;


    smallStars.style.transform =
        `translate(
            ${x * -12}px,
            ${y * -12}px
        )`;

});


/* =========================================
   GENERIC PARTICLE SIMULATION
========================================= */

function createSimulation(
    canvasId,
    amount,
    mode
) {

    const canvas =
        document.getElementById(canvasId);

    const ctx =
        canvas.getContext("2d");

    let width;
    let height;

    let particles = [];


    function resize() {

        const rect =
            canvas.getBoundingClientRect();

        width =
            rect.width;

        height =
            rect.height;

        const dpr =
            window.devicePixelRatio || 1;

        canvas.width =
            width * dpr;

        canvas.height =
            height * dpr;

        ctx.setTransform(
            dpr,
            0,
            0,
            dpr,
            0,
            0
        );

    }


    function random(min,max) {

        return Math.random() *
            (max - min) + min;

    }


    function createParticles() {

        particles = [];


        for(
            let i = 0;
            i < amount;
            i++
        ) {

            if(
                mode ===
                "asteroid"
            ) {

                particles.push({

                    angle:
                        Math.random() *
                        Math.PI * 2,

                    radius:
                        random(
                            Math.min(width,height) * .22,
                            Math.min(width,height) * .43
                        ),

                    speed:
                        random(.0005,.0018),

                    size:
                        random(1,3.5),

                    alpha:
                        random(.35,.95),

                    offset:
                        random(
                            0,
                            Math.PI * 2
                        )

                });

            }


            if(
                mode ===
                "kuiper"
            ) {

                particles.push({

                    angle:
                        Math.random() *
                        Math.PI * 2,

                    radius:
                        random(
                            Math.min(width,height) * .25,
                            Math.min(width,height) * .48
                        ),

                    speed:
                        random(.00015,.00055),

                    size:
                        random(1,3),

                    alpha:
                        random(.3,.9),

                    offset:
                        random(
                            0,
                            Math.PI * 2
                        )

                });

            }


            if(
                mode ===
                "oort"
            ) {

                particles.push({

                    angle:
                        Math.random() *
                        Math.PI * 2,

                    phi:
                        Math.acos(
                            random(-1,1)
                        ),

                    radius:
                        random(
                            Math.min(width,height) * .25,
                            Math.min(width,height) * .49
                        ),

                    speed:
                        random(.00008,.00025),

                    size:
                        random(.7,2.5),

                    alpha:
                        random(.25,.85),

                    offset:
                        random(
                            0,
                            Math.PI * 2
                        )

                });

            }

        }

    }


    function drawSun() {

        const cx =
            width / 2;

        const cy =
            height / 2;

        const radius =
            Math.min(width,height) * .07;


        const gradient =
            ctx.createRadialGradient(
                cx,
                cy,
                0,
                cx,
                cy,
                radius * 3
            );


        gradient.addColorStop(
            0,
            "rgba(255,245,180,1)"
        );

        gradient.addColorStop(
            .25,
            "rgba(255,190,60,.95)"
        );

        gradient.addColorStop(
            .6,
            "rgba(255,100,20,.25)"
        );

        gradient.addColorStop(
            1,
            "rgba(255,80,0,0)"
        );


        ctx.beginPath();

        ctx.fillStyle =
            gradient;

        ctx.arc(
            cx,
            cy,
            radius * 3,
            0,
            Math.PI * 2
        );

        ctx.fill();


        ctx.beginPath();

        ctx.fillStyle =
            "#ffb52e";

        ctx.arc(
            cx,
            cy,
            radius,
            0,
            Math.PI * 2
        );

        ctx.fill();

    }


    function drawAsteroid(
        particle,
        time
    ) {

        const cx =
            width / 2;

        const cy =
            height / 2;


        particle.angle +=
            particle.speed;


        const wobble =
            Math.sin(
                time * .001 +
                particle.offset
            ) * 5;


        const r =
            particle.radius +
            wobble;


        const x =
            cx +
            Math.cos(
                particle.angle
            ) * r;


        const y =
            cy +
            Math.sin(
                particle.angle
            ) * r * .48;


        ctx.beginPath();

        ctx.fillStyle =
            `rgba(
                180,
                190,
                215,
                ${particle.alpha}
            )`;

        ctx.arc(
            x,
            y,
            particle.size,
            0,
            Math.PI * 2
        );

        ctx.fill();

    }


    function drawKuiper(
        particle,
        time
    ) {

        const cx =
            width / 2;

        const cy =
            height / 2;


        particle.angle +=
            particle.speed;


        const wobble =
            Math.sin(
                time * .0005 +
                particle.offset
            ) * 8;


        const r =
            particle.radius +
            wobble;


        const x =
            cx +
            Math.cos(
                particle.angle
            ) * r;


        const y =
            cy +
            Math.sin(
                particle.angle
            ) * r * .45;


        ctx.beginPath();

        ctx.fillStyle =
            `rgba(
                130,
                180,
                255,
                ${particle.alpha}
            )`;

        ctx.arc(
            x,
            y,
            particle.size,
            0,
            Math.PI * 2
        );

        ctx.fill();

    }


    function drawOort(
        particle,
        time
    ) {

        const cx =
            width / 2;

        const cy =
            height / 2;


        particle.angle +=
            particle.speed;


        const x3 =
            Math.sin(
                particle.phi
            ) *
            Math.cos(
                particle.angle
            );


        const y3 =
            Math.cos(
                particle.phi
            );


        const z3 =
            Math.sin(
                particle.phi
            ) *
            Math.sin(
                particle.angle
            );


        const r =
            particle.radius;


        const perspective =
            0.72 +
            z3 * .35;


        const x =
            cx +
            x3 *
            r *
            perspective;


        const y =
            cy +
            y3 *
            r *
            perspective;


        const size =
            particle.size *
            perspective;


        ctx.beginPath();

        ctx.fillStyle =
            `rgba(
                150,
                170,
                255,
                ${particle.alpha *
                perspective}
            )`;

        ctx.arc(
            x,
            y,
            size,
            0,
            Math.PI * 2
        );

        ctx.fill();

    }


    function draw(time) {

        ctx.clearRect(
            0,
            0,
            width,
            height
        );


        const bg =
            ctx.createRadialGradient(
                width/2,
                height/2,
                0,
                width/2,
                height/2,
                Math.max(width,height)*.7
            );


        bg.addColorStop(
            0,
            "rgba(50,60,140,.10)"
        );

        bg.addColorStop(
            1,
            "rgba(0,0,0,0)"
        );


        ctx.fillStyle =
            bg;

        ctx.fillRect(
            0,
            0,
            width,
            height
        );


        drawSun();


        particles.forEach(
            particle => {

                if(
                    mode ===
                    "asteroid"
                ) {

                    drawAsteroid(
                        particle,
                        time
                    );

                }


                if(
                    mode ===
                    "kuiper"
                ) {

                    drawKuiper(
                        particle,
                        time
                    );

                }


                if(
                    mode ===
                    "oort"
                ) {

                    drawOort(
                        particle,
                        time
                    );

                }

            }
        );


        requestAnimationFrame(draw);

    }


    window.addEventListener(
        "resize",
        function() {

            resize();

            createParticles();

        }
    );


    resize();

    createParticles();

    requestAnimationFrame(draw);

}


/* =========================================
   START SIMULATIONS
========================================= */

createSimulation(
    "asteroidCanvas",
    150,
    "asteroid"
);


createSimulation(
    "kuiperCanvas",
    180,
    "kuiper"
);


createSimulation(
    "oortCanvas",
    330,
    "oort"
);


/* =========================================
   SCROLL REVEAL
========================================= */

const elements =
document.querySelectorAll(
    ".planet-card, .dwarf-section, .sim-card, .info-card, .sun-card"
);


const observer =
new IntersectionObserver(
    entries => {

        entries.forEach(
            entry => {

                if(
                    entry.isIntersecting
                ) {

                    entry.target.animate(
                        [
                            {
                                opacity: 0,

                                transform:
                                    "translateY(25px)"
                            },

                            {
                                opacity: 1,

                                transform:
                                    "translateY(0)"
                            }
                        ],
                        {
                            duration: 700,

                            easing:
                                "cubic-bezier(.2,.8,.2,1)",

                            fill:
                                "forwards"
                        }
                    );


                    observer.unobserve(
                        entry.target
                    );

                }

            }
        );

    },
    {
        threshold: .12
    }
);


elements.forEach(
    element => {

        element.style.opacity =
            "0";

        observer.observe(
            element
        );

    }
);
