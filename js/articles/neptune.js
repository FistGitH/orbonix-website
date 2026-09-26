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

    }
);


/* =========================================
   NEPTUNE PARALLAX
========================================= */

const neptune =
document.querySelector(".neptune-center");


document.addEventListener(
    "mousemove",
    function(event) {

        /* Don't apply movement on small screens */

        if (window.innerWidth <= 800) {

            neptune.style.transform =
                "translate(-50%, -50%)";

            return;

        }


        const x =
            event.clientX /
            window.innerWidth -
            0.5;

        const y =
            event.clientY /
            window.innerHeight -
            0.5;


        neptune.style.transform =
            `translate(
                calc(-50% + ${x * 10}px),
                calc(-50% + ${y * 10}px)
            )`;

    }
);


/* =========================================
   RESET PARALLAX ON MOBILE
========================================= */

window.addEventListener(
    "resize",
    function() {

        if (window.innerWidth <= 800) {

            neptune.style.transform =
                "translate(-50%, -50%)";

        }

    }
);
