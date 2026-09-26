/* =================================================
   STAR PARALLAX
================================================= */

const stars =
document.querySelector(".stars");

const smallStars =
document.querySelector(".stars-small");


document.addEventListener(
"mousemove",

function(event){

    const x =
        event.clientX /
        window.innerWidth -
        .5;

    const y =
        event.clientY /
        window.innerHeight -
        .5;


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


/* =================================================
   SCROLL REVEAL
================================================= */

const elements =
document.querySelectorAll(
    ".intro, .achievement, .timeline-item, .future, .nav-button"
);


const observer =
new IntersectionObserver(

    (entries)=>{

        entries.forEach(
            entry=>{

                if(
                    entry.isIntersecting
                ){

                    entry.target.style.opacity =
                        "1";

                    entry.target.style.transform =
                        "translateY(0)";

                }

            }
        );

    },

    {
        threshold:.12
    }

);


elements.forEach(
    element=>{

        element.style.opacity =
            "0";

        element.style.transform =
            "translateY(35px)";

        element.style.transition =
            "opacity .8s ease, transform .8s ease";

        observer.observe(element);

    }
);
