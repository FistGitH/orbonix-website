```javascript
/* =========================================================
   ORBONIX UNIVERSAL NAVIGATION
   Website: ORBONIX
========================================================= */


/* =========================================================
   BASE URL
========================================================= */

const ORBONIX_BASE = "https://orbonix.net";


/* =========================================================
   NAVIGATION STRUCTURE
========================================================= */

const ORBONIX_NAVIGATION = [

    /* =====================================================
       EXPLORING SPACE
    ===================================================== */

    {
        title: "Exploring Space",
        url: ORBONIX_BASE + "/exploring-space/",
        children: [

            /* =============================================
               DEEP SPACE
            ============================================= */

            {
                title: "Deep Space",
                url: ORBONIX_BASE + "/exploring-space/deep-space/",
                children: [

                    {
                        title: "Black Holes",
                        url: ORBONIX_BASE + "/exploring-space/deep-space/black-holes/"
                    },

                    {
                        title: "Cosmic Voids",
                        url: ORBONIX_BASE + "/exploring-space/deep-space/cosmic-voids/"
                    },

                    {
                        title: "Dark Energy",
                        url: ORBONIX_BASE + "/exploring-space/deep-space/dark-energy/"
                    },

                    {
                        title: "Dark Matter",
                        url: ORBONIX_BASE + "/exploring-space/deep-space/dark-matter/"
                    },

                    {
                        title: "Galaxies",
                        url: ORBONIX_BASE + "/exploring-space/deep-space/galaxies/"
                    },

                    {
                        title: "Nebulae",
                        url: ORBONIX_BASE + "/exploring-space/deep-space/nebulae/"
                    },

                    {
                        title: "Quasars",
                        url: ORBONIX_BASE + "/exploring-space/deep-space/quasars/"
                    },

                    {
                        title: "Rogue Planets",
                        url: ORBONIX_BASE + "/exploring-space/deep-space/rogue-planets/"
                    },

                    {
                        title: "Stars",
                        url: ORBONIX_BASE + "/exploring-space/deep-space/stars/"
                    },

                    {
                        title: "Wormholes",
                        url: ORBONIX_BASE + "/exploring-space/deep-space/wormholes/"
                    }

                ]
            },


            /* =============================================
               SOLAR SYSTEM
            ============================================= */

            {
                title: "Solar System",
                url: ORBONIX_BASE + "/exploring-space/solar-system/",
                children: [

                    {
                        title: "Sun",
                        url: ORBONIX_BASE + "/exploring-space/solar-system/sun/"
                    },

                    {
                        title: "Mercury",
                        url: ORBONIX_BASE + "/exploring-space/solar-system/mercury/"
                    },

                    {
                        title: "Venus",
                        url: ORBONIX_BASE + "/exploring-space/solar-system/venus/"
                    },

                    {
                        title: "Earth",
                        url: ORBONIX_BASE + "/exploring-space/solar-system/earth/"
                    },

                    {
                        title: "Mars",
                        url: ORBONIX_BASE + "/exploring-space/solar-system/mars/"
                    },

                    {
                        title: "Jupiter",
                        url: ORBONIX_BASE + "/exploring-space/solar-system/jupiter/"
                    },

                    {
                        title: "Saturn",
                        url: ORBONIX_BASE + "/exploring-space/solar-system/saturn/"
                    },

                    {
                        title: "Uranus",
                        url: ORBONIX_BASE + "/exploring-space/solar-system/uranus/"
                    },

                    {
                        title: "Neptune",
                        url: ORBONIX_BASE + "/exploring-space/solar-system/neptune/"
                    },

                    {
                        title: "Dwarf Planets",
                        url: ORBONIX_BASE + "/exploring-space/solar-system/dwarf-planets/"
                    },

                    {
                        title: "Asteroid Belt",
                        url: ORBONIX_BASE + "/exploring-space/solar-system/asteroid-belt/"
                    },

                    {
                        title: "Kuiper Belt",
                        url: ORBONIX_BASE + "/exploring-space/solar-system/kuiper-belt/"
                    },

                    {
                        title: "Oort Cloud",
                        url: ORBONIX_BASE + "/exploring-space/solar-system/oort-cloud/"
                    },

                    {
                        title: "Planet X",
                        url: ORBONIX_BASE + "/exploring-space/solar-system/planet-x/"
                    }

                ]
            },


            /* =============================================
               SPACE MISSIONS
            ============================================= */

            {
                title: "Space Missions",
                url: ORBONIX_BASE + "/exploring-space/space-missions/",
                children: [

                    {
                        title: "Apollo",
                        url: ORBONIX_BASE + "/exploring-space/space-missions/apollo/"
                    },

                    {
                        title: "Artemis",
                        url: ORBONIX_BASE + "/exploring-space/space-missions/artemis/"
                    },

                    {
                        title: "Cassini",
                        url: ORBONIX_BASE + "/exploring-space/space-missions/cassini/"
                    },

                    {
                        title: "James Webb",
                        url: ORBONIX_BASE + "/exploring-space/space-missions/james-webb/"
                    },

                    {
                        title: "New Horizons",
                        url: ORBONIX_BASE + "/exploring-space/space-missions/new-horizons/"
                    },

                    {
                        title: "Voyager",
                        url: ORBONIX_BASE + "/exploring-space/space-missions/voyager/"
                    }

                ]
            },


            /* =============================================
               QUIZZES
            ============================================= */

            {
                title: "Quizzes",
                url: ORBONIX_BASE + "/exploring-space/quizzes/",
                children: [

                    {
                        title: "Black Holes Quiz",
                        url: ORBONIX_BASE + "/exploring-space/quizzes/black-holes-quiz/"
                    },

                    {
                        title: "Comets Quiz",
                        url: ORBONIX_BASE + "/exploring-space/quizzes/comets-quiz/"
                    },

                    {
                        title: "Final Quiz",
                        url: ORBONIX_BASE + "/exploring-space/quizzes/final-quiz/"
                    },

                    {
                        title: "Galactic Quiz",
                        url: ORBONIX_BASE + "/exploring-space/quizzes/galactic-quiz/"
                    },

                    {
                        title: "Moons Quiz",
                        url: ORBONIX_BASE + "/exploring-space/quizzes/moons-quiz/"
                    },

                    {
                        title: "Planet Quiz",
                        url: ORBONIX_BASE + "/exploring-space/quizzes/planet-quiz/"
                    },

                    {
                        title: "Stars Quiz",
                        url: ORBONIX_BASE + "/exploring-space/quizzes/stars-quiz/"
                    },

                    {
                        title: "Sun Quiz",
                        url: ORBONIX_BASE + "/exploring-space/quizzes/sun-quiz/"
                    },

                    {
                        title: "Telescope Quiz",
                        url: ORBONIX_BASE + "/exploring-space/quizzes/telescope-quiz/"
                    }

                ]
            },


            /* =============================================
               TERMS
            ============================================= */

            {
                title: "Terms",
                url: ORBONIX_BASE + "/exploring-space/terms/",
                children: []
            }

        ]
    },


    /* =====================================================
       GALLERY
    ===================================================== */

    {
        title: "Gallery",
        url: ORBONIX_BASE + "/gallery/",
        children: []
    },


    /* =====================================================
       LATEST SPACE NEWS
    ===================================================== */

    {
        title: "Latest Space News",
        url: ORBONIX_BASE + "/latest-space-news/",
        children: []
    },


    /* =====================================================
       MORE ABOUT ORBONIX
    ===================================================== */

    {
        title: "More About Orbonix",
        url: ORBONIX_BASE + "/more-about-orbonix/",
        children: [

            {
                title: "Orbonix Fotos",
                url: ORBONIX_BASE + "/more-about-orbonix/orbonix-fotos/",
                children: []
            },

            {
                title: "Site Achievements",
                url: ORBONIX_BASE + "/more-about-orbonix/site-achievements/",
                children: []
            }

        ]
    },


    /* =====================================================
       SOLAR SYSTEM SIMULATION
    ===================================================== */

    {
        title: "Solar System Simulation",
        url: ORBONIX_BASE + "/solar-system-simulation/",
        children: []
    }

];


/* =========================================================
   CREATE NAVIGATION
========================================================= */

function createOrbonixNavigation(container) {

    if (!container) return;

    container.innerHTML = "";

    ORBONIX_NAVIGATION.forEach(item => {

        container.appendChild(
            createNavigationItem(item)
        );

    });

}


/* =========================================================
   CREATE ONE NAVIGATION ITEM
========================================================= */

function createNavigationItem(item) {

    const wrapper =
        document.createElement("div");

    wrapper.className =
        "orbonix-nav-item";


    /* =====================================================
       ROW
    ===================================================== */

    const row =
        document.createElement("div");

    row.className =
        "orbonix-nav-row";


    /* =====================================================
       PAGE LINK
    ===================================================== */

    const link =
        document.createElement("a");

    link.className =
        "orbonix-nav-link";

    link.href =
        item.url;

    link.textContent =
        item.title;


    row.appendChild(link);


    /* =====================================================
       SUBPAGES
    ===================================================== */

    if (
        item.children &&
        item.children.length > 0
    ) {

        const arrow =
            document.createElement("button");

        arrow.className =
            "orbonix-nav-arrow";

        arrow.type =
            "button";

        arrow.innerHTML =
            "▾";

        arrow.setAttribute(
            "aria-label",
            "Open submenu"
        );


        row.appendChild(arrow);


        /* =================================================
           SUBMENU
        ================================================= */

        const submenu =
            document.createElement("div");

        submenu.className =
            "orbonix-nav-submenu";


        item.children.forEach(child => {

            submenu.appendChild(
                createNavigationItem(child)
            );

        });


        wrapper.appendChild(row);

        wrapper.appendChild(submenu);


        /* =================================================
           OPEN / CLOSE
        ================================================= */

        arrow.addEventListener(
            "click",
            function(event) {

                event.preventDefault();

                event.stopPropagation();


                const isOpen =
                    wrapper.classList.contains(
                        "open"
                    );


                /*
                   Close siblings
                */

                const parent =
                    wrapper.parentElement;


                if (parent) {

                    parent
                        .querySelectorAll(
                            ":scope > .orbonix-nav-item.open"
                        )
                        .forEach(openItem => {

                            if (
                                openItem !== wrapper
                            ) {

                                openItem.classList.remove(
                                    "open"
                                );

                            }

                        });

                }


                /*
                   Toggle
                */

                wrapper.classList.toggle(
                    "open",
                    !isOpen
                );


                /*
                   Rotate arrow
                */

                arrow.textContent =
                    !isOpen ? "▴" : "▾";

            }
        );

    }

    else {

        wrapper.appendChild(row);

    }


    return wrapper;

}


/* =========================================================
   INITIALIZE
========================================================= */

document.addEventListener(
    "DOMContentLoaded",
    function() {

        const navigation =
            document.querySelector(
                "#orbonix-navigation"
            );


        if (navigation) {

            createOrbonixNavigation(
                navigation
            );

        }

    }
);


/* =========================================================
   CLOSE ALL MENUS
========================================================= */

function closeOrbonixNavigation() {

    document
        .querySelectorAll(
            "#orbonix-navigation .orbonix-nav-item.open"
        )
        .forEach(item => {

            item.classList.remove(
                "open"
            );


            const arrow =
                item.querySelector(
                    ":scope > .orbonix-nav-row > .orbonix-nav-arrow"
                );


            if (arrow) {

                arrow.textContent =
                    "▾";

            }

        });

}


/* =========================================================
   CLICK OUTSIDE
========================================================= */

document.addEventListener(
    "click",
    function(event) {

        const navigation =
            document.querySelector(
                "#orbonix-navigation"
            );


        if (
            navigation &&
            !navigation.contains(event.target)
        ) {

            closeOrbonixNavigation();

        }

    }
);
```
