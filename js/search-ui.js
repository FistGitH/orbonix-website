/* =========================================================
   ORBONIX GLOBAL SEARCH UI
========================================================= */

(function () {

    /* =====================================================
       CSS
    ===================================================== */

    const style = document.createElement("style");

    style.textContent = `

    /* =========================================
       SEARCH BUTTON
    ========================================= */

    #orbonix-search-button {

        position: fixed;

        top: 22px;
        right: 22px;

        width: 48px;
        height: 48px;

        border-radius: 50%;

        border: 1px solid rgba(180,195,255,0.35);

        background: rgba(8,12,28,0.55);

        backdrop-filter: blur(14px);
        -webkit-backdrop-filter: blur(14px);

        color: white;

        display: flex;

        align-items: center;
        justify-content: center;

        cursor: pointer;

        z-index: 999999;

        box-shadow:
            0 0 20px rgba(80,100,255,0.08);

        transition:
            transform 0.2s ease,
            background 0.25s ease,
            border-color 0.25s ease,
            box-shadow 0.25s ease;
    }


    #orbonix-search-button:hover {

        transform: scale(1.08);

        background:
            rgba(80,100,255,0.16);

        border-color:
            rgba(200,210,255,0.8);

        box-shadow:
            0 0 25px rgba(100,130,255,0.25),
            0 0 60px rgba(70,90,255,0.08);
    }


    #orbonix-search-button svg {

        width: 21px;
        height: 21px;

        stroke: white;

        stroke-width: 2;

        fill: none;

        stroke-linecap: round;
        stroke-linejoin: round;
    }


    /* =========================================
       SEARCH OVERLAY
    ========================================= */

    #orbonix-search-overlay {

        position: fixed;

        inset: 0;

        background:
            rgba(1,3,10,0.72);

        backdrop-filter: blur(14px);
        -webkit-backdrop-filter: blur(14px);

        display: flex;

        align-items: flex-start;
        justify-content: center;

        padding-top: 120px;

        opacity: 0;

        visibility: hidden;

        pointer-events: none;

        transition:
            opacity 0.25s ease,
            visibility 0.25s ease;

        z-index: 999998;
    }


    #orbonix-search-overlay.active {

        opacity: 1;

        visibility: visible;

        pointer-events: auto;
    }


    /* =========================================
       SEARCH PANEL
    ========================================= */

    .orbonix-search-panel {

        width: min(720px, calc(100% - 30px));

        background:
            rgba(10,14,30,0.88);

        border:
            1px solid rgba(170,190,255,0.28);

        border-radius:
            22px;

        padding:
            24px;

        box-shadow:

            0 25px 80px
            rgba(0,0,0,0.55),

            0 0 50px
            rgba(70,90,255,0.08);

        transform:
            translateY(-20px)
            scale(0.98);

        transition:
            transform 0.25s ease;
    }


    #orbonix-search-overlay.active
    .orbonix-search-panel {

        transform:
            translateY(0)
            scale(1);
    }


    /* =========================================
       SEARCH HEADER
    ========================================= */

    .orbonix-search-header {

        display: flex;

        align-items: center;

        justify-content: space-between;

        margin-bottom: 18px;
    }


    .orbonix-search-title {

        color: white;

        font-size: 22px;

        font-weight: 700;

        letter-spacing: 0.04em;
    }


    .orbonix-search-close {

        width: 38px;
        height: 38px;

        border-radius: 50%;

        border:
            1px solid rgba(255,255,255,0.18);

        background:
            rgba(255,255,255,0.05);

        color: white;

        font-size: 22px;

        cursor: pointer;

        display: flex;

        align-items: center;
        justify-content: center;

        transition:
            background 0.2s ease,
            transform 0.2s ease;
    }


    .orbonix-search-close:hover {

        background:
            rgba(255,255,255,0.12);

        transform:
            rotate(90deg);
    }


    /* =========================================
       INPUT
    ========================================= */

    .orbonix-search-input-wrapper {

        display: flex;

        align-items: center;

        gap: 12px;

        padding:
            0 18px;

        height: 58px;

        border-radius:
            15px;

        background:
            rgba(255,255,255,0.055);

        border:
            1px solid rgba(170,190,255,0.25);
    }


    .orbonix-search-input-wrapper svg {

        width: 21px;
        height: 21px;

        stroke:
            rgba(255,255,255,0.65);

        fill: none;

        stroke-width: 2;

        stroke-linecap: round;
        stroke-linejoin: round;

        flex-shrink: 0;
    }


    #orbonix-search-input {

        width: 100%;

        height: 100%;

        border: none;

        outline: none;

        background: transparent;

        color: white;

        font-size: 17px;
    }


    #orbonix-search-input::placeholder {

        color:
            rgba(255,255,255,0.42);
    }


    /* =========================================
       RESULTS
    ========================================= */

    #orbonix-search-results {

        margin-top: 18px;

        max-height: 420px;

        overflow-y: auto;
    }


    .orbonix-search-result {

        display: block;

        padding: 17px;

        margin-bottom: 10px;

        border-radius: 13px;

        background:
            rgba(255,255,255,0.035);

        border:
            1px solid rgba(255,255,255,0.08);

        color: white;

        text-decoration: none;

        transition:
            background 0.2s ease,
            transform 0.2s ease,
            border-color 0.2s ease;
    }


    .orbonix-search-result:hover {

        transform:
            translateX(4px);

        background:
            rgba(100,120,255,0.10);

        border-color:
            rgba(160,180,255,0.35);
    }


    .orbonix-search-result-title {

        font-size: 17px;

        font-weight: 700;

        margin-bottom: 5px;
    }


    .orbonix-search-result-description {

        color:
            rgba(255,255,255,0.55);

        font-size: 14px;

        line-height: 1.5;
    }


    .orbonix-search-empty {

        text-align: center;

        padding: 25px;

        color:
            rgba(255,255,255,0.45);

        font-size: 15px;
    }


    /* =========================================
       MOBILE
    ========================================= */

    @media (max-width: 600px) {

        #orbonix-search-button {

            top: 14px;
            right: 14px;

            width: 44px;
            height: 44px;
        }

        #orbonix-search-overlay {

            padding-top: 80px;
        }

        .orbonix-search-panel {

            padding: 18px;

            border-radius: 18px;
        }

        .orbonix-search-title {

            font-size: 19px;
        }

    }

    `;

    document.head.appendChild(style);


    /* =====================================================
       SEARCH BUTTON
    ===================================================== */

    const button = document.createElement("button");

    button.id = "orbonix-search-button";

    button.setAttribute(
        "aria-label",
        "Search ORBONIX"
    );

    button.innerHTML = `

        <svg viewBox="0 0 24 24">

            <circle
                cx="11"
                cy="11"
                r="7">
            </circle>

            <line
                x1="16.5"
                y1="16.5"
                x2="21"
                y2="21">
            </line>

        </svg>

    `;

    document.body.appendChild(button);


    /* =====================================================
       OVERLAY
    ===================================================== */

    const overlay =
        document.createElement("div");

    overlay.id =
        "orbonix-search-overlay";

    overlay.innerHTML = `

        <div class="orbonix-search-panel">

            <div class="orbonix-search-header">

                <div class="orbonix-search-title">
                    Search ORBONIX
                </div>

                <button
                    class="orbonix-search-close"
                    aria-label="Close search">

                    ×

                </button>

            </div>


            <div class="orbonix-search-input-wrapper">

                <svg viewBox="0 0 24 24">

                    <circle
                        cx="11"
                        cy="11"
                        r="7">
                    </circle>

                    <line
                        x1="16.5"
                        y1="16.5"
                        x2="21"
                        y2="21">
                    </line>

                </svg>


                <input
                    id="orbonix-search-input"
                    type="text"
                    autocomplete="off"
                    placeholder="Search planets, galaxies, missions..."
                >

            </div>


            <div id="orbonix-search-results">

                <div class="orbonix-search-empty">
                    Start typing to search ORBONIX.
                </div>

            </div>

        </div>

    `;

    document.body.appendChild(overlay);


    /* =====================================================
       ELEMENTS
    ===================================================== */

    const closeButton =
        overlay.querySelector(
            ".orbonix-search-close"
        );

    const input =
        overlay.querySelector(
            "#orbonix-search-input"
        );

    const results =
        overlay.querySelector(
            "#orbonix-search-results"
        );


    /* =====================================================
       OPEN
    ===================================================== */

    function openSearch() {

        overlay.classList.add("active");

        setTimeout(() => {

            input.focus();

        }, 100);

    }


    /* =====================================================
       CLOSE
    ===================================================== */

    function closeSearch() {

        overlay.classList.remove("active");

        input.value = "";

        results.innerHTML = `

            <div class="orbonix-search-empty">
                Start typing to search ORBONIX.
            </div>

        `;

    }


    button.addEventListener(
        "click",
        openSearch
    );

    closeButton.addEventListener(
        "click",
        closeSearch
    );


    /* =====================================================
       CLICK OUTSIDE
    ===================================================== */

    overlay.addEventListener(
        "click",
        function (event) {

            if (
                event.target === overlay
            ) {

                closeSearch();

            }

        }
    );


    /* =====================================================
       ESC
    ===================================================== */

    document.addEventListener(
        "keydown",
        function (event) {

            if (
                event.key === "Escape" &&
                overlay.classList.contains("active")
            ) {

                closeSearch();

            }

        }
    );


    /* =====================================================
       SEARCH
    ===================================================== */

    input.addEventListener(
        "input",
        function () {

            const query =
                input.value
                    .trim()
                    .toLowerCase();


            if (!query) {

                results.innerHTML = `

                    <div class="orbonix-search-empty">
                        Start typing to search ORBONIX.
                    </div>

                `;

                return;

            }


            if (
                typeof searchOrbonix !==
                "function"
            ) {

                results.innerHTML = `

                    <div class="orbonix-search-empty">
                        Search system is loading...
                    </div>

                `;

                return;

            }


            const found =
                searchOrbonix(query);


            results.innerHTML = "";


            if (found.length === 0) {

                results.innerHTML = `

                    <div class="orbonix-search-empty">
                        No results found for
                        "${query}"
                    </div>

                `;

                return;

            }


            found.forEach(
                function (page) {

                    const link =
                        document.createElement(
                            "a"
                        );

                    link.className =
                        "orbonix-search-result";

                    link.href =
                        page.url;


                    link.innerHTML = `

                        <div class="
                            orbonix-search-result-title
                        ">
                            ${page.title}
                        </div>

                        <div class="
                            orbonix-search-result-description
                        ">
                            ${page.description}
                        </div>

                    `;

                    results.appendChild(
                        link
                    );

                }
            );

        }
    );


})();
