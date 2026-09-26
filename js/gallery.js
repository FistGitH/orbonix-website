/* =========================================================
   ORBONIX UNIVERSAL PAGE SYSTEM
   Internal navigation never uses hard-coded domain URLs.
========================================================= */


/* =========================================================
   FILTER SYSTEM
========================================================= */

const filters =
    document.querySelectorAll(
        ".filter"
    );


const cards =
    document.querySelectorAll(
        ".card"
    );


const noResults =
    document.getElementById(
        "noResults"
    );


filters.forEach(
    filter => {

        filter.addEventListener(
            "click",
            () => {

                filters.forEach(
                    item => {

                        item.classList.remove(
                            "active"
                        );

                    }
                );


                filter.classList.add(
                    "active"
                );


                const category =
                    filter.dataset.filter;


                let visible = 0;


                cards.forEach(
                    card => {

                        const match =
                            category === "all" ||
                            card.dataset.category ===
                            category;


                        if(match){

                            card.style.display =
                                "";

                            visible++;

                        }
                        else{

                            card.style.display =
                                "none";

                        }

                    }
                );


                noResults.style.display =
                    visible === 0
                    ? "block"
                    : "none";

            }
        );

    }
);
