import { scrypt as scryptCallback, timingSafeEqual } from "node:crypto";
import { promisify } from "node:util";
import { ACHIEVEMENTS, earnedAchievements } from "./achievements.mjs";
import quizBank from "./quiz-bank.json" with { type: "json" };
const scrypt = promisify(scryptCallback),
  encoder = new TextEncoder();
const langs = ["en", "ru", "es", "fr", "de"];
const now = () => Math.floor(Date.now() / 1000);
const token = () =>
  Array.from(crypto.getRandomValues(new Uint8Array(32)), (b) =>
    b.toString(16).padStart(2, "0"),
  ).join("");
const digest = async (s) =>
  Array.from(
    new Uint8Array(await crypto.subtle.digest("SHA-256", encoder.encode(s))),
    (b) => b.toString(16).padStart(2, "0"),
  ).join("");
const json = (data, status = 200, extra = {}) =>
  Response.json(data, {
    status,
    headers: {
      "Cache-Control": "no-store",
      "X-Content-Type-Options": "nosniff",
      ...extra,
    },
  });
const fail = (message, status = 400) => {
  throw Object.assign(new Error(message), { status });
};
export function countryLanguage(country) {
  if (["RU", "BY", "KZ", "KG"].includes(country)) return "ru";
  if (["DE", "AT", "LI"].includes(country)) return "de";
  if (
    [
      "FR",
      "BE",
      "MC",
      "SN",
      "CI",
      "CD",
      "CG",
      "CM",
      "GA",
      "BF",
      "ML",
      "NE",
      "TG",
      "BJ",
      "GN",
    ].includes(country)
  )
    return "fr";
  if (
    [
      "ES",
      "MX",
      "AR",
      "BO",
      "CL",
      "CO",
      "CR",
      "CU",
      "DO",
      "EC",
      "GT",
      "HN",
      "NI",
      "PA",
      "PE",
      "PY",
      "SV",
      "UY",
      "VE",
      "GQ",
    ].includes(country)
  )
    return "es";
  return "en";
}
export async function hashPassword(password) {
  const salt = token();
  const hash = await scrypt(password, salt, 64, {
    N: 32768,
    r: 8,
    p: 1,
    maxmem: 64 * 1024 * 1024,
  });
  return salt + ":" + hash.toString("hex");
}
async function verifyPassword(password, stored) {
  const [salt, hex] = stored.split(":");
  const hash = await scrypt(password, salt, 64, {
    N: 32768,
    r: 8,
    p: 1,
    maxmem: 64 * 1024 * 1024,
  });
  return timingSafeEqual(hash, Buffer.from(hex, "hex"));
}
async function body(request, max = 16000) {
  if (!request.headers.get("content-type")?.startsWith("application/json"))
    fail("JSON required", 415);
  const reader = request.body?.getReader();
  if (!reader) fail("Body required");
  let size = 0,
    parts = [];
  while (true) {
    const { done, value } = await reader.read();
    if (done) break;
    size += value.length;
    if (size > max) {
      await reader.cancel();
      fail("Request too large", 413);
    }
    parts.push(value);
  }
  let b = new Uint8Array(size),
    offset = 0;
  for (const p of parts) {
    b.set(p, offset);
    offset += p.length;
  }
  try {
    return JSON.parse(new TextDecoder().decode(b));
  } catch {
    fail("Invalid JSON");
  }
}
async function rate(db, key, limit, seconds) {
  const t = now();
  const row = await db
    .prepare(
      "INSERT INTO rate_limits(key,count,expires) VALUES(?,1,?) ON CONFLICT(key) DO UPDATE SET count=CASE WHEN expires<=? THEN 1 ELSE count+1 END, expires=CASE WHEN expires<=? THEN ? ELSE expires END RETURNING count",
    )
    .bind(key, t + seconds, t, t, t + seconds)
    .first();
  if (row.count > limit)
    fail("Too many requests. Please try again later.", 429);
}
async function user(request, db) {
  const raw = request.headers
    .get("Cookie")
    ?.match(/(?:^|;\s*)__Host-orbonix=([a-f0-9]{64})(?:;|$)/)?.[1];
  if (!raw) return null;
  return db
    .prepare(
      "SELECT u.* FROM users u JOIN sessions s ON u.id=s.user_id WHERE s.token_hash=? AND s.expires>? AND u.verified=1",
    )
    .bind(await digest(raw), now())
    .first();
}
const publicUser = (u) => ({
  id: u.id,
  firstName: u.first_name,
  lastName: u.last_name,
  email: u.email,
  country: u.country,
  language: u.language,
  avatar: !!u.avatar,
});
function cookie(value, age) {
  return `__Host-orbonix=${value}; Path=/; Secure; HttpOnly; SameSite=Lax; Max-Age=${age}`;
}
async function sendToken(env, u, purpose) {
  if (!env.EMAIL || !env.EMAIL_FROM)
    fail(
      "Email verification is not configured yet. Please try again later.",
      503,
    );
  const raw = token(),
    link = `${env.SITE_ORIGIN}/Account/#${purpose}=${raw}`;
  await env.DB.prepare("INSERT INTO email_tokens VALUES(?,?,?,?)")
    .bind(await digest(raw), u.id, purpose, now() + 3600)
    .run();
  try {
    await env.EMAIL.send({
      from: env.EMAIL_FROM,
      to: u.email,
      subject:
        purpose === "verify"
          ? "Confirm your Orbonix email"
          : "Reset your Orbonix password",
      text: `${purpose === "verify" ? "Confirm your email" : "Reset your password"}: ${link}\nThis link expires in one hour. If you did not request this, ignore this email.`,
    });
  } catch {
    await env.DB.prepare("DELETE FROM email_tokens WHERE token_hash=?")
      .bind(await digest(raw))
      .run();
    fail("Email delivery unavailable. Please try again later.", 503);
  }
}
async function news(env, ctx) {
  const row = await env.DB.prepare(
    "SELECT * FROM news_cache WHERE id=1",
  ).first();
  if (row && now() - row.updated_at < 1800)
    return json(JSON.parse(row.payload));
  try {
    return json(await refreshNews(env));
  } catch {
    if (row) return json({ ...JSON.parse(row.payload), stale: true });
    return json({ articles: [], error: "News temporarily unavailable" }, 503);
  }
}
export async function refreshNews(env) {
  const response = await fetch(
    "https://api.spaceflightnewsapi.net/v4/articles/?limit=30&ordering=-published_at",
    { signal: AbortSignal.timeout(12000) },
  );
  if (!response.ok) throw Error("News source unavailable");
  const text = await limitedText(response, 2000000);
  const data = JSON.parse(text);
  const safe = (u) => {
    try {
      return new URL(u).protocol === "https:";
    } catch {
      return false;
    }
  };
  const articles = (data.results || [])
    .filter((a) => safe(a.url) && a.title && a.published_at)
    .map((a) => ({
      id: a.id,
      title: String(a.title).slice(0, 300),
      url: a.url,
      image: safe(a.image_url) ? a.image_url : null,
      source: String(a.news_site || ""),
      date: a.published_at,
    }));
  if (!articles.length) throw Error("Empty news feed");
  const payload = { articles, updatedAt: new Date().toISOString() };
  await env.DB.prepare(
    "INSERT INTO news_cache VALUES(1,?,?) ON CONFLICT(id) DO UPDATE SET payload=excluded.payload,updated_at=excluded.updated_at",
  )
    .bind(JSON.stringify(payload), now())
    .run();
  return payload;
}
async function limitedText(response, max) {
  let size = 0,
    chunks = [];
  const reader = response.body.getReader();
  while (true) {
    const { done, value } = await reader.read();
    if (done) break;
    size += value.length;
    if (size > max) {
      await reader.cancel();
      throw Error("Response too large");
    }
    chunks.push(value);
  }
  return Buffer.concat(chunks).toString("utf8");
}
export default {
  async fetch(request, env, ctx) {
    const url = new URL(request.url);
    if (!url.pathname.startsWith("/api/")) return env.ASSETS.fetch(request);
    try {
      if (!env.DB)
        return json({ error: "Account service is not configured yet." }, 503);
      const db = env.DB,
        p = url.pathname,
        method = request.method;
      if (!["GET", "POST", "PATCH", "DELETE"].includes(method))
        fail("Method not allowed", 405);
      if (method !== "GET" && request.headers.get("Origin") !== env.SITE_ORIGIN)
        fail("Invalid request origin", 403);
      if (p === "/api/news" && method === "GET") return news(env, ctx);
      const ip = await digest(
        request.headers.get("CF-Connecting-IP") || "unknown",
      );
      if (method !== "GET") await rate(db, "ip:" + ip, 60, 600);
      if (p === "/api/register" && method === "POST") {
        const b = await body(request);
        const email = String(b.email || "")
            .trim()
            .toLowerCase(),
          first = String(b.firstName || "").trim(),
          last = String(b.lastName || "").trim();
        if (
          !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email) ||
          email.length > 254 ||
          !first ||
          !last ||
          first.length > 80 ||
          last.length > 80 ||
          typeof b.password !== "string" ||
          b.password.length < 12 ||
          b.password.length > 128
        )
          fail("Enter your name, email and a password of 12–128 characters.");
        if (!env.EMAIL || !env.EMAIL_FROM)
          fail(
            "Email verification is not configured yet. Please try again later.",
            503,
          );
        await rate(db, "register:" + ip, 5, 3600);
        await rate(db, "email:" + (await digest(email)), 3, 3600);
        const existing = await db
          .prepare("SELECT * FROM users WHERE email=?")
          .bind(email)
          .first();
        if (existing) {
          if (!existing.verified) await sendToken(env, existing, "verify");
          return json({
            message:
              "Check your email. If you already have an account, sign in or reset your password.",
          });
        }
        const country = /^[A-Z]{2}$/.test(request.cf?.country || "")
          ? request.cf.country
          : "XX";
        const id = crypto.randomUUID();
        await db
          .prepare(
            "INSERT INTO users(id,email,first_name,last_name,password_hash,country,language,created_at) VALUES(?,?,?,?,?,?,?,?)",
          )
          .bind(
            id,
            email,
            first,
            last,
            await hashPassword(b.password),
            country,
            langs.includes(b.language) ? b.language : countryLanguage(country),
            now(),
          )
          .run();
        await sendToken(env, { id, email }, "verify");
        return json(
          { message: "Check your email to confirm your account." },
          201,
        );
      }
      if (p === "/api/login" && method === "POST") {
        const b = await body(request);
        const email = String(b.email || "")
          .toLowerCase()
          .trim();
        await rate(db, "login:" + (await digest(email)), 10, 900);
        if (typeof b.password !== "string" || b.password.length > 128)
          fail("Invalid email or password", 401);
        const u = await db
          .prepare("SELECT * FROM users WHERE email=?")
          .bind(email)
          .first();
        const valid = await verifyPassword(
          b.password,
          u?.password_hash || "0".repeat(64) + ":" + "0".repeat(128),
        );
        if (!u || !valid) fail("Invalid email or password", 401);
        if (!u.verified) fail("Confirm your email before signing in.", 403);
        const raw = token();
        await db
          .prepare("INSERT INTO sessions VALUES(?,?,?)")
          .bind(await digest(raw), u.id, now() + 2592000)
          .run();
        return json({ user: publicUser(u) }, 200, {
          "Set-Cookie": cookie(raw, 2592000),
        });
      }
      if ((p === "/api/resend" || p === "/api/forgot") && method === "POST") {
        const b = await body(request),
          email = String(b.email || "")
            .trim()
            .toLowerCase();
        await rate(db, "email:" + (await digest(email)), 3, 3600);
        const u = await db
          .prepare("SELECT * FROM users WHERE email=?")
          .bind(email)
          .first();
        if (u && (p === "/api/forgot" || !u.verified))
          await sendToken(env, u, p === "/api/forgot" ? "reset" : "verify");
        return json({
          message: "If an eligible account exists, we have sent an email.",
        });
      }
      if ((p === "/api/verify" || p === "/api/reset") && method === "POST") {
        const b = await body(request);
        if (!/^[a-f0-9]{64}$/.test(b.token || ""))
          fail("Invalid or expired link");
        const purpose = p.endsWith("verify") ? "verify" : "reset";
        if (
          typeof b.password !== "string" ||
          b.password.length < 12 ||
          b.password.length > 128
        )
          fail("Use a password of 12–128 characters.");
        const hash = await digest(b.token);
        const row = await db
          .prepare(
            "DELETE FROM email_tokens WHERE token_hash=? AND purpose=? AND expires>? RETURNING user_id",
          )
          .bind(hash, purpose, now())
          .first();
        if (!row) fail("Invalid or expired link");
        if (purpose === "verify")
          await db
            .prepare("UPDATE users SET verified=1,password_hash=? WHERE id=?")
            .bind(await hashPassword(b.password), row.user_id)
            .run();
        else
          await db.batch([
            db
              .prepare("UPDATE users SET password_hash=? WHERE id=?")
              .bind(await hashPassword(b.password), row.user_id),
            db
              .prepare("DELETE FROM sessions WHERE user_id=?")
              .bind(row.user_id),
          ]);
        await db
          .prepare("DELETE FROM email_tokens WHERE user_id=? AND purpose=?")
          .bind(row.user_id, purpose)
          .run();
        return json({
          message:
            purpose === "verify"
              ? "Email confirmed. You can now sign in."
              : "Password changed. Please sign in.",
        });
      }
      if (p === "/api/achievements" && method === "GET") {
        const count = await db
          .prepare("SELECT COUNT(*) AS n FROM users WHERE verified=1")
          .first();
        const stats = await db
          .prepare(
            "SELECT achievement,COUNT(*) AS n FROM achievements a JOIN users u ON a.user_id=u.id WHERE u.verified=1 GROUP BY achievement",
          )
          .all();
        return json({
          total: count.n,
          achievements: ACHIEVEMENTS.map((a) => ({
            ...a,
            percent: count.n
              ? Math.round(
                  ((stats.results.find((r) => r.achievement === a.id)?.n || 0) /
                    count.n) *
                    10000,
                ) / 100
              : 0,
          })),
        });
      }
      const u = await user(request, db);
      if (!u) fail("Please sign in.", 401);
      if (p === "/api/me" && method === "GET") {
        const earned = await db
          .prepare(
            "SELECT achievement,earned_at FROM achievements WHERE user_id=?",
          )
          .bind(u.id)
          .all();
        const attempts = await db
          .prepare(
            "SELECT quiz,MAX(score*100.0/total) AS percent,COUNT(*) AS attempts FROM quiz_attempts WHERE user_id=? GROUP BY quiz",
          )
          .bind(u.id)
          .all();
        return json({
          user: publicUser(u),
          earned: earned.results,
          quizzes: attempts.results,
        });
      }
      if (p === "/api/logout" && method === "POST") {
        const raw = request.headers
          .get("Cookie")
          ?.match(/__Host-orbonix=([a-f0-9]{64})/)?.[1];
        if (raw)
          await db
            .prepare("DELETE FROM sessions WHERE token_hash=?")
            .bind(await digest(raw))
            .run();
        return json({ ok: true }, 200, { "Set-Cookie": cookie("", 0) });
      }
      if (p === "/api/me" && method === "PATCH") {
        const b = await body(request);
        if (!langs.includes(b.language)) fail("Unsupported language");
        await db
          .prepare("UPDATE users SET language=? WHERE id=?")
          .bind(b.language, u.id)
          .run();
        return json({ ok: true });
      }
      if (p === "/api/avatar" && method === "GET") {
        if (!u.avatar) fail("No avatar", 404);
        return new Response(new Uint8Array(u.avatar), {
          headers: {
            "Content-Type": u.avatar_type,
            "Cache-Control": "private, no-store",
            "X-Content-Type-Options": "nosniff",
            "Content-Security-Policy": "default-src 'none'",
          },
        });
      }
      if (p === "/api/avatar" && method === "POST") {
        const b = await body(request, 380000);
        if (
          typeof b.image !== "string" ||
          !/^data:image\/(png|jpeg|webp);base64,[A-Za-z0-9+/=]+$/.test(b.image)
        )
          fail("Choose a PNG, JPEG or WebP photo.");
        const [header, base64] = b.image.split(",");
        const bytes = Buffer.from(base64, "base64");
        if (bytes.length > 256000) fail("Photo must be smaller than 250 KB.");
        const type = header.slice(5, header.indexOf(";"));
        const valid =
          type === "image/png"
            ? bytes
                .subarray(0, 8)
                .equals(Buffer.from([137, 80, 78, 71, 13, 10, 26, 10]))
            : type === "image/jpeg"
              ? bytes[0] === 255 && bytes[1] === 216 && bytes[2] === 255
              : bytes.toString("ascii", 0, 4) === "RIFF" &&
                bytes.toString("ascii", 8, 12) === "WEBP";
        if (!valid) fail("Invalid image");
        await db
          .prepare("UPDATE users SET avatar=?,avatar_type=? WHERE id=?")
          .bind([...bytes], type, u.id)
          .run();
        return json({ ok: true });
      }
      if (p === "/api/quiz" && method === "POST") {
        const b = await body(request);
        const bank = quizBank[b.quiz];
        if (
          !bank ||
          !Array.isArray(b.answers) ||
          b.answers.length !== bank.length ||
          !b.answers.every(
            (a, i) => Number.isInteger(a) && a >= 0 && a < bank[i].count,
          ) ||
          !/^[-a-f0-9]{36}$/.test(b.attempt || "")
        )
          fail("Invalid quiz result");
        await rate(db, "quiz:" + u.id, 20, 3600);
        const score = b.answers.reduce(
          (s, a, i) => s + (a === bank[i].correct ? 1 : 0),
          0,
        );
        await db
          .prepare("INSERT OR IGNORE INTO quiz_attempts VALUES(?,?,?,?,?,?)")
          .bind(b.attempt, u.id, b.quiz, score, bank.length, now())
          .run();
        const attempts = await db
          .prepare("SELECT quiz,score,total FROM quiz_attempts WHERE user_id=?")
          .bind(u.id)
          .all();
        const earned = earnedAchievements(attempts.results);
        if (earned.length)
          await db.batch(
            earned.map((id) =>
              db
                .prepare("INSERT OR IGNORE INTO achievements VALUES(?,?,?)")
                .bind(u.id, id, now()),
            ),
          );
        return json({
          score,
          total: bank.length,
          percent: Math.round((score / bank.length) * 100),
          earned,
        });
      }
      fail("Not found", 404);
    } catch (e) {
      if (!e.status)
        console.error("Account request failed", { path: url.pathname });
      return json(
        { error: e.status ? e.message : "Service temporarily unavailable." },
        e.status || 503,
      );
    }
  },
  async scheduled(event, env, ctx) {
    ctx.waitUntil(
      (async () => {
        await refreshNews(env);
        await env.DB.batch([
          env.DB.prepare("DELETE FROM sessions WHERE expires<?").bind(now()),
          env.DB.prepare("DELETE FROM email_tokens WHERE expires<?").bind(
            now(),
          ),
          env.DB.prepare("DELETE FROM rate_limits WHERE expires<?").bind(now()),
        ]);
      })(),
    );
  },
};
