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

ORBONIX_PAGES.forEach(page => { if (["Phobos","Deimos","Dysnomia","Xiangliu","Hiʻiaka","Namaka","MK2","Vanth","Charon","Hydra","Kerberos","Nix","Styx","Moon","Callisto","Europa","Ganymede","Io","Galatea","Larissa","Nereid","Proteus","Triton","Dione","Enceladus","Iapetus","Mimas","Rhea","Tethys","Titan","Ariel","Miranda","Oberon","Titania","Umbriel"].includes(page.title)) page.keywords += " moon moons satellite satellites"; });

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
        return ORBONIX_PAGES.slice();
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
        ;

}


/* =========================================================
   FIND PAGE
========================================================= */

function findOrbonixPage(name) {
    return ORBONIX_PAGES.find(p => normalizeSearchText(p.title) === normalizeSearchText(name)) || null;
}
function initializeOrbonixButtons() {
    document.querySelectorAll('[data-page]').forEach(element => {
        if (element.dataset.orbonixInitialized === 'true') return;
        const page = ORBONIX_PAGES.find(p => p.title === element.getAttribute('data-page'));
        if (!page) return;
        element.dataset.orbonixInitialized = 'true';
        if (element.tagName.toLowerCase() === 'a') {
            const previous = new URL(element.getAttribute('href') || page.url, page.url);
            const target = new URL(page.url);
            target.search = previous.search; target.hash = previous.hash;
            element.href = target.href;
        } else element.addEventListener('click', () => { window.location.href = page.url; });
    });
}
function createOrbonixLink(page, className) {
    const link = document.createElement('a');
    link.href = page.url; link.dataset.page = page.title; link.textContent = page.title;
    if (className) link.className = className;
    return link;
}
function initializeOrbonixNavigation() {
    if (document.getElementById('orbonix-auto-navigation')) return;
    const nav = document.createElement('nav'); nav.id = 'orbonix-auto-navigation';
    nav.setAttribute('aria-label', 'Orbonix navigation');
    const brand = createOrbonixLink(findOrbonixPage('Home'), 'orbonix-brand'); brand.textContent = 'ORBONIX';
    const logo = document.createElement('img'); logo.src = '/favicon.png'; logo.alt = ''; logo.width = 32; logo.height = 32; brand.prepend(logo);
    const menuButton = document.createElement('button'); menuButton.type = 'button'; menuButton.textContent = 'Pages';
    menuButton.setAttribute('aria-expanded', 'false'); menuButton.setAttribute('aria-controls', 'orbonix-page-menu');
    const searchButton = document.createElement('button'); searchButton.type = 'button'; searchButton.id = 'orbonix-search-button'; searchButton.textContent = 'Search'; searchButton.setAttribute('aria-haspopup', 'dialog');
    const menu = document.createElement('div'); menu.id = 'orbonix-page-menu'; menu.hidden = true;
    function list(parent) {
        const ul = document.createElement('ul');
        ORBONIX_PAGES.filter(p => p.parent === parent).forEach(page => {
            const li = document.createElement('li'); li.appendChild(createOrbonixLink(page));
            if (ORBONIX_PAGES.some(p => p.parent === page.title)) {
                const details = document.createElement('details'); const summary = document.createElement('summary');
                summary.textContent = 'Pages in ' + page.title;
                details.append(summary, list(page.title)); li.appendChild(details);
            }
            ul.appendChild(li);
        }); return ul;
    }
    menu.appendChild(list(null));
    function closeMenu() { menu.hidden = true; menuButton.setAttribute('aria-expanded', 'false'); }
    menuButton.addEventListener('click', () => { menu.hidden = !menu.hidden; menuButton.setAttribute('aria-expanded', String(!menu.hidden)); });
    document.addEventListener('click', e => { if (!nav.contains(e.target)) closeMenu(); });
    nav.addEventListener('keydown', e => { if (e.key === 'Escape') { closeMenu(); menuButton.focus(); } });
    nav.append(brand, menuButton, searchButton, menu); document.body.prepend(nav);
}
function renderOrbonixResults(container, query, status) {
    const pages = searchOrbonix(query); container.replaceChildren();
    if (status) status.textContent = pages.length + (pages.length === 1 ? ' page' : ' pages');
    const fragment = document.createDocumentFragment();
    for (const page of pages) {
        const link = createOrbonixLink(page, 'orbonix-result-link');
        const title = document.createElement('strong'); title.textContent = page.title;
        const detail = document.createElement('small'); detail.textContent = page.category + ' · ' + page.description;
        link.replaceChildren(title, detail); fragment.appendChild(link);
    }
    if (!pages.length) { const message = document.createElement('p'); message.textContent = 'No pages found. Try another search.'; fragment.appendChild(message); }
    container.appendChild(fragment);
}
function initializeOrbonix() {
    initializeOrbonixNavigation(); initializeOrbonixButtons();
    if (typeof window.initializeOrbonixSearchUI === 'function') window.initializeOrbonixSearchUI();
}
window.ORBONIX_PAGES = ORBONIX_PAGES;
window.searchOrbonix = searchOrbonix;
window.findOrbonixPage = findOrbonixPage;
window.initializeOrbonix = initializeOrbonix;
window.initializeOrbonixNavigation = initializeOrbonixNavigation;
window.renderOrbonixResults = renderOrbonixResults;
function startOrbonix() {
    if (!document.body) return;
    initializeOrbonix();
    new MutationObserver(records => { if (records.some(r => r.addedNodes.length)) initializeOrbonixButtons(); }).observe(document.body, {childList:true, subtree:true});
}
if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', startOrbonix);
else startOrbonix();
