/* Local full-page translations. Routing keys, URLs and user input remain unchanged. */
(function () {
    'use strict';
    const supported = ['en', 'ru', 'es', 'fr', 'de'];
    const names = {en:'English',ru:'Русский',es:'Español',fr:'Français',de:'Deutsch'};
    const notices = {en:'Automatic translation',ru:'Машинный перевод',es:'Traducción automática',fr:'Traduction automatique',de:'Automatische Übersetzung'};
    const failures = {en:'Translation unavailable. Please try again.',ru:'Перевод недоступен. Попробуйте ещё раз.',es:'Traducción no disponible. Inténtalo de nuevo.',fr:'Traduction indisponible. Réessayez.',de:'Übersetzung nicht verfügbar. Bitte erneut versuchen.'};
    const normalize = text => text.replace(/\s+/g, ' ').trim();
    const originals = new WeakMap();
    const attributeOriginals = new WeakMap();
    const cache = {en:{}};
    let language = 'en', dictionary = {}, requestId = 0;
    const excluded = 'script,style,noscript,textarea,code,pre,[translate="no"],.notranslate,#orbonix-language-control';
    const attributes = ['alt','title','placeholder','aria-label'];
    function translate(text) {
        if (language === 'en') return text;
        const key = normalize(String(text));
        if (/^ORBONIX$/i.test(key)) return text;
        if (key.includes(' · ')) return key.split(' · ').map(translate).join(' · ');
        if (key.includes(' | ')) return key.split(' | ').map(translate).join(' | ');
        if (Object.hasOwn(dictionary,key)) return dictionary[key];
        if (key.endsWith(' Simulation')) return translate(key.slice(0,-11)) + ' ' + translate('Simulation');
        if (key.startsWith('Explore ')) return translate('Explore') + ' ' + translate(key.slice(8));
        const milestone = key.match(/^Complete (.+) quiz with (at least 50%|100%) correct\.$/);
        if (milestone) return translate('Quiz') + ': ' + translate(milestone[1]) + ' · ' + (milestone[2].includes('50')?'≥50%':'100%');
        if (key.startsWith('Pages in ')) return translate('Pages in') + ' ' + translate(key.slice(9));
        const count = key.match(/^(\d+) (pages?|questions?)$/i);
        if (count) return count[1] + ' ' + translate(count[2]);
        const satelliteCount = key.match(/^(\d+) satellites in this catalogue$/);
        if (satelliteCount) return satelliteCount[1] + ' ' + translate('satellites in this catalogue');
        const question = key.match(/^QUESTION (\d+\s*\/\s*\d+)$/);
        if (question) return translate('QUESTION') + ' ' + question[1];
        const approach = key.match(/^APPROACHING\s+(.+)$/);
        if (approach) return translate('APPROACHING') + ' ' + translate(approach[1]);
        return text;
    }
    window.orbonixTranslate = translate;
    function translateText(node) {
        if (!node.parentElement || node.parentElement.closest(excluded)) return;
        const current = node.nodeValue;
        let record = originals.get(node);
        // An application update creates a new English source, not a translation of a translation.
        if (!record || current !== record.output) record = {source:current,output:current};
        const translated = translate(record.source);
        const value = translated === record.source ? record.source : record.source.match(/^\s*/)[0] + translated.trim() + record.source.match(/\s*$/)[0];
        if (value !== current) node.nodeValue = value;
        record.output = value; originals.set(node,record);
    }
    function translateElement(element) {
        if (element.closest(excluded)) return;
        const records = attributeOriginals.get(element) || {};
        for (const attribute of attributes) {
            if (!element.hasAttribute(attribute)) continue;
            const current = element.getAttribute(attribute);
            let record = records[attribute];
            if (!record || current !== record.output) record = {source:current,output:current};
            const value = translate(record.source);
            if (value !== current) element.setAttribute(attribute,value);
            record.output = value; records[attribute] = record;
        }
        attributeOriginals.set(element,records);
    }
    function translateTree(root) {
        if (root.nodeType === Node.TEXT_NODE) { translateText(root); return; }
        if (root.nodeType !== Node.ELEMENT_NODE) return;
        if (root.closest(excluded)) return;
        translateElement(root);
        const walker = document.createTreeWalker(root,NodeFilter.SHOW_ELEMENT | NodeFilter.SHOW_TEXT, {
            acceptNode: node => node.nodeType === Node.ELEMENT_NODE && node.matches(excluded) ? NodeFilter.FILTER_REJECT : NodeFilter.FILTER_ACCEPT
        });
        while (walker.nextNode()) {
            if (walker.currentNode.nodeType === Node.TEXT_NODE) translateText(walker.currentNode);
            else translateElement(walker.currentNode);
        }
    }
    function start() {
        const nav = document.getElementById('orbonix-auto-navigation');
        if (!nav || document.getElementById('orbonix-language-control')) return;
        const control = document.createElement('div'); control.id = 'orbonix-language-control'; control.translate = false;
        const select = document.createElement('select'); select.id = 'orbonix-language'; select.setAttribute('aria-label','Language / Язык / Idioma / Langue / Sprache');
        for (const code of supported) {
            const option = document.createElement('option'); option.value = code; option.textContent = code.toUpperCase(); option.label = code.toUpperCase(); option.title = names[code]; select.appendChild(option);
        }
        const status = document.createElement('span'); status.id = 'orbonix-language-status'; status.setAttribute('role','status');
        control.append(select,status); nav.appendChild(control);
        let pending = new Set(), scheduled = false;
        const observer = new MutationObserver(records => {
            for (const record of records) {
                if (record.type === 'childList') record.addedNodes.forEach(node => pending.add(node));
                else pending.add(record.target);
            }
            if (scheduled || !pending.size) return;
            scheduled = true;
            requestAnimationFrame(() => {
                const roots = pending; pending = new Set(); scheduled = false;
                roots.forEach(node => { if (node.isConnected) translateTree(node); });
            });
        });
        observer.observe(document.documentElement,{subtree:true,childList:true,characterData:true,attributes:true,attributeFilter:attributes});
        async function changeLanguage(next) {
            if (!supported.includes(next)) return;
            const id = ++requestId;
            status.textContent = next === 'en' ? '' : '…';
            control.setAttribute('aria-busy',String(next !== 'en'));
            try {
                if (!cache[next]) {
                    const response = await fetch('/locales/' + next + '.json');
                    if (!response.ok) throw new Error('Translation unavailable');
                    const data = await response.json();
                    if (!data || typeof data !== 'object' || Array.isArray(data) || Object.values(data).some(value => typeof value !== 'string')) throw new Error('Invalid translation');
                    cache[next] = data;
                }
                if (id !== requestId) return;
                language = next; dictionary = cache[next]; select.value = next;
                document.documentElement.lang = next;
                translateTree(document.documentElement);
                status.textContent = ''; control.title = next === 'en' ? names.en : names[next] + ' · ' + notices[next];
                control.setAttribute('aria-busy','false');
                try { localStorage.setItem('orbonix-language',next); } catch (_) {}
                document.dispatchEvent(new CustomEvent('orbonix:languagechange',{detail:{language:next}}));
            } catch (_) {
                if (id !== requestId) return;
                select.value = language; status.textContent = failures[next]; control.setAttribute('aria-busy','false');
            }
        }
        window.orbonixSetLanguage = changeLanguage;
        select.addEventListener('change',() => { try { localStorage.setItem('orbonix-language-manual','1'); } catch (_) {} changeLanguage(select.value); });
        let saved = 'en'; try { saved = localStorage.getItem('orbonix-language') || 'en'; } catch (_) {}
        window.orbonixLanguageReady = changeLanguage(supported.includes(saved) ? saved : 'en').then(() => document.dispatchEvent(new Event('orbonix:languageready')));
    }
    if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded',start);
    else start();
})();
