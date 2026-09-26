(function () {



/* =====================================
   CREATE STARS
===================================== */

function createStars(
    container,
    amount,
    type
) {

    for (
        let i = 0;
        i < amount;
        i++
    ) {

        const star =
            document.createElement(
                "div"
            );


        star.classList.add(
            "star"
        );


        if (
            type === "small"
        ) {

            star.classList.add(
                "small"
            );

        }


        if (
            type === "bright" &&
            Math.random() > 0.82
        ) {

            star.classList.add(
                "bright"
            );

        }


        star.style.left =
            Math.random()
            * 100
            + "%";


        star.style.top =
            Math.random()
            * 100
            + "%";


        star.style.opacity =
            (
                Math.random()
                * 0.65
                + 0.25
            ).toFixed(2);


        container.appendChild(
            star
        );

    }

}


createStars(
    document.getElementById(
        "starsBack"
    ),
    150,
    "small"
);


createStars(
    document.getElementById(
        "starsMid"
    ),
    110,
    "normal"
);


createStars(
    document.getElementById(
        "starsFront"
    ),
    55,
    "bright"
);


/* =====================================
   ELEMENTS
===================================== */

const hero =
    document.getElementById(
        "hero"
    );


const back =
    document.getElementById(
        "starsBack"
    );


const mid =
    document.getElementById(
        "starsMid"
    );


const front =
    document.getElementById(
        "starsFront"
    );


const nebula =
    document.getElementById(
        "nebula"
    );


const logo =
    document.getElementById(
        "logo"
    );


/* =====================================
   PARALLAX VALUES
===================================== */

let targetX = 0;
let targetY = 0;

let currentX = 0;
let currentY = 0;


/* =====================================
   DESKTOP MOUSE
===================================== */

hero.addEventListener(
    "mousemove",
    function(event) {

        const rect =
            hero.getBoundingClientRect();


        const x =
            (
                event.clientX -
                rect.left
            )
            /
            rect.width
            -
            0.5;


        const y =
            (
                event.clientY -
                rect.top
            )
            /
            rect.height
            -
            0.5;


        targetX = x;

        targetY = y;

    }
);


/* =====================================
   DESKTOP RESET
===================================== */

hero.addEventListener(
    "mouseleave",
    function() {

        targetX = 0;

        targetY = 0;

    }
);


/* =====================================
   PHONE / TABLET MOTION
===================================== */

let deviceX = 0;
let deviceY = 0;


function handleOrientation(
    event
) {

    let gamma =
        event.gamma || 0;

    let beta =
        event.beta || 0;


    gamma =
        Math.max(
            -30,
            Math.min(
                30,
                gamma
            )
        );


    beta =
        Math.max(
            -30,
            Math.min(
                30,
                beta - 45
            )
        );


    deviceX =
        gamma / 30;


    deviceY =
        beta / 30;


    if (
        window.matchMedia(
            "(hover: none)"
        ).matches
    ) {

        targetX =
            deviceX;

        targetY =
            deviceY;

    }

}


/* =====================================
   REQUEST SENSOR ACCESS
===================================== */

function enableMotion() {

    if (
        typeof DeviceOrientationEvent !==
        "undefined" &&
        typeof DeviceOrientationEvent.requestPermission ===
        "function"
    ) {

        DeviceOrientationEvent
            .requestPermission()
            .then(
                function(permission) {

                    if (
                        permission ===
                        "granted"
                    ) {

                        window.addEventListener(
                            "deviceorientation",
                            handleOrientation
                        );

                    }

                }
            )
            .catch(
                function() {

                    /* fallback */

                }
            );

    } else {

        window.addEventListener(
            "deviceorientation",
            handleOrientation
        );

    }

}


/* =====================================
   ENABLE SENSOR AFTER TOUCH
===================================== */

document.addEventListener(
    "touchstart",
    function() {

        enableMotion();

    },
    {
        once: true
    }
);


/* =====================================
   ANIMATION
===================================== */

function animate() {


    currentX +=
        (
            targetX -
            currentX
        )
        * 0.035;


    currentY +=
        (
            targetY -
            currentY
        )
        * 0.035;


    /* FAR */

    back.style.transform =
        `translate3d(
            ${currentX * 25}px,
            ${currentY * 25}px,
            0
        )`;


    /* MIDDLE */

    mid.style.transform =
        `translate3d(
            ${currentX * 50}px,
            ${currentY * 50}px,
            0
        )`;


    /* FRONT */

    front.style.transform =
        `translate3d(
            ${currentX * 80}px,
            ${currentY * 80}px,
            0
        )`;


    /* NEBULA */

    nebula.style.transform =
        `translate(
            calc(
                -50% +
                ${currentX * 100}px
            ),
            calc(
                -50% +
                ${currentY * 100}px
            )
        )`;


    /* LOGO */

    logo.style.transform =
        `translate3d(
            ${currentX * 12}px,
            ${currentY * 12}px,
            0
        )`;


    requestAnimationFrame(
        animate
    );

}


animate();


/* =====================================
   BUTTONS
===================================== */

const buttons =
    document.querySelectorAll(
        ".orbonix-button"
    );


buttons.forEach(
    function(button) {

        button.addEventListener(
            "click",
            function() {


                /* =================================
                   RELATIVE URL

                   Example:
                   /exploring-space

                   becomes automatically:

                   https://sites.google.com/view/kosmolearn/exploring-space

                   And later, after moving to another
                   domain:

                   https://yourdomain.com/exploring-space
                ================================= */

                const page =
                    button.dataset.page;





                /* PRESS */

                button.classList.add(
                    "clicked"
                );


                setTimeout(
                    function() {

                        button.classList.remove(
                            "clicked"
                        );

                    },
                    180
                );


                /* RIPPLE */

                const ripple =
                    document.createElement(
                        "div"
                    );


                ripple.classList.add(
                    "ripple"
                );


                button.appendChild(
                    ripple
                );


                setTimeout(
                    function() {

                        ripple.remove();

                    },
                    800
                );


                /* ORBIT */

                const orbit =
                    document.createElement(
                        "div"
                    );


                orbit.classList.add(
                    "orbit-ring"
                );


                button.appendChild(
                    orbit
                );


                setTimeout(
                    function() {

                        orbit.remove();

                    },
                    1000
                );


                /* PARTICLES */

                for (
                    let i = 0;
                    i < 16;
                    i++
                ) {


                    const particle =
                        document.createElement(
                            "div"
                        );


                    particle.classList.add(
                        "energy"
                    );


                    const angle =
                        Math.random()
                        *
                        Math.PI
                        *
                        2;


                    const distance =
                        45 +
                        Math.random()
                        * 55;


                    const x =
                        Math.cos(angle)
                        *
                        distance;


                    const y =
                        Math.sin(angle)
                        *
                        distance;


                    particle.style.setProperty(
                        "--x",
                        x + "px"
                    );


                    particle.style.setProperty(
                        "--y",
                        y + "px"
                    );


                    particle.style.left =
                        (
                            50 +
                            (
                                Math.random()
                                * 20
                                - 10
                            )
                        )
                        + "%";


                    particle.style.top =
                        (
                            50 +
                            (
                                Math.random()
                                * 20
                                - 10
                            )
                        )
                        + "%";


                    button.appendChild(
                        particle
                    );


                    setTimeout(
                        function() {

                            particle.remove();

                        },
                        900
                    );

                }


                /* =================================
                   NAVIGATION
                ================================= */



            }

        );

    }
);



})();

(function () {


/* =========================================
   SCROLL ANIMATION
========================================= */

const newsSection =
    document.querySelector(
        ".orbonix-news"
    );


const newsObserver =
    new IntersectionObserver(

        (entries) => {

            entries.forEach(
                entry => {

                    if (
                        entry.isIntersecting
                    ) {

                        newsSection
                            .classList
                            .add("visible");

                    }

                }
            );

        },

        {
            threshold: 0.15
        }

    );


newsObserver.observe(
    newsSection
);


/* =========================================
   MOUSE PARALLAX
========================================= */

const newsStars =
    document.querySelector(
        ".news-stars"
    );

const newsCards =
    document.querySelectorAll(
        ".news-card"
    );


document.addEventListener(
    "mousemove",

    (event) => {

        const x =
            event.clientX /
            window.innerWidth -
            0.5;

        const y =
            event.clientY /
            window.innerHeight -
            0.5;


        if (newsStars) {

            newsStars.style.transform =
                `translate(
                    ${x * 20}px,
                    ${y * 20}px
                )`;

        }


        newsCards.forEach(
            (card, index) => {

                const image =
                    card.querySelector(
                        ".news-image"
                    );

                if (!image) return;


                const depth =
                    8 + index * 5;


                image.style.transform =
                    `scale(1.08)
                     translate(
                        ${x * depth}px,
                        ${y * depth}px
                     )`;

            }
        );

    }
);


/* =========================================
   MOBILE TOUCH
========================================= */

document.addEventListener(
    "touchmove",

    (event) => {

        const touch =
            event.touches[0];

        if (!touch) return;


        const x =
            touch.clientX /
            window.innerWidth -
            0.5;

        const y =
            touch.clientY /
            window.innerHeight -
            0.5;


        if (newsStars) {

            newsStars.style.transform =
                `translate(
                    ${x * 12}px,
                    ${y * 12}px
                )`;

        }

    },

    {
        passive: true
    }
);


})();

(function () {


/* =========================================
   SCROLL REVEAL
========================================= */

const quizSection =
    document.querySelector(
        ".orbonix-quiz"
    );


const quizObserver =
    new IntersectionObserver(

        (entries) => {

            entries.forEach(
                entry => {

                    if (
                        entry.isIntersecting
                    ) {

                        quizSection
                            .classList
                            .add("visible");

                    }

                }
            );

        },

        {
            threshold: 0.15
        }

    );


quizObserver.observe(
    quizSection
);


/* =========================================
   PARALLAX
========================================= */

const quizStars =
    document.querySelector(
        ".quiz-stars"
    );


const quizStarsSmall =
    document.querySelector(
        ".quiz-stars-small"
    );


const quizPlanet =
    document.querySelector(
        ".quiz-planet"
    );


const quizOrbit =
    document.querySelector(
        ".quiz-orbit"
    );


document.addEventListener(
    "mousemove",

    (event) => {

        const x =
            event.clientX /
            window.innerWidth -
            0.5;

        const y =
            event.clientY /
            window.innerHeight -
            0.5;


        /* stars */

        if (quizStars) {

            quizStars.style.transform =
                `translate(
                    ${x * 20}px,
                    ${y * 20}px
                )`;

        }


        /* small stars */

        if (quizStarsSmall) {

            quizStarsSmall.style.transform =
                `translate(
                    ${x * -12}px,
                    ${y * -12}px
                )`;

        }


        /* planet */

        if (quizPlanet) {

            quizPlanet.style.transform =
                `translate(
                    calc(-50% + ${x * 15}px),
                    calc(-50% + ${y * 15}px)
                )`;

        }


        /* orbit */

        if (quizOrbit) {

            quizOrbit.style.transform =
                `translate(
                    calc(-50% + ${x * 20}px),
                    calc(-50% + ${y * 20}px)
                )
                rotate(-18deg)`;

        }

    }
);


/* =========================================
   MOBILE TOUCH
========================================= */

document.addEventListener(
    "touchmove",

    (event) => {

        const touch =
            event.touches[0];

        if (!touch) return;


        const x =
            touch.clientX /
            window.innerWidth -
            0.5;

        const y =
            touch.clientY /
            window.innerHeight -
            0.5;


        if (quizStars) {

            quizStars.style.transform =
                `translate(
                    ${x * 12}px,
                    ${y * 12}px
                )`;

        }


        if (quizPlanet) {

            quizPlanet.style.transform =
                `translate(
                    calc(-50% + ${x * 10}px),
                    calc(-50% + ${y * 10}px)
                )`;

        }

    },

    {
        passive: true
    }

);


})();

(function () {


/* =========================================
   SCROLL ANIMATION
========================================= */

const observationSection =
    document.querySelector(
        ".observation-section"
    );

const observationObserver =
    new IntersectionObserver(

        (entries) => {

            entries.forEach(entry => {

                if (entry.isIntersecting) {

                    observationSection
                        .classList
                        .add("visible");

                }

            });

        },

        {
            threshold: 0.15
        }

    );

observationObserver.observe(
    observationSection
);


/* =========================================
   MOUSE PARALLAX
========================================= */

const stars =
    document.querySelector(
        ".observation-stars"
    );

const smallStars =
    document.querySelector(
        ".observation-stars-small"
    );


document.addEventListener(
    "mousemove",

    (event) => {

        const x =
            event.clientX /
            window.innerWidth -
            0.5;

        const y =
            event.clientY /
            window.innerHeight -
            0.5;


        if (stars) {

            stars.style.transform =
                `translate(
                    ${x * 18}px,
                    ${y * 18}px
                )`;

        }


        if (smallStars) {

            smallStars.style.transform =
                `translate(
                    ${x * -10}px,
                    ${y * -10}px
                )`;

        }

    }
);


})();

(function () {



/* =========================================
   SCROLL REVEAL
========================================= */

const missionsSection =
    document.querySelector(
        ".missions-section"
    );


const missionsObserver =
    new IntersectionObserver(

        (entries) => {

            entries.forEach(entry => {

                if (entry.isIntersecting) {

                    missionsSection
                        .classList
                        .add("visible");

                }

            });

        },

        {
            threshold: 0.12
        }

    );


missionsObserver.observe(
    missionsSection
);


/* =========================================
   STAR PARALLAX
========================================= */

const missionStars =
    document.querySelector(
        ".missions-stars"
    );


const missionSmallStars =
    document.querySelector(
        ".missions-stars-small"
    );


document.addEventListener(

    "mousemove",

    (event) => {

        const x =
            event.clientX /
            window.innerWidth -
            .5;


        const y =
            event.clientY /
            window.innerHeight -
            .5;


        if (missionStars) {

            missionStars.style.transform =
                `translate(
                    ${x * 20}px,
                    ${y * 20}px
                )`;

        }


        if (missionSmallStars) {

            missionSmallStars.style.transform =
                `translate(
                    ${x * -12}px,
                    ${y * -12}px
                )`;

        }

    }

);


})();

(function () {


/* =========================
   SCROLL ANIMATION
========================= */

const section =
    document.querySelector(".orbonix-discover");

const observer =
    new IntersectionObserver(
        (entries) => {

            entries.forEach(entry => {

                if (entry.isIntersecting) {

                    section.classList.add("visible");

                }

            });

        },
        {
            threshold: 0.15
        }
    );

observer.observe(section);


/* =========================
   MOUSE PARALLAX
========================= */

const cards =
    document.querySelectorAll(".space-card");

const stars =
    document.querySelectorAll(".orbonix-stars");


document.addEventListener(
    "mousemove",
    (event) => {

        const x =
            event.clientX /
            window.innerWidth -
            0.5;

        const y =
            event.clientY /
            window.innerHeight -
            0.5;


        /* Stars */

        stars.forEach(layer => {

            const speed =
                Number(
                    layer.dataset.speed
                );

            layer.style.transform =
                `translate(
                    ${x * speed}px,
                    ${y * speed}px
                )`;

        });


        /* Cards */

        cards.forEach(card => {

            const depth =
                Number(
                    card.dataset.depth
                );

            const image =
                card.querySelector(
                    ".card-image"
                );

            if (!image) return;

            image.style.transform =
                `scale(1.08)
                 translate(
                    ${x * depth}px,
                    ${y * depth}px
                 )`;

        });

    }
);


/* =========================
   TOUCH / MOBILE
========================= */

document.addEventListener(
    "touchmove",
    (event) => {

        const touch =
            event.touches[0];

        if (!touch) return;

        const x =
            touch.clientX /
            window.innerWidth -
            0.5;

        const y =
            touch.clientY /
            window.innerHeight -
            0.5;

        stars.forEach(layer => {

            const speed =
                Number(
                    layer.dataset.speed
                );

            layer.style.transform =
                `translate(
                    ${x * speed}px,
                    ${y * speed}px
                )`;

        });

    },
    {
        passive: true
    }
);


})();
