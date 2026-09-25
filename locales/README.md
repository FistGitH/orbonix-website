# Website languages

The language menu supports English (original content), Russian, Spanish and French.
Translations are stored locally in JSON dictionaries keyed by normalized English text.
No translation API, credentials or external scripts are used by visitors.

`js/language.js` translates text and accessibility attributes, observes new content
(including quiz questions and search results), and restores the original English
when EN is selected. It never changes route keys, URLs, form input or executable code.
The saved choice is shared across pages. Search matches both English and translated
page titles. Simulation canvas labels explicitly use the same dictionary.

Translations were generated with Cloudflare Workers AI and include manual terminology
corrections. They are machine translations, not professionally reviewed translations.
When English content changes, add its normalized text and translations to all three
dictionaries. Keep the ORBONIX brand, proper identifiers and numerical facts intact.

To exclude content from translation, add `translate="no"` to its containing element.
