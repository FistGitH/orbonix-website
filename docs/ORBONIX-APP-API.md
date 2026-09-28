# Orbonix App API

Base URL: `https://orbonix.net/api/app`

The website and native apps use the same D1 `users` records. Website sessions remain cookie-based. Native apps use a Bearer token.

## Authentication

### POST /register
JSON: `{"firstName":"Alex","lastName":"Example","email":"a@example.com","password":"12+ characters","language":"en","deviceName":"iPhone"}`

Returns `token`, `expiresIn` (seconds), and `user`.

### POST /login
JSON: `{"email":"a@example.com","password":"...","deviceName":"iPhone"}`

Returns `token`, `expiresIn`, and `user`.

For authenticated endpoints send:
`Authorization: Bearer <token>`

Tokens expire after 30 days. Store the token in the platform secure store (iOS Keychain / Android Keystore), not PlayerPrefs.

### POST /logout
Revokes the current Bearer token.

## Account

- `GET /me` — profile + quiz history
- `POST|PATCH /profile` — `{"firstName":"...","lastName":"..."}`
- `GET /avatar` — profile image bytes
- `POST /avatar` — `{"image":"data:image/jpeg;base64,..."}`

## Quiz sync

### POST /quiz
`{"quiz":"Planet Quiz","percent":80}`

The same `quiz_results` table is used by website and app.

## Observation Log

- `GET /observations`
- `POST /observations`
- `PATCH /observations/{id}` — favorite/pinned state
- `DELETE /observations/{id}`
- `GET /observation-photo/{id}`
- `POST /observation-photo/{id}`

Observation JSON creation fields:
`objectName`, `observedAt`, `location`, `conditions`, `notes`.

## Unity security

Never embed Cloudflare credentials, D1 credentials, password hashes, or server secrets in the Unity project. Unity talks only to the HTTPS API. The server stores only a SHA-256-derived hash of each app session token.
