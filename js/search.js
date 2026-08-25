const ORBONIX_PAGES = [
    {
        title: "Home",
        description: "The main Orbonix space and astronomy page.",
        url: "/"
    },

    {
        title: "Exploring Space",
        description: "Explore space, astronomy and the universe.",
        url: "/Exploring%20Space/"
    },

    {
        title: "Space Missions",
        description: "Discover famous and important space missions.",
        url: "/Exploring%20Space/Space%20Missions/"
    },

    {
        title: "Solar System",
        description: "Explore the planets and objects of our Solar System.",
        url: "/Exploring%20Space/Solar%20System/"
    },

    {
        title: "Gallery",
        description: "Explore the Orbonix space photography gallery.",
        url: "/Gallery/"
    },

    {
        title: "Latest Space News",
        description: "The latest news and discoveries from space.",
        url: "/Latest%20Space%20News/"
    },

    {
        title: "More About Orbonix",
        description: "Learn more about Orbonix and the project.",
        url: "/More%20About%20Orbonix/"
    },

    {
        title: "Solar System Simulation",
        description: "Interactive Solar System simulation.",
        url: "/Solar%20System%20Simulation/"
    }
];

function searchOrbonix(query) {

    query = query.trim().toLowerCase();

    if (!query) {
        return [];
    }

    return ORBONIX_PAGES.filter(page => {

        const text = (
            page.title + " " +
            page.description
        ).toLowerCase();

        return text.includes(query);
    });
}
