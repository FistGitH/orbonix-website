/* =========================================================
   ORBONIX SEARCH + NAVIGATION + UNIVERSAL BUTTON SYSTEM
   Website: https://orbonix.net

   ONE FILE:
   - Global Search
   - Automatic Navigation
   - Dropdown Subpages
   - Universal data-page buttons
========================================================= */


/* =========================================================
   BASE URL
========================================================= */

const ORBONIX_BASE = "https://orbonix.net";


/* =========================================================
   ALL ORBONIX PAGES
========================================================= */

const ORBONIX_PAGES = [

    /* =====================================================
       MAIN
    ===================================================== */

    {
        title: "Home",
        url: `${ORBONIX_BASE}/`,
        category: "Main",
        keywords: "home orbonix space astronomy universe",
        description: "The main ORBONIX space and astronomy website."
    },

    {
        title: "Exploring Space",
        url: `${ORBONIX_BASE}/Exploring-Space/`,
        category: "Exploring Space",
        keywords: "exploring space explore astronomy universe cosmos",
        description: "Explore the universe, astronomy and space."
    },

    {
        title: "Gallery",
        url: `${ORBONIX_BASE}/Gallery/`,
        category: "Gallery",
        keywords: "gallery photos images pictures observations telescope astronomy",
        description: "Explore the ORBONIX observation gallery."
    },

    {
        title: "Latest Space News",
        url: `${ORBONIX_BASE}/Latest-Space-News/`,
        category: "News",
        keywords: "latest space news astronomy nasa esa discoveries science",
        description: "Discover the latest space news and discoveries."
    },

    {
        title: "More About Orbonix",
        url: `${ORBONIX_BASE}/More-About-Orbonix/`,
        category: "Orbonix",
        keywords: "about orbonix project website achievements photos telescope",
        description: "Learn more about the ORBONIX project."
    },

    {
        title: "Solar System Simulation",
        url: `${ORBONIX_BASE}/Solar-System-Simulation/`,
        category: "Simulation",
        keywords: "solar system simulation planets moons orbit interactive",
        description: "Explore the interactive Solar System simulation."
    },


    /* =====================================================
       EXPLORING SPACE
    ===================================================== */

    {
        title: "Deep Space",
        url: `${ORBONIX_BASE}/Exploring-Space/Deep-Space/`,
        category: "Deep Space",
        keywords: "deep space universe cosmos strange objects",
        description: "Explore strange and mysterious objects in deep space."
    },

    {
        title: "Solar System",
        url: `${ORBONIX_BASE}/Exploring-Space/Solar-System/`,
        category: "Solar System",
        keywords: "solar system planets sun moons asteroids comets",
        description: "Explore the Solar System."
    },

    {
        title: "Space Missions",
        url: `${ORBONIX_BASE}/Exploring-Space/Space-Missions/`,
        category: "Space Missions",
        keywords: "space missions nasa esa spacecraft rockets exploration",
        description: "Explore humanity's greatest space missions."
    },

    {
        title: "Quizzes",
        url: `${ORBONIX_BASE}/Exploring-Space/Quizes/`,
        category: "Quizzes",
        keywords: "quiz quizzes test astronomy space knowledge",
        description: "Test your space and astronomy knowledge."
    },

    {
        title: "Terms",
        url: `${ORBONIX_BASE}/Exploring-Space/Terms/`,
        category: "Terms",
        keywords: "terms dictionary definitions glossary astronomy",
        description: "Learn important space and astronomy terms."
    },


    /* =====================================================
       SOLAR SYSTEM
    ===================================================== */

    {
        title: "Sun",
        url: `${ORBONIX_BASE}/Exploring-Space/Solar-System/Sun/`,
        category: "Solar System",
        keywords: "sun star solar wind solar flare sunspots corona",
        description: "Explore the Sun."
    },

    {
        title: "Mercury",
        url: `${ORBONIX_BASE}/Exploring-Space/Solar-System/Mercury/`,
        category: "Planets",
        keywords: "mercury planet smallest closest sun inner planet",
        description: "Explore Mercury."
    },

    {
        title: "Venus",
        url: `${ORBONIX_BASE}/Exploring-Space/Solar-System/Venus/`,
        category: "Planets",
        keywords: "venus planet hottest atmosphere clouds greenhouse",
        description: "Explore Venus."
    },

    {
        title: "Earth",
        url: `${ORBONIX_BASE}/Exploring-Space/Solar-System/Earth/`,
        category: "Planets",
        keywords: "earth planet world life atmosphere ocean",
        description: "Explore Earth."
    },

    {
        title: "Mars",
        url: `${ORBONIX_BASE}/Exploring-Space/Solar-System/Mars/`,
        category: "Planets",
        keywords: "mars planet red planet martian rover phobos deimos",
        description: "Explore Mars, the Red Planet."
    },

    {
        title: "Phobos",
        url: `${ORBONIX_BASE}/Exploring-Space/Solar-System/Mars/Phobos/`,
        category: "Mars",
        keywords: "phobos mars moon martian moon satellite",
        description: "Explore Phobos."
    },

    {
        title: "Deimos",
        url: `${ORBONIX_BASE}/Exploring-Space/Solar-System/Mars/Deimos/`,
        category: "Mars",
        keywords: "deimos mars moon martian moon satellite",
        description: "Explore Deimos."
    },

    {
        title: "Jupiter",
        url: `${ORBONIX_BASE}/Exploring-Space/Solar-System/Jupiter/`,
        category: "Planets",
        keywords: "jupiter planet gas giant largest planet great red spot moons",
        description: "Explore Jupiter."
    },

    {
        title: "Saturn",
        url: `${ORBONIX_BASE}/Exploring-Space/Solar-System/Saturn/`,
        category: "Planets",
        keywords: "saturn planet rings gas giant titan enceladus",
        description: "Explore Saturn and its rings."
    },

    {
        title: "Uranus",
        url: `${ORBONIX_BASE}/Exploring-Space/Solar-System/Uranus/`,
        category: "Planets",
        keywords: "uranus planet ice giant rings tilted planet",
        description: "Explore Uranus."
    },

    {
        title: "Neptune",
        url: `${ORBONIX_BASE}/Exploring-Space/Solar-System/Neptune/`,
        category: "Planets",
        keywords: "neptune planet ice giant blue planet winds",
        description: "Explore Neptune."
    },

    {
        title: "Dwarf Planets",
        url: `${ORBONIX_BASE}/Exploring-Space/Solar-System/Dwarf-Planets/`,
        category: "Solar System",
        keywords: "dwarf planets pluto ceres eris haumea makemake",
        description: "Explore the dwarf planets."
    },

    {
        title: "Asteroid Belt",
        url: `${ORBONIX_BASE}/Exploring-Space/Solar-System/Asteroid-Belt/`,
        category: "Solar System",
        keywords: "asteroid belt asteroids rocks mars jupiter",
        description: "Explore the asteroid belt."
    },

    {
        title: "Kuiper Belt",
        url: `${ORBONIX_BASE}/Exploring-Space/Solar-System/Kuiper-Belt/`,
        category: "Solar System",
        keywords: "kuiper belt icy objects outer solar system",
        description: "Explore the Kuiper Belt."
    },

    {
        title: "Oort Cloud",
        url: `${ORBONIX_BASE}/Exploring-Space/Solar-System/Oort-Cloud/`,
        category: "Solar System",
        keywords: "oort cloud comets long period comets outer solar system",
        description: "Explore the Oort Cloud."
    },

    {
        title: "Planet X",
        url: `${ORBONIX_BASE}/Exploring-Space/Solar-System/Planet-X/`,
        category: "Solar System",
        keywords: "planet x planet nine hypothetical ninth planet",
        description: "Explore the hypothetical Planet X."
    },


    /* =====================================================
       DEEP SPACE
    ===================================================== */

    {
        title: "Black Holes",
        url: `${ORBONIX_BASE}/Exploring-Space/Deep-Space/Blackholes/`,
        category: "Deep Space",
        keywords: "black holes black hole singularity event horizon gravity",
        description: "Explore black holes."
    },

    {
        title: "Cosmic Voids",
        url: `${ORBONIX_BASE}/Exploring-Space/Deep-Space/Cosmic-Voids/`,
        category: "Deep Space",
        keywords: "cosmic void cosmic voids empty space universe galaxies",
        description: "Explore cosmic voids."
    },

    {
        title: "Dark Energy",
        url: `${ORBONIX_BASE}/Exploring-Space/Deep-Space/Dark-Energy/`,
        category: "Deep Space",
        keywords: "dark energy universe expansion accelerating cosmology",
        description: "Explore dark energy."
    },

    {
        title: "Dark Matter",
        url: `${ORBONIX_BASE}/Exploring-Space/Deep-Space/Dark-Matter/`,
        category: "Deep Space",
        keywords: "dark matter invisible matter gravity galaxies cosmology",
        description: "Explore dark matter."
    },

    {
        title: "Galaxies",
        url: `${ORBONIX_BASE}/Exploring-Space/Deep-Space/Galaxies/`,
        category: "Deep Space",
        keywords: "galaxy galaxies milky way andromeda spiral elliptical universe",
        description: "Explore galaxies."
    },

    {
        title: "Nebulae",
        url: `${ORBONIX_BASE}/Exploring-Space/Deep-Space/Nebulae/`,
        category: "Deep Space",
        keywords: "nebula nebulae gas dust stars star formation",
        description: "Explore nebulae."
    },

    {
        title: "Quasars",
        url: `${ORBONIX_BASE}/Exploring-Space/Deep-Space/Quasars/`,
        category: "Deep Space",
        keywords: "quasar quasars active galaxy black hole accretion",
        description: "Explore quasars."
    },

    {
        title: "Rogue Planets",
        url: `${ORBONIX_BASE}/Exploring-Space/Deep-Space/Rogue-Planets/`,
        category: "Deep Space",
        keywords: "rogue planets rouge planets free floating wandering planets",
        description: "Explore rogue planets."
    },

    {
        title: "Stars",
        url: `${ORBONIX_BASE}/Exploring-Space/Deep-Space/Stars/`,
        category: "Deep Space",
        keywords: "stars star stellar sun red giant white dwarf neutron star supernova",
        description: "Explore stars and stellar evolution."
    },

    {
        title: "Wormholes",
        url: `${ORBONIX_BASE}/Exploring-Space/Deep-Space/Wormholes/`,
        category: "Deep Space",
        keywords: "wormholes wormhole einstein rosen bridge spacetime",
        description: "Explore theoretical wormholes."
    },


    /* =====================================================
       SPACE MISSIONS
    ===================================================== */

    {
        title: "Apollo",
        url: `${ORBONIX_BASE}/Exploring-Space/Space-Missions/Apollo/`,
        category: "Space Missions",
        keywords: "apollo apollo program apollo 11 moon nasa lunar",
        description: "Explore the Apollo program."
    },

    {
        title: "Artemis",
        url: `${ORBONIX_BASE}/Exploring-Space/Space-Missions/Artemis/`,
        category: "Space Missions",
        keywords: "artemis moon lunar nasa mission",
        description: "Explore the Artemis program."
    },

    {
        title: "Cassini",
        url: `${ORBONIX_BASE}/Exploring-Space/Space-Missions/Cassini/`,
        category: "Space Missions",
        keywords: "cassini saturn titan nasa esa mission",
        description: "Explore Cassini."
    },

    {
        title: "James Webb Space Telescope",
        url: `${ORBONIX_BASE}/Exploring-Space/Space-Missions/James-Webb/`,
        category: "Space Missions",
        keywords: "james webb jwst telescope infrared nasa esa csa",
        description: "Explore the James Webb Space Telescope."
    },

    {
        title: "New Horizons",
        url: `${ORBONIX_BASE}/Exploring-Space/Space-Missions/New-Horizons/`,
        category: "Space Missions",
        keywords: "new horizons new horizonts pluto kuiper belt nasa",
        description: "Explore New Horizons."
    },

    {
        title: "Voyager",
        url: `${ORBONIX_BASE}/Exploring-Space/Space-Missions/Voyager/`,
        category: "Space Missions",
        keywords: "voyager voyager 1 voyager 2 interstellar nasa",
        description: "Explore Voyager 1 and Voyager 2."
    },


    /* =====================================================
       QUIZZES
    ===================================================== */

    {
        title: "Black Holes Quiz",
        url: `${ORBONIX_BASE}/Exploring-Space/Quizes/Black-Holes-Quiz/`,
        category: "Quiz",
        keywords: "black holes quiz black hole test",
        description: "Test your knowledge of black holes."
    },

    {
        title: "Comets Quiz",
        url: `${ORBONIX_BASE}/Exploring-Space/Quizes/Comets-Quiz/`,
        category: "Quiz",
        keywords: "comets quiz comet test halley",
        description: "Test your knowledge of comets."
    },

    {
        title: "Final Quiz",
        url: `${ORBONIX_BASE}/Exploring-Space/Quizes/Final-Quiz/`,
        category: "Quiz",
        keywords: "final quiz mega quiz ultimate space quiz",
        description: "The ultimate ORBONIX space quiz."
    },

    {
        title: "Galactic Quiz",
        url: `${ORBONIX_BASE}/Exploring-Space/Quizes/Galactic-Quiz/`,
        category: "Quiz",
        keywords: "galactic quiz galaxy quiz galaxies universe",
        description: "Test your knowledge of galaxies."
    },

    {
        title: "Moons Quiz",
        url: `${ORBONIX_BASE}/Exploring-Space/Quizes/Moons-Quiz/`,
        category: "Quiz",
        keywords: "moons quiz moon test satellites",
        description: "Test your knowledge of moons."
    },

    {
        title: "Planet Quiz",
        url: `${ORBONIX_BASE}/Exploring-Space/Quizes/Planet-Quiz/`,
        category: "Quiz",
        keywords: "planet quiz planets solar system test",
        description: "Test your knowledge of planets."
    },

    {
        title: "Stars Quiz",
        url: `${ORBONIX_BASE}/Exploring-Space/Quizes/Stars-Quiz/`,
        category: "Quiz",
        keywords: "stars quiz star test stellar supernova",
        description: "Test your knowledge of stars."
    },

    {
        title: "Sun Quiz",
        url: `${ORBONIX_BASE}/Exploring-Space/Quizes/Sun-Quiz/`,
        category: "Quiz",
        keywords: "sun quiz solar quiz sunspots solar flares",
        description: "Test your knowledge of the Sun."
    },

    {
        title: "Telescope Quiz",
        url: `${ORBONIX_BASE}/Exploring-Space/Quizes/Telescope-Quiz/`,
        category: "Quiz",
        keywords: "telescope quiz telescope test astronomy observation",
        description: "Test your knowledge of telescopes."
    },


    /* =====================================================
       ORBONIX
    ===================================================== */

    {
        title: "Orbonix Fotos and Telescope",
        url: `${ORBONIX_BASE}/More-About-Orbonix/Orbonix-Fotos-and-Telescope/`,
        category: "Orbonix",
        keywords: "orbonix photos fotos telescope photography observations",
        description: "Explore ORBONIX telescope photos."
    },

    {
        title: "Site Achievements",
        url: `${ORBONIX_BASE}/More-About-Orbonix/Site-Achivments/`,
        category: "Orbonix",
        keywords: "achievements site achievements orbonix milestones",
        description: "Explore ORBONIX achievements."
    }

];


/* =========================================================
   NAVIGATION STRUCTURE
========================================================= */

const ORBONIX_NAVIGATION = [

    {
        title: "Home",
        page: "Home"
    },

    {
        title: "Exploring Space",
        page: "Exploring Space",
        children: [

            {
                title: "Deep Space",
                page: "Deep Space",
                children: [
                    {
                        title: "Black Holes",
                        page: "Black Holes"
                    },
                    {
                        title: "Cosmic Voids",
                        page: "Cosmic Voids"
                    },
                    {
                        title: "Dark Energy",
                        page: "Dark Energy"
                    },
                    {
                        title: "Dark Matter",
                        page: "Dark Matter"
                    },
                    {
                        title: "Galaxies",
                        page: "Galaxies"
                    },
                    {
                        title: "Nebulae",
                        page: "Nebulae"
                    },
                    {
                        title: "Quasars",
                        page: "Quasars"
                    },
                    {
                        title: "Rogue Planets",
                        page: "Rogue Planets"
                    },
                    {
                        title: "Stars",
                        page: "Stars"
                    },
                    {
                        title: "Wormholes",
                        page: "Wormholes"
                    }
                ]
            },

            {
                title: "Solar System",
                page: "Solar System",
                children: [

                    {
                        title: "Sun",
                        page: "Sun"
                    },

                    {
                        title: "Mercury",
                        page: "Mercury"
                    },

                    {
                        title: "Venus",
                        page: "Venus"
                    },

                    {
                        title: "Earth",
                        page: "Earth"
                    },

                    {
                        title: "Mars",
                        page: "Mars",
                        children: [
                            {
                                title: "Phobos",
                                page: "Phobos"
                            },
                            {
                                title: "Deimos",
                                page: "Deimos"
                            }
                        ]
                    },

                    {
                        title: "Jupiter",
                        page: "Jupiter"
                    },

                    {
                        title: "Saturn",
                        page: "Saturn"
                    },

                    {
                        title: "Uranus",
                        page: "Uranus"
                    },

                    {
                        title: "Neptune",
                        page: "Neptune"
                    },

                    {
                        title: "Dwarf Planets",
                        page: "Dwarf Planets"
                    },

                    {
                        title: "Asteroid Belt",
                        page: "Asteroid Belt"
                    },

                    {
                        title: "Kuiper Belt",
                        page: "Kuiper Belt"
                    },

                    {
                        title: "Oort Cloud",
                        page: "Oort Cloud"
                    },

                    {
                        title: "Planet X",
                        page: "Planet X"
                    }

                ]
            },

            {
                title: "Space Missions",
                page: "Space Missions",
                children: [

                    {
                        title: "Apollo",
                        page: "Apollo"
                    },

                    {
                        title: "Artemis",
                        page: "Artemis"
                    },

                    {
                        title: "Cassini",
                        page: "Cassini"
                    },

                    {
                        title: "James Webb Space Telescope",
                        page: "James Webb Space Telescope"
                    },

                    {
                        title: "New Horizons",
                        page: "New Horizons"
                    },

                    {
                        title: "Voyager",
                        page: "Voyager"
                    }

                ]
            },

            {
                title: "Quizzes",
                page: "Quizzes",
                children: [

                    {
                        title: "Black Holes Quiz",
                        page: "Black Holes Quiz"
                    },

                    {
                        title: "Comets Quiz",
                        page: "Comets Quiz"
                    },

                    {
                        title: "Final Quiz",
                        page: "Final Quiz"
                    },

                    {
                        title: "Galactic Quiz",
                        page: "Galactic Quiz"
                    },

                    {
                        title: "Moons Quiz",
                        page: "Moons Quiz"
                    },

                    {
                        title: "Planet Quiz",
                        page: "Planet Quiz"
                    },

                    {
                        title: "Stars Quiz",
                        page: "Stars Quiz"
                    },

                    {
                        title: "Sun Quiz",
                        page: "Sun Quiz"
                    },

                    {
                        title: "Telescope Quiz",
                        page: "Telescope Quiz"
                    }

                ]
            },

            {
                title: "Terms",
                page: "Terms"
            }

        ]
    },

    {
        title: "Gallery",
        page: "Gallery"
    },

    {
        title: "Latest Space News",
        page: "Latest Space News"
    },

    {
        title: "More About Orbonix",
        page: "More About Orbonix",
        children: [

            {
                title: "Orbonix Fotos and Telescope",
                page: "Orbonix Fotos and Telescope"
            },

            {
                title: "Site Achievements",
                page: "Site Achievements"
            }

        ]
    },

    {
        title: "Solar System Simulation",
        page: "Solar System Simulation"
    }

];


/* =========================================================
   NORMALIZE TEXT
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
   LEVENSHTEIN DISTANCE
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

    const q =
        normalizeSearchText(query);

    if (!q) return 0;

    const words =
        q.split(" ");

    const title =
        normalizeSearchText(page.title);

    const category =
        normalizeSearchText(page.category);

    const keywords =
        normalizeSearchText(page.keywords);

    const description =
        normalizeSearchText(page.description);

    let score = 0;


    if (title === q) {
        score += 3000;
    }

    if (title.includes(q)) {
        score += 1500;
    }

    if (category.includes(q)) {
        score += 700;
    }

    if (keywords.includes(q)) {
        score += 1000;
    }

    if (description.includes(q)) {
        score += 300;
    }


    for (const word of words) {

        if (word.length < 2) {
            continue;
        }

        if (title.includes(word)) {
            score += 500;
        }

        if (category.includes(word)) {
            score += 250;
        }

        if (keywords.includes(word)) {
            score += 300;
        }

        if (description.includes(word)) {
            score += 100;
        }

    }


    const titleWords =
        title.split(" ");


    for (const word of words) {

        if (word.length < 4) {
            continue;
        }

        for (const titleWord of titleWords) {

            if (titleWord.length < 4) {
                continue;
            }

            const distance =
                levenshtein(
                    word,
                    titleWord
                );

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
   SEARCH FUNCTION
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

            score:
                scoreSearchResult(
                    page,
                    normalized
                )

        }))

        .filter(page =>
            page.score > 0
        )

        .sort((a, b) =>
            b.score - a.score
        )

        .slice(0, 15);

}


/* =========================================================
   FIND PAGE BY NAME
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

    if (results.length > 0) {
        return results[0];
    }

    return null;

}


/* =========================================================
   UNIVERSAL BUTTON SYSTEM
========================================================= */

function initializeOrbonixButtons() {

    const buttons =
        document.querySelectorAll(
            "[data-page]"
        );

    buttons.forEach(button => {

        if (
            button.dataset.orbonixInitialized
            === "true"
        ) {
            return;
        }

        button.dataset.orbonixInitialized =
            "true";

        const pageName =
            button.getAttribute(
                "data-page"
            );

        if (!pageName) {
            return;
        }

        button.style.cursor =
            "pointer";

        button.addEventListener(
            "click",
            function(event) {

                if (
                    this.tagName.toLowerCase()
                    === "a"
                ) {
                    event.preventDefault();
                }

                const page =
                    findOrbonixPage(
                        pageName
                    );

                if (
                    page &&
                    page.url
                ) {

                    window.location.href =
                        page.url;

                } else {

                    console.warn(
                        "ORBONIX: Page not found:",
                        pageName
                    );

                }

            }
        );

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
                            "ORBONIX: Nothing found for:",
                            query
                        );

                    }

                }


                if (
                    event.key === "Escape"
                ) {

                    this.value = "";

                    const container =
                        document.getElementById(
                            "orbonix-search-results"
                        );

                    if (container) {
                        container.innerHTML = "";
                    }

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

                    container.innerHTML = "";

                    return;
                }

                const results =
                    searchOrbonix(
                        query
                    );

                container.innerHTML = "";

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
   HTML ESCAPE
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
   NAVIGATION CSS
========================================================= */

function injectOrbonixNavigationCSS() {

    if (
        document.getElementById(
            "orbonix-navigation-css"
        )
    ) {
        return;
    }

    const style =
        document.createElement("style");

    style.id =
        "orbonix-navigation-css";

    style.textContent = `

        #orbonix-navigation {

            width: 100%;

            position: relative;

            z-index: 99999;

            font-family:
                Arial,
                Helvetica,
                sans-serif;

        }


        .orbonix-nav-inner {

            width: 100%;

            display: flex;

            align-items: center;

            gap: 8px;

            padding: 10px 18px;

            background:
                rgba(8, 10, 20, 0.96);

            backdrop-filter:
                blur(12px);

            border-bottom:
                1px solid
                rgba(255,255,255,0.12);

        }


        .orbonix-nav-logo {

            color: white;

            font-size: 22px;

            font-weight: 800;

            text-decoration: none;

            margin-right: 18px;

            white-space: nowrap;

        }


        .orbonix-nav-menu {

            display: flex;

            align-items: center;

            gap: 4px;

            list-style: none;

            margin: 0;

            padding: 0;

        }


        .orbonix-nav-item {

            position: relative;

        }


        .orbonix-nav-row {

            display: flex;

            align-items: center;

        }


        .orbonix-nav-link {

            display: block;

            padding: 10px 12px;

            color: white;

            text-decoration: none;

            font-size: 14px;

            border-radius: 8px;

            white-space: nowrap;

            cursor: pointer;

            transition:
                background 0.2s ease,
                color 0.2s ease;

        }


        .orbonix-nav-link:hover {

            background:
                rgba(255,255,255,0.10);

        }


        .orbonix-nav-arrow {

            width: 30px;

            height: 34px;

            display: flex;

            align-items: center;

            justify-content: center;

            color: white;

            cursor: pointer;

            border-radius: 7px;

            transition:
                transform 0.2s ease,
                background 0.2s ease;

            user-select: none;

        }


        .orbonix-nav-arrow:hover {

            background:
                rgba(255,255,255,0.10);

        }


        .orbonix-nav-item.open >
        .orbonix-nav-row >
        .orbonix-nav-arrow {

            transform:
                rotate(180deg);

        }


        .orbonix-nav-submenu {

            position: absolute;

            top: calc(100% + 4px);

            left: 0;

            min-width: 230px;

            max-height: 0;

            overflow: hidden;

            opacity: 0;

            visibility: hidden;

            background:
                rgba(10, 12, 24, 0.98);

            border:
                1px solid
                rgba(255,255,255,0.12);

            border-radius: 10px;

            box-shadow:
                0 15px 40px
                rgba(0,0,0,0.45);

            transition:
                max-height 0.25s ease,
                opacity 0.2s ease;

        }


        .orbonix-nav-item.open >
        .orbonix-nav-submenu {

            max-height: 800px;

            opacity: 1;

            visibility: visible;

        }


        .orbonix-nav-submenu
        .orbonix-nav-submenu {

            top: -1px;

            left: calc(100% + 3px);

        }


        .orbonix-nav-submenu
        .orbonix-nav-link {

            width: 100%;

            padding:
                10px 14px;

        }


        @media (max-width: 900px) {

            .orbonix-nav-inner {

                overflow-x: auto;

            }

            .orbonix-nav-menu {

                flex-wrap: nowrap;

            }

        }


        @media (max-width: 600px) {

            .orbonix-nav-logo {

                display: none;

            }

            .orbonix-nav-link {

                font-size: 13px;

            }

        }

    `;

    document.head.appendChild(style);

}


/* =========================================================
   CREATE NAVIGATION ITEM
========================================================= */

function createOrbonixNavigationItem(item) {

    const li =
        document.createElement("li");

    li.className =
        "orbonix-nav-item";


    const row =
        document.createElement("div");

    row.className =
        "orbonix-nav-row";


    const link =
        document.createElement("a");

    link.className =
        "orbonix-nav-link";

    link.textContent =
        item.title;

    link.href = "#";


    link.addEventListener(
        "click",
        function(event) {

            event.preventDefault();

            const page =
                findOrbonixPage(
                    item.page
                );

            if (
                page &&
                page.url
            ) {

                window.location.href =
                    page.url;

            }

        }
    );


    row.appendChild(link);


    if (
        item.children &&
        item.children.length > 0
    ) {

        const arrow =
            document.createElement("span");

        arrow.className =
            "orbonix-nav-arrow";

        arrow.innerHTML =
            "▼";


        arrow.addEventListener(
            "click",
            function(event) {

                event.preventDefault();

                event.stopPropagation();

                li.classList.toggle(
                    "open"
                );

            }
        );


        row.appendChild(arrow);

    }


    li.appendChild(row);


    if (
        item.children &&
        item.children.length > 0
    ) {

        const submenu =
            document.createElement("ul");

        submenu.className =
            "orbonix-nav-submenu";

        submenu.style.listStyle =
            "none";

        submenu.style.margin =
            "0";

        submenu.style.padding =
            "6px";


        item.children.forEach(
            child => {

                submenu.appendChild(
                    createOrbonixNavigationItem(
                        child
                    )
                );

            }
        );


        li.appendChild(
            submenu
        );

    }


    return li;

}


/* =========================================================
   CREATE AUTOMATIC NAVIGATION
========================================================= */

function initializeOrbonixNavigation() {

    if (
        document.getElementById(
            "orbonix-navigation"
        )
    ) {
        return;
    }


    injectOrbonixNavigationCSS();


    const navigation =
        document.createElement("nav");

    navigation.id =
        "orbonix-navigation";


    const inner =
        document.createElement("div");

    inner.className =
        "orbonix-nav-inner";


    const logo =
        document.createElement("a");

    logo.className =
        "orbonix-nav-logo";

    logo.textContent =
        "ORBONIX";

    logo.href =
        `${ORBONIX_BASE}/`;


    inner.appendChild(
        logo
    );


    const menu =
        document.createElement("ul");

    menu.className =
        "orbonix-nav-menu";


    ORBONIX_NAVIGATION.forEach(
        item => {

            menu.appendChild(
                createOrbonixNavigationItem(
                    item
                )
            );

        }
    );


    inner.appendChild(
        menu
    );


    navigation.appendChild(
        inner
    );


    /*

       Automatically place
       Navigation at the top
       of the page.

    */

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

}


/* =========================================================
   CLOSE NAVIGATION WHEN CLICKING OUTSIDE
========================================================= */

function initializeOrbonixNavigationOutsideClick() {

    if (
        document.body.dataset
            .orbonixOutsideClick
            === "true"
    ) {
        return;
    }

    document.body.dataset
        .orbonixOutsideClick =
        "true";


    document.addEventListener(
        "click",
        function(event) {

            const navigation =
                document.getElementById(
                    "orbonix-navigation"
                );

            if (!navigation) {
                return;
            }


            if (
                navigation.contains(
                    event.target
                )
            ) {
                return;
            }


            navigation
                .querySelectorAll(
                    ".orbonix-nav-item.open"
                )
                .forEach(item => {

                    item.classList.remove(
                        "open"
                    );

                });

        }
    );

}


/* =========================================================
   MAIN INITIALIZATION
========================================================= */

function initializeOrbonix() {

    initializeOrbonixNavigation();

    initializeOrbonixNavigationOutsideClick();

    initializeOrbonixButtons();

    initializeOrbonixSearch();

}


/* =========================================================
   PAGE LOAD
========================================================= */

if (
    document.readyState === "loading"
) {

    document.addEventListener(
        "DOMContentLoaded",
        initializeOrbonix
    );

} else {

    initializeOrbonix();

}


/* =========================================================
   SUPPORT DYNAMIC CONTENT
========================================================= */

const orbonixObserver =
    new MutationObserver(
        function() {

            initializeOrbonixButtons();

            initializeOrbonixSearch();

            if (
                !document.getElementById(
                    "orbonix-navigation"
                )
            ) {

                initializeOrbonixNavigation();

            }

        }
    );


/*

   Start observer after body exists.

*/

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

window.ORBONIX_BASE =
    ORBONIX_BASE;

window.ORBONIX_PAGES =
    ORBONIX_PAGES;

window.ORBONIX_NAVIGATION =
    ORBONIX_NAVIGATION;

window.searchOrbonix =
    searchOrbonix;

window.findOrbonixPage =
    findOrbonixPage;

window.initializeOrbonix =
    initializeOrbonix;

window.initializeOrbonixNavigation =
    initializeOrbonixNavigation;
