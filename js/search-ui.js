/* Accessible search and complete page directory, backed only by search.js. */
(function () {
    function initializeOrbonixSearchUI() {
        const button = document.getElementById('orbonix-search-button');
        if (!button || document.getElementById('orbonix-search-dialog')) return;
        const dialog = document.createElement('dialog'); dialog.id = 'orbonix-search-dialog';
        dialog.setAttribute('aria-labelledby', 'orbonix-search-title');
        dialog.innerHTML = '<div class="orbonix-search-heading"><h2 id="orbonix-search-title">Search all pages</h2><button type="button" aria-label="Close search">Close</button></div><label class="orbonix-search-label" for="orbonix-search-input">Page, planet, moon or mission</label><input id="orbonix-search-input" type="search" autocomplete="off" placeholder="Search Orbonix"><p class="orbonix-result-count" role="status" aria-live="polite"></p><div class="orbonix-result-list"></div>';
        document.body.appendChild(dialog);
        const input = dialog.querySelector('input'), results = dialog.querySelector('.orbonix-result-list'), status = dialog.querySelector('[role="status"]');
        let previousOverflow;
        const render = () => window.renderOrbonixResults(results, input.value, status);
        button.addEventListener('click', () => {
            previousOverflow = document.body.style.overflow; document.body.style.overflow = 'hidden';
            input.value = ''; render(); dialog.showModal(); input.focus();
        });
        dialog.querySelector('button').addEventListener('click', () => dialog.close());
        dialog.addEventListener('click', e => { if (e.target === dialog) { const r = dialog.getBoundingClientRect(); if (e.clientX < r.left || e.clientX > r.right || e.clientY < r.top || e.clientY > r.bottom) dialog.close(); } });
        dialog.addEventListener('keydown', e => { if (e.key === 'Escape') { e.preventDefault(); dialog.close(); } });
        dialog.addEventListener('close', () => { document.body.style.overflow = previousOverflow || ''; button.focus(); });
        input.addEventListener('input', render);
        input.addEventListener('keydown', e => {
            if (e.key === 'ArrowDown') { e.preventDefault(); results.querySelector('a')?.focus(); }
            if (e.key === 'Enter') { e.preventDefault(); results.querySelector('a')?.click(); }
        });
        const directoryInput = document.getElementById('directory-search');
        if (directoryInput) {
            const directoryResults = document.getElementById('directory-results'), directoryStatus = document.getElementById('directory-count');
            directoryInput.value = new URLSearchParams(window.location.search).get('q') || '';
            const renderDirectory = () => window.renderOrbonixResults(directoryResults, directoryInput.value, directoryStatus);
            directoryInput.addEventListener('input', renderDirectory); renderDirectory();
        }
    }
    window.initializeOrbonixSearchUI = initializeOrbonixSearchUI;
    if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', initializeOrbonixSearchUI);
    else initializeOrbonixSearchUI();
})();

// The language module is shared by every page that loads the search interface.
(function () { const script = document.createElement("script"); script.src = "/js/language.js"; document.head.appendChild(script); })();
