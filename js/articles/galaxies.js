/* =========================================
   STAR PARALLAX
========================================= */

const galaxyStars =
document.querySelector(".stars");

const galaxySmallStars =
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


    galaxyStars.style.transform =
        `translate(
            ${x * 20}px,
            ${y * 20}px
        )`;


    galaxySmallStars.style.transform =
        `translate(
            ${x * -12}px,
            ${y * -12}px
        )`;

});
