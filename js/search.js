/* =========================================================
   ORBONIX SEARCH + NAVIGATION + UNIVERSAL BUTTON SYSTEM
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
        category: "Main",
        keywords: "exploring space explore astronomy universe cosmos",
        description: "Explore space and the universe."
    },

    {
        title: "Gallery",
        url: `${ORBONIX_BASE}/Gallery/`,
        category: "Main",
        keywords: "gallery photos images pictures telescope observations",
        description: "Explore the ORBONIX space gallery."
    },

    {
        title: "Latest Space News",
        url: `${ORBONIX_BASE}/Latest-Space-News/`,
        category: "Main",
        keywords: "latest space news astronomy nasa esa discoveries",
        description: "Read the latest space news."
    },

    {
        title: "More About Orbonix",
        url: `${ORBONIX_BASE}/More-About-Orbonix/`,
        category: "Main",
        keywords: "about orbonix project website information",
        description: "Learn more about ORBONIX."
    },

    {
        title: "Solar System Simulation",
        url: `${ORBONIX_BASE}/Solar-System-Simulation/`,
        category: "Main",
        keywords: "solar system simulation planets orbit interactive",
        description: "Explore the interactive Solar System simulation."
    },


    /* =====================================================
       EXPLORING SPACE
    ===================================================== */

    {
        title: "Exploring Space",
        url: `${ORBONIX_BASE}/Exploring-Space/`,
        category: "Exploring Space",
        keywords: "exploring space astronomy universe cosmos",
        description: "Explore the universe."
    },

    {
        title: "Deep Space",
        url: `${ORBONIX_BASE}/Exploring-Space/Deep-Space/`,
        category: "Exploring Space",
        keywords: "deep space strange objects universe cosmos",
        description: "Explore mysterious objects in deep space."
    },

    {
        title: "Solar System",
        url: `${ORBONIX_BASE}/Exploring-Space/Solar-System/`,
        category: "Exploring Space",
        keywords: "solar system sun planets moons asteroids comets",
        description: "Explore the Solar System."
    },

    {
        title: "Space Missions",
        url: `${ORBONIX_BASE}/Exploring-Space/Space-Missions/`,
        category: "Exploring Space",
        keywords: "space missions nasa esa spacecraft rockets exploration",
        description: "Explore famous space missions."
    },

    {
        title: "Quizzes",
        url: `${ORBONIX_BASE}/Exploring-Space/Quizes/`,
        category: "Exploring Space",
        keywords: "quiz quizzes astronomy test space knowledge",
        description: "Test your astronomy knowledge."
    },

    {
        title: "Terms",
        url: `${ORBONIX_BASE}/Exploring-Space/Terms/`,
        category: "Exploring Space",
        keywords: "terms glossary dictionary astronomy definitions",
        description: "Explore space and astronomy terminology."
    },


    /* =====================================================
       SOLAR SYSTEM
    ===================================================== */

    {
        title: "Sun",
        url: `${ORBONIX_BASE}/Exploring-Space/Solar-System/Sun/`,
        category: "Solar System",
        keywords: "sun star solar flare sunspots corona solar wind",
        description: "Explore the Sun."
    },

    {
        title: "Mercury",
        url: `${ORBONIX_BASE}/Exploring-Space/Solar-System/Mercury/`,
        category: "Planets",
        keywords: "mercury planet smallest closest sun",
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
        keywords: "earth planet world life atmosphere oceans",
        description: "Explore Earth."
    },

    {
        title: "Mars",
        url: `${ORBONIX_BASE}/Exploring-Space/Solar-System/Mars/`,
        category: "Planets",
        keywords: "mars planet red planet rover phobos deimos",
        description: "Explore Mars."
    },

    {
        title: "Phobos",
        url: `${ORBONIX_BASE}/Exploring-Space/Solar-System/Mars/Phobos/`,
        category: "Mars",
        keywords: "phobos mars moon satellite",
        description: "Explore Phobos."
    },

    {
        title: "Deimos",
        url: `${ORBONIX_BASE}/Exploring-Space/Solar-System/Mars/Deimos/`,
        category: "Mars",
        keywords: "deimos mars moon satellite",
        description: "Explore Deimos."
    },

    {
        title: "Jupiter",
        url: `${ORBONIX_BASE}/Exploring-Space/Solar-System/Jupiter/`,
        category: "Planets",
        keywords: "jupiter gas giant largest planet great red spot moons",
        description: "Explore Jupiter."
    },

    {
        title: "Saturn",
        url: `${ORBONIX_BASE}/Exploring-Space/Solar-System/Saturn/`,
        category: "Planets",
        keywords: "saturn rings gas giant titan enceladus",
        description: "Explore Saturn."
    },

    {
        title: "Uranus",
        url: `${ORBONIX_BASE}/Exploring-Space/Solar-System/Uranus/`,
        category: "Planets",
        keywords: "uranus ice giant rings tilted planet",
        description: "Explore Uranus."
    },

    {
        title: "Neptune",
        url: `${ORBONIX_BASE}/Exploring-Space/Solar-System/Neptune/`,
        category: "Planets",
        keywords: "neptune ice giant blue planet winds",
        description: "Explore Neptune."
    },

    {
        title: "Dwarf Planets",
        url: `${ORBONIX_BASE}/Exploring-Space/Solar-System/Dwarf-Planets/`,
        category: "Solar System",
        keywords: "dwarf planets pluto ceres eris haumea makemake",
        description: "Explore dwarf planets."
    },

    {
        title: "Asteroid Belt",
        url: `${ORBONIX_BASE}/Exploring-Space/Solar-System/Asteroid-Belt/`,
        category: "Solar System",
        keywords: "asteroid belt asteroids mars jupiter",
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
        keywords: "oort cloud comets outer solar system",
        description: "Explore the Oort Cloud."
    },

    {
        title: "Planet X",
        url: `${ORBONIX_BASE}/Exploring-Space/Solar-System/Planet-X/`,
        category: "Solar System",
        keywords: "planet x planet nine hypothetical planet",
        description: "Explore the hypothetical Planet X."
    },


    /* =====================================================
       DEEP SPACE
    ===================================================== */

    {
        title: "Black Holes",
        url: `${ORBONIX_BASE}/Exploring-Space/Deep-Space/Blackholes/`,
        category: "Deep Space",
        keywords: "black holes black hole event horizon singularity gravity",
        description: "Explore black holes."
    },

    {
        title: "Cosmic Voids",
        url: `${ORBONIX_BASE}/Exploring-Space/Deep-Space/Cosmic-Voids/`,
        category: "Deep Space",
        keywords: "cosmic voids empty universe galaxies",
        description: "Explore cosmic voids."
    },

    {
        title: "Dark Energy",
        url: `${ORBONIX_BASE}/Exploring-Space/Deep-Space/Dark-Energy/`,
        category: "Deep Space",
        keywords: "dark energy universe expansion acceleration cosmology",
        description: "Explore dark energy."
    },

    {
        title: "Dark Matter",
        url: `${ORBONIX_BASE}/Exploring-Space/Deep-Space/Dark-Matter/`,
        category: "Deep Space",
        keywords: "dark matter gravity galaxies invisible matter",
        description: "Explore dark matter."
    },

    {
        title: "Galaxies",
        url: `${ORBONIX_BASE}/Exploring-Space/Deep-Space/Galaxies/`,
        category: "Deep Space",
        keywords: "galaxies galaxy milky way andromeda spiral elliptical",
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
        keywords: "rogue planets free floating planets wandering planets",
        description: "Explore rogue planets."
    },

    {
        title: "Stars",
        url: `${ORBONIX_BASE}/Exploring-Space/Deep-Space/Stars/`,
        category: "Deep Space",
        keywords: "stars star stellar evolution supernova neutron star white dwarf",
        description: "Explore stars."
    },

    {
        title: "Wormholes",
        url: `${ORBONIX_BASE}/Exploring-Space/Deep-Space/Wormholes/`,
        category: "Deep Space",
        keywords: "wormholes wormhole spacetime einstein rosen bridge",
        description: "Explore theoretical wormholes."
    },


    /* =====================================================
       SPACE MISSIONS
    ===================================================== */

    {
        title: "Apollo",
        url: `${ORBONIX_BASE}/Exploring-Space/Space-Missions/Apollo/`,
        category: "Space Missions",
        keywords: "apollo apollo 11 moon nasa lunar",
        description: "Explore the Apollo program."
    },

    {
        title: "Artemis",
        url: `${ORBONIX_BASE}/Exploring-Space/Space-Missions/Artemis/`,
        category: "Space Missions",
        keywords: "artemis moon lunar nasa mission",
        description: "Explore Artemis."
    },

    {
        title: "Cassini",
        url: `${ORBONIX_BASE}/Exploring-Space/Space-Missions/Cassini/`,
        category: "Space Missions",
        keywords: "cassini saturn titan nasa esa",
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
        keywords: "new horizons pluto kuiper belt nasa",
        description: "Explore New Horizons."
    },

    {
        title: "Voyager",
        url: `${ORBONIX_BASE}/Exploring-Space/Space-Missions/Voyager/`,
        category: "Space Missions",
        keywords: "voyager voyager 1 voyager 2 interstellar nasa",
        description: "Explore Voyager."
    },


    /* =====================================================
       QUIZZES
    ===================================================== */

    {
        title: "Black Holes Quiz",
        url: `${ORBONIX_BASE}/Exploring-Space/Quizes/Black-Holes-Quiz/`,
        category: "Quiz",
        keywords: "black holes quiz test",
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
        keywords: "final quiz mega quiz ultimate space test",
        description: "Take the ultimate ORBONIX space quiz."
    },

    {
        title: "Galactic Quiz",
        url: `${ORBONIX_BASE}/Exploring-Space/Quizes/Galactic-Quiz/`,
        category: "Quiz",
        keywords: "galactic quiz galaxy quiz universe test",
        description: "Test your knowledge of galaxies."
    },

    {
        title: "Moons Quiz",
        url: `${ORBONIX_BASE}/Exploring-Space/Quizes/Moons-Quiz/`,
        category: "Quiz",
        keywords: "moons quiz moon satellites test",
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
        keywords: "stars quiz stellar supernova test",
        description: "Test your knowledge of stars."
    },

    {
        title: "Sun Quiz",
        url: `${ORBONIX_BASE}/Exploring-Space/Quizes/Sun-Quiz/`,
        category: "Quiz",
        keywords: "sun quiz solar flares sunspots test",
        description: "Test your knowledge of the Sun."
    },

    {
        title: "Telescope Quiz",
        url: `${ORBONIX_BASE}/Exploring-Space/Quizes/Telescope-Quiz/`,
        category: "Quiz",
        keywords: "telescope quiz astronomy observation test",
        description: "Test your knowledge of telescopes."
    },


    /* =====================================================
       ORBONIX
    ===================================================== */

    {
        title: "Orbonix Fotos and Telescope",
        url: `${ORBONIX_BASE}/More-About-Orbonix/Orbonix-Fotos-and-Telescope/`,
        category: "Orbonix",
        keywords: "orbonix fotos telescope photos photography",
        description: "Explore ORBONIX telescope photos."
    },

    {
        title: "Site Achievements",
        url: `${ORBONIX_BASE}/More-About-Orbonix/Site-Achivments/`,
        category: "Orbonix",
        keywords: "site achievements milestones orbonix",
        description: "Explore ORBONIX achievements."
    }

];


/* =========================================================
   NAVIGATION TREE
========================================================= */

const ORBONIX_NAVIGATION = {

    "Exploring Space": {

        page: "Exploring Space",

        children: {

            "Deep Space": {

                page: "Deep Space",

                children: [
                    "Black Holes",
                    "Cosmic Voids",
                    "Dark Energy",
                    "Dark Matter",
                    "Galaxies",
                    "Nebulae",
                    "Quasars",
                    "Rogue Planets",
                    "Stars",
                    "Wormholes"
                ]

            },

            "Solar System": {

                page: "Solar System",

                children: [
                    "Sun",
                    "Mercury",
                    "Venus",
                    "Earth",
                    "Mars",
                    "Jupiter",
                    "Saturn",
                    "Uranus",
                    "Neptune",
                    "Dwarf Planets",
                    "Asteroid Belt",
                    "Kuiper Belt",
                    "Oort Cloud",
                    "Planet X"
                ]

            },

            "Space Missions": {

                page: "Space Missions",

                children: [
                    "Apollo",
                    "Artemis",
                    "Cassini",
                    "James Webb Space Telescope",
                    "New Horizons",
                    "Voyager"
                ]

            },

            "Quizzes": {

                page: "Quizzes",

                children: [
                    "Black Holes Quiz",
                    "Comets Quiz",
                    "Final Quiz",
                    "Galactic Quiz",
                    "Moons Quiz",
                    "Planet Quiz",
                    "Stars Quiz",
                    "Sun Quiz",
                    "Telescope Quiz"
                ]

            },

            "Terms": {

                page: "Terms",

                children: []

            }

        }

    },

    "More About Orbonix": {

        page: "More About Orbonix",

        children: [
            "Orbonix Fotos and Telescope",
            "Site Achievements"
        ]

    }

};


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

            matrix[i][j] =
                b[j - 1] === a[j - 1]
                    ? matrix[i - 1][j - 1]
                    : Math.min(
                        matrix[i - 1][j] + 1,
                        matrix[i][j - 1] + 1,
                        matrix[i - 1][j - 1] + 1
                    );

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

        if (word.length < 2) continue;

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
        .filter(page =>
            page.score > 0
        )
        .sort((a, b) =>
            b.score - a.score
        )
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
   UNIVERSAL BUTTONS
========================================================= */

function initializeOrbonixButtons() {

    document
        .querySelectorAll("[data-page]")
        .forEach(button => {

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

            if (!pageName) return;

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

                    }

                }
            );

        });

}


/* =========================================================
   SEARCH UI
========================================================= */

function initializeOrbonixSearch() {

    document
        .querySelectorAll(
            "[data-orbonix-search]"
        )
        .forEach(input => {

            if (
                input.dataset.orbonixSearchInitialized
                === "true"
            ) {
                return;
            }

            input.dataset.orbonixSearchInitialized =
                "true";


            /* ENTER */

            input.addEventListener(
                "keydown",
                function(event) {

                    if (
                        event.key === "Enter"
                    ) {

                        event.preventDefault();

                        const query =
                            this.value.trim();

                        if (!query) return;

                        const results =
                            searchOrbonix(
                                query
                            );

                        if (
                            results.length
                        ) {

                            window.location.href =
                                results[0].url;

                        }

                    }


                    /* ESC */

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


            /* LIVE SEARCH */

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
                                ${escapeHTML(
                                    page.title
                                )}
                            </strong>

                            <small>
                                ${escapeHTML(
                                    page.category
                                )}
                            </small>

                            <span>
                                ${escapeHTML(
                                    page.description
                                )}
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
   AUTOMATIC NAVIGATION
========================================================= */

function createNavigationItem(
    title,
    data
) {

    const wrapper =
        document.createElement("div");

    wrapper.className =
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
        title;

    link.href =
        "#";


    link.addEventListener(
        "click",
        function(event) {

            event.preventDefault();

            const page =
                findOrbonixPage(
                    data.page || title
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
        data.children &&
        (
            Array.isArray(data.children)
            ? data.children.length > 0
            : Object.keys(data.children).length > 0
        )
    ) {

        const arrow =
            document.createElement("button");

        arrow.className =
            "orbonix-nav-arrow";

        arrow.type =
            "button";

        arrow.innerHTML =
            "▼";


        const children =
            document.createElement("div");

        children.className =
            "orbonix-nav-children";

        children.style.display =
            "none";


        arrow.addEventListener(
            "click",
            function(event) {

                event.stopPropagation();

                const opened =
                    children.style.display
                    !== "none";

                children.style.display =
                    opened
                        ? "none"
                        : "block";

                arrow.innerHTML =
                    opened
                        ? "▼"
                        : "▲";

            }
        );


        row.appendChild(arrow);


        if (
            Array.isArray(
                data.children
            )
        ) {

            data.children.forEach(
                childTitle => {

                    const childData = {
                        page: childTitle,
                        children: []
                    };

                    children.appendChild(
                        createNavigationItem(
                            childTitle,
                            childData
                        )
                    );

                }
            );

        } else {

            Object.entries(
                data.children
            ).forEach(
                ([childTitle, childData]) => {

                    children.appendChild(
                        createNavigationItem(
                            childTitle,
                            childData
                        )
                    );

                }
            );

        }


        wrapper.appendChild(
            children
        );

    }


    wrapper.appendChild(
        row
    );


    return wrapper;

}


/* =========================================================
   INITIALIZE NAVIGATION
========================================================= */

function initializeOrbonixNavigation() {

    const containers =
        document.querySelectorAll(
            "[data-orbonix-navigation]"
        );

    containers.forEach(container => {

        if (
            container.dataset.orbonixNavigationInitialized
            === "true"
        ) {
            return;
        }

        container.dataset.orbonixNavigationInitialized =
            "true";

        container.innerHTML = "";


        Object.entries(
            ORBONIX_NAVIGATION
        ).forEach(
            ([title, data]) => {

                container.appendChild(
                    createNavigationItem(
                        title,
                        data
                    )
                );

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
   INITIALIZE EVERYTHING
========================================================= */

function initializeOrbonix() {

    initializeOrbonixButtons();

    initializeOrbonixSearch();

    initializeOrbonixNavigation();

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
   DYNAMIC CONTENT SUPPORT
========================================================= */

const orbonixObserver =
    new MutationObserver(() => {

        initializeOrbonixButtons();

        initializeOrbonixSearch();

        initializeOrbonixNavigation();

    });


orbonixObserver.observe(
    document.body,
    {
        childList: true,
        subtree: true
    }
);


/* =========================================================
   GLOBAL API
========================================================= */

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
