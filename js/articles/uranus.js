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
   DISABLE PARALLAX ON TOUCH DEVICES
========================================= */

if (
    window.matchMedia(
        "(pointer: coarse)"
    ).matches
) {

    stars.style.transform = "none";

    smallStars.style.transform = "none";

}
