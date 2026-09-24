// Run with: node scripts/check-links.cjs
const assert = require('node:assert/strict');
const fs = require('node:fs');
const path = require('node:path');
const vm = require('node:vm');
const root = path.resolve(__dirname, '..');
const walk = directory => fs.readdirSync(directory, { withFileTypes: true }).flatMap(entry =>
    entry.name === '.git' ? [] : entry.isDirectory()
        ? walk(path.join(directory, entry.name)) : [path.join(directory, entry.name)]);
const htmlFiles = walk(root).filter(file => /\.html$/i.test(file));
const source = fs.readFileSync(path.join(root, 'js/search.js'), 'utf8');
const elements = [];
const context = {
    URL, console, window: { location: {} },
    document: { readyState: 'loading', body: null,
        addEventListener() {}, querySelectorAll: () => elements },
    MutationObserver: class { observe() {} }
};
vm.createContext(context);
vm.runInContext(source, context);
const pages = context.window.ORBONIX_PAGES;
const byTitle = new Map(pages.map(page => [page.title, page]));
assert.equal(byTitle.size, pages.length, 'Duplicate catalog key');
const byPath = new Map(pages.map(page => [decodeURIComponent(new URL(page.url).pathname), page]));
assert.equal(context.window.searchOrbonix('').length, htmlFiles.length, 'Empty search must list every page');
assert.ok(context.window.searchOrbonix('moons').length > 20, 'Satellite pages must be searchable by group');
assert.equal(context.window.findOrbonixPage('Mar'), null, 'Navigation must not guess a page');
assert.equal(byPath.size, pages.length, 'Duplicate catalog URL');
for (const page of pages) {
    const url = new URL(page.url);
    assert.equal(url.origin, 'https://orbonix.net');
    const file = path.join(root, decodeURIComponent(url.pathname), 'index.html');
    assert.ok(fs.existsSync(file), `Missing target: ${page.title}: ${file}`);
    if (page.parent) assert.ok(byTitle.has(page.parent), `Missing parent: ${page.parent}`);
}
let links = 0;
const unavailable = [];
for (const file of htmlFiles) {
    const html = fs.readFileSync(file, 'utf8');
    assert.match(html, /<meta\b[^>]*name="viewport"[^>]*width=device-width/);
    assert.match(html, /<link\b[^>]*rel="icon"[^>]*href="\/favicon.png"/);
    assert.match(html, /<link\b[^>]*rel="apple-touch-icon"[^>]*href="\/favicon.png"/);
    assert.match(html, /<link\b[^>]*href="\/css\/site.css"/);
    assert.equal((html.match(/src="\/js\/search.js"/g) || []).length, 1);
    assert.equal((html.match(/src="\/js\/search-ui.js"/g) || []).length, 1);
    for (const script of html.matchAll(/<script\b[^>]*>([\s\S]*?)<\/script>/gi)) new vm.Script(script[1], {filename:file});
    let keyed = false;
    const tokens = html.match(/<!--[\s\S]*?-->|<script\b[^>]*>[\s\S]*?<\/script>|<style\b[^>]*>[\s\S]*?<\/style>|<[a-z][^>]*>/gi) || [];
    for (const token of tokens) {
        if (/^<(?:!--|script|style)/i.test(token)) continue;
        const attrs = Object.fromEntries([...token.matchAll(/([\w:-]+)\s*=\s*(["'])([\s\S]*?)\2/g)].map(m => [m[1], m[3].replaceAll('&amp;', '&')]));
        if (attrs['data-orbonix-missing']) {
            assert.equal(attrs['aria-disabled'], 'true');
            assert.ok(!attrs.href && !attrs.onclick && !attrs['data-page']);
            unavailable.push({ file: path.relative(root, file), destination: attrs['data-orbonix-missing'] });
        }
        if (attrs['data-page']) {
            keyed = true;
            const page = byTitle.get(attrs['data-page']);
            assert.ok(page, `Unknown key ${attrs['data-page']} in ${file}`);
            if (/^<a\b/i.test(token)) {
                assert.ok(attrs.href, `Missing fallback href in ${file}`);
                const url = new URL(attrs.href);
                assert.equal(decodeURIComponent(url.pathname), decodeURIComponent(new URL(page.url).pathname));
                assert.equal(url.origin, 'https://orbonix.net');
            }
            links++;
        }
        if (!/^<a\b/i.test(token) || !attrs.href || /^(?:#|mailto:|tel:|data:)/i.test(attrs.href)) continue;
        assert.ok(!/^javascript:goTo/.test(attrs.href), `Old JS link in ${file}`);
        const url = new URL(attrs.href, 'https://orbonix.net/');
        assert.ok(!(url.hostname === 'sites.google.com' && url.pathname.startsWith('/view/kosmolearn')), `Legacy site link in ${file}`);
        if (!['orbonix.net', 'www.orbonix.net'].includes(url.hostname)) continue;
        if (/\.(?:png|jpe?g|gif|svg|webp|ico|css|js|pdf|zip|mp[34])$/i.test(url.pathname)) continue;
        assert.ok(attrs['data-page'], `Unkeyed internal link ${attrs.href} in ${file}`);
        assert.ok(byPath.has(decodeURIComponent(url.pathname)), `Unknown URL ${attrs.href}`);
    }
    if (keyed) assert.match(html, /<script\b[^>]*src=["']\/js\/search\.js["']/i, `Missing search.js in ${file}`);
}

// Runtime checks: exact navigation keys, native anchor behavior, suffixes and idempotence.
function element(tagName, key, href) {
    const listeners = [];
    return { tagName, dataset: {}, style: {}, listeners,
        getAttribute: name => name === 'data-page' ? key : name === 'href' ? href : null,
        addEventListener: (type, callback) => listeners.push({ type, callback }) };
}
const anchor = element('A', 'Earth', 'https://orbonix.net/old?view=full#facts');
const button = element('BUTTON', 'Mars');
const unknown = element('BUTTON', 'Mar');
elements.push(anchor, button, unknown);
vm.runInContext('initializeOrbonixButtons()', context);
assert.equal(anchor.href, byTitle.get('Earth').url + '?view=full#facts');
assert.equal(anchor.listeners.length, 0, 'Anchors must use native navigation');
assert.equal(button.listeners.length, 1);
button.listeners[0].callback();
assert.equal(context.window.location.href, byTitle.get('Mars').url);
assert.equal(unknown.listeners.length, 0, 'Unknown navigation keys must not fuzzy-match');
vm.runInContext('initializeOrbonixButtons()', context);
assert.equal(button.listeners.length, 1, 'Duplicate listeners');
console.log(JSON.stringify({ htmlFiles: htmlFiles.length, catalogPages: pages.length, keyedLinks: links, unavailable, runtimeChecks: 'passed' }, null, 2));
