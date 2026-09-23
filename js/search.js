/* =========================================================
   ORBONIX SEARCH + AUTO NAVIGATION
   Website: https://orbonix.net
========================================================= */


/* =========================================================
   BASE URL
========================================================= */

const ORBONIX_BASE = "https://orbonix.net";


/* =========================================================
   ALL ORBONIX PAGES
========================================================= */

const ORBONIX_PAGES = [

    /* =========================
       MAIN
    ========================= */

    {
        title: "Home",
        url: `${ORBONIX_BASE}/`,
        parent: null,
        category: "Main",
        keywords: "home orbonix space astronomy universe",
        description: "The main ORBONIX website."
    },

    {
        title: "Exploring Space",
        url: `${ORBONIX_BASE}/Exploring-Space/`,
        parent: null,
        category: "Main",
        keywords: "exploring space astronomy universe cosmos",
        description: "Explore space and the universe."
    },

    {
        title: "Gallery",
        url: `${ORBONIX_BASE}/Gallery/`,
        parent: null,
        category: "Main",
        keywords: "gallery photos images telescope observations",
        description: "Explore the ORBONIX gallery."
    },

    {
        title: "Latest Space News",
        url: `${ORBONIX_BASE}/Latest-Space-News/`,
        parent: null,
        category: "Main",
        keywords: "latest space news astronomy nasa esa",
        description: "Latest space news and discoveries."
    },

    {
        title: "More About Orbonix",
        url: `${ORBONIX_BASE}/More-About-Orbonix/`,
        parent: null,
        category: "Main",
        keywords: "about orbonix project website",
        description: "Learn more about ORBONIX."
    },

    {
        title: "Solar System Simulation",
        url: `${ORBONIX_BASE}/Solar-System-Simulation/`,
        parent: null,
        category: "Main",
        keywords: "solar system simulation planets orbit",
        description: "Interactive Solar System simulation."
    },


    /* =========================
       EXPLORING SPACE
    ========================= */

    {
        title: "Deep Space",
        url: `${ORBONIX_BASE}/Exploring-Space/Deep-Space/`,
        parent: "Exploring Space",
        category: "Exploring Space",
        keywords: "deep space strange objects universe",
        description: "Explore deep space."
    },

    {
        title: "Solar System",
        url: `${ORBONIX_BASE}/Exploring-Space/Solar-System/`,
        parent: "Exploring Space",
        category: "Exploring Space",
        keywords: "solar system planets moons sun",
        description: "Explore the Solar System."
    },

    {
        title: "Space Missions",
        url: `${ORBONIX_BASE}/Exploring-Space/Space-Missions/`,
        parent: "Exploring Space",
        category: "Exploring Space",
        keywords: "space missions nasa esa spacecraft",
        description: "Explore space missions."
    },

    {
        title: "Quizzes",
        url: `${ORBONIX_BASE}/Exploring-Space/Quizes/`,
        parent: "Exploring Space",
        category: "Exploring Space",
        keywords: "quizzes tests astronomy space",
        description: "Test your space knowledge."
    },

    {
        title: "Terms",
        url: `${ORBONIX_BASE}/Exploring-Space/Terms/`,
        parent: "Exploring Space",
        category: "Exploring Space",
        keywords: "terms dictionary astronomy definitions",
        description: "Space and astronomy terms."
    },


    /* =========================
       SOLAR SYSTEM
    ========================= */

    {
        title: "Sun",
        url: `${ORBONIX_BASE}/Exploring-Space/Solar-System/Sun/`,
        parent: "Solar System",
        category: "Solar System",
        keywords: "sun star solar flare sunspots corona",
        description: "Explore the Sun."
    },

    {
        title: "Mercury",
        url: `${ORBONIX_BASE}/Exploring-Space/Solar-System/Mercury/`,
        parent: "Solar System",
        category: "Planets",
        keywords: "mercury planet smallest closest sun",
        description: "Explore Mercury."
    },

    {
        title: "Venus",
        url: `${ORBONIX_BASE}/Exploring-Space/Solar-System/Venus/`,
        parent: "Solar System",
        category: "Planets",
        keywords: "venus planet hottest atmosphere",
        description: "Explore Venus."
    },

    {
        title: "Earth",
        url: `${ORBONIX_BASE}/Exploring-Space/Solar-System/Earth/`,
        parent: "Solar System",
        category: "Planets",
        keywords: "earth planet world life ocean",
        description: "Explore Earth."
    },

    {
        title: "Mars",
        url: `${ORBONIX_BASE}/Exploring-Space/Solar-System/Mars/`,
        parent: "Solar System",
        category: "Planets",
        keywords: "mars red planet rover phobos deimos",
        description: "Explore Mars."
    },

    {
        title: "Phobos",
        url: `${ORBONIX_BASE}/Exploring-Space/Solar-System/Mars/Phobos/`,
        parent: "Mars",
        category: "Mars",
        keywords: "phobos mars moon",
        description: "Explore Phobos."
    },

    {
        title: "Deimos",
        url: `${ORBONIX_BASE}/Exploring-Space/Solar-System/Mars/Deimos/`,
        parent: "Mars",
        category: "Mars",
        keywords: "deimos mars moon",
        description: "Explore Deimos."
    },

    {
        title: "Jupiter",
        url: `${ORBONIX_BASE}/Exploring-Space/Solar-System/Jupiter/`,
        parent: "Solar System",
        category: "Planets",
        keywords: "jupiter gas giant great red spot moons",
        description: "Explore Jupiter."
    },

    {
        title: "Saturn",
        url: `${ORBONIX_BASE}/Exploring-Space/Solar-System/Saturn/`,
        parent: "Solar System",
        category: "Planets",
        keywords: "saturn rings titan gas giant",
        description: "Explore Saturn."
    },

    {
        title: "Uranus",
        url: `${ORBONIX_BASE}/Exploring-Space/Solar-System/Uranus/`,
        parent: "Solar System",
        category: "Planets",
        keywords: "uranus ice giant rings",
        description: "Explore Uranus."
    },

    {
        title: "Neptune",
        url: `${ORBONIX_BASE}/Exploring-Space/Solar-System/Neptune/`,
        parent: "Solar System",
        category: "Planets",
        keywords: "neptune ice giant blue planet",
        description: "Explore Neptune."
    },

    {
        title: "Dwarf Planets",
        url: `${ORBONIX_BASE}/Exploring-Space/Solar-System/Dwarf-Planets/`,
        parent: "Solar System",
        category: "Solar System",
        keywords: "dwarf planets pluto ceres eris",
        description: "Explore dwarf planets."
    },

    {
        title: "Asteroid Belt",
        url: `${ORBONIX_BASE}/Exploring-Space/Solar-System/Asteroid-Belt/`,
        parent: "Solar System",
        category: "Solar System",
        keywords: "asteroid belt asteroids mars jupiter",
        description: "Explore the Asteroid Belt."
    },

    {
        title: "Kuiper Belt",
        url: `${ORBONIX_BASE}/Exploring-Space/Solar-System/Kuiper-Belt/`,
        parent: "Solar System",
        category: "Solar System",
        keywords: "kuiper belt icy objects",
        description: "Explore the Kuiper Belt."
    },

    {
        title: "Oort Cloud",
        url: `${ORBONIX_BASE}/Exploring-Space/Solar-System/Oort-Cloud/`,
        parent: "Solar System",
        category: "Solar System",
        keywords: "oort cloud comets outer solar system",
        description: "Explore the Oort Cloud."
    },

    {
        title: "Planet X",
        url: `${ORBONIX_BASE}/Exploring-Space/Solar-System/Planet-X/`,
        parent: "Solar System",
        category: "Solar System",
        keywords: "planet x planet nine hypothetical",
        description: "Explore Planet X."
    },


    /* =========================
       DEEP SPACE
    ========================= */

    {
        title: "Black Holes",
        url: `${ORBONIX_BASE}/Exploring-Space/Deep-Space/Blackholes/`,
        parent: "Deep Space",
        category: "Deep Space",
        keywords: "black holes event horizon singularity gravity",
        description: "Explore black holes."
    },

    {
        title: "Cosmic Voids",
        url: `${ORBONIX_BASE}/Exploring-Space/Deep-Space/Cosmic-Voids/`,
        parent: "Deep Space",
        category: "Deep Space",
        keywords: "cosmic voids empty universe galaxies",
        description: "Explore cosmic voids."
    },

    {
        title: "Dark Energy",
        url: `${ORBONIX_BASE}/Exploring-Space/Deep-Space/Dark-Energy/`,
        parent: "Deep Space",
        category: "Deep Space",
        keywords: "dark energy expansion cosmology",
        description: "Explore dark energy."
    },

    {
        title: "Dark Matter",
        url: `${ORBONIX_BASE}/Exploring-Space/Deep-Space/Dark-Matter/`,
        parent: "Deep Space",
        category: "Deep Space",
        keywords: "dark matter gravity galaxies",
        description: "Explore dark matter."
    },

    {
        title: "Galaxies",
        url: `${ORBONIX_BASE}/Exploring-Space/Deep-Space/Galaxies/`,
        parent: "Deep Space",
        category: "Deep Space",
        keywords: "galaxies milky way andromeda spiral",
        description: "Explore galaxies."
    },

    {
        title: "Nebulae",
        url: `${ORBONIX_BASE}/Exploring-Space/Deep-Space/Nebulae/`,
        parent: "Deep Space",
        category: "Deep Space",
        keywords: "nebulae gas dust stars",
        description: "Explore nebulae."
    },

    {
        title: "Quasars",
        url: `${ORBONIX_BASE}/Exploring-Space/Deep-Space/Quasars/`,
        parent: "Deep Space",
        category: "Deep Space",
        keywords: "quasars black holes active galaxy",
        description: "Explore quasars."
    },

    {
        title: "Rogue Planets",
        url: `${ORBONIX_BASE}/Exploring-Space/Deep-Space/Rogue-Planets/`,
        parent: "Deep Space",
        category: "Deep Space",
        keywords: "rogue planets free floating planets",
        description: "Explore rogue planets."
    },

    {
        title: "Stars",
        url: `${ORBONIX_BASE}/Exploring-Space/Deep-Space/Stars/`,
        parent: "Deep Space",
        category: "Deep Space",
        keywords: "stars stellar evolution supernova neutron star",
        description: "Explore stars."
    },

    {
        title: "Wormholes",
        url: `${ORBONIX_BASE}/Exploring-Space/Deep-Space/Wormholes/`,
        parent: "Deep Space",
        category: "Deep Space",
        keywords: "wormholes spacetime einstein rosen bridge",
        description: "Explore wormholes."
    },


    /* =========================
       SPACE MISSIONS
    ========================= */

    {
        title: "Apollo",
        url: `${ORBONIX_BASE}/Exploring-Space/Space-Missions/Apollo/`,
        parent: "Space Missions",
        category: "Space Missions",
        keywords: "apollo moon nasa apollo 11",
        description: "Explore Apollo."
    },

    {
        title: "Artemis",
        url: `${ORBONIX_BASE}/Exploring-Space/Space-Missions/Artemis/`,
        parent: "Space Missions",
        category: "Space Missions",
        keywords: "artemis moon nasa",
        description: "Explore Artemis."
    },

    {
        title: "Cassini",
        url: `${ORBONIX_BASE}/Exploring-Space/Space-Missions/Cassini/`,
        parent: "Space Missions",
        category: "Space Missions",
        keywords: "cassini saturn titan nasa esa",
        description: "Explore Cassini."
    },

    {
        title: "James Webb Space Telescope",
        url: `${ORBONIX_BASE}/Exploring-Space/Space-Missions/James-Webb/`,
        parent: "Space Missions",
        category: "Space Missions",
        keywords: "james webb jwst telescope nasa esa",
        description: "Explore JWST."
    },

    {
        title: "New Horizons",
        url: `${ORBONIX_BASE}/Exploring-Space/Space-Missions/New-Horizonts/`,
        parent: "Space Missions",
        category: "Space Missions",
        keywords: "new horizons pluto kuiper belt nasa",
        description: "Explore New Horizons."
    },

    {
        title: "Voyager",
        url: `${ORBONIX_BASE}/Exploring-Space/Space-Missions/Voyager/`,
        parent: "Space Missions",
        category: "Space Missions",
        keywords: "voyager voyager 1 voyager 2 interstellar",
        description: "Explore Voyager."
    },


    /* =========================
       QUIZZES
    ========================= */

    {
        title: "Black Holes Quiz",
        url: `${ORBONIX_BASE}/Exploring-Space/Quizes/Blackholes-Quiz/`,
        parent: "Quizzes",
        category: "Quiz",
        keywords: "black holes quiz",
        description: "Black holes quiz."
    },

    {
        title: "Comets Quiz",
        url: `${ORBONIX_BASE}/Exploring-Space/Quizes/Comets-Quiz/`,
        parent: "Quizzes",
        category: "Quiz",
        keywords: "comets quiz",
        description: "Comets quiz."
    },

    {
        title: "Final Quiz",
        url: `${ORBONIX_BASE}/Exploring-Space/Quizes/Final-Quiz/`,
        parent: "Quizzes",
        category: "Quiz",
        keywords: "final mega quiz ultimate quiz",
        description: "The ultimate ORBONIX quiz."
    },

    {
        title: "Galactic Quiz",
        url: `${ORBONIX_BASE}/Exploring-Space/Quizes/Galactic-Quiz/`,
        parent: "Quizzes",
        category: "Quiz",
        keywords: "galactic galaxy quiz",
        description: "Galactic quiz."
    },

    {
        title: "Moons Quiz",
        url: `${ORBONIX_BASE}/Exploring-Space/Quizes/Moons-Quiz/`,
        parent: "Quizzes",
        category: "Quiz",
        keywords: "moons quiz",
        description: "Moons quiz."
    },

    {
        title: "Planet Quiz",
        url: `${ORBONIX_BASE}/Exploring-Space/Quizes/Planet-Quiz/`,
        parent: "Quizzes",
        category: "Quiz",
        keywords: "planet quiz",
        description: "Planet quiz."
    },

    {
        title: "Stars Quiz",
        url: `${ORBONIX_BASE}/Exploring-Space/Quizes/Stars-Quiz/`,
        parent: "Quizzes",
        category: "Quiz",
        keywords: "stars quiz",
        description: "Stars quiz."
    },

    {
        title: "Sun Quiz",
        url: `${ORBONIX_BASE}/Exploring-Space/Quizes/Sun-Quiz/`,
        parent: "Quizzes",
        category: "Quiz",
        keywords: "sun quiz solar quiz",
        description: "Sun quiz."
    },

    {
        title: "Telescope Quiz",
        url: `${ORBONIX_BASE}/Exploring-Space/Quizes/Telescope-Quiz/`,
        parent: "Quizzes",
        category: "Quiz",
        keywords: "telescope quiz astronomy",
        description: "Telescope quiz."
    },


    /* =========================
       ORBONIX
    ========================= */

    {
        title: "Orbonix Fotos and Telescope",
        url: `${ORBONIX_BASE}/More-About-Orbonix/Orbonix-fotos-and-telescope/`,
        parent: "More About Orbonix",
        category: "Orbonix",
        keywords: "orbonix fotos telescope photos",
        description: "ORBONIX telescope photos."
    },

    {
        title: "Site Achievements",
        url: `${ORBONIX_BASE}/More-About-Orbonix/Site-Achivments/`,
        parent: "More About Orbonix",
        category: "Orbonix",
        keywords: "orbonix achievements milestones",
        description: "ORBONIX achievements."
    }
,

    // Existing article pages share the same navigation and search catalog.
    {
        "title": "Brown Dwarfs",
        "url": `${ORBONIX_BASE}/Exploring-Space/Deep-Space/Stars/Brown-Dwarfs/`,
        "parent": "Stars",
        "category": "Stars",
        "keywords": "brown dwarfs",
        "description": "Explore Brown Dwarfs."
    },

    {
        "title": "Giant Stars",
        "url": `${ORBONIX_BASE}/Exploring-Space/Deep-Space/Stars/Giant-Stars/`,
        "parent": "Stars",
        "category": "Stars",
        "keywords": "giant stars",
        "description": "Explore Giant Stars."
    },

    {
        "title": "Magnetars",
        "url": `${ORBONIX_BASE}/Exploring-Space/Deep-Space/Stars/Magnetars/`,
        "parent": "Stars",
        "category": "Stars",
        "keywords": "magnetars",
        "description": "Explore Magnetars."
    },

    {
        "title": "Pulsars",
        "url": `${ORBONIX_BASE}/Exploring-Space/Deep-Space/Stars/Pulsar/`,
        "parent": "Stars",
        "category": "Stars",
        "keywords": "pulsars",
        "description": "Explore Pulsars."
    },

    {
        "title": "Strange Stars",
        "url": `${ORBONIX_BASE}/Exploring-Space/Deep-Space/Stars/Strange-Stars/`,
        "parent": "Stars",
        "category": "Stars",
        "keywords": "strange stars",
        "description": "Explore Strange Stars."
    },

    {
        "title": "Supernovae",
        "url": `${ORBONIX_BASE}/Exploring-Space/Deep-Space/Stars/Supernovae/`,
        "parent": "Stars",
        "category": "Stars",
        "keywords": "supernovae",
        "description": "Explore Supernovae."
    },

    {
        "title": "The Brightest Star",
        "url": `${ORBONIX_BASE}/Exploring-Space/Deep-Space/Stars/The-Brightest-Star/`,
        "parent": "Stars",
        "category": "Stars",
        "keywords": "the brightest star",
        "description": "Explore The Brightest Star."
    },

    {
        "title": "The Largest Known Star",
        "url": `${ORBONIX_BASE}/Exploring-Space/Deep-Space/Stars/The-largest-Known-Star/`,
        "parent": "Stars",
        "category": "Stars",
        "keywords": "the largest known star",
        "description": "Explore The Largest Known Star."
    },

    {
        "title": "White Dwarfs",
        "url": `${ORBONIX_BASE}/Exploring-Space/Deep-Space/Stars/White-Dwarfs/`,
        "parent": "Stars",
        "category": "Stars",
        "keywords": "white dwarfs",
        "description": "Explore White Dwarfs."
    },

    {
        "title": "Ceres",
        "url": `${ORBONIX_BASE}/Exploring-Space/Solar-System/Dwarf-Planets/Ceres/`,
        "parent": "Dwarf Planets",
        "category": "Dwarf Planets",
        "keywords": "ceres",
        "description": "Explore Ceres."
    },

    {
        "title": "Dysnomia",
        "url": `${ORBONIX_BASE}/Exploring-Space/Solar-System/Dwarf-Planets/Eris/Dysmonia/`,
        "parent": "Eris",
        "category": "Eris",
        "keywords": "dysnomia",
        "description": "Explore Dysnomia."
    },

    {
        "title": "Eris",
        "url": `${ORBONIX_BASE}/Exploring-Space/Solar-System/Dwarf-Planets/Eris/`,
        "parent": "Dwarf Planets",
        "category": "Dwarf Planets",
        "keywords": "eris",
        "description": "Explore Eris."
    },

    {
        "title": "Gonggong",
        "url": `${ORBONIX_BASE}/Exploring-Space/Solar-System/Dwarf-Planets/Gonggong/`,
        "parent": "Dwarf Planets",
        "category": "Dwarf Planets",
        "keywords": "gonggong",
        "description": "Explore Gonggong."
    },

    {
        "title": "Xiangliu",
        "url": `${ORBONIX_BASE}/Exploring-Space/Solar-System/Dwarf-Planets/Gonggong/Xiangliu/`,
        "parent": "Gonggong",
        "category": "Gonggong",
        "keywords": "xiangliu",
        "description": "Explore Xiangliu."
    },

    {
        "title": "Hiʻiaka",
        "url": `${ORBONIX_BASE}/Exploring-Space/Solar-System/Dwarf-Planets/Haumea/Hiʻiaka/`,
        "parent": "Haumea",
        "category": "Haumea",
        "keywords": "hiʻiaka",
        "description": "Explore Hiʻiaka."
    },

    {
        "title": "Haumea",
        "url": `${ORBONIX_BASE}/Exploring-Space/Solar-System/Dwarf-Planets/Haumea/`,
        "parent": "Dwarf Planets",
        "category": "Dwarf Planets",
        "keywords": "haumea",
        "description": "Explore Haumea."
    },

    {
        "title": "Namaka",
        "url": `${ORBONIX_BASE}/Exploring-Space/Solar-System/Dwarf-Planets/Haumea/Namaka/`,
        "parent": "Haumea",
        "category": "Haumea",
        "keywords": "namaka",
        "description": "Explore Namaka."
    },

    {
        "title": "Makemake",
        "url": `${ORBONIX_BASE}/Exploring-Space/Solar-System/Dwarf-Planets/Makemake/`,
        "parent": "Dwarf Planets",
        "category": "Dwarf Planets",
        "keywords": "makemake",
        "description": "Explore Makemake."
    },

    {
        "title": "MK2",
        "url": `${ORBONIX_BASE}/Exploring-Space/Solar-System/Dwarf-Planets/Makemake/MK2/`,
        "parent": "Makemake",
        "category": "Makemake",
        "keywords": "mk2",
        "description": "Explore MK2."
    },

    {
        "title": "Orcus",
        "url": `${ORBONIX_BASE}/Exploring-Space/Solar-System/Dwarf-Planets/Orcus/`,
        "parent": "Dwarf Planets",
        "category": "Dwarf Planets",
        "keywords": "orcus",
        "description": "Explore Orcus."
    },

    {
        "title": "Vanth",
        "url": `${ORBONIX_BASE}/Exploring-Space/Solar-System/Dwarf-Planets/Orcus/Vanth/`,
        "parent": "Orcus",
        "category": "Orcus",
        "keywords": "vanth",
        "description": "Explore Vanth."
    },

    {
        "title": "Charon",
        "url": `${ORBONIX_BASE}/Exploring-Space/Solar-System/Dwarf-Planets/Pluto/Charon/`,
        "parent": "Pluto",
        "category": "Pluto",
        "keywords": "charon",
        "description": "Explore Charon."
    },

    {
        "title": "Hydra",
        "url": `${ORBONIX_BASE}/Exploring-Space/Solar-System/Dwarf-Planets/Pluto/Hydra/`,
        "parent": "Pluto",
        "category": "Pluto",
        "keywords": "hydra",
        "description": "Explore Hydra."
    },

    {
        "title": "Pluto",
        "url": `${ORBONIX_BASE}/Exploring-Space/Solar-System/Dwarf-Planets/Pluto/`,
        "parent": "Dwarf Planets",
        "category": "Dwarf Planets",
        "keywords": "pluto",
        "description": "Explore Pluto."
    },

    {
        "title": "Kerberos",
        "url": `${ORBONIX_BASE}/Exploring-Space/Solar-System/Dwarf-Planets/Pluto/Kerberos/`,
        "parent": "Pluto",
        "category": "Pluto",
        "keywords": "kerberos",
        "description": "Explore Kerberos."
    },

    {
        "title": "Nix",
        "url": `${ORBONIX_BASE}/Exploring-Space/Solar-System/Dwarf-Planets/Pluto/Nix/`,
        "parent": "Pluto",
        "category": "Pluto",
        "keywords": "nix",
        "description": "Explore Nix."
    },

    {
        "title": "Styx",
        "url": `${ORBONIX_BASE}/Exploring-Space/Solar-System/Dwarf-Planets/Pluto/Styx/`,
        "parent": "Pluto",
        "category": "Pluto",
        "keywords": "styx",
        "description": "Explore Styx."
    },

    {
        "title": "Moon",
        "url": `${ORBONIX_BASE}/Exploring-Space/Solar-System/Earth/Moon/`,
        "parent": "Earth",
        "category": "Earth",
        "keywords": "moon",
        "description": "Explore Moon."
    },

    {
        "title": "Callisto",
        "url": `${ORBONIX_BASE}/Exploring-Space/Solar-System/Jupiter/Callisto/`,
        "parent": "Jupiter",
        "category": "Jupiter",
        "keywords": "callisto",
        "description": "Explore Callisto."
    },

    {
        "title": "Europa",
        "url": `${ORBONIX_BASE}/Exploring-Space/Solar-System/Jupiter/Europa/`,
        "parent": "Jupiter",
        "category": "Jupiter",
        "keywords": "europa",
        "description": "Explore Europa."
    },

    {
        "title": "Ganymede",
        "url": `${ORBONIX_BASE}/Exploring-Space/Solar-System/Jupiter/Ganymede/`,
        "parent": "Jupiter",
        "category": "Jupiter",
        "keywords": "ganymede",
        "description": "Explore Ganymede."
    },

    {
        "title": "Io",
        "url": `${ORBONIX_BASE}/Exploring-Space/Solar-System/Jupiter/Io/`,
        "parent": "Jupiter",
        "category": "Jupiter",
        "keywords": "io",
        "description": "Explore Io."
    },

    {
        "title": "Galatea",
        "url": `${ORBONIX_BASE}/Exploring-Space/Solar-System/Neptune/Galatea/`,
        "parent": "Neptune",
        "category": "Neptune",
        "keywords": "galatea",
        "description": "Explore Galatea."
    },

    {
        "title": "Larissa",
        "url": `${ORBONIX_BASE}/Exploring-Space/Solar-System/Neptune/Larissa/`,
        "parent": "Neptune",
        "category": "Neptune",
        "keywords": "larissa",
        "description": "Explore Larissa."
    },

    {
        "title": "Nereid",
        "url": `${ORBONIX_BASE}/Exploring-Space/Solar-System/Neptune/Nereid/`,
        "parent": "Neptune",
        "category": "Neptune",
        "keywords": "nereid",
        "description": "Explore Nereid."
    },

    {
        "title": "Proteus",
        "url": `${ORBONIX_BASE}/Exploring-Space/Solar-System/Neptune/Proteus/`,
        "parent": "Neptune",
        "category": "Neptune",
        "keywords": "proteus",
        "description": "Explore Proteus."
    },

    {
        "title": "Triton",
        "url": `${ORBONIX_BASE}/Exploring-Space/Solar-System/Neptune/Triton/`,
        "parent": "Neptune",
        "category": "Neptune",
        "keywords": "triton",
        "description": "Explore Triton."
    },

    {
        "title": "Dione",
        "url": `${ORBONIX_BASE}/Exploring-Space/Solar-System/Saturn/Dione/`,
        "parent": "Saturn",
        "category": "Saturn",
        "keywords": "dione",
        "description": "Explore Dione."
    },

    {
        "title": "Enceladus",
        "url": `${ORBONIX_BASE}/Exploring-Space/Solar-System/Saturn/Enceladus/`,
        "parent": "Saturn",
        "category": "Saturn",
        "keywords": "enceladus",
        "description": "Explore Enceladus."
    },

    {
        "title": "Iapetus",
        "url": `${ORBONIX_BASE}/Exploring-Space/Solar-System/Saturn/Iapetus/`,
        "parent": "Saturn",
        "category": "Saturn",
        "keywords": "iapetus",
        "description": "Explore Iapetus."
    },

    {
        "title": "Mimas",
        "url": `${ORBONIX_BASE}/Exploring-Space/Solar-System/Saturn/Mimas/`,
        "parent": "Saturn",
        "category": "Saturn",
        "keywords": "mimas",
        "description": "Explore Mimas."
    },

    {
        "title": "Rhea",
        "url": `${ORBONIX_BASE}/Exploring-Space/Solar-System/Saturn/Rhea/`,
        "parent": "Saturn",
        "category": "Saturn",
        "keywords": "rhea",
        "description": "Explore Rhea."
    },

    {
        "title": "Tethys",
        "url": `${ORBONIX_BASE}/Exploring-Space/Solar-System/Saturn/Tethys/`,
        "parent": "Saturn",
        "category": "Saturn",
        "keywords": "tethys",
        "description": "Explore Tethys."
    },

    {
        "title": "Titan",
        "url": `${ORBONIX_BASE}/Exploring-Space/Solar-System/Saturn/Titan/`,
        "parent": "Saturn",
        "category": "Saturn",
        "keywords": "titan",
        "description": "Explore Titan."
    },

    {
        "title": "Convective Zone",
        "url": `${ORBONIX_BASE}/Exploring-Space/Solar-System/Sun/Convective-Zone/`,
        "parent": "Sun",
        "category": "Sun",
        "keywords": "convective zone",
        "description": "Explore Convective Zone."
    },

    {
        "title": "Core",
        "url": `${ORBONIX_BASE}/Exploring-Space/Solar-System/Sun/Core/`,
        "parent": "Sun",
        "category": "Sun",
        "keywords": "core",
        "description": "Explore Core."
    },

    {
        "title": "Photosphere",
        "url": `${ORBONIX_BASE}/Exploring-Space/Solar-System/Sun/Photosphere/`,
        "parent": "Sun",
        "category": "Sun",
        "keywords": "photosphere",
        "description": "Explore Photosphere."
    },

    {
        "title": "Radiative Zone",
        "url": `${ORBONIX_BASE}/Exploring-Space/Solar-System/Sun/Rediative-Zone/`,
        "parent": "Sun",
        "category": "Sun",
        "keywords": "radiative zone",
        "description": "Explore Radiative Zone."
    },

    {
        "title": "Ariel",
        "url": `${ORBONIX_BASE}/Exploring-Space/Solar-System/Uranus/Ariel/`,
        "parent": "Uranus",
        "category": "Uranus",
        "keywords": "ariel",
        "description": "Explore Ariel."
    },

    {
        "title": "Miranda",
        "url": `${ORBONIX_BASE}/Exploring-Space/Solar-System/Uranus/Miranda/`,
        "parent": "Uranus",
        "category": "Uranus",
        "keywords": "miranda",
        "description": "Explore Miranda."
    },

    {
        "title": "Oberon",
        "url": `${ORBONIX_BASE}/Exploring-Space/Solar-System/Uranus/Oberon/`,
        "parent": "Uranus",
        "category": "Uranus",
        "keywords": "oberon",
        "description": "Explore Oberon."
    },

    {
        "title": "Titania",
        "url": `${ORBONIX_BASE}/Exploring-Space/Solar-System/Uranus/Titania/`,
        "parent": "Uranus",
        "category": "Uranus",
        "keywords": "titania",
        "description": "Explore Titania."
    },

    {
        "title": "Umbriel",
        "url": `${ORBONIX_BASE}/Exploring-Space/Solar-System/Uranus/Umbriel/`,
        "parent": "Uranus",
        "category": "Uranus",
        "keywords": "umbriel",
        "description": "Explore Umbriel."
    },

    {
        "title": "Search",
        "url": `${ORBONIX_BASE}/search/`,
        "parent": null,
        "category": "Main",
        "keywords": "search",
        "description": "Explore Search."
    }

];


/* =========================================================
   NORMALIZE
========================================================= */

function normalizeSearchText(text) {

    return String(text || "")
        .toLowerCase()
        .normalize("NFD")
        .replace(/[\u0300-\u036f]/g, "")
        .replace(/[^a-z0-9\s]/g, " ")
        .replace(/\s+/g, " ")
        .trim();

}


/* =========================================================
   LEVENSHTEIN
========================================================= */

function levenshtein(a, b) {

    if (a === b) return 0;
    if (!a.length) return b.length;
    if (!b.length) return a.length;

    const matrix = [];

    for (let i = 0; i <= b.length; i++) {
        matrix[i] = [i];
    }

    for (let j = 0; j <= a.length; j++) {
        matrix[0][j] = j;
    }

    for (let i = 1; i <= b.length; i++) {

        for (let j = 1; j <= a.length; j++) {

            if (b[j - 1] === a[j - 1]) {

                matrix[i][j] =
                    matrix[i - 1][j - 1];

            } else {

                matrix[i][j] = Math.min(
                    matrix[i - 1][j] + 1,
                    matrix[i][j - 1] + 1,
                    matrix[i - 1][j - 1] + 1
                );

            }

        }

    }

    return matrix[b.length][a.length];

}


/* =========================================================
   SEARCH SCORE
========================================================= */

function scoreSearchResult(page, query) {

    const q = normalizeSearchText(query);

    if (!q) return 0;

    const words = q.split(" ");

    const title = normalizeSearchText(page.title);
    const category = normalizeSearchText(page.category);
    const keywords = normalizeSearchText(page.keywords);
    const description = normalizeSearchText(page.description);

    let score = 0;

    if (title === q) score += 3000;

    if (title.includes(q)) score += 1500;

    if (category.includes(q)) score += 700;

    if (keywords.includes(q)) score += 1000;

    if (description.includes(q)) score += 300;

    for (const word of words) {

        if (word.length < 2) continue;

        if (title.includes(word)) score += 500;

        if (category.includes(word)) score += 250;

        if (keywords.includes(word)) score += 300;

        if (description.includes(word)) score += 100;

    }

    const titleWords = title.split(" ");

    for (const word of words) {

        if (word.length < 4) continue;

        for (const titleWord of titleWords) {

            if (titleWord.length < 4) continue;

            const distance =
                levenshtein(word, titleWord);

            if (distance === 1) {
                score += 180;
            }

            if (
                distance === 2 &&
                word.length >= 6
            ) {
                score += 80;
            }

        }

    }

    return score;

}


/* =========================================================
   SEARCH
========================================================= */

function searchOrbonix(query) {

    const normalized =
        normalizeSearchText(query);

    if (!normalized) {
        return [];
    }

    return ORBONIX_PAGES
        .map(page => ({
            ...page,
            score: scoreSearchResult(
                page,
                normalized
            )
        }))
        .filter(page => page.score > 0)
        .sort((a, b) => b.score - a.score)
        .slice(0, 15);

}


/* =========================================================
   FIND PAGE
========================================================= */

function findOrbonixPage(name) {

    const normalized =
        normalizeSearchText(name);

    if (!normalized) {
        return null;
    }

    const exact =
        ORBONIX_PAGES.find(page =>
            normalizeSearchText(page.title)
            === normalized
        );

    if (exact) {
        return exact;
    }

    const results =
        searchOrbonix(name);

    return results.length
        ? results[0]
        : null;

}


/* =========================================================
   ESCAPE HTML
========================================================= */

function escapeHTML(text) {

    return String(text || "")
        .replace(/&/g, "&amp;")
        .replace(/</g, "&lt;")
        .replace(/>/g, "&gt;")
        .replace(/"/g, "&quot;")
        .replace(/'/g, "&#039;");

}


/* =========================================================
   AUTO NAVIGATION CSS
========================================================= */

function injectOrbonixNavigationCSS() {

    if (document.getElementById(
        "orbonix-navigation-style"
    )) {
        return;
    }

    const style =
        document.createElement("style");

    style.id =
        "orbonix-navigation-style";

    style.textContent = `

        #orbonix-auto-navigation {
            width: 100%;
            display: flex;
            align-items: center;
            gap: 6px;
            padding: 10px 18px;
            box-sizing: border-box;
            position: relative;
            z-index: 99999;
            font-family: Arial, sans-serif;
        }

        .orbonix-nav-item {
            position: relative;
        }

        .orbonix-nav-main {
            display: flex;
            align-items: center;
            gap: 6px;
        }

        .orbonix-nav-link,
        .orbonix-nav-arrow {
            border: none;
            background: transparent;
            color: inherit;
            text-decoration: none;
            cursor: pointer;
            font: inherit;
            padding: 8px 10px;
            border-radius: 8px;
            transition:
                background .2s ease,
                transform .2s ease;
        }

        .orbonix-nav-link:hover,
        .orbonix-nav-arrow:hover {
            background: rgba(127,127,127,.15);
        }

        .orbonix-nav-arrow {
            padding-left: 3px;
            padding-right: 3px;
            font-size: 11px;
            transition: transform .2s ease;
        }

        .orbonix-nav-arrow.open {
            transform: rotate(180deg);
        }

        .orbonix-nav-dropdown {
            position: absolute;
            top: calc(100% + 5px);
            left: 0;
            min-width: 220px;
            padding: 7px;
            border-radius: 12px;
            background: rgba(20,20,25,.96);
            backdrop-filter: blur(14px);
            box-shadow:
                0 15px 45px rgba(0,0,0,.35);
            display: none;
        }

        .orbonix-nav-dropdown.open {
            display: block;
            animation:
                orbonixNavFade .18s ease;
        }

        .orbonix-nav-dropdown a {
            display: block;
            color: white;
            text-decoration: none;
            padding: 9px 12px;
            border-radius: 8px;
            white-space: nowrap;
            transition:
                background .2s ease,
                padding-left .2s ease;
        }

        .orbonix-nav-dropdown a:hover {
            background: rgba(255,255,255,.12);
            padding-left: 16px;
        }

        .orbonix-nav-sub {
            position: relative;
        }

        .orbonix-nav-sub-arrow {
            float: right;
            opacity: .7;
        }

        .orbonix-nav-submenu {
            display: none;
            margin-left: 8px;
            margin-top: 3px;
            padding-left: 8px;
            border-left: 1px solid rgba(255,255,255,.15);
        }

        .orbonix-nav-sub.open
        .orbonix-nav-submenu {
            display: block;
        }

        @keyframes orbonixNavFade {

            from {
                opacity: 0;
                transform: translateY(-5px);
            }

            to {
                opacity: 1;
                transform: translateY(0);
            }

        }

        @media(max-width: 800px) {

            #orbonix-auto-navigation {
                flex-wrap: wrap;
            }

            .orbonix-nav-dropdown {
                position: absolute;
                max-width: 90vw;
                overflow-x: auto;
            }

        }

    `;

    document.head.appendChild(style);

}


/* =========================================================
   GET CHILDREN
========================================================= */

function getOrbonixChildren(parent) {

    return ORBONIX_PAGES.filter(page =>
        page.parent === parent
    );

}


/* =========================================================
   CREATE NAVIGATION ITEM
========================================================= */

function createNavigationItem(page) {

    const children =
        getOrbonixChildren(page.title);

    const wrapper =
        document.createElement("div");

    wrapper.className =
        "orbonix-nav-item";

    const main =
        document.createElement("div");

    main.className =
        "orbonix-nav-main";

    const link =
        document.createElement("a");

    link.className =
        "orbonix-nav-link";

    link.href =
        page.url;

    link.textContent =
        page.title;

    main.appendChild(link);


    /* =========================
       ARROW
    ========================= */

    if (children.length > 0) {

        const arrow =
            document.createElement("button");

        arrow.className =
            "orbonix-nav-arrow";

        arrow.type =
            "button";

        arrow.innerHTML =
            "▼";

        arrow.setAttribute(
            "aria-label",
            "Open submenu"
        );

        const dropdown =
            document.createElement("div");

        dropdown.className =
            "orbonix-nav-dropdown";


        children.forEach(child => {

            const childWrapper =
                document.createElement("div");

            childWrapper.className =
                "orbonix-nav-sub";

            const childLink =
                document.createElement("a");

            childLink.href =
                child.url;

            childLink.textContent =
                child.title;

            childWrapper.appendChild(
                childLink
            );


            const grandchildren =
                getOrbonixChildren(
                    child.title
                );


            if (grandchildren.length > 0) {

                const subArrow =
                    document.createElement(
                        "span"
                    );

                subArrow.className =
                    "orbonix-nav-sub-arrow";

                subArrow.textContent =
                    "›";

                childLink.appendChild(
                    subArrow
                );


                const submenu =
                    document.createElement(
                        "div"
                    );

                submenu.className =
                    "orbonix-nav-submenu";


                grandchildren.forEach(
                    grandchild => {

                        const grandLink =
                            document.createElement(
                                "a"
                            );

                        grandLink.href =
                            grandchild.url;

                        grandLink.textContent =
                            grandchild.title;

                        submenu.appendChild(
                            grandLink
                        );

                    }
                );


                childWrapper.appendChild(
                    submenu
                );


                childLink.addEventListener(
                    "click",
                    function(event) {

                        event.preventDefault();

                        childWrapper.classList.toggle(
                            "open"
                        );

                    }
                );

            }

            dropdown.appendChild(
                childWrapper
            );

        });


        arrow.addEventListener(
            "click",
            function(event) {

                event.stopPropagation();

                const isOpen =
                    dropdown.classList.contains(
                        "open"
                    );


                document
                    .querySelectorAll(
                        ".orbonix-nav-dropdown.open"
                    )
                    .forEach(menu => {

                        menu.classList.remove(
                            "open"
                        );

                    });


                document
                    .querySelectorAll(
                        ".orbonix-nav-arrow.open"
                    )
                    .forEach(button => {

                        button.classList.remove(
                            "open"
                        );

                    });


                if (!isOpen) {

                    dropdown.classList.add(
                        "open"
                    );

                    arrow.classList.add(
                        "open"
                    );

                }

            }
        );


        main.appendChild(
            arrow
        );

        wrapper.appendChild(
            main
        );

        wrapper.appendChild(
            dropdown
        );

    } else {

        wrapper.appendChild(
            main
        );

    }

    return wrapper;

}


/* =========================================================
   CREATE AUTO NAVIGATION
========================================================= */

function initializeOrbonixNavigation() {

    if (
        document.getElementById(
            "orbonix-auto-navigation"
        )
    ) {
        return;
    }


    injectOrbonixNavigationCSS();


    const navigation =
        document.createElement("nav");

    navigation.id =
        "orbonix-auto-navigation";


    const rootPages =
        ORBONIX_PAGES.filter(page =>
            page.parent === null
        );


    rootPages.forEach(page => {

        navigation.appendChild(
            createNavigationItem(page)
        );

    });


    /* =========================
       INSERT AT TOP OF BODY
    ========================= */

    if (document.body.firstChild) {

        document.body.insertBefore(
            navigation,
            document.body.firstChild
        );

    } else {

        document.body.appendChild(
            navigation
        );

    }


    /* =========================
       CLOSE WHEN CLICKING OUTSIDE
    ========================= */

    document.addEventListener(
        "click",
        function(event) {

            if (
                !navigation.contains(
                    event.target
                )
            ) {

                document
                    .querySelectorAll(
                        ".orbonix-nav-dropdown.open"
                    )
                    .forEach(menu => {

                        menu.classList.remove(
                            "open"
                        );

                    });


                document
                    .querySelectorAll(
                        ".orbonix-nav-arrow.open"
                    )
                    .forEach(button => {

                        button.classList.remove(
                            "open"
                        );

                    });

            }

        }
    );

}


/* =========================================================
   UNIVERSAL DATA-PAGE BUTTONS
========================================================= */

function initializeOrbonixButtons() {
    document.querySelectorAll("[data-page]").forEach(button => {
        if (button.dataset.orbonixInitialized === "true") return;

        // Navigation requires an exact catalog key; fuzzy matching is for search.
        const pageName = button.getAttribute("data-page");
        const page = ORBONIX_PAGES.find(item => item.title === pageName);
        if (!page) {
            console.warn("ORBONIX: Page not found:", pageName);
            return;
        }

        button.dataset.orbonixInitialized = "true";
        button.style.cursor = "pointer";

        if (button.tagName.toLowerCase() === "a") {
            // Keep native keyboard, new-tab, download and target behavior.
            // Preserve page-specific query parameters and fragments.
            const previous = new URL(button.getAttribute("href") || page.url, page.url);
            const target = new URL(page.url);
            target.search = previous.search;
            target.hash = previous.hash;
            button.href = target.href;
            return;
        }

        button.addEventListener("click", () => {
            window.location.href = page.url;
        });
    });
}


/* =========================================================
   SEARCH UI
========================================================= */

function initializeOrbonixSearch() {

    const searchInputs =
        document.querySelectorAll(
            "[data-orbonix-search]"
        );


    searchInputs.forEach(input => {

        if (
            input.dataset.orbonixSearchInitialized
            === "true"
        ) {
            return;
        }


        input.dataset.orbonixSearchInitialized =
            "true";


        input.addEventListener(
            "keydown",
            function(event) {

                if (
                    event.key === "Enter"
                ) {

                    event.preventDefault();


                    const query =
                        this.value.trim();


                    if (!query) {
                        return;
                    }


                    const results =
                        searchOrbonix(
                            query
                        );


                    if (
                        results.length > 0
                    ) {

                        window.location.href =
                            results[0].url;

                    } else {

                        console.warn(
                            "ORBONIX: Nothing found:",
                            query
                        );

                    }

                }


                if (
                    event.key === "Escape"
                ) {

                    this.value = "";

                }

            }
        );


        input.addEventListener(
            "input",
            function() {

                const query =
                    this.value.trim();


                const container =
                    document.getElementById(
                        "orbonix-search-results"
                    );


                if (!container) {
                    return;
                }


                if (!query) {

                    container.innerHTML =
                        "";

                    return;

                }


                const results =
                    searchOrbonix(
                        query
                    );


                container.innerHTML =
                    "";


                results.forEach(page => {

                    const item =
                        document.createElement(
                            "a"
                        );


                    item.href =
                        page.url;


                    item.className =
                        "orbonix-search-result";


                    item.innerHTML = `
                        <strong>
                            ${escapeHTML(page.title)}
                        </strong>

                        <small>
                            ${escapeHTML(page.category)}
                        </small>

                        <span>
                            ${escapeHTML(page.description)}
                        </span>
                    `;


                    container.appendChild(
                        item
                    );

                });

            }
        );

    });

}


/* =========================================================
   INITIALIZE EVERYTHING
========================================================= */

function initializeOrbonix() {

    initializeOrbonixNavigation();

    initializeOrbonixButtons();

    initializeOrbonixSearch();

}


/* =========================================================
   PAGE LOAD
========================================================= */

function startOrbonix() {

    if (!document.body) {
        return;
    }

    initializeOrbonix();

}


/* =========================================================
   START
========================================================= */

if (
    document.readyState === "loading"
) {

    document.addEventListener(
        "DOMContentLoaded",
        startOrbonix
    );

} else {

    startOrbonix();

}


/* =========================================================
   DYNAMIC CONTENT SUPPORT
========================================================= */

const orbonixObserver =
    new MutationObserver(() => {

        initializeOrbonixButtons();

        initializeOrbonixSearch();

    });


if (document.body) {

    orbonixObserver.observe(
        document.body,
        {
            childList: true,
            subtree: true
        }
    );

}


/* =========================================================
   GLOBAL API
========================================================= */

window.ORBONIX_PAGES =
    ORBONIX_PAGES;

window.searchOrbonix =
    searchOrbonix;

window.findOrbonixPage =
    findOrbonixPage;

window.initializeOrbonix =
    initializeOrbonix;

window.initializeOrbonixNavigation =
    initializeOrbonixNavigation;

