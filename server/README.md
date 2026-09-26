# Accounts and scheduled news

The static site remains deployable as before. Account functionality requires deploying this Worker with a D1 database and an enabled email sender. Do not label registration as operational before completing and testing this setup.

The current connected Cloudflare account refused database creation (`10000 Authentication error`) and email configuration access (`2036 Unauthorized`). No database, sending domain, or production Worker was changed during this implementation.

## Activation

1. Grant the deployment connection Workers Scripts write, D1 write, and access to configure Email Service for `orbonix.net`.
2. Create D1 database `orbonix-accounts` and execute `server/schema.sql` against it.
3. Enable Cloudflare Email Service for `accounts.orbonix.net`, publish its required sending DNS records, and verify the sender `noreply@accounts.orbonix.net`. Email Routing to a fixed destination is not a substitute for transactional sending to account holders.
4. Install Wrangler v4. Copy `server/wrangler.example.jsonc` to `server/wrangler.jsonc`, replace its database ID, and verify the sender and site origin. Never put secrets in git.
5. Run `node scripts/build-assets.cjs`, then `npx wrangler deploy --config server/wrangler.jsonc`. Set the existing Git-connected Worker build command to build assets and its deploy command to use this configuration. Preserve its current custom domain.
6. Test registration and real email delivery, confirmation, login, photo upload, a quiz result, sign-out, and reset-password before announcing availability. Local tests use a captured-email adapter, not real delivery.

Verify that the Worker has sufficient CPU allowance for scrypt under load; do not reduce password hashing strength to fit a restrictive runtime quota. Changing a paid plan requires the owner's decision.

## Tests

Run `npm ci` and `npm test`. The integration test executes the production handler in a local Workers runtime with real D1 SQL and captured email messages. Its compatibility date is limited to 2026-08-06 by the pinned local runtime; production configuration uses the newer deployment date. The test does not verify live email delivery or deployed Cloudflare bindings.

## Behaviour

Passwords use scrypt with a unique random salt (N=32768,r=8,p=1). Only token hashes are stored. Cookies are Secure, HttpOnly, SameSite=Lax. Mutations require the exact configured Origin. Confirm/reset tokens expire after an hour and are single-use. Password reset revokes all sessions. Rate limits are enforced in D1. Personal profile responses are not cached. Avatars are limited to validated PNG/JPEG/WebP, resized by the UI to 256px, and stored with the account.

Quiz answers are scored against the server's canonical answer bank. Retries with the same attempt ID cannot duplicate an attempt. Achievements count best results, including 50% and 100% per quiz plus all-nine milestones. Percentages use all verified accounts as the denominator; no users means 0%. This is an educational quiz, not an anti-cheat examination (questions and correct answers are visible in the frontend).

Country comes from Cloudflare's registration request location, not citizenship. It chooses an initial supported language; manual choice overrides that default and persists on the account. Ambiguous/unsupported countries default to English. The account API never returns passwords or verification tokens.

The existing news page fetches recent headline, image, date and source metadata. It does not copy full articles. The Worker caches news in D1 and refreshes every 30 minutes; before the backend is enabled, the same existing page falls back to the public news API. Source outage shows saved news or the explicitly labelled editorial archive.

## Simulation data

`data/solar-system.json` contains a dated NASA/JPL satellite-catalogue snapshot and mean orbital elements, supplemented with existing approximate values for small-body systems. Missing elements are represented as unavailable, not invented. The model is educational, not a current ephemeris. Texture attribution appears on the simulation pages; unobserved surfaces are schematic. Update the snapshot when new discoveries or orbital elements are published.
